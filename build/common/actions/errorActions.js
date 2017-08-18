'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeError = exports.pushErrors = exports.pushError = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _Errors = require('../constants/Errors');

var _Errors2 = _interopRequireDefault(_Errors);

var _ActionTypes = require('../constants/ActionTypes');

var _ActionTypes2 = _interopRequireDefault(_ActionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pushError = exports.pushError = function pushError(error, meta) {
  return {
    type: _ActionTypes2.default.PUSH_ERRORS,
    errors: [_extends({}, error, {
      meta: meta
    })]
  };
};

var pushErrors = exports.pushErrors = function pushErrors(errors) {
  if (errors && errors.length === undefined) {
    return pushError(_Errors2.default.UNKNOWN_EXCEPTION, errors);
  }
  return {
    type: _ActionTypes2.default.PUSH_ERRORS,
    errors: errors
  };
};

var removeError = exports.removeError = function removeError(id) {
  return {
    type: _ActionTypes2.default.REMOVE_ERROR,
    id: id
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbnMvZXJyb3JBY3Rpb25zLmpzIl0sIm5hbWVzIjpbInB1c2hFcnJvciIsImVycm9yIiwibWV0YSIsInR5cGUiLCJQVVNIX0VSUk9SUyIsImVycm9ycyIsInB1c2hFcnJvcnMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJVTktOT1dOX0VYQ0VQVElPTiIsInJlbW92ZUVycm9yIiwiaWQiLCJSRU1PVkVfRVJST1IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVPLElBQU1BLGdDQUFZLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRCxFQUFRQyxJQUFSLEVBQWlCO0FBQ3hDLFNBQU87QUFDTEMsVUFBTSxzQkFBWUMsV0FEYjtBQUVMQyxZQUFRLGNBQ0hKLEtBREc7QUFFTkM7QUFGTTtBQUZILEdBQVA7QUFPRCxDQVJNOztBQVVBLElBQU1JLGtDQUFhLFNBQWJBLFVBQWEsQ0FBQ0QsTUFBRCxFQUFZO0FBQ3BDLE1BQUlBLFVBQVVBLE9BQU9FLE1BQVAsS0FBa0JDLFNBQWhDLEVBQTJDO0FBQ3pDLFdBQU9SLFVBQVUsaUJBQU9TLGlCQUFqQixFQUFvQ0osTUFBcEMsQ0FBUDtBQUNEO0FBQ0QsU0FBTztBQUNMRixVQUFNLHNCQUFZQyxXQURiO0FBRUxDO0FBRkssR0FBUDtBQUlELENBUk07O0FBVUEsSUFBTUssb0NBQWMsU0FBZEEsV0FBYyxDQUFDQyxFQUFELEVBQVE7QUFDakMsU0FBTztBQUNMUixVQUFNLHNCQUFZUyxZQURiO0FBRUxEO0FBRkssR0FBUDtBQUlELENBTE0iLCJmaWxlIjoiYWN0aW9ucy9lcnJvckFjdGlvbnMuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
