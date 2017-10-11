'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _ActionTypes = require('../constants/ActionTypes');

var _ActionTypes2 = _interopRequireDefault(_ActionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  value: '',
  suggestions: [],
  isLoading: false
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _ActionTypes2.default.UPDATE_INPUT_VALUE:
      return _extends({}, state, {
        value: action.value
      });

    case _ActionTypes2.default.CLEAR_SUGGESTIONS:
      return _extends({}, state, {
        suggestions: []
      });

    case _ActionTypes2.default.LOAD_SUGGESTIONS_BEGIN:
      return _extends({}, state, {
        isLoading: true
      });

    case _ActionTypes2.default.MAYBE_UPDATE_SUGGESTIONS:
      // Ignore suggestions if input value changed
      if (action.value !== state.value) {
        return _extends({}, state, {
          isLoading: false
        });
      }

      return _extends({}, state, {
        suggestions: action.suggestions,
        isLoading: false
      });

    default:
      return state;
  }
};

// export default (state = {}, action) => {
//   switch (action.type) {
//     case ActionTypes.SET_SEARCH: {
//       console.log(action);
//       return [
//         ...action.res,
//       ];
//     }
//     case ActionTypes.SET_VALUE: {
//       console.log(action);
//       return [
//         action.res,
//         ...state,
//       ];
//     }
//     case ActionTypes.REMOVE_SEARCH: {
//       return [
//         ...state.filter(search => search._id !== action.id),
//       ];
//     }
//     default: {
//       return state;
//     }
//   }
// };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXJzL3NlYXJjaFJlZHVjZXIuanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwidmFsdWUiLCJzdWdnZXN0aW9ucyIsImlzTG9hZGluZyIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIlVQREFURV9JTlBVVF9WQUxVRSIsIkNMRUFSX1NVR0dFU1RJT05TIiwiTE9BRF9TVUdHRVNUSU9OU19CRUdJTiIsIk1BWUJFX1VQREFURV9TVUdHRVNUSU9OUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7O0FBRUEsSUFBTUEsZUFBZTtBQUNuQkMsU0FBTyxFQURZO0FBRW5CQyxlQUFhLEVBRk07QUFHbkJDLGFBQVc7QUFIUSxDQUFyQjs7a0JBTWUsWUFBa0M7QUFBQSxNQUFqQ0MsS0FBaUMsdUVBQXpCSixZQUF5QjtBQUFBLE1BQVhLLE1BQVc7O0FBQy9DLFVBQVFBLE9BQU9DLElBQWY7QUFDRSxTQUFLLHNCQUFZQyxrQkFBakI7QUFDRSwwQkFDS0gsS0FETDtBQUVFSCxlQUFPSSxPQUFPSjtBQUZoQjs7QUFLRixTQUFLLHNCQUFZTyxpQkFBakI7QUFDRSwwQkFDS0osS0FETDtBQUVFRixxQkFBYTtBQUZmOztBQUtGLFNBQUssc0JBQVlPLHNCQUFqQjtBQUNFLDBCQUNLTCxLQURMO0FBRUVELG1CQUFXO0FBRmI7O0FBS0YsU0FBSyxzQkFBWU8sd0JBQWpCO0FBQ0U7QUFDQSxVQUFJTCxPQUFPSixLQUFQLEtBQWlCRyxNQUFNSCxLQUEzQixFQUFrQztBQUNoQyw0QkFDS0csS0FETDtBQUVFRCxxQkFBVztBQUZiO0FBSUQ7O0FBRUQsMEJBQ0tDLEtBREw7QUFFRUYscUJBQWFHLE9BQU9ILFdBRnRCO0FBR0VDLG1CQUFXO0FBSGI7O0FBTUY7QUFDRSxhQUFPQyxLQUFQO0FBbkNKO0FBcUNELEM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoicmVkdWNlcnMvc2VhcmNoUmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
