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
    readSelf: function readSelf() {
      return apiEngine.get('/api/users/me');
    },
    update: function update(user) {
      return apiEngine.put('/api/users/me', { data: user });
    },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS91c2VyLmpzIl0sIm5hbWVzIjpbImFwaUVuZ2luZSIsImxpc3QiLCJwYWdlIiwiZ2V0IiwicGFyYW1zIiwicmVnaXN0ZXIiLCJ1c2VyIiwicG9zdCIsImRhdGEiLCJ2ZXJpZnlFbWFpbCIsInRva2VuIiwidmVyaWZ5RW1haWxUb2tlbiIsInJlcXVlc3RWZXJpZnlFbWFpbCIsImZvcm0iLCJsb2dpbiIsInJlcXVlc3RSZXNldFBhc3N3b3JkIiwicmVzZXRQYXNzd29yZCIsInB1dCIsInJlc2V0UGFzc3dvcmRUb2tlbiIsImxvZ291dCIsInJlYWRTZWxmIiwidXBkYXRlIiwidXBkYXRlQXZhdGFyVVJMIiwidXBkYXRlUGFzc3dvcmQiLCJ1cGxvYWRBdmF0YXIiLCJhdmF0YXIiLCJmaWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztrQkFBZSxVQUFDQSxTQUFEO0FBQUEsU0FBZ0I7QUFDN0JDLFVBQU07QUFBQSxVQUFHQyxJQUFILFFBQUdBLElBQUg7QUFBQSxhQUFjRixVQUFVRyxHQUFWLENBQWMsWUFBZCxFQUE0QixFQUFFQyxRQUFRLEVBQUVGLFVBQUYsRUFBVixFQUE1QixDQUFkO0FBQUEsS0FEdUI7QUFFN0JHLGNBQVUsa0JBQUNDLElBQUQ7QUFBQSxhQUFVTixVQUFVTyxJQUFWLENBQWUsWUFBZixFQUE2QixFQUFFQyxNQUFNRixJQUFSLEVBQTdCLENBQVY7QUFBQSxLQUZtQjtBQUc3QkcsaUJBQWE7QUFBQSxVQUFHQyxLQUFILFNBQUdBLEtBQUg7QUFBQSxhQUFlVixVQUFVTyxJQUFWLENBQWUseUJBQWYsRUFBMEM7QUFDcEVDLGNBQU0sRUFBRUcsa0JBQWtCRCxLQUFwQjtBQUQ4RCxPQUExQyxDQUFmO0FBQUEsS0FIZ0I7QUFNN0JFLHdCQUFvQiw0QkFBQ0MsSUFBRDtBQUFBLGFBQ2xCYixVQUFVTyxJQUFWLENBQWUsaUNBQWYsRUFBa0QsRUFBRUMsTUFBTUssSUFBUixFQUFsRCxDQURrQjtBQUFBLEtBTlM7QUFTN0JDLFdBQU8sZUFBQ1IsSUFBRDtBQUFBLGFBQVVOLFVBQVVPLElBQVYsQ0FBZSxrQkFBZixFQUFtQyxFQUFFQyxNQUFNRixJQUFSLEVBQW5DLENBQVY7QUFBQSxLQVRzQjtBQVU3QlMsMEJBQXNCLDhCQUFDRixJQUFEO0FBQUEsYUFDcEJiLFVBQVVPLElBQVYsQ0FBZSxtQ0FBZixFQUFvRCxFQUFFQyxNQUFNSyxJQUFSLEVBQXBELENBRG9CO0FBQUEsS0FWTztBQWE3QkcsbUJBQWU7QUFBQSxVQUFHTixLQUFILFNBQUdBLEtBQUg7QUFBQSxVQUFhRyxJQUFiOztBQUFBLGFBQ2JiLFVBQVVpQixHQUFWLENBQWMscUJBQWQsRUFBcUM7QUFDbkNUO0FBQ0VVLDhCQUFvQlI7QUFEdEIsV0FFS0csSUFGTDtBQURtQyxPQUFyQyxDQURhO0FBQUEsS0FiYztBQXFCN0JNLFlBQVE7QUFBQSxhQUFNbkIsVUFBVUcsR0FBVixDQUFjLG1CQUFkLENBQU47QUFBQSxLQXJCcUI7QUFzQjdCaUIsY0FBVTtBQUFBLGFBQU1wQixVQUFVRyxHQUFWLENBQWMsZUFBZCxDQUFOO0FBQUEsS0F0Qm1CO0FBdUI3QmtCLFlBQVEsZ0JBQUNmLElBQUQ7QUFBQSxhQUFVTixVQUFVaUIsR0FBVixDQUFjLGVBQWQsRUFBK0IsRUFBRVQsTUFBTUYsSUFBUixFQUEvQixDQUFWO0FBQUEsS0F2QnFCO0FBd0I3QmdCLHFCQUFpQix5QkFBQ1QsSUFBRDtBQUFBLGFBQVViLFVBQVVpQixHQUFWLENBQWMseUJBQWQsRUFBeUM7QUFDbEVULGNBQU1LO0FBRDRELE9BQXpDLENBQVY7QUFBQSxLQXhCWTtBQTJCN0JVLG9CQUFnQix3QkFBQ1YsSUFBRDtBQUFBLGFBQVViLFVBQVVpQixHQUFWLENBQWMsd0JBQWQsRUFBd0M7QUFDaEVULGNBQU1LO0FBRDBELE9BQXhDLENBQVY7QUFBQSxLQTNCYTtBQThCN0JXLGtCQUFjLHNCQUFDQyxNQUFEO0FBQUEsYUFDWnpCLFVBQVVPLElBQVYsQ0FBZSxzQkFBZixFQUF1QyxFQUFFbUIsT0FBTyxFQUFFRCxjQUFGLEVBQVQsRUFBdkMsQ0FEWTtBQUFBO0FBOUJlLEdBQWhCO0FBQUEsQyIsImZpbGUiOiJhcGkvdXNlci5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
