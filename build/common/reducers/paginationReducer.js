'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _union = require('lodash/union');

var _union2 = _interopRequireDefault(_union);

var _redux = require('redux');

var _Resources = require('../constants/Resources');

var _Resources2 = _interopRequireDefault(_Resources);

var _ActionTypes = require('../constants/ActionTypes');

var _ActionTypes2 = _interopRequireDefault(_ActionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// action = {
//   type: ActionTypes.SET_PAGES,
//   resource: Resources.TODO,
//   page: {
//     current: 2,
//   },
//   ids: ['id1', 'id2', ...],
// }

// state.pagination = {
//   todos: {
//     page: {
//       skip: 0,
//       limit: 0,
//       first: 0,
//       current: 1,
//       last: 0,
//       total: 0,
//     },
//     pages: {
//       1: {
//         ids: [ 'todo1', 'todo2' ],
//         isFetching: false
//       },
//       2: {
//         ids: [ 'todo3', 'todo4' ],
//         isFetching: false
//       },
//       3: {
//         ids: [],
//         isFetching: true
//       },
//       ...  // and so on
//     }
//   },
// },

var resourcePageReducer = function resourcePageReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    skip: 0,
    limit: 20,
    first: 1,
    current: 1,
    last: 1,
    total: 1
  };
  var action = arguments[1];

  switch (action.type) {
    case _ActionTypes2.default.SET_PAGES:
      {
        return _extends({}, state, action.page);
      }
    case _ActionTypes2.default.SET_CURRENT_PAGE:
      {
        return _extends({}, state, {
          current: action.currentPage
        });
      }
    default:
      {
        return state;
      }
  }
};

var resourceSinglePageReducer = function resourceSinglePageReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    ids: []
  };
  var action = arguments[1];

  switch (action.type) {
    case _ActionTypes2.default.SET_PAGES:
    case _ActionTypes2.default.APPEND_ENTITIES_INTO_PAGE:
      {
        return _extends({}, state, {
          ids: (0, _union2.default)(state.ids, action.ids)
        });
      }
    case _ActionTypes2.default.PREPEND_ENTITIES_INTO_PAGE:
      {
        return _extends({}, state, {
          ids: (0, _union2.default)(action.ids, state.ids)
        });
      }
    case _ActionTypes2.default.REMOVE_ENTITIES_FROM_PAGE:
      {
        return _extends({}, state, {
          ids: [].concat(_toConsumableArray(state.ids.filter(function (id) {
            return action.ids.indexOf(id) === -1;
          })))
        });
      }
    default:
      {
        return state;
      }
  }
};

var resourcePagesReducer = function resourcePagesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case _ActionTypes2.default.SET_PAGES:
      {
        var currPage = action.page.current;

        return _extends({}, state, _defineProperty({}, currPage, resourceSinglePageReducer(state[currPage], action)));
      }
    case _ActionTypes2.default.PREPEND_ENTITIES_INTO_PAGE:
    case _ActionTypes2.default.APPEND_ENTITIES_INTO_PAGE:
      {
        var intoPage = action.intoPage;


        return _extends({}, state, _defineProperty({}, intoPage, resourceSinglePageReducer(state[intoPage], action)));
      }
    case _ActionTypes2.default.REMOVE_ENTITIES_FROM_PAGE:
      {
        var newPages = {};
        for (var pageId in state) {
          newPages[pageId] = resourceSinglePageReducer(state[pageId], action);
        }
        return _extends({}, newPages);
      }
    default:
      {
        return state;
      }
  }
};

var resourcePaginationReducer = (0, _redux.combineReducers)({
  page: resourcePageReducer,
  pages: resourcePagesReducer
});

var paginate = function paginate(resource) {
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    if (action.resource === resource) {
      return resourcePaginationReducer(state, action);
    } else {
      return resourcePaginationReducer(state, { type: null });
    }
  };
};

var paginationReducer = (0, _redux.combineReducers)({
  todos: paginate(_Resources2.default.TODO),
  users: paginate(_Resources2.default.USER)
});

