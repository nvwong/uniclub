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
  todo2: paginate(_Resources2.default.TODO2),
  users: paginate(_Resources2.default.USER),
  events: paginate(_Resources2.default.EVENTS),
  search: paginate(_Resources2.default.SEARCH)
});

exports.default = paginationReducer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXJzL3BhZ2luYXRpb25SZWR1Y2VyLmpzIl0sIm5hbWVzIjpbInJlc291cmNlUGFnZVJlZHVjZXIiLCJzdGF0ZSIsInNraXAiLCJsaW1pdCIsImZpcnN0IiwiY3VycmVudCIsImxhc3QiLCJ0b3RhbCIsImFjdGlvbiIsInR5cGUiLCJTRVRfUEFHRVMiLCJwYWdlIiwiU0VUX0NVUlJFTlRfUEFHRSIsImN1cnJlbnRQYWdlIiwicmVzb3VyY2VTaW5nbGVQYWdlUmVkdWNlciIsImlkcyIsIkFQUEVORF9FTlRJVElFU19JTlRPX1BBR0UiLCJQUkVQRU5EX0VOVElUSUVTX0lOVE9fUEFHRSIsIlJFTU9WRV9FTlRJVElFU19GUk9NX1BBR0UiLCJmaWx0ZXIiLCJpZCIsImluZGV4T2YiLCJyZXNvdXJjZVBhZ2VzUmVkdWNlciIsImN1cnJQYWdlIiwiaW50b1BhZ2UiLCJuZXdQYWdlcyIsInBhZ2VJZCIsInJlc291cmNlUGFnaW5hdGlvblJlZHVjZXIiLCJwYWdlcyIsInBhZ2luYXRlIiwicmVzb3VyY2UiLCJwYWdpbmF0aW9uUmVkdWNlciIsInRvZG9zIiwiVE9ETyIsInRvZG8yIiwiVE9ETzIiLCJ1c2VycyIsIlVTRVIiLCJldmVudHMiLCJFVkVOVFMiLCJzZWFyY2giLCJTRUFSQ0giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSUEsc0JBQXNCLFNBQXRCQSxtQkFBc0IsR0FPWjtBQUFBLE1BUGFDLEtBT2IsdUVBUHFCO0FBQ2pDQyxVQUFNLENBRDJCO0FBRWpDQyxX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WE8sTUFBVzs7QUFDbkQsUUFBSUEsT0FBT3NCLFFBQVAsS0FBb0JBLFFBQXhCLEVBQWtDO0FBQ2hDLGFBQU9ILDBCQUEwQjFCLEtBQTFCLEVBQWlDTyxNQUFqQyxDQUFQO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsYUFBT21CLDBCQUEwQjFCLEtBQTFCLEVBQWlDLEVBQUVRLE1BQU0sSUFBUixFQUFqQyxDQUFQO0FBQ0Q7QUFDRixHQU5jO0FBQUEsQ0FBZjs7QUFRQSxJQUFJc0Isb0JBQW9CLDRCQUFnQjtBQUN0Q0MsU0FBT0gsU0FBUyxvQkFBVUksSUFBbkIsQ0FEK0I7QUFFdENDLFNBQU9MLFNBQVMsb0JBQVVNLEtBQW5CLENBRitCO0FBR3RDQyxTQUFPUCxTQUFTLG9CQUFVUSxJQUFuQixDQUgrQjtBQUl0Q0MsVUFBUVQsU0FBUyxvQkFBVVUsTUFBbkIsQ0FKOEI7QUFLdENDLFVBQVFYLFNBQVMsb0JBQVVZLE1BQW5CO0FBTDhCLENBQWhCLENBQXhCOztrQkFRZVYsaUIiLCJmaWxlIjoicmVkdWNlcnMvcGFnaW5hdGlvblJlZHVjZXIuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
