'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ActionTypes = require('../constants/ActionTypes');

var _ActionTypes2 = _interopRequireDefault(_ActionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initState = null;

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments[1];

  switch (action.type) {
    case _ActionTypes2.default.SET_API_ENGINE:
      {
        return action.apiEngine;
      }
    default:
      {
        return state;
      }
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXJzL2FwaUVuZ2luZVJlZHVjZXIuanMiXSwibmFtZXMiOlsiaW5pdFN0YXRlIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiU0VUX0FQSV9FTkdJTkUiLCJhcGlFbmdpbmUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7QUFFQSxJQUFJQSxZQUFZLElBQWhCOztrQkFFZSxZQUErQjtBQUFBLE1BQTlCQyxLQUE4Qix1RUFBdEJELFNBQXNCO0FBQUEsTUFBWEUsTUFBVzs7QUFDNUMsVUFBUUEsT0FBT0MsSUFBZjtBQUNFLFNBQUssc0JBQVlDLGNBQWpCO0FBQWlDO0FBQy9CLGVBQU9GLE9BQU9HLFNBQWQ7QUFDRDtBQUNEO0FBQVM7QUFDUCxlQUFPSixLQUFQO0FBQ0Q7QUFOSDtBQVFELEMiLCJmaWxlIjoicmVkdWNlcnMvYXBpRW5naW5lUmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
