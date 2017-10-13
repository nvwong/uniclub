'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ActionTypes = require('../constants/ActionTypes');

var _ActionTypes2 = _interopRequireDefault(_ActionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case _ActionTypes2.default.SET_SEARCH:
      {
        console.log(action);
        return [].concat(_toConsumableArray(action.res));
      }
    case _ActionTypes2.default.SET_VALUE:
      {
        console.log(action);
        return [action.res].concat(_toConsumableArray(state));
      }
    case _ActionTypes2.default.REMOVE_SEARCH:
      {
        return [].concat(_toConsumableArray(state.filter(function (search) {
          return search._id !== action.id;
        })));
      }
    default:
      {
        return state;
      }
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXJzL3NlYXJjaFJlZHVjZXIuanMiXSwibmFtZXMiOlsic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiU0VUX1NFQVJDSCIsImNvbnNvbGUiLCJsb2ciLCJyZXMiLCJTRVRfVkFMVUUiLCJSRU1PVkVfU0VBUkNIIiwiZmlsdGVyIiwic2VhcmNoIiwiX2lkIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7OztrQkFFZSxZQUF3QjtBQUFBLE1BQXZCQSxLQUF1Qix1RUFBZixFQUFlO0FBQUEsTUFBWEMsTUFBVzs7QUFDckMsVUFBUUEsT0FBT0MsSUFBZjtBQUNFLFNBQUssc0JBQVlDLFVBQWpCO0FBQTZCO0FBQzNCQyxnQkFBUUMsR0FBUixDQUFZSixNQUFaO0FBQ0EsNENBQ0tBLE9BQU9LLEdBRFo7QUFHRDtBQUNELFNBQUssc0JBQVlDLFNBQWpCO0FBQTRCO0FBQzFCSCxnQkFBUUMsR0FBUixDQUFZSixNQUFaO0FBQ0EsZ0JBQ0VBLE9BQU9LLEdBRFQsNEJBRUtOLEtBRkw7QUFJRDtBQUNELFNBQUssc0JBQVlRLGFBQWpCO0FBQWdDO0FBQzlCLDRDQUNLUixNQUFNUyxNQUFOLENBQWE7QUFBQSxpQkFBVUMsT0FBT0MsR0FBUCxLQUFlVixPQUFPVyxFQUFoQztBQUFBLFNBQWIsQ0FETDtBQUdEO0FBQ0Q7QUFBUztBQUNQLGVBQU9aLEtBQVA7QUFDRDtBQXJCSDtBQXVCRCxDIiwiZmlsZSI6InJlZHVjZXJzL3NlYXJjaFJlZHVjZXIuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
