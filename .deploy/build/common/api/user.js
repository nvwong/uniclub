'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = function (apiEngine) {
  return {
    list: function list(_ref) {
      var page = _ref.page;
      return apiEngine.get('/api/users', { params: { page: page } });
    },
    register: function register(user) {
      return apiEngine.post('/api/users', { data: user });
    },
    verifyEmail: function verifyEmail(_ref2) {
      var token = _ref2.token;
      return apiEngine.post('/api/users/email/verify', {
        data: { verifyEmailToken: token }
      });
    },
    requestVerifyEmail: function requestVerifyEmail(form) {
      return apiEngine.post('/api/users/email/request-verify', { data: form });
    },
    login: function login(user) {
      return apiEngine.post('/api/users/login', { data: user });
    },
    requestResetPassword: function requestResetPassword(form) {
      return apiEngine.post('/api/users/password/request-reset', { data: form });
    },
    resetPassword: function resetPassword(_ref3) {
      var token = _ref3.token,
          form = _objectWithoutProperties(_ref3, ['token']);

      return apiEngine.put('/api/users/password', {
        data: _extends({
          resetPasswordToken: token
        }, form)
      });
    },
    logout: function logout() {
      return apiEngine.get('/api/users/logout');
    },
    readAny: function readAny(_ref4) {
      var user = _ref4.user;
      return apiEngine.get('/api/users/:username', { params: { user: user } });
    },
    readSelf: function readSelf() {
      return apiEngine.get('/api/users/me');
    },
    update: function update(user) {
      return apiEngine.put('/api/users/me', { data: user });
    },
    // adminUpdate: (user) => apiEngine.put('/api/users/*', { data: user }),
    updateAvatarURL: function updateAvatarURL(form) {
      return apiEngine.put('/api/users/me/avatarURL', {
        data: form
      });
    },
    updatePassword: function updatePassword(form) {
      return apiEngine.put('/api/users/me/password', {
        data: form
      });
    },
    uploadAvatar: function uploadAvatar(avatar) {
      return apiEngine.post('/api/users/me/avatar', { files: { avatar: avatar } });
    }
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS91c2VyLmpzIl0sIm5hbWVzIjpbImFwaUVuZ2luZSIsImxpc3QiLCJwYWdlIiwiZ2V0IiwicGFyYW1zIiwicmVnaXN0ZXIiLCJ1c2VyIiwicG9zdCIsImRhdGEiLCJ2ZXJpZnlFbWFpbCIsInRva2VuIiwidmVyaWZ5RW1haWxUb2tlbiIsInJlcXVlc3RWZXJpZnlFbWFpbCIsImZvcm0iLCJsb2dpbiIsInJlcXVlc3RSZXNldFBhc3N3b3JkIiwicmVzZXRQYXNzd29yZCIsInB1dCIsInJlc2V0UGFzc3dvcmRUb2tlbiIsImxvZ291dCIsInJlYWRBbnkiLCJyZWFkU2VsZiIsInVwZGF0ZSIsInVwZGF0ZUF2YXRhclVSTCIsInVwZGF0ZVBhc3N3b3JkIiwidXBsb2FkQXZhdGFyIiwiYXZhdGFyIiwiZmlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7a0JBQWUsVUFBQ0EsU0FBRDtBQUFBLFNBQWdCO0FBQzdCQyxVQUFNO0FBQUEsVUFBR0MsSUFBSCxRQUFHQSxJQUFIO0FBQUEsYUFBY0YsVUFBVUcsR0FBVixDQUFjLFlBQWQsRUFBNEIsRUFBRUMsUUFBUSxFQUFFRixVQUFGLEVBQVYsRUFBNUIsQ0FBZDtBQUFBLEtBRHVCO0FBRTdCRyxjQUFVLGtCQUFDQyxJQUFEO0FBQUEsYUFBVU4sVUFBVU8sSUFBVixDQUFlLFlBQWYsRUFBNkIsRUFBRUMsTUFBTUYsSUFBUixFQUE3QixDQUFWO0FBQUEsS0FGbUI7QUFHN0JHLGlCQUFhO0FBQUEsVUFBR0MsS0FBSCxTQUFHQSxLQUFIO0FBQUEsYUFBZVYsVUFBVU8sSUFBVixDQUFlLHlCQUFmLEVBQTBDO0FBQ3BFQyxjQUFNLEVBQUVHLGtCQUFrQkQsS0FBcEI7QUFEOEQsT0FBMUMsQ0FBZjtBQUFBLEtBSGdCO0FBTTdCRSx3QkFBb0IsNEJBQUNDLElBQUQ7QUFBQSxhQUNsQmIsVUFBVU8sSUFBVixDQUFlLGlDQUFmLEVBQWtELEVBQUVDLE1BQU1LLElBQVIsRUFBbEQsQ0FEa0I7QUFBQSxLQU5TO0FBUzdCQyxXQUFPLGVBQUNSLElBQUQ7QUFBQSxhQUFVTixVQUFVTyxJQUFWLENBQWUsa0JBQWYsRUFBbUMsRUFBRUMsTUFBTUYsSUFBUixFQUFuQyxDQUFWO0FBQUEsS0FUc0I7QUFVN0JTLDBCQUFzQiw4QkFBQ0YsSUFBRDtBQUFBLGFBQ3BCYixVQUFVTyxJQUFWLENBQWUsbUNBQWYsRUFBb0QsRUFBRUMsTUFBTUssSUFBUixFQUFwRCxDQURvQjtBQUFBLEtBVk87QUFhN0JHLG1CQUFlO0FBQUEsVUFBR04sS0FBSCxTQUFHQSxLQUFIO0FBQUEsVUFBYUcsSUFBYjs7QUFBQSxhQUNiYixVQUFVaUIsR0FBVixDQUFjLHFCQUFkLEVBQXFDO0FBQ25DVDtBQUNFVSw4QkFBb0JSO0FBRHRCLFdBRUtHLElBRkw7QUFEbUMsT0FBckMsQ0FEYTtBQUFBLEtBYmM7QUFxQjdCTSxZQUFRO0FBQUEsYUFBTW5CLFVBQVVHLEdBQVYsQ0FBYyxtQkFBZCxDQUFOO0FBQUEsS0FyQnFCO0FBc0I3QmlCLGFBQVM7QUFBQSxVQUFHZCxJQUFILFNBQUdBLElBQUg7QUFBQSxhQUFjTixVQUFVRyxHQUFWLENBQWMsc0JBQWQsRUFBc0MsRUFBRUMsUUFBUSxFQUFFRSxVQUFGLEVBQVYsRUFBdEMsQ0FBZDtBQUFBLEtBdEJvQjtBQXVCN0JlLGNBQVU7QUFBQSxhQUFNckIsVUFBVUcsR0FBVixDQUFjLGVBQWQsQ0FBTjtBQUFBLEtBdkJtQjtBQXdCN0JtQixZQUFRLGdCQUFDaEIsSUFBRDtBQUFBLGFBQVVOLFVBQVVpQixHQUFWLENBQWMsZUFBZCxFQUErQixFQUFFVCxNQUFNRixJQUFSLEVBQS9CLENBQVY7QUFBQSxLQXhCcUI7QUF5QjdCO0FBQ0FpQixxQkFBaUIseUJBQUNWLElBQUQ7QUFBQSxhQUFVYixVQUFVaUIsR0FBVixDQUFjLHlCQUFkLEVBQXlDO0FBQ2xFVCxjQUFNSztBQUQ0RCxPQUF6QyxDQUFWO0FBQUEsS0ExQlk7QUE2QjdCVyxvQkFBZ0Isd0JBQUNYLElBQUQ7QUFBQSxhQUFVYixVQUFVaUIsR0FBVixDQUFjLHdCQUFkLEVBQXdDO0FBQ2hFVCxjQUFNSztBQUQwRCxPQUF4QyxDQUFWO0FBQUEsS0E3QmE7QUFnQzdCWSxrQkFBYyxzQkFBQ0MsTUFBRDtBQUFBLGFBQ1oxQixVQUFVTyxJQUFWLENBQWUsc0JBQWYsRUFBdUMsRUFBRW9CLE9BQU8sRUFBRUQsY0FBRixFQUFULEVBQXZDLENBRFk7QUFBQTtBQWhDZSxHQUFoQjtBQUFBLEMiLCJmaWxlIjoiYXBpL3VzZXIuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
