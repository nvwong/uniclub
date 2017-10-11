'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setSearch = undefined;

var _ActionTypes = require('../constants/ActionTypes');

var _ActionTypes2 = _interopRequireDefault(_ActionTypes);

var _normalizr = require('normalizr');

var _schemas = require('../schemas');

var _Resources = require('../constants/Resources');

var _Resources2 = _interopRequireDefault(_Resources);

var _entityActions = require('./entityActions');

var _pageActions = require('./pageActions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setSearch = exports.setSearch = function setSearch(res) {
  return function (dispatch, getState) {
    // let normalized = normalize(res, arrayOf(searchSchema));
    console.log(res);
    // console.log(normalized);

    dispatch({
      type: _ActionTypes2.default.SET_SEARCH,
      res: res
    });
  };
};

// export const setValue = (value) => (dispatch, getState) => {
//
// };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbnMvc2VhcmNoQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJzZXRTZWFyY2giLCJyZXMiLCJkaXNwYXRjaCIsImdldFN0YXRlIiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJTRVRfU0VBUkNIIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBRU8sSUFBTUEsZ0NBQVksU0FBWkEsU0FBWSxDQUFDQyxHQUFEO0FBQUEsU0FBUyxVQUFDQyxRQUFELEVBQVdDLFFBQVgsRUFBd0I7QUFDeEQ7QUFDQUMsWUFBUUMsR0FBUixDQUFZSixHQUFaO0FBQ0E7O0FBRUFDLGFBQVM7QUFDUEksWUFBTSxzQkFBWUMsVUFEWDtBQUVQTjtBQUZPLEtBQVQ7QUFJRCxHQVR3QjtBQUFBLENBQWxCOztBQVdQO0FBQ0E7QUFDQSIsImZpbGUiOiJhY3Rpb25zL3NlYXJjaEFjdGlvbnMuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
