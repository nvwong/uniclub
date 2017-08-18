'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeEntities = exports.setEntities = undefined;

var _ActionTypes = require('../constants/ActionTypes');

var _ActionTypes2 = _interopRequireDefault(_ActionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setEntities = exports.setEntities = function setEntities(normalized) {
  return {
    type: _ActionTypes2.default.SET_ENTITIES,
    normalized: normalized
  };
};

var removeEntities = exports.removeEntities = function removeEntities(resource, ids) {
  return {
    type: _ActionTypes2.default.REMOVE_ENTITIES_FROM_PAGE,
    resource: resource,
    ids: ids
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbnMvZW50aXR5QWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJzZXRFbnRpdGllcyIsIm5vcm1hbGl6ZWQiLCJ0eXBlIiwiU0VUX0VOVElUSUVTIiwicmVtb3ZlRW50aXRpZXMiLCJyZXNvdXJjZSIsImlkcyIsIlJFTU9WRV9FTlRJVElFU19GUk9NX1BBR0UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7O0FBRU8sSUFBTUEsb0NBQWMsU0FBZEEsV0FBYyxDQUFDQyxVQUFELEVBQWdCO0FBQ3pDLFNBQU87QUFDTEMsVUFBTSxzQkFBWUMsWUFEYjtBQUVMRjtBQUZLLEdBQVA7QUFJRCxDQUxNOztBQU9BLElBQU1HLDBDQUFpQixTQUFqQkEsY0FBaUIsQ0FBQ0MsUUFBRCxFQUFXQyxHQUFYLEVBQW1CO0FBQy9DLFNBQU87QUFDTEosVUFBTSxzQkFBWUsseUJBRGI7QUFFTEYsc0JBRks7QUFHTEM7QUFISyxHQUFQO0FBS0QsQ0FOTSIsImZpbGUiOiJhY3Rpb25zL2VudGl0eUFjdGlvbnMuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
