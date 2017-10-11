'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.maybeUpdateSuggestions = exports.loadSuggestionsBegin = exports.clearSuggestions = exports.updateInputValue = exports.loadSuggestions = undefined;

var _ActionTypes = require('../constants/ActionTypes');

var _ActionTypes2 = _interopRequireDefault(_ActionTypes);

var _normalizr = require('normalizr');

var _schemas = require('../schemas');

var _Resources = require('../constants/Resources');

var _Resources2 = _interopRequireDefault(_Resources);

var _entityActions = require('./entityActions');

var _pageActions = require('./pageActions');

var _errorActions = require('./errorActions');

var _search = require('../api/search');

var _search2 = _interopRequireDefault(_search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var languages = [{
  name: 'C',
  year: 1972
}, {
  name: 'C#',
  year: 2000
}, {
  name: 'C++',
  year: 1983
}, {
  name: 'Clojure',
  year: 2007
}, {
  name: 'Elm',
  year: 2012
}, {
  name: 'Go',
  year: 2009
}, {
  name: 'Haskell',
  year: 1990
}, {
  name: 'Java',
  year: 1995
}, {
  name: 'Javascript',
  year: 1995
}, {
  name: 'Perl',
  year: 1987
}, {
  name: 'PHP',
  year: 1995
}, {
  name: 'Python',
  year: 1991
}, {
  name: 'Ruby',
  year: 1995
}, {
  name: 'Scala',
  year: 2003
}];

function randomDelay() {
  return 300 + Math.random() * 1000;
}

function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
function getMatchingLanguages(result, value) {
  var escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === '') {
    return [];
  }

  var regex = new RegExp('^' + escapedValue, 'i');

  return result.map(function (section) {
    console.log(section);
    return {
      title: section.title,
      results: section.results.filter(function (result) {
        return regex.test(result.name);
      })
    };
  }).filter(function (section) {
    return section.results.length > 0;
  });
}

var loadSuggestions = exports.loadSuggestions = function loadSuggestions(value, type) {
  return function (dispatch, getState, apiEngine) {
    return function (dispatch) {
      dispatch(loadSuggestionsBegin());
      console.log('value', value);
      console.log('type', type);
      // Fake an AJAX call
      (0, _search2.default)(apiEngine).list(value, type).catch(function (err) {
        (0, _errorActions.pushErrors)(err);
        throw err;
      }).then(function (json) {
        dispatch(maybeUpdateSuggestions(getMatchingLanguages(json, value), value));
      });
      // setTimeout(() => {
      //   dispatch(maybeUpdateSuggestions(getMatchingLanguages(value), value));
      // }, randomDelay());
    };
  };
};

var updateInputValue = exports.updateInputValue = function updateInputValue(value) {
  return {
    type: _ActionTypes2.default.UPDATE_INPUT_VALUE,
    value: value
  };
};

var clearSuggestions = exports.clearSuggestions = function clearSuggestions() {
  return {
    type: _ActionTypes2.default.CLEAR_SUGGESTIONS
  };
};

var loadSuggestionsBegin = exports.loadSuggestionsBegin = function loadSuggestionsBegin() {
  return {
    type: _ActionTypes2.default.LOAD_SUGGESTIONS_BEGIN
  };
};

var maybeUpdateSuggestions = exports.maybeUpdateSuggestions = function maybeUpdateSuggestions(suggestions, value) {
  return {
    type: _ActionTypes2.default.MAYBE_UPDATE_SUGGESTIONS,
    suggestions: suggestions,
    value: value
  };
};

//
// export const setSearch = (res) => (dispatch, getState) => {
//   // let normalized = normalize(res, arrayOf(searchSchema));
//   console.log(res);
//   // console.log(normalized);
//
//   dispatch({
//     type: ActionTypes.SET_SEARCH,
//     res,
//   });
// };

