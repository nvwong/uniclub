'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;
// import searchAPI from '../../../api/search';


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouterRedux = require('react-router-redux');

var _reduxLogger = require('redux-logger');

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reactAutosuggest = require('react-autosuggest');

var _reactAutosuggest2 = _interopRequireDefault(_reactAutosuggest);

var _Resources = require('../../../constants/Resources');

var _Resources2 = _interopRequireDefault(_Resources);

var _errorActions = require('../../../actions/errorActions');

var _searchActions = require('../../../actions/searchActions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import { setSearch } from '../../../actions/searchActions';

function mapStateToProps(state) {
  var value = state.value,
      suggestions = state.suggestions,
      isLoading = state.isLoading;


  return {
    value: value,
    suggestions: suggestions,
    isLoading: isLoading
  };
}

/* ---------- */
/*    Data    */
/* ---------- */

// @connect(({ value, suggestions, isLoading, onChange, onSuggestionsFetchRequested, onSuggestionsClearRequested }) =>  ({ value, suggestions, isLoading, onChange, onSuggestionsFetchRequested, onSuggestionsClearRequested }))
var SearchBar = (_dec = (0, _reactRedux.connect)(function (_ref) {
  var search = _ref.search,
      entity = _ref.entity,
      dispatch = _ref.dispatch,
      mapStateToProps = _ref.mapStateToProps;
  return { search: search, entity: entity, dispatch: dispatch, mapStateToProps: mapStateToProps };
}), _dec(_class = function (_Component) {
  _inherits(SearchBar, _Component);

  function SearchBar() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, SearchBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call.apply(_ref2, [this].concat(args))), _this), _this.onChange = function (event, _ref3) {
      var newValue = _ref3.newValue;
      var dispatch = _this.props.dispatch;

      dispatch((0, _searchActions.updateInputValue)(newValue));
    }, _this.onSuggestionsFetchRequested = function (_ref4) {
      var value = _ref4.value,
          type = _ref4.type;
      var dispatch = _this.props.dispatch;

      console.log(value);
      dispatch((0, _searchActions.loadSuggestions)(value, type));
    }, _this.onSuggestionsClearRequested = function () {
      var dispatch = _this.props.dispatch;

      dispatch((0, _searchActions.clearSuggestions)());
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SearchBar, [{
    key: 'getSuggestionValue',


    /* ----------- */
    /*    Utils    */
    /* ----------- */

    // https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters

    /* ----------------- */
    /*    MyComponent    */
    /* ----------------- */

    value: function getSuggestionValue(suggestion) {
      return suggestion.name;
    }
  }, {
    key: 'renderSuggestion',
    value: function renderSuggestion(suggestion) {
      return _react2.default.createElement(
        'span',
        null,
        suggestion.name
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props$search = this.props.search,
          value = _props$search.value,
          suggestions = _props$search.suggestions,
          isLoading = _props$search.isLoading;


      var inputProps = {
        placeholder: 'Search Events',
        value: value,
        onChange: this.onChange
      };

      // const status = (isLoading ? 'Loading...' : 'Type to load suggestions');

      return _react2.default.createElement(_reactAutosuggest2.default, {
        suggestions: suggestions,
        onSuggestionsFetchRequested: this.onSuggestionsFetchRequested,
        onSuggestionsClearRequested: this.onSuggestionsClearRequested,
        getSuggestionValue: this.getSuggestionValue,
        renderSuggestion: this.renderSuggestion,
        inputProps: inputProps });
    }
  }]);

  return SearchBar;
}(_react.Component)) || _class);
exports.default = (0, _reactRedux.connect)(mapStateToProps)(SearchBar);

