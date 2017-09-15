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
      _User2.default.find({}).sort({ createdAt: 'asc' }).limit(page.limit).skip(page.skip).exec((0, _handleError.handleDbError)(res)(function (users) {
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
  readAny: function readAny(req, res) {
    console.log('running readAny');
    _User2.default.findOne({
      'username': req.user.username
    }, (0, _handleError.handleDbError)(res)(function (user) {
      if (!user) {
        res.errors([_Errors2.default.USER_NOT_EXIST]);
      } else {
        console.log('user found');
        res.json({
          user: req.user
        });
      }
    }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL3VzZXIuanMiXSwibmFtZXMiOlsibGlzdCIsInJlcSIsInJlcyIsInBhZ2luYXRlIiwicGFnZSIsInF1ZXJ5IiwiZmluZCIsInNvcnQiLCJjcmVhdGVkQXQiLCJsaW1pdCIsInNraXAiLCJleGVjIiwidXNlcnMiLCJqc29uIiwiY3JlYXRlIiwibmV4dCIsImZpbmRPbmUiLCJib2R5IiwiZW1haWwiLCJ1c2VyIiwiZXJyb3JzIiwiVVNFUl9FWElTVEVEIiwidXNlcm5hbWUiLCJ1aWQiLCJsYXN0bmFtZSIsImZpcnN0bmFtZSIsImdlbmRlciIsInZhbHVlIiwidW5pZW1haWwiLCJjdXJyaWN1bHVtIiwicGhvbmUiLCJwYXNzd29yZCIsIm5vbmNlIiwidmVyaWZ5RW1haWwiLCJNYXRoIiwicmFuZG9tIiwic2F2ZSIsIm5vZGVtYWlsZXIiLCJpc1ZlcmlmaWVkIiwidmVyaWZpZWRBdCIsIkRhdGUiLCJsb2dpbiIsImlzQXV0aCIsImF1dGgiLCJ0b2tlbiIsInRvQXV0aGVudGljYXRpb25Ub2tlbiIsImxhc3RMb2dnZWRJbkF0Iiwic2V0Tm9uY2UiLCJub25jZUtleSIsInNvY2lhbExvZ2luIiwic3RhdGUiLCJKU09OIiwicGFyc2UiLCJzdG9yZSIsImRpc3BhdGNoIiwiZGF0YSIsImxvZ291dCIsInJlYWRTZWxmIiwicmVhZEFueSIsImNvbnNvbGUiLCJsb2ciLCJVU0VSX05PVF9FWElTVCIsInVwZGF0ZSIsIm1vZGlmaWVkVXNlciIsIm9yaWdpbkF0dHJpYnV0ZXMiLCJ1cGRhdGVBdmF0YXJVUkwiLCJ1cGRhdGVQYXNzd29yZCIsIm5ld1Bhc3N3b3JkIiwib2xkUGFzc3dvcmQiLCJyZXNldFBhc3N3b3JkIiwidXBsb2FkQXZhdGFyIiwiZmlsZW5hbWUiLCJmaWxlcyIsImF2YXRhciIsInRtcFBhdGgiLCJwYXRoIiwidGFyZ2V0RGlyIiwiam9pbiIsIl9fZGlybmFtZSIsIl9pZCIsInRvU3RyaW5nIiwidGFyZ2V0UGF0aCIsInJlbmFtZSIs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
