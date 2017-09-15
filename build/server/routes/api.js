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

var _event = require('../controllers/event');

var _event2 = _interopRequireDefault(_event);

var _search = require('../controllers/search');

var _search2 = _interopRequireDefault(_search);

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
  app.get('/api/users/username/edit', _authRequired2.default, _user2.default.readAny);
  app.get('/api/users/me', _authRequired2.default, _user2.default.readSelf);
  app.put('/api/users/me', _authRequired2.default, _bodyParser2.default.json, _validate2.default.form('user/EditForm'), _user2.default.update);
  app.put('/api/users/edit', _authRequired2.default, (0, _roleRequired2.default)([_Roles2.default.ADMIN]), _bodyParser2.default.json, _validate2.default.form('user/EditForm'), _user2.default.update);
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

  // Events
  app.get('/api/events', _event2.default.list);
  app.post('/api/events', _bodyParser2.default.json, _event2.default.create);
  app.put('/api/events', _bodyParser2.default.json, _event2.default.update);
  app.delete('/api/events', _event2.default.remove);

  // Search
  app.get('/api/search', _search2.default.list);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy9hcGkuanMiXSwibmFtZXMiOlsiYXBwIiwiZ2V0IiwiQURNSU4iLCJsaXN0IiwicG9zdCIsImpzb24iLCJyZWNhcHRjaGEiLCJjcmVhdGUiLCJzZW5kVmVyaWZpY2F0aW9uIiwiand0IiwidmVyaWZ5RW1haWwiLCJzZWNyZXQiLCJ2ZXJpZnlVc2VyTm9uY2UiLCJmb3JtIiwic2V0Tm9uY2UiLCJsb2dpbiIsInNlbmRSZXNldFBhc3N3b3JkTGluayIsInB1dCIsInJlc2V0UGFzc3dvcmQiLCJsb2dvdXQiLCJyZWFkQW55IiwicmVhZFNlbGYiLCJ1cGRhdGUiLCJ1cGRhdGVBdmF0YXJVUkwiLCJ1cGRhdGVQYXNzd29yZCIsImZpcmViYXNlIiwiZmlyZWJhc2VDb250cm9sbGVyIiwicmVxdWlyZSIsImRlZmF1bHQiLCJyZWFkVG9rZW4iLCJkaXNrIiwiZGVzdGluYXRpb24iLCJmaWxlbmFtZSIsImZpZWxkcyIsIm5hbWUiLCJ1cGxvYWRBdmF0YXIiLCJVU0VSX1JFR0lTVEVSIiwiZW1haWwiLCJVU0VSX1ZFUklGWV9FTUFJTCIsIlVTRVJfRk9SR0VUX1BBU1NXT1JEIiwic2hvdyIsImRlbGV0ZSIsInJlbW92ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztrQkFFZSxnQkFBYTtBQUFBLE1BQVZBLEdBQVUsUUFBVkEsR0FBVTs7QUFDMUI7QUFDQUEsTUFBSUMsR0FBSixDQUFRLFlBQVIsMEJBRUUsNEJBQWEsQ0FBQyxnQkFBTUMsS0FBUCxDQUFiLENBRkYsRUFHRSxlQUFlQyxJQUhqQjtBQUtBSCxNQUFJSSxJQUFKLENBQVMsWUFBVCxFQUNFLHFCQUFXQyxJQURiLEVBRUUsbUJBQVNDLFNBRlgsRUFHRSxlQUFlQyxNQUhqQixF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
