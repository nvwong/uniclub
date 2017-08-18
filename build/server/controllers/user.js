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
          name: req.body.name,
          email: {
            value: req.body.email
          },
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

    var modifiedUser = (0, _filterAttribute2.default)(req.body, ['name', 'avatarURL']);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL3VzZXIuanMiXSwibmFtZXMiOlsibGlzdCIsInJlcSIsInJlcyIsInBhZ2luYXRlIiwicGFnZSIsInF1ZXJ5IiwiZmluZCIsInNvcnQiLCJjcmVhdGVkQXQiLCJsaW1pdCIsInNraXAiLCJleGVjIiwidXNlcnMiLCJqc29uIiwiY3JlYXRlIiwibmV4dCIsImZpbmRPbmUiLCJib2R5IiwiZW1haWwiLCJ1c2VyIiwiZXJyb3JzIiwiVVNFUl9FWElTVEVEIiwibmFtZSIsInZhbHVlIiwicGFzc3dvcmQiLCJub25jZSIsInZlcmlmeUVtYWlsIiwiTWF0aCIsInJhbmRvbSIsInNhdmUiLCJub2RlbWFpbGVyIiwiaXNWZXJpZmllZCIsInZlcmlmaWVkQXQiLCJEYXRlIiwibG9naW4iLCJpc0F1dGgiLCJhdXRoIiwidG9rZW4iLCJ0b0F1dGhlbnRpY2F0aW9uVG9rZW4iLCJsYXN0TG9nZ2VkSW5BdCIsInNldE5vbmNlIiwibm9uY2VLZXkiLCJzb2NpYWxMb2dpbiIsInN0YXRlIiwiSlNPTiIsInBhcnNlIiwic3RvcmUiLCJkaXNwYXRjaCIsImRhdGEiLCJsb2dvdXQiLCJyZWFkU2VsZiIsInVwZGF0ZSIsIm1vZGlmaWVkVXNlciIsIm9yaWdpbkF0dHJpYnV0ZXMiLCJ1cGRhdGVBdmF0YXJVUkwiLCJ1cGRhdGVQYXNzd29yZCIsIm5ld1Bhc3N3b3JkIiwib2xkUGFzc3dvcmQiLCJyZXNldFBhc3N3b3JkIiwidXBsb2FkQXZhdGFyIiwiZmlsZW5hbWUiLCJmaWxlcyIsImF2YXRhciIsInRtcFBhdGgiLCJwYXRoIiwidGFyZ2V0RGlyIiwiam9pbiIsIl9fZGlybmFtZSIsIl9pZCIsInRvU3RyaW5nIiwidGFyZ2V0UGF0aCIsInJlbmFtZSIsImRvd25sb2FkVVJMIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7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UztBQUNQc0Isa0JBQVE7QUFERCxTQUFUO0FBR0Q7QUFDRixLQWYrQixDQUFoQztBQWdCRCxHQXRMWTtBQXdMYnVCLGVBeExhLHlCQXdMQ3pELEdBeExELEVBd0xNQyxHQXhMTixFQXdMVztBQUFBLFFBQ2hCaUIsSUFEZ0IsR0FDUGxCLEdBRE8sQ0FDaEJrQixJQURnQjs7QUFFdEIsUUFBSWlDLGVBQWU7QUFDakI1QixnQkFBVXZCLElBQUlnQixJQUFKLENBQVN1QztBQURGLEtBQW5CO0FBR0EsZ0NBQU9yQyxJQUFQLEVBQWFpQyxZQUFiO0FBQ0FqQyxTQUFLVSxJQUFMLENBQVUsZ0NBQWMzQixHQUFkLEVBQW1CLFVBQUNpQixJQUFELEVBQVU7QUFDckNqQixVQUFJVyxJQUFKLENBQVM7QUFDUHdDLDBCQUFrQnBELElBQUlnQixJQURmO0FBRVBFLGNBQU1BO0FBRkMsT0FBVDtBQUlELEtBTFMsQ0FBVjtBQU1ELEdBcE1ZO0FBc01id0MsY0F0TWEsd0JBc01BMUQsR0F0TUEsRUFzTUtDLEdBdE1MLEVBc01VO0FBQ3JCO0FBQ0E7QUFGcUIsUUFHZjBELFFBSGUsR0FHRjNELElBQUk0RCxLQUFKLENBQVVDLE1BQVYsQ0FBaUIsQ0FBakIsQ0FIRSxDQUdmRixRQUhlOztBQUlyQixRQUFJRyxVQUFVOUQsSUFBSTRELEtBQUosQ0FBVUMsTUFBVixDQUFpQixDQUFqQixFQUFvQkUsSUFBbEM7QUFDQSxRQUFJQyxZQUFZLGVBQUtDLElBQUwsQ0FDZEMsU0FEYyxFQUNILGNBREcsRUFDYSxPQURiLEVBQ3NCbEUsSUFBSWtCLElBQUosQ0FBU2lELEdBQVQsQ0FBYUMsUUFBYixFQUR0QixDQUFoQjtBQUdBLFFBQUlDLGFBQWEsZUFBS0osSUFBTCxDQUFVRCxTQUFWLEVBQXFCTCxRQUFyQixDQUFqQjs7QUFFQSwwQkFBT0ssU0FBUCxFQUFrQiwyQkFBWS9ELEdBQVosRUFBaUIsWUFBTTtBQUN2QyxtQkFBR3FFLE1BQUgsQ0FBVVIsT0FBVixFQUFtQk8sVUFBbkIsRUFBK0IsMkJBQVlwRSxHQUFaLEVBQWlCLFlBQU07QUFDcERBLFlBQUlXLElBQUosQ0FBUztBQUNQMkQsbUNBQXVCdkUsSUFBSWtCLElBQUosQ0FBU2lELEdBQWhDLFNBQXVDUjtBQURoQyxTQUFUO0FBR0QsT0FKOEIsQ0FBL0I7QUFLRCxLQU5pQixDQUFsQjtBQU9EO0FBdk5ZLEMiLCJmaWxlIjoiY29udHJvbGxlcnMvdXNlci5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
