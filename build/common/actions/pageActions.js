'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.apendEntitiesIntoPage = exports.prependEntitiesIntoPage = exports.setCrrentPage = exports.setPages = undefined;

var _ActionTypes = require('../constants/ActionTypes');

var _ActionTypes2 = _interopRequireDefault(_ActionTypes);

var _entityActions = require('./entityActions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setPages = exports.setPages = function setPages(resource, page, ids) {
  return {
    type: _ActionTypes2.default.SET_PAGES,
    resource: resource,
    page: page,
    ids: ids
  };
};

var setCrrentPage = exports.setCrrentPage = function setCrrentPage(resource, currentPage) {
  return {
    type: _ActionTypes2.default.SET_CURRENT_PAGE,
    resource: resource,
    currentPage: currentPage
  };
};

var prependEntitiesIntoPage = exports.prependEntitiesIntoPage = function prependEntitiesIntoPage(resource, normalized, intoPage) {
  return function (dispatch, getState) {
    dispatch((0, _entityActions.setEntities)(normalized));
    dispatch({
      type: _ActionTypes2.default.PREPEND_ENTITIES_INTO_PAGE,
      resource: resource,
      ids: normalized.result,
      intoPage: intoPage
    });
  };
};

var apendEntitiesIntoPage = exports.apendEntitiesIntoPage = function apendEntitiesIntoPage(resource, normalized, intoPage) {
  return function (dispatch, getState) {
    dispatch((0, _entityActions.setEntities)(normalized));
    dispatch({
      type: _ActionTypes2.default.APPEND_ENTITIES_INTO_PAGE,
      resource: resource,
      ids: normalized.result,
      intoPage: intoPage
    });
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbnMvcGFnZUFjdGlvbnMuanMiXSwibmFtZXMiOlsic2V0UGFnZXMiLCJyZXNvdXJjZSIsInBhZ2UiLCJpZHMiLCJ0eXBlIiwiU0VUX1BBR0VTIiwic2V0Q3JyZW50UGFnZSIsImN1cnJlbnRQYWdlIiwiU0VUX0NVUlJFTlRfUEFHRSIsInByZXBlbmRFbnRpdGllc0ludG9QYWdlIiwibm9ybWFsaXplZCIsImludG9QYWdlIiwiZGlzcGF0Y2giLCJnZXRTdGF0ZSIsIlBSRVBFTkRfRU5USVRJRVNfSU5UT19QQUdFIiwicmVzdWx0IiwiYXBlbmRFbnRpdGllc0ludG9QYWdlIiwiQVBQRU5EX0VOVElUSUVTX0lOVE9fUEFHRSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFTyxJQUFNQSw4QkFBVyxTQUFYQSxRQUFXLENBQUNDLFFBQUQsRUFBV0MsSUFBWCxFQUFpQkMsR0FBakIsRUFBeUI7QUFDL0MsU0FBTztBQUNMQyxVQUFNLHNCQUFZQyxTQURiO0FBRUxKLHNCQUZLO0FBR0xDLGNBSEs7QUFJTEM7QUFKSyxHQUFQO0FBTUQsQ0FQTTs7QUFTQSxJQUFNRyx3Q0FBZ0IsU0FBaEJBLGFBQWdCLENBQUNMLFFBQUQsRUFBV00sV0FBWCxFQUEyQjtBQUN0RCxTQUFPO0FBQ0xILFVBQU0sc0JBQVlJLGdCQURiO0FBRUxQLHNCQUZLO0FBR0xNO0FBSEssR0FBUDtBQUtELENBTk07O0FBUUEsSUFBTUUsNERBQTBCLFNBQTFCQSx1QkFBMEIsQ0FBQ1IsUUFBRCxFQUFXUyxVQUFYLEVBQXVCQyxRQUF2QixFQUFvQztBQUN6RSxTQUFPLFVBQUNDLFFBQUQsRUFBV0MsUUFBWCxFQUF3QjtBQUM3QkQsYUFBUyxnQ0FBWUYsVUFBWixDQUFUO0FBQ0FFLGFBQVM7QUFDUFIsWUFBTSxzQkFBWVUsMEJBRFg7QUFFUGIsd0JBRk87QUFHUEUsV0FBS08sV0FBV0ssTUFIVDtBQUlQSjtBQUpPLEtBQVQ7QUFNRCxHQVJEO0FBU0QsQ0FWTTs7QUFZQSxJQUFNSyx3REFBd0IsU0FBeEJBLHFCQUF3QixDQUFDZixRQUFELEVBQVdTLFVBQVgsRUFBdUJDLFFBQXZCLEVBQW9DO0FBQ3ZFLFNBQU8sVUFBQ0MsUUFBRCxFQUFXQyxRQUFYLEVBQXdCO0FBQzdCRCxhQUFTLGdDQUFZRixVQUFaLENBQVQ7QUFDQUUsYUFBUztBQUNQUixZQUFNLHNCQUFZYSx5QkFEWDtBQUVQaEIsd0JBRk87QUFHUEUsV0FBS08sV0FBV0ssTUFIVDtBQUlQSjtBQUpPLEtBQVQ7QUFNRCxHQVJEO0FBU0QsQ0FWTSIsImZpbGUiOiJhY3Rpb25zL3BhZ2VBY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
