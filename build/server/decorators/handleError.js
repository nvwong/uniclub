'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handlePassportError = exports.handleJwtError = exports.handleDbError = undefined;

var _ErrorTypes = require('../constants/ErrorTypes');

var _ErrorTypes2 = _interopRequireDefault(_ErrorTypes);

var _Errors = require('../../common/constants/Errors');

var _Errors2 = _interopRequireDefault(_Errors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getErrorHandler = function getErrorHandler(errorTypes) {
  return function (res) {
    return function (fn) {
      return function (err) {
        for (var _len = arguments.length, result = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          result[_key - 1] = arguments[_key];
        }

        if (err) {
          if (!Array.isArray(errorTypes)) {
            errorTypes = [errorTypes];
          }
          errorTypes.forEach(function (errorType) {
            switch (errorType) {
              case _ErrorTypes2.default.ODM_OPERATION:
                {
                  if (err.name === 'ValidationError') {
                    res.pushError(_Errors2.default.ODM_VALIDATION, err);
                    return res.errors();
                  }
                  if (err.name === 'MongooseError') {
                    res.pushError(_Errors2.default.ODM_OPERATION_FAIL, err);
                    return res.errors();
                  }
                  break;
                }
              case _ErrorTypes2.default.JSON_WEB_TOKEN:
                {
                  // ref:
                  //   - <https://github.com/auth0/node-jsonwebtoken#errors--codes>
                  if (err.name === 'JsonWebTokenError') {
                    res.pushError(_Errors2.default.BAD_TOKEN, err);
                    return res.errors();
                  } else if (err.name === 'TokenExpiredError') {
                    res.pushError(_Errors2.default.TOKEN_EXPIRATION, err);
                    return res.errors();
                  }
                  break;
                }
              case _ErrorTypes2.default.PASSPORT:
                {
                  if (err.message === 'No auth token') {
                    res.pushError(_Errors2.default.USER_UNAUTHORIZED, err);
                    return res.errors();
                  }
                  break;
                }
              default:
                {
                  res.pushError(_Errors2.default.UNKNOWN_EXCEPTION, err);
                  return res.errors();
                }
            }
          });
        } else {
          fn.apply(undefined, result);
        }
      };
    };
  };
};

var handleError = getErrorHandler(null);
var handleDbError = getErrorHandler(_ErrorTypes2.default.ODM_OPERATION);
var handleJwtError = getErrorHandler(_ErrorTypes2.default.JSON_WEB_TOKEN);
var handlePassportError = getErrorHandler([_ErrorTypes2.default.JSON_WEB_TOKEN, _ErrorTypes2.default.PASSPORT]);

exports.handleDbError = handleDbError;
exports.handleJwtError = handleJwtError;
exports.handlePassportError = handlePassportError;
exports.default = handleError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlY29yYXRvcnMvaGFuZGxlRXJyb3IuanMiXSwibmFtZXMiOlsiZ2V0RXJyb3JIYW5kbGVyIiwiZXJyb3JUeXBlcyIsInJlcyIsImZuIiwiZXJyIiwicmVzdWx0IiwiQXJyYXkiLCJpc0FycmF5IiwiZm9yRWFjaCIsImVycm9yVHlwZSIsIk9ETV9PUEVSQVRJT04iLCJuYW1lIiwicHVzaEVycm9yIiwiT0RNX1ZBTElEQVRJT04iLCJlcnJvcnMiLCJPRE1fT1BFUkFUSU9OX0ZBSUwiLCJKU09OX1dFQl9UT0tFTiIsIkJBRF9UT0tFTiIsIlRPS0VOX0VYUElSQVRJT04iLCJQQVNTUE9SVCIsIm1lc3NhZ2UiLCJVU0VSX1VOQVVUSE9SSVpFRCIsIlVOS05PV05fRVhDRVBUSU9OIiwiaGFuZGxlRXJyb3IiLCJoYW5kbGVEYkVycm9yIiwiaGFuZGxlSnd0RXJyb3IiLCJoYW5kbGVQYXNzcG9ydEVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBSUEsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDQyxVQUFEO0FBQUEsU0FBZ0IsVUFBQ0MsR0FBRDtBQUFBLFdBQVMsVUFBQ0MsRUFBRDtBQUFBLGFBQVEsVUFBQ0MsR0FBRCxFQUFvQjtBQUFBLDBDQUFYQyxNQUFXO0FBQVhBLGdCQUFXO0FBQUE7O0FBQ3pFLFlBQUlELEdBQUosRUFBUztBQUNQLGNBQUksQ0FBQ0UsTUFBTUMsT0FBTixDQUFjTixVQUFkLENBQUwsRUFBZ0M7QUFDOUJBLHlCQUFhLENBQUNBLFVBQUQsQ0FBYjtBQUNEO0FBQ0RBLHFCQUFXTyxPQUFYLENBQW1CLFVBQUNDLFNBQUQsRUFBZTtBQUNoQyxvQkFBUUEsU0FBUjtBQUNFLG1CQUFLLHFCQUFXQyxhQUFoQjtBQUErQjtBQUM3QixzQkFBSU4sSUFBSU8sSUFBSixLQUFhLGlCQUFqQixFQUFvQztBQUNsQ1Qsd0JBQUlVLFNBQUosQ0FBYyxpQkFBT0MsY0FBckIsRUFBcUNULEdBQXJDO0FBQ0EsMkJBQU9GLElBQUlZLE1BQUosRUFBUDtBQUNEO0FBQ0Qsc0JBQUlWLElBQUlPLElBQUosS0FBYSxlQUFqQixFQUFrQztBQUNoQ1Qsd0JBQUlVLFNBQUosQ0FBYyxpQkFBT0csa0JBQXJCLEVBQXlDWCxHQUF6QztBQUNBLDJCQUFPRixJQUFJWSxNQUFKLEVBQVA7QUFDRDtBQUNEO0FBQ0Q7QUFDRCxtQkFBSyxxQkFBV0UsY0FBaEI7QUFBZ0M7QUFDOUI7QUFDQTtBQUNBLHNCQUFJWixJQUFJTyxJQUFKLEtBQWEsbUJBQWpCLEVBQXNDO0FBQ3BDVCx3QkFBSVUsU0FBSixDQUFjLGlCQUFPSyxTQUFyQixFQUFnQ2IsR0FBaEM7QUFDQSwyQkFBT0YsSUFBSVksTUFBSixFQUFQO0FBQ0QsbUJBSEQsTUFHTyxJQUFJVixJQUFJTyxJQUFKLEtBQWEsbUJBQWpCLEVBQXNDO0FBQzNDVCx3QkFBSVUsU0FBSixDQUFjLGlCQUFPTSxnQkFBckIsRUFBdUNkLEdBQXZDO0FBQ0EsMkJBQU9GLElBQUlZLE1BQUosRUFBUDtBQUNEO0FBQ0Q7QUFDRDtBQUNELG1CQUFLLHFCQUFXSyxRQUFoQjtBQUEwQjtBQUN4QixzQkFBSWYsSUFBSWdCLE9BQUosS0FBZ0IsZUFBcEIsRUFBcUM7QUFDbkNsQix3QkFBSVUsU0FBSixDQUFjLGlCQUFPUyxpQkFBckIsRUFBd0NqQixHQUF4QztBQUNBLDJCQUFPRixJQUFJWSxNQUFKLEVBQVA7QUFDRDtBQUNEO0FBQ0Q7QUFDRDtBQUFTO0FBQ1BaLHNCQUFJVSxTQUFKLENBQWMsaUJBQU9VLGlCQUFyQixFQUF3Q2xCLEdBQXhDO0FBQ0EseUJBQU9GLElBQUlZLE1BQUosRUFBUDtBQUNEO0FBbENIO0FBb0NELFdBckNEO0FBc0NELFNBMUNELE1BMENPO0FBQ0xYLDhCQUFNRSxNQUFOO0FBQ0Q7QUFDRixPQTlDOEM7QUFBQSxLQUFUO0FBQUEsR0FBaEI7QUFBQSxDQUF0Qjs7QUFnREEsSUFBSWtCLGNBQWN2QixnQkFBZ0IsSUFBaEIsQ0FBbEI7QUFDQSxJQUFJd0IsZ0JBQWdCeEIsZ0JBQWdCLHFCQUFXVSxhQUEzQixDQUFwQjtBQUNBLElBQUllLGlCQUFpQnpCLGdCQUFnQixxQkFBV2dCLGNBQTNCLENBQXJCO0FBQ0EsSUFBSVUsc0JBQXNCMUIsZ0JBQWdCLENBQ3hDLHFCQUFXZ0IsY0FENkIsRUFFeEMscUJBQVdHLFFBRjZCLENBQWhCLENBQTFCOztRQU1FSyxhLEdBQUFBLGE7UUFDQUMsYyxHQUFBQSxjO1FBQ0FDLG1CLEdBQUFBLG1CO2tCQUVhSCxXIiwiZmlsZSI6ImRlY29yYXRvcnMvaGFuZGxlRXJyb3IuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
