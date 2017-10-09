'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouterRedux = require('react-router-redux');

var _Table = require('react-bootstrap/lib/Table');

var _Table2 = _interopRequireDefault(_Table);

var _Resources = require('../../../constants/Resources');

var _Resources2 = _interopRequireDefault(_Resources);

var _search = require('../../../api/search');

var _search2 = _interopRequireDefault(_search);

var _PageHeader = require('react-bootstrap/lib/PageHeader');

var _PageHeader2 = _interopRequireDefault(_PageHeader);

var _PageLayout = require('../../layouts/PageLayout');

var _PageLayout2 = _interopRequireDefault(_PageLayout);

var _BsPager = require('../../utils/BsPager');

var _BsPager2 = _interopRequireDefault(_BsPager);

var _errorActions = require('../../../actions/errorActions');

var _pageActions = require('../../../actions/pageActions');

var _SearchBar = require('./SearchBar');

var _SearchBar2 = _interopRequireDefault(_SearchBar);

var _searchActions = require('../../../actions/searchActions');

require('./styles.css');

require('./styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchItem = function (_Component) {
  _inherits(SearchItem, _Component);

  function SearchItem() {
    _classCallCheck(this, SearchItem);

    return _possibleConstructorReturn(this, (SearchItem.__proto__ || Object.getPrototypeOf(SearchItem)).apply(this, arguments));
  }

  return SearchItem;
}(_react.Component);

var SearchPage = function (_Component2) {
  _inherits(SearchPage, _Component2);

  function SearchPage() {
    _classCallCheck(this, SearchPage);

    var _this2 = _possibleConstructorReturn(this, (SearchPage.__proto__ || Object.getPrototypeOf(SearchPage)).call(this));

    _this2.handlePageChange = _this2._handlePageChange.bind(_this2);
    _this2.fetchSearchItems = _this2._fetchSearchItems.bind(_this2);
    return _this2;
  }

  _createClass(SearchPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var location = this.props.location;


      this.fetchSearchItems(location.query.page || 1);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props = this.props,
          page = _props.page,
          SearchItems = _props.SearchItems;


      if (SearchItems.length === 0 && prevProps.page.current !== page.current) {
        this.fetchSearchItems(page.current);
      }
    }
  }, {
    key: '_handlePageChange',
    value: function _handlePageChange(pageId) {
      var dispatch = this.props.dispatch;


      dispatch((0, _pageActions.setCrrentPage)(_Resources2.default.SEARCH, pageId));
    }
  }, {
    key: '_fetchSearchItems',
    value: function _fetchSearchItems(page) {
      var _props2 = this.props,
          dispatch = _props2.dispatch,
          apiEngine = _props2.apiEngine,
          location = _props2.location;


      (0, _search2.default)(apiEngine).list({ page: page }).catch(function (err) {
        dispatch((0, _errorActions.pushErrors)(err));
        throw err;
      }).then(function (json) {
        dispatch((0, _searchActions.setSearchItems)(json));
        dispatch((0, _reactRouterRedux.push)({
          pathname: location.pathname,
          query: { page: json.page.current }
        }));
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var page = this.props.page;


      return _react2.default.createElement(
        _PageLayout2.default,
        null,
        _react2.default.createElement(
          _PageHeader2.default,
          null,
          'Search'
        ),
        _react2.default.createElement(
          _Table2.default,
          { striped: true },
          _react2.default.createElement(
            'thead',
            null,
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'td',
                null,
                _react2.default.createElement(_SearchBar2.default, null)
              ),
              _react2.default.createElement(
                'td',
                null,
                _react2.default.createElement(_SearchBar2.default, null)
              )
            )
          ),
          _react2.default.createElement(
            'tbody',
            null,
            this.props.SearchItems.map(function (Search) {
              return _react2.default.createElement(
                'tr',
                null,
                search.date,
                _react2.default.createElement(SearchItem, null)
              );
            })
          )
        )
      );
    }
  }]);

  return SearchPage;
}(_react.Component);

;

