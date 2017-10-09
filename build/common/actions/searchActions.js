'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setSearchItems = undefined;

var _normalizr = require('normalizr');

var _schemas = require('../schemas');

var _Resources = require('../constants/Resources');

var _Resources2 = _interopRequireDefault(_Resources);

var _entityActions = require('./entityActions');

var _pageActions = require('./pageActions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setSearchItems = exports.setSearchItems = function setSearchItems(res) {
  return function (dispatch, getState) {
    var normalized = (0, _normalizr.normalize)(res.events, (0, _normalizr.arrayOf)(_schemas.eventSchema));

    dispatch((0, _entityActions.setEntities)(normalized));
    dispatch((0, _pageActions.setPages)(_Resources2.default.SEARCH, res.page, normalized.result));
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbnMvc2VhcmNoQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJzZXRTZWFyY2hJdGVtcyIsInJlcyIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJub3JtYWxpemVkIiwiZXZlbnRzIiwiU0VBUkNIIiwicGFnZSIsInJlc3VsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFFTyxJQUFNQSwwQ0FBaUIsU0FBakJBLGNBQWlCLENBQUNDLEdBQUQ7QUFBQSxTQUFTLFVBQUNDLFFBQUQsRUFBV0MsUUFBWCxFQUF3QjtBQUM3RCxRQUFJQyxhQUFhLDBCQUFVSCxJQUFJSSxNQUFkLEVBQXNCLDZDQUF0QixDQUFqQjs7QUFFQUgsYUFBUyxnQ0FBWUUsVUFBWixDQUFUO0FBQ0FGLGFBQVMsMkJBQVMsb0JBQVVJLE1BQW5CLEVBQTJCTCxJQUFJTSxJQUEvQixFQUFxQ0gsV0FBV0ksTUFBaEQsQ0FBVDtBQUNELEdBTDZCO0FBQUEsQ0FBdkIiLCJmaWxlIjoiYWN0aW9ucy9zZWFyY2hBY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
