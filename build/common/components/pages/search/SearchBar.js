'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAutosuggest = require('react-autosuggest');

var _reactAutosuggest2 = _interopRequireDefault(_reactAutosuggest);

var _search = require('../../../api/search');

var _search2 = _interopRequireDefault(_search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expression
// s#Using_Special_Characters

var SearchBar = function (_React$Component) {
  _inherits(SearchBar, _React$Component);

  function SearchBar() {
    _classCallCheck(this, SearchBar);

    var _this = _possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call(this));

    _this.onChange = function (event, _ref) {
      var newValue = _ref.newValue,
          method = _ref.method;
      var page = _this.props.page;

      _this.fetchResult(page);
      _this.setState({ value: newValue });
    };

    _this.onSuggestionsFetchRequested = function (_ref2) {
      var value = _ref2.value;

      _this.setState({ suggestions: _this.getSuggestions(value) });
    };

    _this.onSuggestionsClearRequested = function () {
      _this.setState({ suggestions: [] });
    };

    _this.state = {
      result: [{
        title: 'Talk',
        results: [{
          name: 'Tat Gor Gong Talk'
        }]
      }, {
        title: 'Camp',
        results: [{
          name: 'BA OCamp'
        }, {
          name: 'Winter Trip'
        }, {
          name: 'CUTN'
        }]
      }, {
        title: 'Gathering',
        results: [{
          name: 'Candle Night'
        }, {
          name: 'Camp ReU'
        }]
      }],
      value: '',
      suggestions: []
    };
    _this.fetchResult = _this._fetchResult.bind(_this);
    return _this;
  }

  _createClass(SearchBar, [{
    key: '_fetchResult',
    value: function _fetchResult(page) {
      var _this2 = this;

      var _props = this.props,
          apiEngine = _props.apiEngine,
          location = _props.location;


      (0, _search2.default)(apiEngine).list({ page: page }).catch(function (err) {
        console.log(err);
        throw err;
      }).then(function (json) {
        console.log(json);
        _this2.setState({ result: json });
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
}(_react2.default.Component);

exports.default = SearchBar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZXMvc2VhcmNoL1NlYXJjaEJhci5qcyJdLCJuYW1lcyI6WyJTZWFyY2hCYXIiLCJvbkNoYW5nZSIsImV2ZW50IiwibmV3VmFsdWUiLCJtZXRob2QiLCJwYWdlIiwicHJvcHMiLCJmZXRjaFJlc3VsdCIsInNldFN0YXRlIiwidmFsdWUiLCJvblN1Z2dlc3Rpb25zRmV0Y2hSZXF1ZXN0ZWQiLCJzdWdnZXN0aW9ucyIsImdldFN1Z2dlc3Rpb25zIiwib25TdWdnZXN0aW9uc0NsZWFyUmVxdWVzdGVkIiwic3RhdGUiLCJyZXN1bHQiLCJ0aXRsZSIsInJlc3VsdHMiLCJuYW1lIiwiX2ZldGNoUmVzdWx0IiwiYmluZCIsImFwaUVuZ2luZSIsImxvY2F0aW9uIiwibGlzdCIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInRoZW4iLCJqc29uIiwic3RyIiwicmVwbGFjZSIsImVzY2FwZWRWYWx1ZSIsImVzY2FwZVJlZ2V4Q2hhcmFjdGVycyIsInRyaW0iLCJyZWdleCIsIlJlZ0V4cCIsIm1hcCIsInNlY3Rpb24iLCJmaWx0ZXIiLCJ0ZXN0IiwibGVuZ3RoIiwic3VnZ2VzdGlvbiIsImlucHV0UHJvcHMiLCJwbGFjZWhvbGRlciIsImdldFN1Z2dlc3Rpb25WYWx1ZSIsInJlbmRlclN1Z2dlc3Rpb24iLCJyZW5kZXJTZWN0aW9uVGl0bGUiLCJnZXRTZWN0aW9uU3VnZ2VzdGlvbnMiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTtBQUNBOztJQUVNQSxTOzs7QUFFSix1QkFBYztBQUFBOztBQUFBOztBQUFBLFVBaUdkQyxRQWpHYyxHQWlHSCxVQUFDQyxLQUFELFFBQStCO0FBQUEsVUFBdEJDLFFBQXNCLFFBQXRCQSxRQUFzQjtBQUFBLFVBQVpDLE1BQVksUUFBWkEsTUFBWTtBQUFBLFVBQ2xDQyxJQURrQyxHQUN6QixNQUFLQyxLQURvQixDQUNsQ0QsSUFE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dUNBRWtCb0IsTyxFQUFTO0FBQzFCLGFBQ0U7QUFBQTtBQUFBO0FBQVNBLGdCQUFRdEI7QUFBakIsT0FERjtBQUdEOzs7MENBRXFCc0IsTyxFQUFTO0FBQzdCLGFBQU9BLFFBQVFyQixPQUFmO0FBQ0Q7Ozs2QkFnQlE7QUFBQSxtQkFDc0IsS0FBS0gsS0FEM0I7QUFBQSxVQUNBTCxLQURBLFVBQ0FBLEtBREE7QUFBQSxVQUNPRSxXQURQLFVBQ09BLFdBRFA7O0FBRVAsVUFBTWdDLGFBQWE7QUFDakJDLHFCQUFhLGlCQURJO0FBRWpCbkMsb0JBRmlCO0FBR2pCUixrQkFBVSxLQUFLQTtBQUhFLE9BQW5COztBQU1BLGFBQVE7QUFDTixzQkFBYyxJQURSO0FBRU4scUJBQWFVLFdBRlA7QUFHTixxQ0FBNkIsS0FBS0QsMkJBSDVCO0FBSU4scUNBQTZCLEtBQUtHLDJCQUo1QjtBQUtOLDRCQUFvQixLQUFLZ0Msa0JBTG5CO0FBTU4sMEJBQWtCLEtBQUtDLGdCQU5qQjtBQU9OLDRCQUFvQixLQUFLQyxrQkFQbkI7QUFRTiwrQkFBdUIsS0FBS0MscUJBUnRCO0FBU04sb0JBQVlMLFVBVE4sR0FBUjtBQVVEOzs7O0VBbklxQixnQkFBTU0sUzs7a0JBc0lmakQsUyIsImZpbGUiOiJjb21wb25lbnRzL3BhZ2VzL3NlYXJjaC9TZWFyY2hCYXIuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
