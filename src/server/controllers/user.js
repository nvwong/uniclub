import fs from 'fs';
import path from 'path';
import mkdirp from 'mkdirp';
import assign from 'object-assign';
import configs from '../../../configs/project/server';
import Errors from '../../common/constants/Errors';
import handleError, { handleDbError } from '../decorators/handleError';
import User from '../models/User';
import filterAttribute from '../utils/filterAttribute';
import { loginUser } from '../../common/actions/userActions';
import { redirect } from '../../common/actions/routeActions';

export default {
  list(req, res) {
    User.paginate({ page: req.query.page }, handleDbError(res)((page) => {
      User
        .find({})
        .sort({ createdAt: 'asc' })
        .limit(page.limit)
        .skip(page.skip)
        .exec(handleDbError(res)((users) => {
          res.json({
            users: users,
            page: page,
          });
        }));
    }));
  },

  create(req, res, next) {
    User.findOne({
      'email.value': req.body.email,
    }, handleDbError(res)((user) => {
      if (user) {
        res.errors([Errors.USER_EXISTED]);
      } else {
        const user = User({
          username: req.body.username,
          uid: req.body.uid,
          lastname: req.body.lastname,
          firstname: req.body.firstname,
          gender: req.body.gender,
          email: {
            value: req.body.email,
          },
          uniemail: req.body.uniemail,
          curriculum: req.body.curriculum,
          phone: req.body.phone,
          password: req.body.password,
          nonce: {
            verifyEmail: Math.random(),
          },
        });
        user.save(handleDbError(res)((user) => {
          req.user = user;
          if (!configs.nodemailer) {
            return res.json({
              user: user,
            });
          }
          next();
        }));
      }
    }));
  },

  verifyEmail(req, res) {
    let { user } = req;

    user.email.isVerified = true;
    user.email.verifiedAt = new Date();
    user.save(handleDbError(res)(() => {
      res.json({});
    }));
  },

  login(req, res) {
    User.findOne({
      'email.value': req.body.email,
    }, handleDbError(res)((user) => {
      if (!user) {
        res.json({
          isAuth: false,
        });
      } else {
        user.auth(req.body.password, handleDbError(res)((isAuth) => {
          if (isAuth) {
            const token = user.toAuthenticationToken();
            user.lastLoggedInAt = new Date();
            user.save(handleDbError(res)((user) => {
              res.json({
                isAuth: true,
                token: token,
                user: user,
              });
            }));
          } else {
            res.json({
              isAuth: false,
            });
          }
        }));
      }
    }));
  },

  setNonce: (nonceKey) => (req, res, next) => {
    User.findOne({
      'email.value': req.body.email,
    }, handleDbError(res)((user) => {
      user.nonce[nonceKey] = Math.random();
      user.save(handleDbError(res)((user) => {
        req.user = user;
        next();
      }));
    }));
  },

  socialLogin(req, res, next) {
    let { user } = req;
    if (!user) {
      return next();
    }
    let token = user.toAuthenticationToken();

    user.lastLoggedInAt = new Date();
    user.save(handleDbError(res)(() => {
      let state = JSON.parse(req.query.state);

      req.store.dispatch(loginUser({
        token: token,
        data: user,
      }, res));
      req.store.dispatch(redirect(state.next || '/'));

      return next();
    }));
  },

  logout(req, res) {
    req.logout();
    res.json({});
  },

  readSelf(req, res) {
    res.json({
      user: req.user,
    });
  },

  readAny(req, res) {
    console.log('running readAny');
    User.findOne({
      'username': req.user.username,
    }, handleDbError(res)((user) => {
      if (!user) {
        res.errors([Errors.USER_NOT_EXIST]);
      } else {
        console.log('user found');
        res.json({
          user: req.user,
        });
      }
    }),
  );
  },

  update(req, res) {
    let { user } = req;
    let modifiedUser = filterAttribute(req.body, [
      'username',
      'lastname',
      'firstname',
      'uniemail',
      'curriculum',
      'phone',
      'avatarURL',
    ]);

    assign(user, modifiedUser);
    user.save(handleDbError(res)((user) => {
      res.json({
        originAttributes: req.body,
        user: user,
      });
    }));
  },

  updateAvatarURL(req, res) {
    let { user } = req;
    let modifiedUser = filterAttribute(req.body, ['avatarURL']);

    assign(user, modifiedUser);
    user.save(handleDbError(res)((user) => {
      res.json({
        originAttributes: req.body,
        user: user,
      });
    }));
  },

  updatePassword(req, res) {
    let { user } = req;
    let modifiedUser = {
      password: req.body.newPassword,
    };

    user.auth(req.body.oldPassword, handleDbError(res)((isAuth) => {
      if (isAuth) {
        assign(user, modifiedUser);
        user.save(handleDbError(res)((user) => {
          res.json({
            originAttributes: req.body,
            isAuth: true,
            user: user,
          });
        }));
      } else {
        res.json({
          isAuth: false,
        });
      }
    }));
  },

  resetPassword(req, res) {
    let { user } = req;
    let modifiedUser = {
      password: req.body.newPassword,
    };
    assign(user, modifiedUser);
    user.save(handleDbError(res)((user) => {
      res.json({
        originAttributes: req.body,
        user: user,
      });
    }));
  },

  uploadAvatar(req, res) {
    // use `req.file` to access the avatar file
    // and use `req.body` to access other fileds
    let { filename } = req.files.avatar[0];
    let tmpPath = req.files.avatar[0].path;
    let targetDir = path.join(
      __dirname, '../../public', 'users', req.user._id.toString()
    );
    let targetPath = path.join(targetDir, filename);

    mkdirp(targetDir, handleError(res)(() => {
      fs.rename(tmpPath, targetPath, handleError(res)(() => {
        res.json({
          downloadURL: `/users/${req.user._id}/${filename}`,
        });
      }));
    }));
  },
};
