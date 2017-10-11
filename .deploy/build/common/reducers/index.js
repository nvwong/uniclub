'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _routerReducer = require('./routerReducer');

var _routerReducer2 = _interopRequireDefault(_routerReducer);

var _cookieReducer = require('./cookieReducer');

var _cookieReducer2 = _interopRequireDefault(_cookieReducer);

var _errorReducer = require('./errorReducer');

var _errorReducer2 = _interopRequireDefault(_errorReducer);

var _apiEngineReducer = require('./apiEngineReducer');

var _apiEngineReducer2 = _interopRequireDefault(_apiEngineReducer);

var _formReducer = require('./formReducer');

var _formReducer2 = _interopRequireDefault(_formReducer);

var _intlReducer = require('./intlReducer');

var _intlReducer2 = _interopRequireDefault(_intlReducer);

var _entityReducer = require('./entityReducer');

var _entityReducer2 = _interopRequireDefault(_entityReducer);

var _paginationReducer = require('./paginationReducer');

var _paginationReducer2 = _interopRequireDefault(_paginationReducer);

var _searchReducer = require('./searchReducer');

var _searchReducer2 = _interopRequireDefault(_searchReducer);

var _todoReducer = require('./todoReducer');

var _todoReducer2 = _interopRequireDefault(_todoReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  routing: _routerReducer2.default,
  cookies: _cookieReducer2.default,
  errors: _errorReducer2.default,
  apiEngine: _apiEngineReducer2.default,
  form: _formReducer2.default, // must mount as `form` from redux-form's docs
  intl: _intlReducer2.default,
  entity: _entityReducer2.default,
  pagination: _paginationReducer2.default,
  search: _searchReducer2.default,
  todo: _todoReducer2.default
});

exports.default = rootReducer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXJzL2luZGV4LmpzIl0sIm5hbWVzIjpbInJvb3RSZWR1Y2VyIiwicm91dGluZyIsImNvb2tpZXMiLCJlcnJvcnMiLCJhcGlFbmdpbmUiLCJmb3JtIiwiaW50bCIsImVudGl0eSIsInBhZ2luYXRpb24iLCJzZWFyY2giLCJ0b2RvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsY0FBYyw0QkFBZ0I7QUFDbENDLGtDQURrQztBQUVsQ0Msa0NBRmtDO0FBR2xDQyxnQ0FIa0M7QUFJbENDLHVDQUprQztBQUtsQ0MsNkJBTGtDLEVBSzVCO0FBQ05DLDZCQU5rQztBQU9sQ0MsaUNBUGtDO0FBUWxDQyx5Q0FSa0M7QUFTbENDLGlDQVRrQztBQVVsQ0M7QUFWa0MsQ0FBaEIsQ0FBcEI7O2tCQWFlVixXIiwiZmlsZSI6InJlZHVjZXJzL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
