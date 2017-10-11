'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouterRedux = require('react-router-redux');

var _PageHeader = require('react-bootstrap/lib/PageHeader');

var _PageHeader2 = _interopRequireDefault(_PageHeader);

var _Table = require('react-bootstrap/lib/Table');

var _Table2 = _interopRequireDefault(_Table);

var _Resources = require('../../../constants/Resources');

var _Resources2 = _interopRequireDefault(_Resources);

var _search = require('../../../api/search');

var _search2 = _interopRequireDefault(_search);

var _errorActions = require('../../../actions/errorActions');

var _pageActions = require('../../../actions/pageActions');

var _searchActions = require('../../../actions/searchActions');

var _PageLayout = require('../../layouts/PageLayout');

var _PageLayout2 = _interopRequireDefault(_PageLayout);

var _BsPager = require('../../utils/BsPager');

var _BsPager2 = _interopRequireDefault(_BsPager);

var _SearchBar = require('./SearchBar');

var _SearchBar2 = _interopRequireDefault(_SearchBar);

require('./styles.css');

require('./styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import Autosuggest from 'react-autosuggest';


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
          value = _props2.value;
      //
      // searchAPI(apiEngine)
      //   .search(value, { page })
      //   .catch((err) => {
      //     dispatch(pushErrors(err));
      //     throw err;
      //   })
      //   .then((json) => {
      //     dispatch(setSearch(json));
      //     dispatch(push({
      //       pathname: location.pathname,
      //       query: { page: json.page.current },
      //     }));
      //   });
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
                _react2.default.createElement(_SearchBar2.default, {
                  type: 'name'
                })
              ),
              _react2.default.createElement(
                'td',
                null,
                _react2.default.createElement(_SearchBar2.default, {
                  type: 'tag'
                })
              )
            )
          ),
          _react2.default.createElement(
            'tbody',
            null,
            this.props.SearchItems.map(function (search) {
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
      entity = _ref.entity,
      search = _ref.search;
  var page = pagination.search.page;

  var SearchPages = pagination.search.pages[page.current] || { ids: [] };
  var SearchItems = SearchPages.ids.map(function (id) {
    return entity.SearchItems[id];
  });
  // console.log(pagination);
  return {
    apiEngine: apiEngine,
    SearchItems: SearchItems,
    page: page
  };
})(SearchPage);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZXMvc2VhcmNoL1NlYXJjaFBhZ2UuanMiXSwibmFtZXMiOlsiU2VhcmNoSXRlbSIsIlNlYXJjaFBhZ2UiLCJoYW5kbGVQYWdlQ2hhbmdlIiwiX2hhbmRsZVBhZ2VDaGFuZ2UiLCJiaW5kIiwiZmV0Y2hTZWFyY2hJdGVtcyIsIl9mZXRjaFNlYXJjaEl0ZW1zIiwibG9jYXRpb24iLCJwcm9wcyIsInF1ZXJ5IiwicGFnZSIsInByZXZQcm9wcyIsIlNlYXJjaEl0ZW1zIiwibGVuZ3RoIiwiY3VycmVudCIsInBhZ2VJZCIsImRpc3BhdGNoIiwiU0VBUkNIIiwiYXBpRW5naW5lIiwidmFsdWUiLCJtYXAiLCJzZWFyY2giLCJkYXRlIiwicGFnaW5hdGlvbiIsImVudGl0eSIsIlNlYXJjaFBhZ2VzIiwicGFnZXMiLCJpZHMiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7O0FBQ0E7Ozs7Ozs7OztBQUZBOzs7SUFJTUEsVTs7Ozs7Ozs7Ozs7O0lBSUFDLFU7OztBQUNKLHdCQUFjO0FBQUE7O0FBQUE7O0FBRVosV0FBS0MsZ0JBQUwsR0FBd0IsT0FBS0MsaUJBQUwsQ0FBdUJDLElBQXZCLFFBQXhCO0FBQ0EsV0FBS0MsZ0JBQUwsR0FBd0IsT0FBS0MsaUJBQUwsQ0FBdUJGLElBQXZCLFFBQXhCO0FBSFk7QUFJYjs7Ozt3Q0FFbUI7QUFBQSxVQUNaRyxRQURZLEdBQ0MsS0FBS0MsS0FETixDQUNaRCxRQURZOzs7QUFHbEIsV0FBS0YsZ0JBQUwsQ0FBc0JFLFNBQVNFLEtBQVQsQ0FBZUMsSUFBZixJQUF1QixDQUE3QztBQUNEOzs7dUNBRWtCQyxTLEVBQVc7QUFBQSxtQkFDQSxLQUFLSCxLQURMO0FBQUEsVUFDdEJFLElBRHNCLFVBQ3RCQSxJQURzQjtBQUFBLFVBQ2hCRSxXQURnQixVQUNoQkEsV0FEZ0I7OztBQUc1QixVQUFJQSxZQUFZQyxNQUFaLEtBQXVCLENBQXZCLElBQTRCRixVQUFVRCxJQUFWLENBQWVJLE9BQWYsS0FBMkJKLEtBQUtJLE9BQWhFLEVBQXlFO0FBQ3ZFLGFBQUtULGdCQUFMLENBQXNCSyxLQUFLSSxPQUEzQjtBQUNEO0FBQ0Y7OztzQ0FFaUJDLE0sRUFBUTtBQUFBLFVBQ2xCQyxRQURrQixHQUNMLEtBQUtSLEtBREEsQ0FDbEJRLFFBRGtCOzs7QUFHeEJBLGVBQVMsZ0NBQWMsb0JBQVVDLE1BQXhCLEVBQWdDRixNQUFoQyxDQUFUO0FBQ0Q7OztzQ0FFaUJMLEksRUFBTTtBQUFBLG9CQUNlLEtBQUtGLEtBRHBCO0FBQUEsVUFDaEJRLFFBRGdCLFdBQ2hCQSxRQURnQjtBQUFBLFVBQ05FLFNBRE0sV0FDTkEsU0FETTtBQUFBLFVBQ0tDLEtBREwsV0FDS0EsS0FETDtBQUV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7Ozs2QkFFUTtBQUFBLFVBQ0RULElBREMsR0FDUSxLQUFLRixLQURiLENBQ0RFLElBREM7OztBQUdQLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGO0FBSUU7QUFBQTtBQUFBLFlBQU8sYUFBUDtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQ0Usd0JBQUs7QUFEUDtBQURGLGVBREY7QUFNRTtBQUFBO0FBQUE7QUFDRTtBQUNFLHdCQUFLO0FBRFA7QUFERjtBQU5GO0FBREYsV0FERjtBQWVFO0FBQUE7QUFBQTtBQUNHLGlCQUFLRixLQUFMLENBQVdJLFdBQVgsQ0FBdUJRLEdBQXZCLENBQTJCLFVBQUNDLE1BQUQ7QUFBQSxxQkFDMUI7QUFBQTtBQUFBO0FBQ0dBLHVCQUFPQyxJQURWO0FBRUUsOENBQUMsVUFBRDtBQUZGLGVBRDBCO0FBQUEsYUFBM0I7QUFESDtBQWZGO0FBSkYsT0FERjtBQStCRDs7Ozs7O0FBQ0Y7O2tCQUVjLHlCQUFRLGdCQUErQztBQUFBLE1BQTVDSixTQUE0QyxRQUE1Q0EsU0FBNEM7QUFBQSxNQUFqQ0ssVUFBaUMsUUFBakNBLFVBQWlDO0FBQUEsTUFBckJDLE1BQXFCLFFBQXJCQSxNQUFxQjtBQUFBLE1BQWJILE1BQWEsUUFBYkEsTUFBYTtBQUFBLE1BQzlEWCxJQUQ4RCxHQUNyRGEsV0FBV0YsTUFEMEMsQ0FDOURYLElBRDhEOztBQUVwRSxNQUFJZSxjQUFjRixXQUFXRixNQUFYLENBQWtCSyxLQUFsQixDQUF3QmhCLEtBQUtJLE9BQTdCLEtBQXlDLEVBQUVhLEtBQUssRUFBUCxFQUEzRDtBQUNBLE1BQUlmLGNBQWNhLFlBQVlFLEdBQVosQ0FBZ0JQLEdBQWhCLENBQW9CO0FBQUEsV0FBTUksT0FBT1osV0FBUCxDQUFtQmdCLEVBQW5CLENBQU47QUFBQSxHQUFwQixDQUFsQjtBQUNBO0FBQ0EsU0FBTztBQUNMVix3QkFESztBQUVMTiw0QkFGSztBQUdMRjtBQUhLLEdBQVA7QUFLRCxDQVZjLEVBVVpULFVBVlksQyIsImZpbGUiOiJjb21wb25lbnRzL3BhZ2VzL3NlYXJjaC9TZWFyY2hQYWdlLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