// // https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expression
// // s#Using_Special_Characters
// // TODO: connect({search}) is undefined
// @connect(({ apiEngine, search, dispatch }) => ({ apiEngine, search, dispatch }))
// class SearchBar extends Component {
//
//   constructor() {
//     super();
//     this.state = {
//       result: [],
//       value: '',
//       suggestions: [],
//     };
//     this.fetchResult = this._fetchResult.bind(this);
//   }
//
//   componentDidUpdate(prevProps) {
//     this.fetchResult(this.state.value);
//     console.log(this.props);
//   }
//
//   _fetchResult(value) {
//     let { apiEngine, type, dispatch } = this.props;
//     searchAPI(apiEngine)
//       .list(value, type)
//       .catch((err) => {
//         pushErrors(err);
//         throw err;
//       })
//       .then((json) => {
//         dispatch(setSearch(json));
//       });
//   }
//
//   escapeRegexCharacters(str) {
//     return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
//   }
//
//   getSuggestions(value) {
//     const escapedValue = this.escapeRegexCharacters(value.trim());
//
//     if (escapedValue === '') {
//       return [];
//     }
//
//     const regex = new RegExp('^' + escapedValue, 'i');
//     return this.state.result.map(section => {
//       return {
//         title: section.title,
//         results: section
//           .results
//           .filter(result => regex.test(result.name)),
//       };
//     }).filter(section => section.results.length > 0);
//   }
//
//   getSuggestionValue(suggestion) {
//     return suggestion.name;
//   }
//
//   renderSuggestion(suggestion) {
//     return (
//       <span>{suggestion.name}</span>
//     );
//   }
//
//   renderSectionTitle(section) {
//     return (
//       <strong>{section.title}</strong>
//     );
//   }
//
//   getSectionSuggestions(section) {
//     return section.results;
//   }
//
//   onChange = (event, {newValue, method}) => {
//     let { page } = this.props;
//     this.setState({value: newValue});
//   };
//
//   onSuggestionsFetchRequested = ({value}) => {
//     this.setState({suggestions: this.getSuggestions(value)});
//   };
//
//   onSuggestionsClearRequested = () => {
//     this.setState({suggestions: []});
//   };
//
//   render() {
//     const {value, suggestions} = this.state;
//     const inputProps = {
//       placeholder: 'Search by Event',
//       value,
//       onChange: this.onChange,
//     };
//
//     return (<Autosuggest
//       multiSection={true}
//       suggestions={suggestions}
//       onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
//       onSuggestionsClearRequested={this.onSuggestionsClearRequested}
//       getSuggestionValue={this.getSuggestionValue}
//       renderSuggestion={this.renderSuggestion}
//       renderSectionTitle={this.renderSectionTitle}
//       getSectionSuggestions={this.getSectionSuggestions}
//       inputProps={inputProps}/>);
//   }
// }
//
// export default SearchBar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZXMvc2VhcmNoL1NlYXJjaEJhci5qcyJdLCJuYW1lcyI6WyJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInZhbHVlIiwic3VnZ2VzdGlvbnMiLCJpc0xvYWRpbmciLCJTZWFyY2hCYXIiLCJzZWFyY2giLCJlbnRpdHkiLCJkaXNwYXRjaCIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJuZXdWYWx1ZSIsInByb3BzIiwib25TdWdnZXN0aW9uc0ZldGNoUmVxdWVzdGVkIiwidHlwZSIsImNvbnNvbGUiLCJsb2ciLCJvblN1Z2dlc3Rpb25zQ2xlYXJSZXF1ZXN0ZWQiLCJzdWdnZXN0aW9uIiwibmFtZSIsImlucHV0UHJvcHMiLCJwbGFjZWhvbGRlciIsImdldFN1Z2dlc3Rpb25WYWx1ZSIsInJlbmRlclN1Z2dlc3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBOzs7QUFMQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBT0E7O0FBRUEsU0FBU0EsZUFBVCxDQUF5QkMsS0FBekIsRUFBZ0M7QUFBQSxNQUN0QkMsS0FEc0IsR0FDWUQsS0FEWixDQUN0QkMsS0FEc0I7QUFBQSxNQUNmQyxXQURlLEdBQ1lGLEtBRFosQ0FDZkUsV0FEZTtBQUFBLE1BQ0ZDLFNBREUsR0FDWUgsS0FEWixDQUNGRyxTQURFOzs7QUFHOUIsU0FBTztBQUNMRixnQkFESztBQUVMQyw0QkFGSztBQUdMQztBQUhLLEdBQVA7QUFLRDs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7SUFHTUMsUyxXQUZMLHlCQUFRO0FBQUEsTUFBR0MsTUFBSCxRQUFHQSxNQUFIO0FBQUEsTUFBV0MsTUFBWCxRQUFXQSxNQUFYO0FBQUEsTUFBbUJDLFFBQW5CLFFBQW1CQSxRQUFuQjtBQUFBLE1BQTZCUixlQUE3QixRQUE2QkEsZUFBN0I7QUFBQSxTQUNSLEVBQUVNLGNBQUYsRUFBVUMsY0FBVixFQUFrQkMsa0JBQWxCLEVBQTRCUixnQ0FBNUIsRUFEUTtBQUFBLENBQVIsQzs7Ozs7Ozs7Ozs7Ozs7OExBd0JDUyxRLEdBQVcsVUFBQ0MsS0FBRCxTQUF5QjtBQUFBLFVBQWZDLFFBQWUsU0FBZkEsUUFBZTtBQUFBLFVBQzVCSCxRQUQ0QixHQUNmLE1BQUtJLEtBRFUsQ0FDNUJKLFFBRDRCOztBQUVsQ0EsZUFBUyxxQ0FBaUJHLFFBQWpCLENBQVQ7QUFDRCxLLFFBRURFLDJCLEdBQThCLGlCQUFxQjtBQUFBLFVBQWxCWCxLQUFrQixTQUFsQkEsS0FBa0I7QUFBQSxVQUFYWSxJQUFXLFNBQVhBLElBQVc7QUFBQSxVQUMzQ04sUUFEMkMsR0FDOUIsTUFBS0ksS0FEeUIsQ0FDM0NKLFFBRDJDOztBQUVqRE8sY0FBUUMsR0FBUixDQUFZZCxLQUFaO0FBQ0FNLGVBQVMsb0NBQWdCTixLQUFoQixFQUF1QlksSUFBdkIsQ0FBVDtBQUNELEssUUFFREcsMkIsR0FBOEIsWUFBTTtBQUFBLFVBQzVCVCxRQUQ0QixHQUNmLE1BQUtJLEtBRFUsQ0FDNUJKLFFBRDRCOztBQUVsQ0EsZUFBUyxzQ0FBVDtBQUNELEs7Ozs7Ozs7QUFsQ0Q7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7dUNBRW1CVSxVLEVBQVk7QUFDN0IsYUFBT0EsV0FBV0MsSUFBbEI7QUFDRDs7O3FDQUVnQkQsVSxFQUFZO0FBQzNCLGFBQ0U7QUFBQTtBQUFBO0FBQU9BLG1CQUFXQztBQUFsQixPQURGO0FBR0Q7Ozs2QkFrQlE7QUFBQSwwQkFDbUMsS0FBS1AsS0FBTCxDQUFXTixNQUQ5QztBQUFBLFVBQ0NKLEtBREQsaUJBQ0NBLEtBREQ7QUFBQSxVQUNRQyxXQURSLGlCQUNRQSxXQURSO0FBQUEsVUFDcUJDLFNBRHJCLGlCQUNxQkEsU0FEckI7OztBQUdQLFVBQU1nQixhQUFhO0FBQ2pCQyxxQkFBYSxlQURJO0FBRWpCbkIsb0JBRmlCO0FBR2pCTyxrQkFBVSxLQUFLQTtBQUhFLE9BQW5COztBQU1BOztBQUVBLGFBQ0U7QUFDRSxxQkFBYU4sV0FEZjtBQUVFLHFDQUE2QixLQUFLVSwyQkFGcEM7QUFHRSxxQ0FBNkIsS0FBS0ksMkJBSHBDO0FBSUUsNEJBQW9CLEtBQUtLLGtCQUozQjtBQUtFLDBCQUFrQixLQUFLQyxnQkFMekI7QUFNRSxvQkFBWUgsVUFOZCxHQURGO0FBU0Q7Ozs7O2tCQUdZLHlCQUFRcEIsZUFBUixFQUF5QkssU0FBekIsQzs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiY29tcG9uZW50cy9wYWdlcy9zZWFyY2gvU2VhcmNoQmFyLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
