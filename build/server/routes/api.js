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
  app.put('/api/events/addParticipant/:id', _bodyParser2.default.json, _event2.default.addParticipant);

  // Search
  app.get('/api/search', _search2.default.list);
  app.post('api/search', _search2.default.search);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy9hcGkuanMiXSwibmFtZXMiOlsiYXBwIiwiZ2V0IiwiQURNSU4iLCJsaXN0IiwicG9zdCIsImpzb24iLCJyZWNhcHRjaGEiLCJjcmVhdGUiLCJzZW5kVmVyaWZpY2F0aW9uIiwiand0IiwidmVyaWZ5RW1haWwiLCJzZWNyZXQiLCJ2ZXJpZnlVc2VyTm9uY2UiLCJmb3JtIiwic2V0Tm9uY2UiLCJsb2dpbiIsInNlbmRSZXNldFBhc3N3b3JkTGluayIsInB1dCIsInJlc2V0UGFzc3dvcmQiLCJsb2dvdXQiLCJyZWFkQW55IiwicmVhZFNlbGYiLCJ1cGRhdGUiLCJ1cGRhdGVBdmF0YXJVUkwiLCJ1cGRhdGVQYXNzd29yZCIsImZpcmViYXNlIiwiZmlyZWJhc2VDb250cm9sbGVyIiwicmVxdWlyZSIsImRlZmF1bHQiLCJyZWFkVG9rZW4iLCJkaXNrIiwiZGVzdGluYXRpb24iLCJmaWxlbmFtZSIsImZpZWxkcyIsIm5hbWUiLCJ1cGxvYWRBdmF0YXIiLCJVU0VSX1JFR0lTVEVSIiwiZW1haWwiLCJVU0VSX1ZFUklGWV9FTUFJTCIsIlVTRVJfRk9SR0VUX1BBU1NXT1JEIiwic2hvdyIsImRlbGV0ZSIsInJlbW92ZSIsImFkZFBhcnRpY2lwYW50Iiwic2VhcmNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O2tCQUVlLGdCQUFhO0FBQUEsTUFBVkEsR0FBVSxRQUFWQSxHQUFVOztBQUMxQjtBQUNBQSxNQUFJQyxHQUFKLENBQVEsWUFBUiwwQkFFRSw0QkFBYSxDQUFDLGdCQUFNQyxLQUFQLENBQWIsQ0FGRixFQUdFLGVBQWVDLElBSGpCO0FBS0FILE1BQUlJLElBQUosQ0FBUyxZQUFULEVBQ0UscUJBQVdDLElBRGIsRUFFRSxtQkFB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RmIsRUFHRSx5QkFBeUIsb0JBQVVpQyxpQkFBbkMsRUFBc0RELEtBSHhEO0FBS0FyQyxNQUFJSSxJQUFKLGlCQUNnQixvQkFBVW1DLG9CQUQxQiwrQkFFRSxxQkFBV2xDLElBRmIsRUFHRSx5QkFBeUIsb0JBQVVrQyxvQkFBbkMsRUFBeURGLEtBSDNEOztBQU1BO0FBQ0FyQyxNQUFJQyxHQUFKLENBQVEsc0JBQVIsRUFBZ0MsaUJBQWlCdUMsSUFBakQ7O0FBRUE7QUFDQXhDLE1BQUlDLEdBQUosQ0FBUSxZQUFSLEVBQXNCLGVBQWVFLElBQXJDO0FBQ0FILE1BQUlJLElBQUosQ0FBUyxZQUFULEVBQXVCLHFCQUFXQyxJQUFsQyxFQUF3QyxlQUFlRSxNQUF2RDtBQUNBUCxNQUFJaUIsR0FBSixDQUFRLGdCQUFSLEVBQTBCLHFCQUFXWixJQUFyQyxFQUEyQyxlQUFlaUIsTUFBMUQ7QUFDQXRCLE1BQUl5QyxNQUFKLENBQVcsZ0JBQVgsRUFBNkIsZUFBZUMsTUFBNUM7O0FBRUE7QUFDQTFDLE1BQUlDLEdBQUosQ0FBUSxhQUFSLEVBQXVCLGVBQWdCRSxJQUF2QztBQUNBSCxNQUFJSSxJQUFKLENBQVMsYUFBVCxFQUF3QixxQkFBV0MsSUFBbkMsRUFBeUMsZUFBZ0JFLE1BQXpEO0FBQ0FQLE1BQUlpQixHQUFKLENBQVEsaUJBQVIsRUFBMkIscUJBQVdaLElBQXRDLEVBQTRDLGVBQWdCaUIsTUFBNUQ7QUFDQXRCLE1BQUl5QyxNQUFKLENBQVcsaUJBQVgsRUFBOEIsZUFBZ0JDLE1BQTlDOztBQUVBO0FBQ0ExQyxNQUFJQyxHQUFKLENBQVEsYUFBUixFQUF1QixnQkFBZ0JFLElBQXZDO0FBQ0FILE1BQUlJLElBQUosQ0FBUyxhQUFULEVBQXdCLHFCQUFXQyxJQUFuQyxFQUF5QyxnQkFBZ0JFLE1BQXpEO0FBQ0FQLE1BQUlpQixHQUFKLENBQVEsYUFBUixFQUF1QixxQkFBV1osSUFBbEMsRUFBd0MsZ0JBQWdCaUIsTUFBeEQ7QUFDQXRCLE1BQUl5QyxNQUFKLENBQVcsYUFBWCxFQUEwQixnQkFBZ0JDLE1BQTFDO0FBQ0ExQyxNQUFJaUIsR0FBSixDQUFRLGdDQUFSLEVBQTBDLHFCQUFXWixJQUFyRCxFQUEyRCxnQkFBZ0JzQyxjQUEzRTs7QUFFQTtBQUNBM0MsTUFBSUMsR0FBSixDQUFRLGFBQVIsRUFBdUIsaUJBQWlCRSxJQUF4QztBQUNBSCxNQUFJSSxJQUFKLENBQVMsWUFBVCxFQUF1QixpQkFBaUJ3QyxNQUF4QztBQUNELEMiLCJmaWxlIjoicm91dGVzL2FwaS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