exports.default = paginationReducer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXJzL3BhZ2luYXRpb25SZWR1Y2VyLmpzIl0sIm5hbWVzIjpbInJlc291cmNlUGFnZVJlZHVjZXIiLCJzdGF0ZSIsInNraXAiLCJsaW1pdCIsImZpcnN0IiwiY3VycmVudCIsImxhc3QiLCJ0b3RhbCIsImFjdGlvbiIsInR5cGUiLCJTRVRfUEFHRVMiLCJwYWdlIiwiU0VUX0NVUlJFTlRfUEFHRSIsImN1cnJlbnRQYWdlIiwicmVzb3VyY2VTaW5nbGVQYWdlUmVkdWNlciIsImlkcyIsIkFQUEVORF9FTlRJVElFU19JTlRPX1BBR0UiLCJQUkVQRU5EX0VOVElUSUVTX0lOVE9fUEFHRSIsIlJFTU9WRV9FTlRJVElFU19GUk9NX1BBR0UiLCJmaWx0ZXIiLCJpZCIsImluZGV4T2YiLCJyZXNvdXJjZVBhZ2VzUmVkdWNlciIsImN1cnJQYWdlIiwiaW50b1BhZ2UiLCJuZXdQYWdlcyIsInBhZ2VJZCIsInJlc291cmNlUGFnaW5hdGlvblJlZHVjZXIiLCJwYWdlcyIsInBhZ2luYXRlIiwicmVzb3VyY2UiLCJwYWdpbmF0aW9uUmVkdWNlciIsInRvZG9zIiwiVE9ETyIsInVzZXJzIiwiVVNFUiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJQSxzQkFBc0IsU0FBdEJBLG1CQUFzQixHQU9aO0FBQUEsTUFQYUMsS0FPYix1RUFQcUI7QUFDakNDLFVBQU0sQ0FEMkI7QUFFakNDLFdBQU8sRUFGMEI7QUFHakNDLFdBQU8sQ0FIMEI7QUFJakNDLGFBQVMsQ0FKd0I7QUFLakNDLFVBQU0sQ0FMMkI7QUFNakNDLFdBQU87QUFOMEIsR0FPckI7QUFBQSxNQUFYQyxNQUFXOztBQUNaLFVBQVFBLE9BQU9DLElBQWY7QUFDRSxTQUFLLHNCQUFZQyxTQUFqQjtBQUE0QjtBQUMxQiw0QkFDS1QsS0FETCxFQUVLTyxPQUFPRyxJQUZaO0FBSUQ7QUFDRCxTQUFLLHNCQUFZQyxnQkFBakI7QUFBbUM7QUFDakMsNEJBQ0tYLEtBREw7QUFFRUksbUJBQVNHLE9BQU9LO0FBRmxCO0FBSUQ7QUFDRDtBQUFTO0FBQ1AsZUFBT1osS0FBUDtBQUNEO0FBZkg7QUFpQkQsQ0F6QkQ7O0FBMkJBLElBQUlhLDRCQUE0QixTQUE1QkEseUJBQTRCLEdBRWxCO0FBQUEsTUFGbUJiLEtBRW5CLHVFQUYyQjtBQUN2Q2MsU0FBSztBQURrQyxHQUUzQjtBQUFBLE1BQVhQLE1BQVc7O0FBQ1osVUFBUUEsT0FBT0MsSUFBZjtBQUNFLFNBQUssc0JBQVlDLFNBQWpCO0FBQ0EsU0FBSyxzQkFBWU0seUJBQWpCO0FBQTRDO0FBQzFDLDRCQUNLZixLQURMO0FBRUVjLGVBQUsscUJBQU1kLE1BQU1jLEdBQVosRUFBaUJQLE9BQU9PLEdBQXhCO0FBRlA7QUFJRDtBQUNELFNBQUssc0JBQVlFLDBCQUFqQjtBQUE2QztBQUMzQyw0QkFDS2hCLEtBREw7QUFFRWMsZUFBSyxxQkFBTVAsT0FBT08sR0FBYixFQUFrQmQsTUFBTWMsR0FBeEI7QUFGUDtBQUlEO0FBQ0QsU0FBSyxzQkFBWUcseUJBQWpCO0FBQTRDO0FBQzFDLDRCQUNLakIsS0FETDtBQUVFYyw0Q0FDS2QsTUFBTWMsR0FBTixDQUNBSSxNQURBLENBQ08sVUFBQ0MsRUFBRDtBQUFBLG1CQUFRWixPQUFPTyxHQUFQLENBQVdNLE9BQVgsQ0FBbUJELEVBQW5CLE1BQTJCLENBQUMsQ0FBcEM7QUFBQSxXQURQLENBREw7QUFGRjtBQU9EO0FBQ0Q7QUFBUztBQUNQLGVBQU9uQixLQUFQO0FBQ0Q7QUF6Qkg7QUEyQkQsQ0E5QkQ7O0FBZ0NBLElBQUlxQix1QkFBdUIsU0FBdkJBLG9CQUF1QixHQUF3QjtBQUFBLE1BQXZCckIsS0FBdUIsdUVBQWYsRUFBZTtBQUFBLE1BQVhPLE1BQVc7O0FBQ2pELFVBQVFBLE9BQU9DLElBQWY7QUFDRSxTQUFLLHNCQUFZQyxTQUFqQjtBQUE0QjtBQUMxQixZQUFJYSxXQUFXZixPQUFPRyxJQUFQLENBQVlOLE9BQTNCOztBQUVBLDRCQUNLSixLQURMLHNCQUVHc0IsUUFGSCxFQUVjVCwwQkFBMEJiLE1BQU1zQixRQUFOLENBQTFCLEVBQTJDZixNQUEzQyxDQUZkO0FBSUQ7QUFDRCxTQUFLLHNCQUFZUywwQkFBakI7QUFDQSxTQUFLLHNCQUFZRCx5QkFBakI7QUFBNEM7QUFBQSxZQUNwQ1EsUUFEb0MsR0FDdkJoQixNQUR1QixDQUNwQ2dCLFFBRG9DOzs7QUFHMUMsNEJBQ0t2QixLQURMLHNCQUVHdUIsUUFGSCxFQUVjViwwQkFBMEJiLE1BQU11QixRQUFOLENBQTFCLEVBQTJDaEIsTUFBM0MsQ0FGZDtBQUlEO0FBQ0QsU0FBSyxzQkFBWVUseUJBQWpCO0FBQTRDO0FBQzFDLFlBQUlPLFdBQVcsRUFBZjtBQUNBLGFBQUssSUFBSUMsTUFBVCxJQUFtQnpCLEtBQW5CLEVBQTBCO0FBQ3hCd0IsbUJBQVNDLE1BQVQsSUFBbUJaLDBCQUEwQmIsTUFBTXlCLE1BQU4sQ0FBMUIsRUFBeUNsQixNQUF6QyxDQUFuQjtBQUNEO0FBQ0QsNEJBQ0tpQixRQURMO0FBR0Q7QUFDRDtBQUFTO0FBQ1AsZUFBT3hCLEtBQVA7QUFDRDtBQTdCSDtBQStCRCxDQWhDRDs7QUFrQ0EsSUFBSTBCLDRCQUE0Qiw0QkFBZ0I7QUFDOUNoQixRQUFNWCxtQkFEd0M7QUFFOUM0QixTQUFPTjtBQUZ1QyxDQUFoQixDQUFoQzs7QUFLQSxJQUFJTyxXQUFXLFNBQVhBLFFBQVcsQ0FBQ0MsUUFBRDtBQUFBLFNBQWMsWUFBd0I7QUFBQSxRQUF2QjdCLEtBQXVCLHVFQUFmLEVBQWU7QUFBQSxRQUFYTyxNQUFXOztBQUNuRCxRQUFJQSxPQUFPc0IsUUFBUCxLQUFvQkEsUUFBeEIsRUFBa0M7QUFDaEMsYUFBT0gsMEJBQTBCMUIsS0FBMUIsRUFBaUNPLE1BQWpDLENBQVA7QUFDRCxLQUZELE1BRU87QUFDTCxhQUFPbUIsMEJBQTBCMUIsS0FBMUIsRUFBaUMsRUFBRVEsTUFBTSxJQUFSLEVBQWpDLENBQVA7QUFDRDtBQUNGLEdBTmM7QUFBQSxDQUFmOztBQVFBLElBQUlzQixvQkFBb0IsNEJBQWdCO0FBQ3RDQyxTQUFPSCxTQUFTLG9CQUFVSSxJQUFuQixDQUQrQjtBQUV0Q0MsU0FBT0wsU0FBUyxvQkFBVU0sSUFBbkI7QUFGK0IsQ0FBaEIsQ0FBeEI7O2tCQUtlSixpQiIsImZpbGUiOiJyZWR1Y2Vycy9wYWdpbmF0aW9uUmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
