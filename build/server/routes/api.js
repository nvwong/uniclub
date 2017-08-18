'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _server = require('../../../configs/project/server');

var _server2 = _interopRequireDefault(_server);

var _Roles = require('../../common/constants/Roles');

var _Roles2 = _interopRequireDefault(_Roles);

var _FormNames = require('../../common/constants/FormNames');

var _FormNames2 = _interopRequireDefault(_FormNames);

var _bodyParser = require('../middlewares/bodyParser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _authRequired = require('../middlewares/authRequired');

var _authRequired2 = _interopRequireDefault(_authRequired);

var _roleRequired = require('../middlewares/roleRequired');

var _roleRequired2 = _interopRequireDefault(_roleRequired);

var _validate = require('../middlewares/validate');

var _validate2 = _interopRequireDefault(_validate);

var _fileUpload = require('../middlewares/fileUpload');

var _fileUpload2 = _interopRequireDefault(_fileUpload);

var _user = require('../controllers/user');

var _user2 = _interopRequireDefault(_user);

var _mail = require('../controllers/mail');

var _mail2 = _interopRequireDefault(_mail);

var _formValidation = require('../controllers/formValidation');

var _formValidation2 = _interopRequireDefault(_formValidation);

var _locale = require('../controllers/locale');

var _locale2 = _interopRequireDefault(_locale);

var _todo = require('../controllers/todo');

var _todo2 = _interopRequireDefault(_todo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var app = _ref.app;

  // user
  app.get('/api/users', _authRequired2.default, (0, _roleRequired2.default)([_Roles2.default.ADMIN]), _user2.default.list);
  app.post('/api/users', _bodyParser2.default.json, _validate2.default.recaptcha, _user2.default.create, _mail2.default.sendVerification);
  app.post('/api/users/email/verify', _bodyParser2.default.json, _bodyParser2.default.jwt('verifyEmailToken', _server2.default.jwt.verifyEmail.secret), _validate2.default.verifyUserNonce('verifyEmail'), _user2.default.verifyEmail);
  app.post('/api/users/email/request-verify', _bodyParser2.default.json, _validate2.default.form('user/VerifyEmailForm'), _validate2.default.recaptcha, _user2.default.setNonce('verifyEmail'), _mail2.default.sendVerification);
  app.post('/api/users/login', _bodyParser2.default.json, _user2.default.login);
  app.post('/api/users/password/request-reset', _bodyParser2.default.json, _validate2.default.form('user/ForgetPasswordForm'), _validate2.default.recaptcha, _user2.default.setNonce('resetPassword'), _mail2.default.sendResetPasswordLink);
  app.put('/api/users/password', _bodyParser2.default.json, _bodyParser2.default.jwt('resetPasswordToken', _server2.default.jwt.resetPassword.secret), _validate2.default.verifyUserNonce('resetPassword'), _validate2.default.form('user/ResetPasswordForm'), _user2.default.resetPassword);
  app.get('/api/users/logout', _user2.default.logout);
  app.get('/api/users/me', _authRequired2.default, _user2.default.readSelf);
  app.put('/api/users/me', _authRequired2.default, _bodyParser2.default.json, _validate2.default.form('user/EditForm'), _user2.default.update);
  app.put('/api/users/me/avatarURL', _authRequired2.default, _bodyParser2.default.json, _user2.default.updateAvatarURL);
  app.put('/api/users/me/password', _authRequired2.default, _bodyParser2.default.json, _validate2.default.form('user/ChangePasswordForm'), _user2.default.updatePassword);
  if (_server2.default.firebase) {
    var firebaseController = require('../controllers/firebase').default;
    app.get('/api/users/me/firebase/token', _authRequired2.default, firebaseController.readToken);
  }
  app.post('/api/users/me/avatar', _authRequired2.default, _fileUpload2.default.disk({
    destination: 'tmp/{userId}',
    filename: 'avatar.jpg'
  }).fields([{ name: 'avatar' }]), _validate2.default.form('user/AvatarForm'), _user2.default.uploadAvatar);

  // form
  app.post('/api/forms/' + _FormNames2.default.USER_REGISTER + '/fields/email/validation', _bodyParser2.default.json, _formValidation2.default[_FormNames2.default.USER_REGISTER].email);
  app.post('/api/forms/' + _FormNames2.default.USER_VERIFY_EMAIL + '/fields/email/validation', _bodyParser2.default.json, _formValidation2.default[_FormNames2.default.USER_VERIFY_EMAIL].email);
  app.post('/api/forms/' + _FormNames2.default.USER_FORGET_PASSWORD + '/fields/email/validation', _bodyParser2.default.json, _formValidation2.default[_FormNames2.default.USER_FORGET_PASSWORD].email);

  // locale
  app.get('/api/locales/:locale', _locale2.default.show);

  // todo
  app.get('/api/todos', _todo2.default.list);
  app.post('/api/todos', _bodyParser2.default.json, _todo2.default.create);
  app.put('/api/todos/:id', _bodyParser2.default.json, _todo2.default.update);
  app.delete('/api/todos/:id', _todo2.default.remove);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy9hcGkuanMiXSwibmFtZXMiOlsiYXBwIiwiZ2V0IiwiQURNSU4iLCJsaXN0IiwicG9zdCIsImpzb24iLCJyZWNhcHRjaGEiLCJjcmVhdGUiLCJzZW5kVmVyaWZpY2F0aW9uIiwiand0IiwidmVyaWZ5RW1haWwiLCJzZWNyZXQiLCJ2ZXJpZnlVc2VyTm9uY2UiLCJmb3JtIiwic2V0Tm9uY2UiLCJsb2dpbiIsInNlbmRSZXNldFBhc3N3b3JkTGluayIsInB1dCIsInJlc2V0UGFzc3dvcmQiLCJsb2dvdXQiLCJyZWFkU2VsZiIsInVwZGF0ZSIsInVwZGF0ZUF2YXRhclVSTCIsInVwZGF0ZVBhc3N3b3JkIiwiZmlyZWJhc2UiLCJmaXJlYmFzZUNvbnRyb2xsZXIiLCJyZXF1aXJlIiwiZGVmYXVsdCIsInJlYWRUb2tlbiIsImRpc2siLCJkZXN0aW5hdGlvbiIsImZpbGVuYW1lIiwiZmllbGRzIiwibmFtZSIsInVwbG9hZEF2YXRhciIsIlVTRVJfUkVHSVNURVIiLCJlbWFpbCIsIlVTRVJfVkVSSUZZX0VNQUlMIiwiVVNFUl9GT1JHRVRfUEFTU1dPUkQiLCJzaG93IiwiZGVsZXRlIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O2tCQUVlLGdCQUFhO0FBQUEsTUFBVkEsR0FBVSxRQUFWQSxHQUFVOztBQUMxQjtBQUNBQSxNQUFJQyxHQUFKLENBQVEsWUFBUiwwQkFFRSw0QkFBYSxDQUFDLGdCQUFNQyxLQUFQLENBQWIsQ0FGRixFQUdFLGVBQWVDLElBSGpCO0FBS0FILE1BQUlJLElBQUosQ0FBUyxZQUFULEVBQ0UscUJBQVdDLElBRGIsRUFFRSxtQkFBU0MsU0FGWCxFQUdFLGVBQWVDLE1BSGpCLEVBSUUsZUFBZUMsZ0JBSmpCO0FBTUFSLE1BQUlJLElBQUosQ0FBUyx5QkFBVCxFQUNFLHFCQUFXQyxJQURiLEVBRUUscUJBQVdJLEdBQVgsQ0FDRSxrQkFERixFQUVFLGlCQUFRQSxHQUFSLENBQVlDLFdBQVosQ0FBd0JDLE1BRjFCLENBRkYsRUFNRSxtQkFBU0MsZUFBVCxDQUF5QixhQUF6QixDQU5GLEVBT0UsZUFBZUYsV0FQakI7QUFTQVYsTUFBSUksSUFBSixDQUFTLGlDQUFULEVBQ0UscUJBQVdDLElBRGIsRUFFRSxtQkFBU1EsSUFBVCxDQUFjLHNCQUFkLENBRkYsRUFHRSxtQkFBU1AsU0FIWCxFQUlFLGVBQWVRLFFBQWYsQ0FBd0IsYUFBeEIsQ0FKRixFQUtFLGVBQWVOLGdCQUxqQjtBQU9BUixNQUFJSSxJQUFKLENBQVMsa0JBQVQsRUFBNkIscUJBQVdDLElBQXhDLEVBQThDLGVBQWVVLEtBQTdEO0FBQ0FmLE1BQUlJLElBQUosQ0FBUyxtQ0FBVCxFQUNFLHFCQUFXQyxJQURiLEVBRUUsbUJBQVNRLElBQVQsQ0FBYyx5QkFBZCxDQUZGLEVBR0UsbUJBQVNQLFNBSFgsRUFJRSxlQUFlUSxRQUFmLENBQXdCLGVBQXhCLENBSkYsRUFLRSxlQUFlRSxxQkFMakI7QUFPQWhCLE1BQUlpQixHQUFKLENBQVEscUJBQVIsRUFDRSxxQkFBV1osSUFEYixFQUVFLHFCQUFXSSxHQUFYLENBQ0Usb0JBREYsRUFFRSxpQkFBUUEsR0FBUixDQUFZUyxhQUFaLENBQTBCUCxNQUY1QixDQUZGLEVBTUUsbUJBQVNDLGVBQVQsQ0FBeUIsZUFBekIsQ0FORixFQU9FLG1CQUFTQyxJQUFULENBQWMsd0JBQWQsQ0FQRixFQVFFLGVBQWVLLGFBUmpCO0FBVUFsQixNQUFJQyxHQUFKLENBQVEsbUJBQVIsRUFBNkIsZUFBZWtCLE1BQTVDO0FBQ0FuQixNQUFJQyxHQUFKLENBQVEsZUFBUiwwQkFBdUMsZUFBZW1CLFFBQXREO0FBQ0FwQixNQUFJaUIsR0FBSixDQUFRLGVBQVIsMEJBRUUscUJBQVdaLElBRmIsRUFHRSxtQkFBU1EsSUFBVCxDQUFjLGVBQWQsQ0FIRixFQUlFLGVBQWVRLE1BSmpCO0FBTUFyQixNQUFJaUIsR0FBSixDQUFRLHlCQUFSLDBCQUVFLHFCQUFXWixJQUZiLEVBR0UsZUFBZWlCLGVBSGpCO0FBS0F0QixNQUFJaUIsR0FBSixDQUFRLHdCQUFSLDBCQUVFLHFCQUFXWixJQUZiLEVBR0UsbUJBQVNRLElBQVQsQ0FBYyx5QkFBZCxDQUhGLEVBSUUsZUFBZVUsY0FKakI7QUFNQSxNQUFJLGlCQUFRQyxRQUFaLEVBQXNCO0FBQ3BCLFFBQUlDLHFCQUFxQkMsUUFBUSx5QkFBUixFQUFtQ0MsT0FBNUQ7QUFDQTNCLFFBQUlDLEdBQUosQ0FBUSw4QkFBUiwwQkFDZ0J3QixtQkFBbUJHLFNBRG5DO0FBRUQ7QUFDRDVCLE1BQUlJLElBQUosQ0FBUyxzQkFBVCwwQkFFRSxxQkFBV3lCLElBQVgsQ0FBZ0I7QUFDZEMsaUJBQWEsY0FEQztBQUVkQyxjQUFVO0FBRkksR0FBaEIsRUFHR0MsTUFISCxDQUdVLENBQUMsRUFBRUMsTUFBTSxRQUFSLEVBQUQsQ0FIVixDQUZGLEVBTUUsbUJBQVNwQixJQUFULENBQWMsaUJBQWQsQ0FORixFQU9FLGVBQWVxQixZQVBqQjs7QUFTQTtBQUNBbEMsTUFBSUksSUFBSixpQkFBdUIsb0JBQVUrQixhQUFqQywrQkFDRSxxQkFBVzlCLElBRGIsRUFFRSx5QkFBeUIsb0JBQVU4QixhQUFuQyxFQUFrREMsS0FGcEQ7QUFJQXBDLE1BQUlJLElBQUosaUJBQ2dCLG9CQUFVaUMsaUJBRDFCLCtCQUVFLHFCQUFXaEMsSUFGYixFQUdFLHlCQUF5QixvQkFBVWdDLGlCQUFuQyxFQUFzREQsS0FIeEQ7QUFLQXBDLE1BQUlJLElBQUosaUJBQ2dCLG9CQUFVa0Msb0JBRDFCLCtCQUVFLHFCQUFXakMsSUFGYixFQUdFLHlCQUF5QixvQkFBVWlDLG9CQUFuQyxFQUF5REYsS0FIM0Q7O0FBTUE7QUFDQXBDLE1BQUlDLEdBQUosQ0FBUSxzQkFBUixFQUFnQyxpQkFBaUJzQyxJQUFqRDs7QUFFQTtBQUNBdkMsTUFBSUMsR0FBSixDQUFRLFlBQVIsRUFBc0IsZUFBZUUsSUFBckM7QUFDQUgsTUFBSUksSUFBSixDQUFTLFlBQVQsRUFBdUIscUJBQVdDLElBQWxDLEVBQXdDLGVBQWVFLE1BQXZEO0FBQ0FQLE1BQUlpQixHQUFKLENBQVEsZ0JBQVIsRUFBMEIscUJBQVdaLElBQXJDLEVBQTJDLGVBQWVnQixNQUExRDtBQUNBckIsTUFBSXdDLE1BQUosQ0FBVyxnQkFBWCxFQUE2QixlQUFlQyxNQUE1QztBQUNELEMiLCJmaWxlIjoicm91dGVzL2FwaS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
