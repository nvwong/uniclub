'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _ActionTypes = require('../constants/ActionTypes');

var _ActionTypes2 = _interopRequireDefault(_ActionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initState = [];

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments[1];

  if (!action.errors) {
    action.errors = [];
  }
  switch (action.type) {
    case _ActionTypes2.default.PUSH_ERRORS:
      {
        return [].concat(_toConsumableArray(state), _toConsumableArray(action.errors.map(function (error) {
          return _extends({
            id: Math.random()
          }, error);
        })));
      }
    case _ActionTypes2.default.REMOVE_ERROR:
      {
        return [].concat(_toConsumableArray(state.filter(function (error) {
          return error.id !== action.id;
        })));
      }
    default:
      {
        return state;
      }
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXJzL2Vycm9yUmVkdWNlci5qcyJdLCJuYW1lcyI6WyJpbml0U3RhdGUiLCJzdGF0ZSIsImFjdGlvbiIsImVycm9ycyIsInR5cGUiLCJQVVNIX0VSUk9SUyIsIm1hcCIsImVycm9yIiwiaWQiLCJNYXRoIiwicmFuZG9tIiwiUkVNT1ZFX0VSUk9SIiwiZmlsdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7OztBQUVBLElBQUlBLFlBQVksRUFBaEI7O2tCQUVlLFlBQStCO0FBQUEsTUFBOUJDLEtBQThCLHVFQUF0QkQsU0FBc0I7QUFBQSxNQUFYRSxNQUFXOztBQUM1QyxNQUFJLENBQUNBLE9BQU9DLE1BQVosRUFBb0I7QUFDbEJELFdBQU9DLE1BQVAsR0FBZ0IsRUFBaEI7QUFDRDtBQUNELFVBQVFELE9BQU9FLElBQWY7QUFDRSxTQUFLLHNCQUFZQyxXQUFqQjtBQUE4QjtBQUM1Qiw0Q0FDS0osS0FETCxzQkFFS0MsT0FBT0MsTUFBUCxDQUFjRyxHQUFkLENBQWtCLFVBQUNDLEtBQUQ7QUFBQTtBQUNuQkMsZ0JBQUlDLEtBQUtDLE1BQUw7QUFEZSxhQUVoQkgsS0FGZ0I7QUFBQSxTQUFsQixDQUZMO0FBT0Q7QUFDRCxTQUFLLHNCQUFZSSxZQUFqQjtBQUErQjtBQUM3Qiw0Q0FDS1YsTUFBTVcsTUFBTixDQUFhO0FBQUEsaUJBQVNMLE1BQU1DLEVBQU4sS0FBYU4sT0FBT00sRUFBN0I7QUFBQSxTQUFiLENBREw7QUFHRDtBQUNEO0FBQVM7QUFDUCxlQUFPUCxLQUFQO0FBQ0Q7QUFqQkg7QUFtQkQsQyIsImZpbGUiOiJyZWR1Y2Vycy9lcnJvclJlZHVjZXIuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
