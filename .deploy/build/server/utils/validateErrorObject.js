'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isString = require('lodash/isString');

var _isString2 = _interopRequireDefault(_isString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @returns {boolean} isPassed
 */
var validateErrorObject = function validateErrorObject(nestedErrors) {
  if ((0, _isString2.default)(nestedErrors)) {
    return false;
  } else {
    var keys = Object.keys(nestedErrors);
    if (keys.length === 0) {
      return true;
    } else {
      var isPass = keys.every(function (key) {
        var nestedError = nestedErrors[key];
        var isPass = validateErrorObject(nestedError);
        return isPass;
      });
      return isPass;
    }
  }
};

exports.default = validateErrorObject;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL3ZhbGlkYXRlRXJyb3JPYmplY3QuanMiXSwibmFtZXMiOlsidmFsaWRhdGVFcnJvck9iamVjdCIsIm5lc3RlZEVycm9ycyIsImtleXMiLCJPYmplY3QiLCJsZW5ndGgiLCJpc1Bhc3MiLCJldmVyeSIsImtleSIsIm5lc3RlZEVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O0FBRUE7OztBQUdBLElBQUlBLHNCQUFzQixTQUF0QkEsbUJBQXNCLENBQUNDLFlBQUQsRUFBa0I7QUFDMUMsTUFBSSx3QkFBU0EsWUFBVCxDQUFKLEVBQTRCO0FBQzFCLFdBQU8sS0FBUDtBQUNELEdBRkQsTUFFTztBQUNMLFFBQUlDLE9BQU9DLE9BQU9ELElBQVAsQ0FBWUQsWUFBWixDQUFYO0FBQ0EsUUFBSUMsS0FBS0UsTUFBTCxLQUFnQixDQUFwQixFQUF1QjtBQUNyQixhQUFPLElBQVA7QUFDRCxLQUZELE1BRU87QUFDTCxVQUFJQyxTQUFTSCxLQUFLSSxLQUFMLENBQVcsVUFBQ0MsR0FBRCxFQUFTO0FBQy9CLFlBQUlDLGNBQWNQLGFBQWFNLEdBQWIsQ0FBbEI7QUFDQSxZQUFJRixTQUFTTCxvQkFBb0JRLFdBQXBCLENBQWI7QUFDQSxlQUFPSCxNQUFQO0FBQ0QsT0FKWSxDQUFiO0FBS0EsYUFBT0EsTUFBUDtBQUNEO0FBQ0Y7QUFDRixDQWhCRDs7a0JBa0JlTCxtQiIsImZpbGUiOiJ1dGlscy92YWxpZGF0ZUVycm9yT2JqZWN0LmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
