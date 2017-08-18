'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deserializeCookie = deserializeCookie;

var _mapValues = require('lodash/mapValues');

var _mapValues2 = _interopRequireDefault(_mapValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function deserializeCookie(cookieValue) {
  try {
    var parsed = JSON.parse(cookieValue);
    return parsed;
  } catch (err) {
    return cookieValue;
  }
};

exports.default = function (cookieMap) {
  return (0, _mapValues2.default)(cookieMap, deserializeCookie);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL2Rlc2VyaWFsaXplQ29va2llTWFwLmpzIl0sIm5hbWVzIjpbImRlc2VyaWFsaXplQ29va2llIiwiY29va2llVmFsdWUiLCJwYXJzZWQiLCJKU09OIiwicGFyc2UiLCJlcnIiLCJjb29raWVNYXAiXSwibWFwcGluZ3MiOiI7Ozs7O1FBRWdCQSxpQixHQUFBQSxpQjs7QUFGaEI7Ozs7OztBQUVPLFNBQVNBLGlCQUFULENBQTJCQyxXQUEzQixFQUF3QztBQUM3QyxNQUFJO0FBQ0YsUUFBSUMsU0FBU0MsS0FBS0MsS0FBTCxDQUFXSCxXQUFYLENBQWI7QUFDQSxXQUFPQyxNQUFQO0FBQ0QsR0FIRCxDQUdFLE9BQU9HLEdBQVAsRUFBWTtBQUNaLFdBQU9KLFdBQVA7QUFDRDtBQUNGOztrQkFFYyxVQUFDSyxTQUFEO0FBQUEsU0FBZSx5QkFBVUEsU0FBVixFQUFxQk4saUJBQXJCLENBQWY7QUFBQSxDIiwiZmlsZSI6InV0aWxzL2Rlc2VyaWFsaXplQ29va2llTWFwLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
