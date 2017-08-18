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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnN0YW50cy9FcnJvcnMuanMiXSwibmFtZXMiOlsiVU5LTk9XTl9FWENFUFRJT04iLCJjb2RlIiwic3RhdHVzIiwidGl0bGUiLCJkZXRhaWwiLCJPRE1fT1BFUkFUSU9OX0ZBSUwiLCJPRE1fVkFMSURBVElPTiIsIklOVkFMSURfUkVDQVBUQ0hBIiwiSU5WQUxJRF9EQVRBIiwiU1RBVEVfUFJFX0ZFVENISU5HX0ZBSUwiLCJVU0VSX1VOQVVUSE9SSVpFRCIsIlVTRVJfRVhJU1RFRCIsIlRPS0VOX1JFVVNFRCIsIkJBRF9UT0tFTiIsIlRPS0VOX0VYUElSQVRJT04iLCJQRVJNSVNTSU9OX0RFTklFRCIsIkxPQ0FMRV9OT1RfU1VQUE9SVEVEIiwiQVVUSE9SSVpBVElPTl9GQUlMIiwiU0VORF9FTUFJTF9GQUlMIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7OztzRkFHRyxxQkFBV0EsaUIsRUFBb0I7QUFDOUJDLFFBQU0scUJBQVdELGlCQURhO0FBRTlCRSxVQUFRLEdBRnNCO0FBRzlCQyxTQUFPLG1CQUh1QjtBQUk5QkMsVUFBUTtBQUpzQixDLDBDQU0vQixxQkFBV0Msa0IsRUFBcUI7QUFDL0JKLFFBQU0scUJBQVdJLGtCQURjO0FBRS9CSCxVQUFRLEdBRnVCO0FBRy9CQyxTQUFPLDJCQUh3QjtBQUkvQkMsVUFBUTtBQUp1QixDLDBDQU1oQyxxQkFBV0UsYyxFQUFpQjtBQUMzQkwsUUFBTSxxQkFBV0ssY0FEVTtBQUUzQkosVUFBUSxHQUZtQjtBQUczQkMsU0FBTyw0QkFIb0I7QUFJM0JDLFVBQVE7QUFKbUIsQywwQ0FNNUIscUJBQVdHLGlCLEVBQW9CO0FBQzlCTixRQUFNLHFCQUFXTSxpQkFEYTtBQUU5QkwsVUFBUSxHQUZzQjtBQUc5QkMsU0FBTyxtQkFIdUI7QUFJOUJDLFVBQVE7QUFKc0IsQywwQ0FNL0IscUJBQVdJLFksRUFBZTtBQUN6QlAsUUFBTSxxQkFBV08sWUFEUTtBQUV6Qk4sVUFBUSxHQUZpQjtBQUd6QkMsU0FBTyxjQUhrQjtBQUl6QkMsVUFBUTtBQUppQixDLDBDQU0xQixxQkFBV0ssdUIsRUFBMEI7QUFDcENSLFFBQU0scUJBQVdRLHVCQURtQjtBQUVwQ1AsVUFBUSxHQUY0QjtBQUdwQ0MsU0FBTyxtQ0FINkI7QUFJcENDLFVBQVE7QUFKNEIsQywwQ0FNckMscUJBQVdNLGlCLEVBQW9CO0FBQzlCVCxRQUFNLHFCQUFXUyxpQkFEYTtBQUU5QlIsVUFBUSxHQUZzQjtBQUc5QkMsU0FBTyxtQkFIdUI7QUFJOUJDLFVBQ0U7QUFMNEIsQywwQ0FPL0IscUJBQVdPLFksRUFBZTtBQUN6QlYsUUFBTSxxQkFBV1UsWUFEUTtBQUV6QlQsVUFBUSxHQUZpQjtBQUd6QkMsU0FBTyxjQUhrQjtBQUl6QkMsVUFBUTtBQUppQixDLDBDQU0xQixxQkFBV1EsWSxFQUFlO0FBQ3pCWCxRQUFNLHFCQUFXVyxZQURRO0FBRXpCVixVQUFRLEdBRmlCO0FBR3pCQyxTQUFPLGNBSGtCO0FBSXpCQyxVQUFRO0FBSmlCLEMsMENBTTFCLHFCQUFXUyxTLEVBQVk7QUFDdEJaLFFBQU0scUJBQVdZLFNBREs7QUFFdEJYLFVBQVEsR0FGYztBQUd0QkMsU0FBTyxXQUhlO0FBSXRCQyxVQUFRO0FBSmMsQywwQ0FNdkIscUJBQVdVLGdCLEVBQW1CO0FBQzdCYixRQUFNLHFCQUFXYSxnQkFEWTtBQUU3QlosVUFBUSxHQUZxQjtBQUc3QkMsU0FBTyxlQUhzQjtBQUk3QkMsVUFBUTtBQUpxQixDLDBDQU05QixxQkFBV1csaUIsRUFBb0I7QUFDOUJkLFFBQU0scUJBQVdjLGlCQURhO0FBRTlCYixVQUFRLEdBRnNCO0FBRzlCQyxTQUFPLG1CQUh1QjtBQUk5QkMsVUFBUTtBQUpzQixDLDBDQU0vQixxQkFBV1ksb0IsRUFBdUI7QUFDakNmLFFBQU0scUJBQVdlLG9CQURnQjtBQUVqQ2QsVUFBUSxHQUZ5QjtBQUdqQ0MsU0FBTyxzQkFIMEI7QUFJakNDLFVBQVE7QUFKeUIsQywwQ0FNbEMscUJBQVdhLGtCLEVBQXFCO0FBQy9CaEIsUUFBTSxxQkFBV2dCLGtCQURjO0FBRS9CZixVQUFRLEdBRnVCO0FBRy9CQyxTQUFPLHNCQUh3QjtBQUkvQkMsVUFBUTtBQUp1QixDLDBDQU1oQyxxQkFBV2MsZSxFQUFrQjtBQUM1QmpCLFFBQU0scUJBQVdpQixlQURXO0FBRTVCaEIsVUFBUSxHQUZvQjtBQUc1QkMsU0FBTyxnQkFIcUI7QUFJNUJDLFVBQVE7QUFKb0IsQyIsImZpbGUiOiJjb25zdGFudHMvRXJyb3JzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
