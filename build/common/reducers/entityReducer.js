'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ActionTypes = require('../constants/ActionTypes');

var _ActionTypes2 = _interopRequireDefault(_ActionTypes);

var _merge = require('lodash/merge');

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initState = {};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments[1];

  switch (action.type) {
    case _ActionTypes2.default.SET_ENTITIES:
      {
        return (0, _merge2.default)({}, state, action.normalized.entities);
      }
    default:
      {
        return state;
      }
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXJzL2VudGl0eVJlZHVjZXIuanMiXSwibmFtZXMiOlsiaW5pdFN0YXRlIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiU0VUX0VOVElUSUVTIiwibm9ybWFsaXplZCIsImVudGl0aWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFJQSxZQUFZLEVBQWhCOztrQkFFZSxZQUErQjtBQUFBLE1BQTlCQyxLQUE4Qix1RUFBdEJELFNBQXNCO0FBQUEsTUFBWEUsTUFBVzs7QUFDNUMsVUFBUUEsT0FBT0MsSUFBZjtBQUNFLFNBQUssc0JBQVlDLFlBQWpCO0FBQStCO0FBQzdCLGVBQU8scUJBQU0sRUFBTixFQUFVSCxLQUFWLEVBQWlCQyxPQUFPRyxVQUFQLENBQWtCQyxRQUFuQyxDQUFQO0FBQ0Q7QUFDRDtBQUFTO0FBQ1AsZUFBT0wsS0FBUDtBQUNEO0FBTkg7QUFRRCxDIiwiZmlsZSI6InJlZHVjZXJzL2VudGl0eVJlZHVjZXIuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
