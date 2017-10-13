'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouterRedux = require('react-router-redux');

var _reduxLogger = require('redux-logger');

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reactAutosuggest = require('react-autosuggest');

var _reactAutosuggest2 = _interopRequireDefault(_reactAutosuggest);

var _search = require('../../../api/search');

var _search2 = _interopRequireDefault(_search);

var _Resources = require('../../../constants/Resources');

var _Resources2 = _interopRequireDefault(_Resources);

var _errorActions = require('../../../actions/errorActions');

var _searchActions = require('../../../actions/searchActions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expression
// s#Using_Special_Characters
// TODO: connect({search}) is undefined
var SearchBar = (_dec = (0, _reactRedux.connect)(function (_ref) {
  var apiEngine = _ref.apiEngine,
      search = _ref.search,
      dispatch = _ref.dispatch;
  return { apiEngine: apiEngine, search: search, dispatch: dispatch };
}), _dec(_class = function (_Component) {
  _inherits(SearchBar, _Component);

  function SearchBar() {
    _classCallCheck(this, SearchBar);

    var _this = _possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call(this));

    _this.onChange = function (event, _ref2) {
      var newValue = _ref2.newValue,
          method = _ref2.method;
      var page = _this.props.page;

      _this.setState({ value: newValue });
    };

    _this.onSuggestionsFetchRequested = function (_ref3) {
      var value = _ref3.value;

      _this.setState({ suggestions: _this.getSuggestions(value) });
    };

    _this.onSuggestionsClearRequested = function () {
      _this.setState({ suggestions: [] });
    };

    _this.state = {
      result: [],
      value: '',
      suggestions: []
    };
    _this.fetchResult = _this._fetchResult.bind(_this);
    return _this;
  }

  _createClass(SearchBar, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      this.fetchResult(this.state.value);
      console.log(this.props);
    }
  }, {
    key: '_fetchResult',
    value: function _fetchResult(value) {
      var _props = this.props,
          apiEngine = _props.apiEngine,
          type = _props.type,
          dispatch = _props.dispatch;

      (0, _search2.default)(apiEngine).list(value, type).catch(function (err) {
        (0, _errorActions.pushErrors)(err);
        throw err;
      }).then(function (json) {
        dispatch((0, _searchActions.setSearch)(json));
      });
    }
  }, {
    key: 'escapeRegexCharacters',
    value: function escapeRegexCharacters(str) {
      return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
  }, {
    key: 'getSuggestions',
    value: function getSuggestions(value) {
      var escapedValue = this.escapeRegexCharacters(value.trim());

      if (escapedValue === '') {
        return [];
      }

      var regex = new RegExp('^' + escapedValue, 'i');
      return this.state.result.map(function (section) {
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
  }, {
    key: 'getSuggestionValue',
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
    key: 'renderSectionTitle',
    value: function renderSectionTitle(section) {
      return _react2.default.createElement(
        'strong',
        null,
        section.title
      );
    }
  }, {
    key: 'getSectionSuggestions',
    value: function getSectionSuggestions(section) {
      return section.results;
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          value = _state.value,
          suggestions = _state.suggestions;

      var inputProps = {
        placeholder: 'Search by Event',
        value: value,
        onChange: this.onChange
      };

      return _react2.default.createElement(_reactAutosuggest2.default, {
        multiSection: true,
        suggestions: suggestions,
        onSuggestionsFetchRequested: this.onSuggestionsFetchRequested,
        onSuggestionsClearRequested: this.onSuggestionsClearRequested,
        getSuggestionValue: this.getSuggestionValue,
        renderSuggestion: this.renderSuggestion,
        renderSectionTitle: this.renderSectionTitle,
        getSectionSuggestions: this.getSectionSuggestions,
        inputProps: inputProps });
    }
  }]);

  return SearchBar;
}(_react.Component)) || _class);
exports.default = SearchBar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZXMvc2VhcmNoL1NlYXJjaEJhci5qcyJdLCJuYW1lcyI6WyJTZWFyY2hCYXIiLCJhcGlFbmdpbmUiLCJzZWFyY2giLCJkaXNwYXRjaCIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJuZXdWYWx1ZSIsIm1ldGhvZCIsInBhZ2UiLCJwcm9wcyIsInNldFN0YXRlIiwidmFsdWUiLCJvblN1Z2dlc3Rpb25zRmV0Y2hSZXF1ZXN0ZWQiLCJzdWdnZXN0aW9ucyIsImdldFN1Z2dlc3Rpb25zIiwib25TdWdnZXN0aW9uc0NsZWFyUmVxdWVzdGVkIiwic3RhdGUiLCJyZXN1bHQiLCJmZXRjaFJlc3VsdCIsIl9mZXRjaFJlc3VsdCIsImJpbmQiLCJwcmV2UHJvcHMiLCJjb25zb2xlIiwibG9nIiwidHlwZSIsImxpc3QiLCJjYXRjaCIsImVyciIsInRoZW4iLCJqc29uIiwic3RyIiwicmVwbGFjZSIsImVzY2FwZWRWYWx1ZSIsImVzY2FwZVJlZ2V4Q2hhcmFjdGVycyIsInRyaW0iLCJyZWdleCIsIlJlZ0V4cCIsIm1hcCIsInRpdGxlIiwic2VjdGlvbiIsInJlc3VsdHMiLCJmaWx0ZXIiLCJ0ZXN0IiwibmFtZSIsImxlbmd0aCIsInN1Z2dlc3Rpb24iLCJpbnB1dFByb3BzIiwicGxhY2Vob2xkZXIiLCJnZXRTdWdnZXN0aW9uVmFsdWUiLCJyZW5kZXJTdWdnZXN0aW9uIiwicmVuZGVyU2VjdGlvblRpdGxlIiwiZ2V0U2VjdGlvblN1Z2dlc3Rpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0lBRU1BLFMsV0FETCx5QkFBUTtBQUFBLE1BQUdDLFNBQUgsUUFBR0EsU0FBSDtBQUFBLE1BQWNDLE1BQWQsUUFBY0EsTUFBZDtBQUFBLE1BQXNCQyxRQUF0QixRQUFzQkEsUUFBdEI7QUFBQSxTQUFzQyxF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UUQ7QUFBakIsT0FERjtBQUdEOzs7MENBRXFCQyxPLEVBQVM7QUFDN0IsYUFBT0EsUUFBUUMsT0FBZjtBQUNEOzs7NkJBZVE7QUFBQSxtQkFDc0IsS0FBS3hCLEtBRDNCO0FBQUEsVUFDQUwsS0FEQSxVQUNBQSxLQURBO0FBQUEsVUFDT0UsV0FEUCxVQUNPQSxXQURQOztBQUVQLFVBQU1pQyxhQUFhO0FBQ2pCQyxxQkFBYSxpQkFESTtBQUVqQnBDLG9CQUZpQjtBQUdqQlAsa0JBQVUsS0FBS0E7QUFIRSxPQUFuQjs7QUFNQSxhQUFRO0FBQ04sc0JBQWMsSUFEUjtBQUVOLHFCQUFhUyxXQUZQO0FBR04scUNBQTZCLEtBQUtELDJCQUg1QjtBQUlOLHFDQUE2QixLQUFLRywyQkFKNUI7QUFLTiw0QkFBb0IsS0FBS2lDLGtCQUxuQjtBQU1OLDBCQUFrQixLQUFLQyxnQkFOakI7QUFPTiw0QkFBb0IsS0FBS0Msa0JBUG5CO0FBUU4sK0JBQXVCLEtBQUtDLHFCQVJ0QjtBQVNOLG9CQUFZTCxVQVROLEdBQVI7QUFVRDs7Ozs7a0JBR1k5QyxTIiwiZmlsZSI6ImNvbXBvbmVudHMvcGFnZXMvc2VhcmNoL1NlYXJjaEJhci5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
