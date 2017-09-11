import configs from '../../../configs/project/server';
import Roles from '../../common/constants/Roles';
import FormNames from '../../common/constants/FormNames';
import bodyParser from '../middlewares/bodyParser';
import authRequired from '../middlewares/authRequired';
import roleRequired from '../middlewares/roleRequired';
import validate from '../middlewares/validate';
import fileUpload from '../middlewares/fileUpload';
import userController from '../controllers/user';
import mailController from '../controllers/mail';
import formValidationController from '../controllers/formValidation';
import localeController from '../controllers/locale';
import todoController from '../controllers/todo';
import todo2Controller from '../controllers/todo2';
import eventController from '../controllers/event';
import searchController from '../controllers/search';

export default ({ app }) => {
  // user
  app.get('/api/users',
    authRequired,
    roleRequired([Roles.ADMIN]),
    userController.list
  );
  app.post('/api/users',
    bodyParser.json,
    validate.recaptcha,
    userController.create,
    mailController.sendVerification
  );
  app.post('/api/users/email/verify',
    bodyParser.json,
    bodyParser.jwt(
      'verifyEmailToken',
      configs.jwt.verifyEmail.secret
    ),
    validate.verifyUserNonce('verifyEmail'),
    userController.verifyEmail
  );
  app.post('/api/users/email/request-verify',
    bodyParser.json,
    validate.form('user/VerifyEmailForm'),
    validate.recaptcha,
    userController.setNonce('verifyEmail'),
    mailController.sendVerification
  );
  app.post('/api/users/login', bodyParser.json, userController.login);
  app.post('/api/users/password/request-reset',
    bodyParser.json,
    validate.form('user/ForgetPasswordForm'),
    validate.recaptcha,
    userController.setNonce('resetPassword'),
    mailController.sendResetPasswordLink
  );
  app.put('/api/users/password',
    bodyParser.json,
    bodyParser.jwt(
      'resetPasswordToken',
      configs.jwt.resetPassword.secret
    ),
    validate.verifyUserNonce('resetPassword'),
    validate.form('user/ResetPasswordForm'),
    userController.resetPassword
  );
  app.get('/api/users/logout', userController.logout);
  app.get('/api/users/username/edit', authRequired, userController.readAny);
  app.get('/api/users/me', authRequired, userController.readSelf);
  app.put('/api/users/me',
    authRequired,
    bodyParser.json,
    validate.form('user/EditForm'),
    userController.update
  );
  app.put('/api/users/edit',
    authRequired,
    roleRequired([Roles.ADMIN]),
    bodyParser.json,
    validate.form('user/EditForm'),
    userController.update
  );
  app.put('/api/users/me/avatarURL',
    authRequired,
    bodyParser.json,
    userController.updateAvatarURL
  );
  app.put('/api/users/me/password',
    authRequired,
    bodyParser.json,
    validate.form('user/ChangePasswordForm'),
    userController.updatePassword
  );
  if (configs.firebase) {
    let firebaseController = require('../controllers/firebase').default;
    app.get('/api/users/me/firebase/token',
      authRequired, firebaseController.readToken);
  }
  app.post('/api/users/me/avatar',
    authRequired,
    fileUpload.disk({
      destination: 'tmp/{userId}',
      filename: 'avatar.jpg',
    }).fields([{ name: 'avatar' }]),
    validate.form('user/AvatarForm'),
    userController.uploadAvatar);

  // form
  app.post(`/api/forms/${FormNames.USER_REGISTER}/fields/email/validation`,
    bodyParser.json,
    formValidationController[FormNames.USER_REGISTER].email
  );
  app.post(
    `/api/forms/${FormNames.USER_VERIFY_EMAIL}/fields/email/validation`,
    bodyParser.json,
    formValidationController[FormNames.USER_VERIFY_EMAIL].email
  );
  app.post(
    `/api/forms/${FormNames.USER_FORGET_PASSWORD}/fields/email/validation`,
    bodyParser.json,
    formValidationController[FormNames.USER_FORGET_PASSWORD].email
  );

  // locale
  app.get('/api/locales/:locale', localeController.show);

  // todo
  app.get('/api/todos', todoController.list);
  app.post('/api/todos', bodyParser.json, todoController.create);
  app.put('/api/todos/:id', bodyParser.json, todoController.update);
  app.delete('/api/todos/:id', todoController.remove);

  // todo2
  app.get('/api/todos2', todo2Controller.list);
  app.post('/api/todos2', bodyParser.json, todo2Controller.create);
  app.put('/api/todos2/:id', bodyParser.json, todo2Controller.update);
  app.delete('/api/todos2/:id', todo2Controller.remove);

  // Events
  app.get('/api/events', eventController.list);
  app.post('/api/events', bodyParser.json, eventController.create);
  app.put('/api/events', bodyParser.json, eventController.update);
  app.delete('/api/events', eventController.remove);

  // Search
  app.get('/api/search', searchController.list);
};
