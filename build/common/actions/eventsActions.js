'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addParticipant = exports.removeEvent = exports.addEvent = exports.setEvents = undefined;

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

var addParticipant = exports.addParticipant = function addParticipant(id) {
  return;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbnMvZXZlbnRzQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJzZXRFdmVudHMiLCJyZXMiLCJkaXNwYXRjaCIsImdldFN0YXRlIiwibm9ybWFsaXplZCIsImV2ZW50cyIsIkVWRU5UUyIsInBhZ2UiLCJyZXN1bHQiLCJhZGRFdmVudCIsIm9uZUV2ZW50IiwicmVtb3ZlRXZlbnQiLCJpZCIsImFkZFBhcnRpY2lwYW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUVPLElBQU1BLGdDQUFZLFNBQVpBLFNBQVksQ0FBQ0MsR0FBRDtBQUFBLFNBQVMsVUFBQ0MsUUFBRCxFQUFXQyxRQUFYLEVBQXdCO0FBQ3hELFFBQUlDLGFBQWEsMEJBQVVILElBQUlJLE1BQWQsRUFBc0IsNkNBQXRCLENBQWpCOztBQUVBSCxhQUFTLGdDQUFZRSxVQUFaLENBQVQ7QUFDQUYsYUFBUywyQkFBUyxvQkFBVUksTUFBbkIsRUFBMkJMLElBQUlNLElBQS9CLEVBQXFDSCxXQUFXSSxNQUFoRCxDQUFUO0FBQ0QsR0FMd0I7QUFBQSxDQUFsQjs7QUFPQSxJQUFNQyw4QkFBVyxTQUFYQSxRQUFXLENBQUNDLFFBQUQ7QUFBQSxTQUFjLFVBQUNSLFFBQUQsRUFBV0MsUUFBWCxFQUF3QjtBQUM1RCxRQUFJQyxhQUFhLDBCQUFVLENBQUNNLFFBQUQsQ0FBVixFQUFzQiw2Q0FBdEIsQ0FBakI7O0FBRUFSLGFBQVMsMENBQ1Asb0JBQVVJLE1BREgsRUFFUEYsVUFGTyxFQUdQLENBSE8sQ0FBVDtBQUtELEdBUnVCO0FBQUEsQ0FBakI7O0FBVUEsSUFBTU8sb0NBQWMsU0FBZEEsV0FBYyxDQUFDQyxFQUFEO0FBQUEsU0FBUSxtQ0FBZSxvQkFBVU4sTUFBekIsRUFBaUMsQ0FBQ00sRUFBRCxDQUFqQyxDQUFSO0FBQUEsQ0FBcEI7O0FBRUEsSUFBTUMsMENBQWlCLFNBQWpCQSxjQUFpQixDQUFDRCxFQUFELEVBQVE7QUFBRTtBQUFTLENBQTFDIiwiZmlsZSI6ImFjdGlvbnMvZXZlbnRzQWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
