'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeEvent = exports.addEvent = exports.setEvents = undefined;

var _normalizr = require('normalizr');

var _schemas = require('../schemas');

var _Resources = require('../constants/Resources');

var _Resources2 = _interopRequireDefault(_Resources);

var _entityActions = require('./entityActions');

var _pageActions = require('./pageActions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setEvents = exports.setEvents = function setEvents(res) {
  return function (dispatch, getState) {
    var normalized = (0, _normalizr.normalize)(res.events, (0, _normalizr.arrayOf)(_schemas.eventSchema));

    dispatch((0, _entityActions.setEntities)(normalized));
    dispatch((0, _pageActions.setPages)(_Resources2.default.EVENTS, res.page, normalized.result));
  };
};

var addEvent = exports.addEvent = function addEvent(oneEvent) {
  return function (dispatch, getState) {
    var normalized = (0, _normalizr.normalize)([oneEvent], (0, _normalizr.arrayOf)(_schemas.eventSchema));

    dispatch((0, _pageActions.prependEntitiesIntoPage)(_Resources2.default.EVENTS, normalized, 1));
  };
};

var removeEvent = exports.removeEvent = function removeEvent(id) {
  return (0, _entityActions.removeEntities)(_Resources2.default.EVENTS, [id]);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbnMvZXZlbnRzQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJzZXRFdmVudHMiLCJyZXMiLCJkaXNwYXRjaCIsImdldFN0YXRlIiwibm9ybWFsaXplZCIsImV2ZW50cyIsIkVWRU5UUyIsInBhZ2UiLCJyZXN1bHQiLCJhZGRFdmVudCIsIm9uZUV2ZW50IiwicmVtb3ZlRXZlbnQiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFFTyxJQUFNQSxnQ0FBWSxTQUFaQSxTQUFZLENBQUNDLEdBQUQ7QUFBQSxTQUFTLFVBQUNDLFFBQUQsRUFBV0MsUUFBWCxFQUF3QjtBQUN4RCxRQUFJQyxhQUFhLDBCQUFVSCxJQUFJSSxNQUFkLEVBQXNCLDZDQUF0QixDQUFqQjs7QUFFQUgsYUFBUyxnQ0FBWUUsVUFBWixDQUFUO0FBQ0FGLGFBQVMsMkJBQVMsb0JBQVVJLE1BQW5CLEVBQTJCTCxJQUFJTSxJQUEvQixFQUFxQ0gsV0FBV0ksTUFBaEQsQ0FBVDtBQUNELEdBTHdCO0FBQUEsQ0FBbEI7O0FBT0EsSUFBTUMsOEJBQVcsU0FBWEEsUUFBVyxDQUFDQyxRQUFEO0FBQUEsU0FBYyxVQUFDUixRQUFELEVBQVdDLFFBQVgsRUFBd0I7QUFDNUQsUUFBSUMsYUFBYSwwQkFBVSxDQUFDTSxRQUFELENBQVYsRUFBc0IsNkNBQXRCLENBQWpCOztBQUVBUixhQUFTLDBDQUNQLG9CQUFVSSxNQURILEVBRVBGLFVBRk8sRUFHUCxDQUhPLENBQVQ7QUFLRCxHQVJ1QjtBQUFBLENBQWpCOztBQVVBLElBQU1PLG9DQUFjLFNBQWRBLFdBQWMsQ0FBQ0MsRUFBRDtBQUFBLFNBQVEsbUNBQWUsb0JBQVVOLE1BQXpCLEVBQWlDLENBQUNNLEVBQUQsQ0FBakMsQ0FBUjtBQUFBLENBQXBCIiwiZmlsZSI6ImFjdGlvbnMvZXZlbnRzQWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