exports.default = (0, _reactRedux.connect)(function (_ref) {
  var apiEngine = _ref.apiEngine,
      pagination = _ref.pagination,
      entity = _ref.entity;
  var page = pagination.search.page;

  var SearchPages = pagination.search.pages[page.current] || { ids: [] };
  var SearchItems = SearchPages.ids.map(function (id) {
    return entity.SearchItems[id];
  });

  return {
    apiEngine: apiEngine,
    SearchItems: SearchItems,
    page: page
  };
})(SearchPage);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZXMvc2VhcmNoL1NlYXJjaFBhZ2UuanMiXSwibmFtZXMiOlsiU2VhcmNoSXRlbSIsIlNlYXJjaFBhZ2UiLCJoYW5kbGVQYWdlQ2hhbmdlIiwiX2hhbmRsZVBhZ2VDaGFuZ2UiLCJiaW5kIiwiZmV0Y2hTZWFyY2hJdGVtcyIsIl9mZXRjaFNlYXJjaEl0ZW1zIiwibG9jYXRpb24iLCJwcm9wcyIsInF1ZXJ5IiwicGFnZSIsInByZXZQcm9wcyIsIlNlYXJjaEl0ZW1zIiwibGVuZ3RoIiwiY3VycmVudCIsInBhZ2VJZCIsImRpc3BhdGNoIiwiU0VBUkNIIiwiYXBpRW5naW5lIiwibGlzdCIsImNhdGNoIiwiZXJyIiwidGhlbiIsImpzb24iLCJwYXRobmFtZSIsIm1hcCIsIlNlYXJjaCIsInNlYXJjaCIsImRhdGUiLCJwYWdpbmF0aW9uIiwiZW50aXR5IiwiU2VhcmNoUGFnZXMiLCJwYWdlcyIsImlkcyIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztJQUVNQSxVOzs7Ozs7Ozs7Ozs7SUFJQUMsVTs7O0FBQ0osd0JBQWM7QUFBQTs7QUFBQTs7QUFFWixXQUFLQyxnQkFBTCxHQUF3QixPQUFLQyxpQkFBTCxDQUF1QkMsSUFBdkIsUUFBeEI7QUFDQSxXQUFLQyxnQkFBTCxHQUF3QixPQUFLQyxpQkFBTCxDQUF1QkYsSUFBdkIsUUFBeEI7QUFIWTtBQUliOzs7O3dDQUVtQjtBQUFBLFVBQ1pHLFFBRFksR0FDQyxLQUFLQyxLQUROLENBQ1pELFFBRFk7OztBQUdsQixXQUFLRixnQkFBTCxDQUFzQkUsU0FBU0UsS0FBVCxDQUFlQyxJQUFmLElBQXVCLENBQTdDO0FBQ0Q7Ozt1Q0FFa0JDLFMsRUFBVztBQUFBLG1CQUNBLEtBQUtILEtBREw7QUFBQSxVQUN0QkUsSUFEc0IsVUFDdEJBLElBRHNCO0FBQUEsVUFDaEJFLFdBRGdCLFVBQ2hCQSxXQURnQjs7O0FBRzVCLFVBQUlBLFlBQVlDLE1BQVosS0FBdUIsQ0FBdkIsSUFBNEJGLFVBQVVELElBQVYsQ0FBZUksT0FBZixLQUEyQkosS0FBS0ksT0FBaEUsRUFBeUU7QUFDdkUsYUFBS1QsZ0JBQUwsQ0FBc0JLLEtBQUtJLE9BQTNCO0FBQ0Q7QUFDRjs7O3NDQUVpQkMsTSxFQUFRO0FBQUEsVUFDbEJDLFFBRGtCLEdBQ0wsS0FBS1IsS0FEQSxDQUNsQlEsUUFEa0I7OztBQUd4QkEsZUFBUyxnQ0FBYyxvQkFBVUMsTUFBeEIsRUFBZ0NGLE1BQWhDLENBQVQ7QUFDRDs7O3NDQUVpQkwsSSxFQUFNO0FBQUEsb0JBQ2tCLEtBQUtGLEtBRHZCO0FBQUEsVUFDaEJRLFFBRGdCLFdBQ2hCQSxRQURnQjtBQUFBLFVBQ05FLFNBRE0sV0FDTkEsU0FETTtBQUFBLFVBQ0tYLFFBREwsV0FDS0EsUUFETDs7O0FBR3RCLDRCQUFVVyxTQUFWLEVBQ0dDLElBREgsQ0FDUSxFQUFFVCxVQUFGLEVBRFIsRUFFR1UsS0FGSCxDQUVTLFVBQUNDLEdBQUQsRUFBUztBQUNkTCxpQkFBUyw4QkFBV0ssR0FBWCxDQUFUO0FBQ0EsY0FBTUEsR0FBTjtBQUNELE9BTEgsRUFNR0MsSUFOSCxDQU1RLFVBQUNDLElBQUQsRUFBVTtBQUNkUCxpQkFBUyxtQ0FBZU8sSUFBZixDQUFUO0FBQ0FQLGlCQUFTLDRCQUFLO0FBQ1pRLG9CQUFVakIsU0FBU2lCLFFBRFA7QUFFWmYsaUJBQU8sRUFBRUMsTUFBTWEsS0FBS2IsSUFBTCxDQUFVSSxPQUFsQjtBQUZLLFNBQUwsQ0FBVDtBQUlELE9BWkg7QUFhRDs7OzZCQUVRO0FBQUEsVUFDREosSUFEQyxHQUNRLEtBQUtGLEtBRGIsQ0FDREUsSUFEQzs7O0FBR1AsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFJRTtBQUFBO0FBQUEsWUFBTyxhQUFQO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFERixlQURGO0FBSUU7QUFBQTtBQUFBO0FBQ0U7QUFERjtBQUpGO0FBREYsV0FERjtBQVdFO0FBQUE7QUFBQTtBQUNHLGlCQUFLRixLQUFMLENBQVdJLFdBQVgsQ0FBdUJhLEdBQXZCLENBQTJCLFVBQUNDLE1BQUQ7QUFBQSxxQkFDMUI7QUFBQTtBQUFBO0FBQ0dDLHVCQUFPQyxJQURWO0FBRUUsOENBQUMsVUFBRDtBQUZGLGVBRDBCO0FBQUEsYUFBM0I7QUFESDtBQVhGO0FBSkYsT0FERjtBQTJCRDs7Ozs7O0FBQ0Y7O2tCQUVjLHlCQUFRLGdCQUF1QztBQUFBLE1BQXBDVixTQUFvQyxRQUFwQ0EsU0FBb0M7QUFBQSxNQUF6QlcsVUFBeUIsUUFBekJBLFVBQXlCO0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhO0FBQUEsTUFDdERwQixJQURzRCxHQUM3Q21CLFdBQVdGLE1BRGtDLENBQ3REakIsSUFEc0Q7O0FBRTVELE1BQUlxQixjQUFjRixXQUFXRixNQUFYLENBQWtCSyxLQUFsQixDQUF3QnRCLEtBQUtJLE9BQTdCLEtBQXlDLEVBQUVtQixLQUFLLEVBQVAsRUFBM0Q7QUFDQSxNQUFJckIsY0FBY21CLFlBQVlFLEdBQVosQ0FBZ0JSLEdBQWhCLENBQW9CO0FBQUEsV0FBTUssT0FBT2xCLFdBQVAsQ0FBbUJzQixFQUFuQixDQUFOO0FBQUEsR0FBcEIsQ0FBbEI7O0FBRUEsU0FBTztBQUNMaEIsd0JBREs7QUFFTE4sNEJBRks7QUFHTEY7QUFISyxHQUFQO0FBS0QsQ0FWYyxFQVVaVCxVQVZZLEMiLCJmaWxlIjoiY29tcG9uZW50cy9wYWdlcy9zZWFyY2gvU2VhcmNoUGFnZS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
