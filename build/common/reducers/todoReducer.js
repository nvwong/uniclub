'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ActionTypes = require('../constants/ActionTypes');

var _ActionTypes2 = _interopRequireDefault(_ActionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _ActionTypes2.default.SET_TODO:
      {
        return [].concat(_toConsumableArray(action.todos));
      }
    case _ActionTypes2.default.ADD_TODO:
      {
        return [action.todo].concat(_toConsumableArray(state));
      }
    case _ActionTypes2.default.REMOVE_TODO:
      {
        return [].concat(_toConsumableArray(state.filter(function (todo) {
          return todo._id !== action.id;
        })));
      }
    default:
      {
        return state;
      }
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXJzL3RvZG9SZWR1Y2VyLmpzIl0sIm5hbWVzIjpbInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIlNFVF9UT0RPIiwidG9kb3MiLCJBRERfVE9ETyIsInRvZG8iLCJSRU1PVkVfVE9ETyIsImZpbHRlciIsIl9pZCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7Ozs7a0JBRWUsWUFBd0I7QUFBQSxNQUF2QkEsS0FBdUIsdUVBQWYsRUFBZTtBQUFBLE1BQVhDLE1BQVc7O0FBQ3JDLFVBQVFBLE9BQU9DLElBQWY7QUFDRSxTQUFLLHNCQUFZQyxRQUFqQjtBQUEyQjtBQUN6Qiw0Q0FDS0YsT0FBT0csS0FEWjtBQUdEO0FBQ0QsU0FBSyxzQkFBWUMsUUFBakI7QUFBMkI7QUFDekIsZ0JBQ0VKLE9BQU9LLElBRFQsNEJBRUtOLEtBRkw7QUFJRDtBQUNELFNBQUssc0JBQVlPLFdBQWpCO0FBQThCO0FBQzVCLDRDQUNLUCxNQUFNUSxNQUFOLENBQWE7QUFBQSxpQkFBUUYsS0FBS0csR0FBTCxLQUFhUixPQUFPUyxFQUE1QjtBQUFBLFNBQWIsQ0FETDtBQUdEO0FBQ0Q7QUFBUztBQUNQLGVBQU9WLEtBQVA7QUFDRDtBQW5CSDtBQXFCRCxDIiwiZmlsZSI6InJlZHVjZXJzL3RvZG9SZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
