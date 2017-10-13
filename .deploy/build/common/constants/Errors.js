'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ErrorCodes$UNKNOWN_E;

var _ErrorCodes = require('./ErrorCodes');

var _ErrorCodes2 = _interopRequireDefault(_ErrorCodes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = (_ErrorCodes$UNKNOWN_E = {}, _defineProperty(_ErrorCodes$UNKNOWN_E, _ErrorCodes2.default.UNKNOWN_EXCEPTION, {
  code: _ErrorCodes2.default.UNKNOWN_EXCEPTION,
  status: 500,
  title: 'Unknown Exception',
  detail: 'Something wrong happened.'
}), _defineProperty(_ErrorCodes$UNKNOWN_E, _ErrorCodes2.default.ODM_OPERATION_FAIL, {
  code: _ErrorCodes2.default.ODM_OPERATION_FAIL,
  status: 500,
  title: 'Database Operation Failed',
  detail: 'Current database operation is invalid.'
}), _defineProperty(_ErrorCodes$UNKNOWN_E, _ErrorCodes2.default.ODM_VALIDATION, {
  code: _ErrorCodes2.default.ODM_VALIDATION,
  status: 400,
  title: 'Database Validation Failed',
  detail: 'The data is invalid.'
}), _defineProperty(_ErrorCodes$UNKNOWN_E, _ErrorCodes2.default.INVALID_RECAPTCHA, {
  code: _ErrorCodes2.default.INVALID_RECAPTCHA,
  status: 400,
  title: 'Invalid Recaptcha',
  detail: 'The value of recaptcha is invalid.'
}), _defineProperty(_ErrorCodes$UNKNOWN_E, _ErrorCodes2.default.INVALID_DATA, {
  code: _ErrorCodes2.default.INVALID_DATA,
  status: 400,
  title: 'Invalid Data',
  detail: 'You are sending invalid data.'
}), _defineProperty(_ErrorCodes$UNKNOWN_E, _ErrorCodes2.default.STATE_PRE_FETCHING_FAIL, {
  code: _ErrorCodes2.default.STATE_PRE_FETCHING_FAIL,
  status: 500,
  title: 'Server-Side State Fetching Failed',
  detail: 'Fail to pre-fetch state on server side.'
}), _defineProperty(_ErrorCodes$UNKNOWN_E, _ErrorCodes2.default.USER_UNAUTHORIZED, {
  code: _ErrorCodes2.default.USER_UNAUTHORIZED,
  status: 401,
  title: 'User Unauthorized',
  detail: 'You are a guest or invalid user. Please login to access the resource.'
}), _defineProperty(_ErrorCodes$UNKNOWN_E, _ErrorCodes2.default.USER_EXISTED, {
  code: _ErrorCodes2.default.USER_EXISTED,
  status: 400,
  title: 'User Existed',
  detail: 'This user is already registered.'
}), _defineProperty(_ErrorCodes$UNKNOWN_E, _ErrorCodes2.default.USER_NOT_EXIST, {
  code: _ErrorCodes2.default.USER_NOT_EXIST,
  status: 400,
  title: 'User Does Not Exist',
  detail: 'This user does not exist.'
}), _defineProperty(_ErrorCodes$UNKNOWN_E, _ErrorCodes2.default.TOKEN_REUSED, {
  code: _ErrorCodes2.default.TOKEN_REUSED,
  status: 400,
  title: 'Token Reused',
  detail: 'The token is reused.'
}), _defineProperty(_ErrorCodes$UNKNOWN_E, _ErrorCodes2.default.BAD_TOKEN, {
  code: _ErrorCodes2.default.BAD_TOKEN,
  status: 400,
  title: 'Bad Token',
  detail: 'Fail to decode the token.'
}), _defineProperty(_ErrorCodes$UNKNOWN_E, _ErrorCodes2.default.TOKEN_EXPIRATION, {
  code: _ErrorCodes2.default.TOKEN_EXPIRATION,
  status: 401,
  title: 'Token Expired',
  detail: 'Your token has expired.'
}), _defineProperty(_ErrorCodes$UNKNOWN_E, _ErrorCodes2.default.PERMISSION_DENIED, {
  code: _ErrorCodes2.default.PERMISSION_DENIED,
  status: 403,
  title: 'Permission Denied',
  detail: 'You are not allowed to access the resource.'
}), _defineProperty(_ErrorCodes$UNKNOWN_E, _ErrorCodes2.default.LOCALE_NOT_SUPPORTED, {
  code: _ErrorCodes2.default.LOCALE_NOT_SUPPORTED,
  status: 400,
  title: 'Locale not supported',
  detail: 'We don\'t support this locale.'
}), _defineProperty(_ErrorCodes$UNKNOWN_E, _ErrorCodes2.default.AUTHORIZATION_FAIL, {
  code: _ErrorCodes2.default.AUTHORIZATION_FAIL,
  status: 400,
  title: 'Authorization Failed',
  detail: 'Please make sure you authorize all required information to us.'
}), _defineProperty(_ErrorCodes$UNKNOWN_E, _ErrorCodes2.default.SEND_EMAIL_FAIL, {
  code: _ErrorCodes2.default.SEND_EMAIL_FAIL,
  status: 500,
  title: 'Email Not Sent',
  detail: 'Mail service didn\'t send the mail correctly.'
}), _ErrorCodes$UNKNOWN_E);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnN0YW50cy9FcnJvcnMuanMiXSwibmFtZXMiOlsiVU5LTk9XTl9FWENFUFRJT04iLCJjb2RlIiwic3RhdHVzIiwidGl0bGUiLCJkZXRhaWwiLCJPRE1fT1BFUkFUSU9OX0ZBSUwiLCJPRE1fVkFMSURBVElPTiIsIklOVkFMSURfUkVDQVBUQ0hBIiwiSU5WQUxJRF9EQVRBIiwiU1RBVEVfUFJFX0ZFVENISU5HX0ZBSUwiLCJVU0VSX1VOQVVUSE9SSVpFRCIsIlVTRVJfRVhJU1RFRCIsIlVTRVJfTk9UX0VYSVNUIiwiVE9LRU5fUkVVU0VEIiwiQkFEX1RPS0VOIiwiVE9LRU5fRVhQSVJBVElPTiIsIlBFUk1JU1NJT05fREVOSUVEIiwiTE9DQUxFX05PVF9TVVBQT1JURUQiLCJBVVRIT1JJWkFUSU9OX0ZBSUwiLCJTRU5EX0VNQUlMX0ZBSUwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7O3NGQUdHLHFCQUFXQSxpQixFQUFvQjtBQUM5QkMsUUFBTSxxQkFBV0QsaUJBRGE7QUFFOUJFLFVBQVEsR0FGc0I7QUFHOUJDLFNBQU8sbUJBSHVCO0FBSTlCQyxVQUFRO0FBSnNCLEMsMENBTS9CLHFCQUFXQyxrQixFQUFxQjtBQUMvQkosUUFBTSxxQkFBV0ksa0JBRGM7QUFFL0JILFVBQVEsR0FGdUI7QUFHL0JDLFNBQU8sMkJBSHdCO0FBSS9CQyxVQUFRO0FBSnVCLEMsMENBTWhDLHFCQUFXRSxjLEVBQWlCO0FBQzNCTCxRQUFNLHFCQUFXSyxjQURVO0FBRTNCSixVQUFRLEdBRm1CO0FBRzNCQyxTQUFPLDRCQUhvQjtBQUkzQkMsVUFBUTtBQUptQixDLDBDQU01QixxQkFBV0csaUIsRUFBb0I7QUFDOUJOLFFBQU0scUJBQVdNLGlCQURhO0FBRTlCTCxVQUFRLEdBRnNCO0FBRzlCQyxTQUFPLG1CQUh1QjtBQUk5QkMsVUFBUTtBQUpzQixDLDBDQU0vQixxQkFBV0ksWSxFQUFlO0FBQ3pCUCxRQUFNLHFCQUFXTyxZQURRO0FBRXpCTixVQUFRLEdBRmlCO0FBR3pCQyxTQUFPLGNBSGtCO0FBSXpCQyxVQUFRO0FBSmlCLEMsMENBTTFCLHFCQUFXSyx1QixFQUEwQjtBQUNwQ1IsUUFBTSxxQkFBV1EsdUJBRG1CO0FBRXBDUCxVQUFRLEdBRjRCO0FBR3BDQyxTQUFPLG1DQUg2QjtBQUlwQ0MsVUFBUTtBQUo0QixDLDBDQU1yQyxxQkFBV00saUIsRUFBb0I7QUFDOUJULFFBQU0scUJBQVdTLGlCQURhO0FBRTlCUixVQUFRLEdBRnNCO0FBRzlCQyxTQUFPLG1CQUh1QjtBQUk5QkMsVUFDRTtBQUw0QixDLDBDQU8vQixxQkFBV08sWSxFQUFlO0FBQ3pCVixRQUFNLHFCQUFXVSxZQURRO0FBRXpCVCxVQUFRLEdBRmlCO0FBR3pCQyxTQUFPLGNBSGtCO0FBSXpCQyxVQUFRO0FBSmlCLEMsMENBTTFCLHFCQUFXUSxjLEVBQWlCO0FBQzNCWCxRQUFNLHFCQUFXVyxjQURVO0FBRTNCVixVQUFRLEdBRm1CO0FBRzNCQyxTQUFPLHFCQUhvQjtBQUkzQkMsVUFBUTtBQUptQixDLDBDQU01QixxQkFBV1MsWSxFQUFlO0FBQ3pCWixRQUFNLHFCQUFXWSxZQURRO0FBRXpCWCxVQUFRLEdBRmlCO0FBR3pCQyxTQUFPLGNBSGtCO0FBSXpCQyxVQUFRO0FBSmlCLEMsMENBTTFCLHFCQUFXVSxTLEVBQVk7QUFDdEJiLFFBQU0scUJBQVdhLFNBREs7QUFFdEJaLFVBQVEsR0FGYztBQUd0QkMsU0FBTyxXQUhlO0FBSXRCQyxVQUFRO0FBSmMsQywwQ0FNdkIscUJBQVdXLGdCLEVBQW1CO0FBQzdCZCxRQUFNLHFCQUFXYyxnQkFEWTtBQUU3QmIsVUFBUSxHQUZxQjtBQUc3QkMsU0FBTyxlQUhzQjtBQUk3QkMsVUFBUTtBQUpxQixDLDBDQU05QixxQkFBV1ksaUIsRUFBb0I7QUFDOUJmLFFBQU0scUJBQVdlLGlCQURhO0FBRTlCZCxVQUFRLEdBRnNCO0FBRzlCQyxTQUFPLG1CQUh1QjtBQUk5QkMsVUFBUTtBQUpzQixDLDBDQU0vQixxQkFBV2Esb0IsRUFBdUI7QUFDakNoQixRQUFNLHFCQUFXZ0Isb0JBRGdCO0FBRWpDZixVQUFRLEdBRnlCO0FBR2pDQyxTQUFPLHNCQUgwQjtBQUlqQ0MsVUFBUTtBQUp5QixDLDBDQU1sQyxxQkFBV2Msa0IsRUFBcUI7QUFDL0JqQixRQUFNLHFCQUFXaUIsa0JBRGM7QUFFL0JoQixVQUFRLEdBRnVCO0FBRy9CQyxTQUFPLHNCQUh3QjtBQUkvQkMsVUFBUTtBQUp1QixDLDBDQU1oQyxxQkFBV2UsZSxFQUFrQjtBQUM1QmxCLFFBQU0scUJBQVdrQixlQURXO0FBRTVCakIsVUFBUSxHQUZvQjtBQUc1QkMsU0FBTyxnQkFIcUI7QUFJNUJDLFVBQVE7QUFKb0IsQyIsImZpbGUiOiJjb25zdGFudHMvRXJyb3JzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
