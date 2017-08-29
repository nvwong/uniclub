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

var _todo3 = require('../controllers/todo2');

var _todo4 = _interopRequireDefault(_todo3);

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

  // todo2
  app.get('/api/todos2', _todo4.default.list);
  app.post('/api/todos2', _bodyParser2.default.json, _todo4.default.create);
  app.put('/api/todos2/:id', _bodyParser2.default.json, _todo4.default.update);
  app.delete('/api/todos2/:id', _todo4.default.remove);

  // userlist
  // app.get('/api/userlist', userlistController.list);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy9hcGkuanMiXSwibmFtZXMiOlsiYXBwIiwiZ2V0IiwiQURNSU4iLCJsaXN0IiwicG9zdCIsImpzb24iLCJyZWNhcHRjaGEiLCJjcmVhdGUiLCJzZW5kVmVyaWZpY2F0aW9uIiwiand0IiwidmVyaWZ5RW1haWwiLCJzZWNyZXQiLCJ2ZXJpZnlVc2VyTm9uY2UiLCJmb3JtIiwic2V0Tm9uY2UiLCJsb2dpbiIsInNlbmRSZXNldFBhc3N3b3JkTGluayIsInB1dCIsInJlc2V0UGFzc3dvcmQiLCJsb2dvdXQiLCJyZWFkU2VsZiIsInVwZGF0ZSIsInVwZGF0ZUF2YXRhclVSTCIsInVwZGF0ZVBhc3N3b3JkIiwiZmlyZWJhc2UiLCJmaXJlYmFzZUNvbnRyb2xsZXIiLCJyZXF1aXJlIiwiZGVmYXVsdCIsInJlYWRUb2tlbiIsImRpc2siLCJkZXN0aW5hdGlvbiIsImZpbGVuYW1lIiwiZmllbGRzIiwibmFtZSIsInVwbG9hZEF2YXRhciIsIlVTRVJfUkVHSVNURVIiLCJlbWFpbCIsIlVTRVJfVkVSSUZZX0VNQUlMIiwiVVNFUl9GT1JHRVRfUEFTU1dPUkQiLCJzaG93IiwiZGVsZXRlIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7a0JBR2UsZ0JBQWE7QUFBQSxNQUFWQSxHQUFVLFFBQVZBLEdBQVU7O0FBQzFCO0FBQ0FBLE1BQUlDLEdBQUosQ0FBUSxZQUFSLDBCQUVFLDRCQUFhLENBQUMsZ0JBQU1DLEtBQVAsQ0FBYixDQUZGLEVBR0UsZUFBZUMsSUFIakI7QUFLQUgsTUFBSUksSUFBSixDQUFTLFlBQVQsRUFDRSxxQkFBV0MsSUFEYixFQUVFLG1CQUFTQyxTQUZYLEVBR0UsZUFBZUMsTUFIakIsRUFJRSxlQUFlQyxnQkFKakI7QUFNQVIsTUFB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QixlQUFlRSxJQUFyQztBQUNBSCxNQUFJSSxJQUFKLENBQVMsWUFBVCxFQUF1QixxQkFBV0MsSUFBbEMsRUFBd0MsZUFBZUUsTUFBdkQ7QUFDQVAsTUFBSWlCLEdBQUosQ0FBUSxnQkFBUixFQUEwQixxQkFBV1osSUFBckMsRUFBMkMsZUFBZWdCLE1BQTFEO0FBQ0FyQixNQUFJd0MsTUFBSixDQUFXLGdCQUFYLEVBQTZCLGVBQWVDLE1BQTVDOztBQUVBO0FBQ0F6QyxNQUFJQyxHQUFKLENBQVEsYUFBUixFQUF1QixlQUFnQkUsSUFBdkM7QUFDQUgsTUFBSUksSUFBSixDQUFTLGFBQVQsRUFBd0IscUJBQVdDLElBQW5DLEVBQXlDLGVBQWdCRSxNQUF6RDtBQUNBUCxNQUFJaUIsR0FBSixDQUFRLGlCQUFSLEVBQTJCLHFCQUFXWixJQUF0QyxFQUE0QyxlQUFnQmdCLE1BQTVEO0FBQ0FyQixNQUFJd0MsTUFBSixDQUFXLGlCQUFYLEVBQThCLGVBQWdCQyxNQUE5Qzs7QUFFQTtBQUNEO0FBQ0EsQyIsImZpbGUiOiJyb3V0ZXMvYXBpLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
