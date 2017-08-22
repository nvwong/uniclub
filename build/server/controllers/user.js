'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _mkdirp = require('mkdirp');

var _mkdirp2 = _interopRequireDefault(_mkdirp);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _server = require('../../../configs/project/server');

var _server2 = _interopRequireDefault(_server);

var _Errors = require('../../common/constants/Errors');

var _Errors2 = _interopRequireDefault(_Errors);

var _handleError = require('../decorators/handleError');

var _handleError2 = _interopRequireDefault(_handleError);

var _User = require('../models/User');

var _User2 = _interopRequireDefault(_User);

var _filterAttribute = require('../utils/filterAttribute');

var _filterAttribute2 = _interopRequireDefault(_filterAttribute);

var _userActions = require('../../common/actions/userActions');

var _routeActions = require('../../common/actions/routeActions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  list: function list(req, res) {
    _User2.default.paginate({ page: req.query.page }, (0, _handleError.handleDbError)(res)(function (page) {
      _User2.default.find({}).sort({ createdAt: 'desc' }).limit(page.limit).skip(page.skip).exec((0, _handleError.handleDbError)(res)(function (users) {
        res.json({
          users: users,
          page: page
        });
      }));
    }));
  },
  create: function create(req, res, next) {
    _User2.default.findOne({
      'email.value': req.body.email
    }, (0, _handleError.handleDbError)(res)(function (user) {
      if (user) {
        res.errors([_Errors2.default.USER_EXISTED]);
      } else {
        var _user = (0, _User2.default)({
          username: req.body.username,
          uid: req.body.uid,
          lastname: req.body.lastname,
          firstname: req.body.firstname,
          gender: req.body.gender,
          email: {
            value: req.body.email
          },
          uniemail: req.body.uniemail,
          curriculum: req.body.curriculum,
          phone: req.body.phone,
          password: req.body.password,
          nonce: {
            verifyEmail: Math.random()
          }
        });
        _user.save((0, _handleError.handleDbError)(res)(function (user) {
          req.user = user;
          if (!_server2.default.nodemailer) {
            return res.json({
              user: user
            });
          }
          next();
        }));
      }
    }));
  },
  verifyEmail: function verifyEmail(req, res) {
    var user = req.user;


    user.email.isVerified = true;
    user.email.verifiedAt = new Date();
    user.save((0, _handleError.handleDbError)(res)(function () {
      res.json({});
    }));
  },
  login: function login(req, res) {
    _User2.default.findOne({
      'email.value': req.body.email
    }, (0, _handleError.handleDbError)(res)(function (user) {
      if (!user) {
        res.json({
          isAuth: false
        });
      } else {
        user.auth(req.body.password, (0, _handleError.handleDbError)(res)(function (isAuth) {
          if (isAuth) {
            var token = user.toAuthenticationToken();
            user.lastLoggedInAt = new Date();
            user.save((0, _handleError.handleDbError)(res)(function (user) {
              res.json({
                isAuth: true,
                token: token,
                user: user
              });
            }));
          } else {
            res.json({
              isAuth: false
            });
          }
        }));
      }
    }));
  },


  setNonce: function setNonce(nonceKey) {
    return function (req, res, next) {
      _User2.default.findOne({
        'email.value': req.body.email
      }, (0, _handleError.handleDbError)(res)(function (user) {
        user.nonce[nonceKey] = Math.random();
        user.save((0, _handleError.handleDbError)(res)(function (user) {
          req.user = user;
          next();
        }));
      }));
    };
  },

  socialLogin: function socialLogin(req, res, next) {
    var user = req.user;

    if (!user) {
      return next();
    }
    var token = user.toAuthenticationToken();

    user.lastLoggedInAt = new Date();
    user.save((0, _handleError.handleDbError)(res)(function () {
      var state = JSON.parse(req.query.state);

      req.store.dispatch((0, _userActions.loginUser)({
        token: token,
        data: user
      }, res));
      req.store.dispatch((0, _routeActions.redirect)(state.next || '/'));

      return next();
    }));
  },
  logout: function logout(req, res) {
    req.logout();
    res.json({});
  },
  readSelf: function readSelf(req, res) {
    res.json({
      user: req.user
    });
  },
  update: function update(req, res) {
    var user = req.user;

    var modifiedUser = (0, _filterAttribute2.default)(req.body, ['username', 'lastname', 'firstname', 'uniemail', 'curriculum', 'phone', 'avatarURL']);

    (0, _objectAssign2.default)(user, modifiedUser);
    user.save((0, _handleError.handleDbError)(res)(function (user) {
      res.json({
        originAttributes: req.body,
        user: user
      });
    }));
  },
  updateAvatarURL: function updateAvatarURL(req, res) {
    var user = req.user;

    var modifiedUser = (0, _filterAttribute2.default)(req.body, ['avatarURL']);

    (0, _objectAssign2.default)(user, modifiedUser);
    user.save((0, _handleError.handleDbError)(res)(function (user) {
      res.json({
        originAttributes: req.body,
        user: user
      });
    }));
  },
  updatePassword: function updatePassword(req, res) {
    var user = req.user;

    var modifiedUser = {
      password: req.body.newPassword
    };

    user.auth(req.body.oldPassword, (0, _handleError.handleDbError)(res)(function (isAuth) {
      if (isAuth) {
        (0, _objectAssign2.default)(user, modifiedUser);
        user.save((0, _handleError.handleDbError)(res)(function (user) {
          res.json({
            originAttributes: req.body,
            isAuth: true,
            user: user
          });
        }));
      } else {
        res.json({
          isAuth: false
        });
      }
    }));
  },
  resetPassword: function resetPassword(req, res) {
    var user = req.user;

    var modifiedUser = {
      password: req.body.newPassword
    };
    (0, _objectAssign2.default)(user, modifiedUser);
    user.save((0, _handleError.handleDbError)(res)(function (user) {
      res.json({
        originAttributes: req.body,
        user: user
      });
    }));
  },
  uploadAvatar: function uploadAvatar(req, res) {
    // use `req.file` to access the avatar file
    // and use `req.body` to access other fileds
    var filename = req.files.avatar[0].filename;

    var tmpPath = req.files.avatar[0].path;
    var targetDir = _path2.default.join(__dirname, '../../public', 'users', req.user._id.toString());
    var targetPath = _path2.default.join(targetDir, filename);

    (0, _mkdirp2.default)(targetDir, (0, _handleError2.default)(res)(function () {
      _fs2.default.rename(tmpPath, targetPath, (0, _handleError2.default)(res)(function () {
        res.json({
          downloadURL: '/users/' + req.user._id + '/' + filename
        });
      }));
    }));
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL3VzZXIuanMiXSwibmFtZXMiOlsibGlzdCIsInJlcSIsInJlcyIsInBhZ2luYXRlIiwicGFnZSIsInF1ZXJ5IiwiZmluZCIsInNvcnQiLCJjcmVhdGVkQXQiLCJsaW1pdCIsInNraXAiLCJleGVjIiwidXNlcnMiLCJqc29uIiwiY3JlYXRlIiwibmV4dCIsImZpbmRPbmUiLCJib2R5IiwiZW1haWwiLCJ1c2VyIiwiZXJyb3JzIiwiVVNFUl9FWElTVEVEIiwidXNlcm5hbWUiLCJ1aWQiLCJsYXN0bmFtZSIsImZpcnN0bmFtZSIsImdlbmRlciIsInZhbHVlIiwidW5pZW1haWwiLCJjdXJyaWN1bHVtIiwicGhvbmUiLCJwYXNzd29yZCIsIm5vbmNlIiwidmVyaWZ5RW1haWwiLCJNYXRoIiwicmFuZG9tIiwic2F2ZSIsIm5vZGVtYWlsZXIiLCJpc1ZlcmlmaWVkIiwidmVyaWZpZWRBdCIsIkRhdGUiLCJsb2dpbiIsImlzQXV0aCIsImF1dGgiLCJ0b2tlbiIsInRvQXV0aGVudGljYXRpb25Ub2tlbiIsImxhc3RMb2dnZWRJbkF0Iiwic2V0Tm9uY2UiLCJub25jZUtleSIsInNvY2lhbExvZ2luIiwic3RhdGUiLCJKU09OIiwicGFyc2UiLCJzdG9yZSIsImRpc3BhdGNoIiwiZGF0YSIsImxvZ291dCIsInJlYWRTZWxmIiwidXBkYXRlIiwibW9kaWZpZWRVc2VyIiwib3JpZ2luQXR0cmlidXRlcyIsInVwZGF0ZUF2YXRhclVSTCIsInVwZGF0ZVBhc3N3b3JkIiwibmV3UGFzc3dvcmQiLCJvbGRQYXNzd29yZCIsInJlc2V0UGFzc3dvcmQiLCJ1cGxvYWRBdmF0YXIiLCJmaWxlbmFtZSIsImZpbGVzIiwiYXZhdGFyIiwidG1wUGF0aCIsInBhdGgiLCJ0YXJnZXREaXIiLCJqb2luIiwiX19kaXJuYW1lIiwiX2lkIiwidG9TdHJpbmciLCJ0YXJnZXRQYXRoIiwicmVuYW1lIiwiZG93bmxvYWRVUkwiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FB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
