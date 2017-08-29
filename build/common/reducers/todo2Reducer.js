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
    case _ActionTypes2.default.SET_TODO2:
      {
        return [].concat(_toConsumableArray(action.todo2));
      }
    case _ActionTypes2.default.ADD_TODO2:
      {
        return [action.todo2].concat(_toConsumableArray(state));
      }
    case _ActionTypes2.default.REMOVE_TODO2:
      {
        return [].concat(_toConsumableArray(state.filter(function (todo2) {
          return todo2._id !== action.id;
        })));
      }
    default:
      {
        return state;
      }
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXJzL3RvZG8yUmVkdWNlci5qcyJdLCJuYW1lcyI6WyJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJTRVRfVE9ETzIiLCJ0b2RvMiIsIkFERF9UT0RPMiIsIlJFTU9WRV9UT0RPMiIsImZpbHRlciIsIl9pZCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7Ozs7a0JBRWUsWUFBd0I7QUFBQSxNQUF2QkEsS0FBdUIsdUVBQWYsRUFBZTtBQUFBLE1BQVhDLE1BQVc7O0FBQ3JDLFVBQVFBLE9BQU9DLElBQWY7QUFDRSxTQUFLLHNCQUFZQyxTQUFqQjtBQUE0QjtBQUMxQiw0Q0FDS0YsT0FBT0csS0FEWjtBQUdEO0FBQ0QsU0FBSyxzQkFBWUMsU0FBakI7QUFBNEI7QUFDMUIsZ0JBQ0VKLE9BQU9HLEtBRFQsNEJBRUtKLEtBRkw7QUFJRDtBQUNELFNBQUssc0JBQVlNLFlBQWpCO0FBQStCO0FBQzdCLDRDQUNLTixNQUFNTyxNQUFOLENBQWE7QUFBQSxpQkFBU0gsTUFBTUksR0FBTixLQUFjUCxPQUFPUSxFQUE5QjtBQUFBLFNBQWIsQ0FETDtBQUdEO0FBQ0Q7QUFBUztBQUNQLGVBQU9ULEtBQVA7QUFDRDtBQW5CSDtBQXFCRCxDIiwiZmlsZSI6InJlZHVjZXJzL3RvZG8yUmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