// export const setValue = (value) => (dispatch, getState) => {
//
// };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbnMvc2VhcmNoQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJsYW5ndWFnZXMiLCJuYW1lIiwieWVhciIsInJhbmRvbURlbGF5IiwiTWF0aCIsInJhbmRvbSIsImVzY2FwZVJlZ2V4Q2hhcmFjdGVycyIsInN0ciIsInJlcGxhY2UiLCJnZXRNYXRjaGluZ0xhbmd1YWdlcyIsInJlc3VsdCIsInZhbHVlIiwiZXNjYXBlZFZhbHVlIiwidHJpbSIsInJlZ2V4IiwiUmVnRXhwIiwibWFwIiwiY29uc29sZSIsImxvZyIsInNlY3Rpb24iLCJ0aXRsZSIsInJlc3VsdHMiLCJmaWx0ZXIiLCJ0ZXN0IiwibGVuZ3RoIiwibG9hZFN1Z2dlc3Rpb25zIiwidHlwZSIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJhcGlFbmdpbmUiLCJsb2FkU3VnZ2VzdGlvbnNCZWdpbiIsImxpc3QiLCJjYXRjaCIsImVyciIsInRoZW4iLCJqc29uIiwibWF5YmVVcGRhdGVTdWdnZXN0aW9ucyIsInVwZGF0ZUlucHV0VmFsdWUiLCJVUERBVEVfSU5QVVRfVkFMVUUiLCJjbGVhclN1Z2dlc3Rpb25zIiwiQ0xFQVJfU1VHR0VTVElPTlMiLCJMT0FEX1NVR0dFU1RJT05TX0JFR0lOIiwic3VnZ2VzdGlvbnMiLCJNQVlCRV9VUERBVEVfU1VHR0VTVElPTlMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFlBQVksQ0FDaEI7QUFDRUMsUUFBTSxHQURSO0FBRUVDLFFBQU07QUFGUixDQURnQixFQUtoQjtBQUNFRCxRQUFNLElBRFI7QUFFRUMsUUFBTTtBQUZSLENBTGdCLEVBU2hCO0FBQ0VELFFBQU0sS0FEUjtBQUVFQyxRQUFNO0FBRlIsQ0FUZ0IsRUFhaEI7QUFDRUQsUUFBTSxTQURSO0FBRUVDLFFBQU07QUFGUixDQWJnQixFQWlCaEI7QUFDRUQsUUFBTSxLQURSO0FBRUVDLFFBQU07QUFGUixDQWpCZ0IsRUFxQmhCO0FBQ0VELFFBQU0sSUFEUjtBQUVFQyxRQUFNO0FBRlIsQ0FyQmdCLEVBeUJoQjtBQUNFRCxRQUFNLFNBRFI7QUFFRUMsUUFBTTtBQUZSLENBekJnQixFQTZCaEI7QUFDRUQsUUFBTSxNQURSO0FBRUVDLFFBQU07QUFGUixDQTdCZ0IsRUFpQ2hCO0FBQ0VELFFBQU0sWUFEUjtBQUVFQyxRQUFNO0FBRlIsQ0FqQ2dCLEVBcUNoQjtBQUNFRCxRQUFNLE1BRFI7QUFFRUMsUUFBTTtBQUZSLENBckNnQixFQXlDaEI7QUFDRUQsUUFBTSxLQURSO0FBRUVDLFFBQU07QUFGUixDQXpDZ0IsRUE2Q2hCO0FBQ0VELFFBQU0sUUFEUjtBQUVFQyxRQUFNO0FBRlIsQ0E3Q2dCLEVBaURoQjtBQUNFRCxRQUFNLE1BRFI7QUFFRUMsUUFBTTtBQUZSLENBakRnQixFQXFEaEI7QUFDRUQsUUFBTSxPQURSO0FBRUVDLFFBQU07QUFGUixDQXJEZ0IsQ0FBbEI7O0FBMkRBLFNBQVNDLFdBQVQsR0FBdUI7QUFDckIsU0FBTyxNQUFNQyxLQUFLQyxNQUFMLEtBQWdCLElBQTdCO0FBQ0Q7O0FBRUQsU0FBU0MscUJBQVQsQ0FBK0JDLEdBQS9CLEVBQW9DO0FBQ2xDLFNBQU9BLElBQUlDLE9BQUosQ0FBWSxxQkFBWixFQUFtQyxNQUFuQyxDQUFQO0FBQ0Q7QUFDRCxTQUFTQyxvQkFBVCxDQUE4QkMsTUFBOUIsRUFBc0NDLEtBQXRDLEVBQTZDO0FBQzNDLE1BQU1DLGVBQWVOLHNCQUFzQkssTUFBTUUsSUFBTixFQUF0QixDQUFyQjs7QUFFQSxNQUFJRCxpQkFBaUIsRUFBckIsRUFBeUI7QUFDdkIsV0FBTyxFQUFQO0FBQ0Q7O0FBRUQsTUFBTUUsUUFBUSxJQUFJQyxNQUFKLENBQVcsTUFBTUgsWUFBakIsRUFBK0IsR0FBL0IsQ0FBZDs7QUFFQSxTQUFPRixPQUFPTSxHQUFQLENBQVcsbUJBQVc7QUFDM0JDLFlBQVFDLEdBQVIsQ0FBWUMsT0FBWjtBQUNBLFdBQU87QUFDTEMsYUFBT0QsUUFBUUMsS0FEVjtBQUVMQyxlQUFTRixRQUNORSxPQURNLENBRU5DLE1BRk0sQ0FFQztBQUFBLGVBQVVSLE1BQU1TLElBQU4sQ0FBV2IsT0FBT1QsSUFBbEIsQ0FBVjtBQUFBLE9BRkQ7QUFGSixLQUFQO0FBTUQsR0FSTSxFQVFKcUIsTUFSSSxDQVFHO0FBQUEsV0FBV0gsUUFBUUUsT0FBUixDQUFnQkcsTUFBaEIsR0FBeUIsQ0FBcEM7QUFBQSxHQVJILENBQVA7QUFTRDs7QUFFTSxJQUFNQyw0Q0FBa0IsU0FBbEJBLGVBQWtCLENBQUNkLEtBQUQsRUFBUWUsSUFBUjtBQUFBLFNBQy9CLFVBQUNDLFFBQUQsRUFBV0MsUUFBWCxFQUFxQkMsU0FBckIsRUFBbUM7QUFDakMsV0FBTyxvQkFBWTtBQUNqQkYsZUFBU0csc0JBQVQ7QUFDQWIsY0FBUUMsR0FBUixDQUFZLE9BQVosRUFBcUJQLEtBQXJCO0FBQ0FNLGNBQVFDLEdBQVIsQ0FBWSxNQUFaLEVBQW9CUSxJQUFwQjtBQUNBO0FBQ0EsNEJBQVVHLFNBQVYsRUFDR0UsSUFESCxDQUNRcEIsS0FEUixFQUNlZSxJQURmLEVBRUdNLEtBRkgsQ0FFUyxVQUFDQyxHQUFELEVBQVM7QUFDZCxzQ0FBV0EsR0FBWDtBQUNBLGNBQU1BLEdBQU47QUFDRCxPQUxILEVBTUdDLElBTkgsQ0FNUSxVQUFDQyxJQUFELEVBQVU7QUFDZFIsaUJBQ0VTLHVCQUF1QjNCLHFCQUFxQjBCLElBQXJCLEVBQTJCeEIsS0FBM0IsQ0FBdkIsRUFBMERBLEtBQTFELENBREY7QUFHRCxPQVZIO0FBV0U7QUFDQTtBQUNBO0FBQ0gsS0FuQkQ7QUFvQkQsR0F0QjhCO0FBQUEsQ0FBeEI7O0FBd0JBLElBQU0wQiw4Q0FBbUIsU0FBbkJBLGdCQUFtQixDQUFDMUIsS0FBRCxFQUFXO0FBQ3pDLFNBQU87QUFDTGUsVUFBTSxzQkFBWVksa0JBRGI7QUFFTDNCO0FBRkssR0FBUDtBQUlELENBTE07O0FBT0EsSUFBTTRCLDhDQUFtQixTQUFuQkEsZ0JBQW1CLEdBQU07QUFDcEMsU0FBTztBQUNMYixVQUFNLHNCQUFZYztBQURiLEdBQVA7QUFHRCxDQUpNOztBQU1BLElBQU1WLHNEQUF1QixTQUF2QkEsb0JBQXVCLEdBQU07QUFDeEMsU0FBTztBQUNMSixVQUFNLHNCQUFZZTtBQURiLEdBQVA7QUFHRCxDQUpNOztBQU1BLElBQU1MLDBEQUF5QixTQUF6QkEsc0JBQXlCLENBQUNNLFdBQUQsRUFBYy9CLEtBQWQsRUFBd0I7QUFDNUQsU0FBTztBQUNMZSxVQUFNLHNCQUFZaUIsd0JBRGI7QUFFTEQsNEJBRks7QUFHTC9CO0FBSEssR0FBUDtBQUtELENBTk07O0FBUVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYWN0aW9ucy9zZWFyY2hBY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
