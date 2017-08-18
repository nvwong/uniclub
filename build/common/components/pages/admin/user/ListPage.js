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

var _Resources = require('../../../../constants/Resources');

var _Resources2 = _interopRequireDefault(_Resources);

var _user = require('../../../../api/user');

var _user2 = _interopRequireDefault(_user);

var _errorActions = require('../../../../actions/errorActions');

var _pageActions = require('../../../../actions/pageActions');

var _userActions = require('../../../../actions/userActions');

var _AdminPageLayout = require('../../../layouts/AdminPageLayout');

var _AdminPageLayout2 = _interopRequireDefault(_AdminPageLayout);

var _BsPager = require('../../../utils/BsPager');

var _BsPager2 = _interopRequireDefault(_BsPager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListPage = function (_Component) {
  _inherits(ListPage, _Component);

  function ListPage() {
    _classCallCheck(this, ListPage);

    var _this = _possibleConstructorReturn(this, (ListPage.__proto__ || Object.getPrototypeOf(ListPage)).call(this));

    _this.handlePageChange = _this._handlePageChange.bind(_this);
    _this.fetchUsers = _this._fetchUsers.bind(_this);
    return _this;
  }

  _createClass(ListPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var location = this.props.location;


      this.fetchUsers(location.query.page || 1);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props = this.props,
          page = _props.page,
          users = _props.users;


      if (users.length === 0 && prevProps.page.current !== page.current) {
        this.fetchUsers(page.current);
      }
    }
  }, {
    key: '_handlePageChange',
    value: function _handlePageChange(pageId) {
      var dispatch = this.props.dispatch;


      dispatch((0, _pageActions.setCrrentPage)(_Resources2.default.USER, pageId));
    }
  }, {
    key: '_fetchUsers',
    value: function _fetchUsers(page) {
      var _props2 = this.props,
          dispatch = _props2.dispatch,
          apiEngine = _props2.apiEngine,
          location = _props2.location;


      (0, _user2.default)(apiEngine).list({ page: page }).catch(function (err) {
        dispatch((0, _errorActions.pushErrors)(err));
        throw err;
      }).then(function (json) {
        dispatch((0, _userActions.setUsers)(json));
        dispatch((0, _reactRouterRedux.push)({
          pathname: location.pathname,
          query: { page: json.page.current }
        }));
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          users = _props3.users,
          page = _props3.page;


      return _react2.default.createElement(
        _AdminPageLayout2.default,
        null,
        _react2.default.createElement(
          _PageHeader2.default,
          null,
          'User List (',
          page.current + ' / ' + page.total,
          ')'
        ),
        _react2.default.createElement(
          _Table2.default,
          { striped: true, bordered: true },
          _react2.default.createElement(
            'thead',
            null,
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                'ID'
              ),
              _react2.default.createElement(
                'th',
                null,
                'Avatar'
              ),
              _react2.default.createElement(
                'th',
                null,
                'Name'
              ),
              _react2.default.createElement(
                'th',
                null,
                'Email'
              ),
              _react2.default.createElement(
                'th',
                null,
                'Role'
              ),
              _react2.default.createElement(
                'th',
                null,
                'Created At'
              )
            )
          ),
          _react2.default.createElement(
            'tbody',
            null,
            users.map(function (user) {
              return _react2.default.createElement(
                'tr',
                { key: user._id },
                _react2.default.createElement(
                  'td',
                  null,
                  user._id
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement('img', {
                    src: user.avatarURL,
                    style: {
                      maxHeight: 32
                    }
                  })
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  user.name
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  user.email.value
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  user.role
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  user.createdAt
                )
              );
            })
          )
        ),
        _react2.default.createElement(_BsPager2.default, {
          page: page,
          onPageChange: this.handlePageChange
        })
      );
    }
  }]);

  return ListPage;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (_ref) {
  var apiEngine = _ref.apiEngine,
      pagination = _ref.pagination,
      entity = _ref.entity;
  var page = pagination.users.page;

  var userPages = pagination.users.pages[page.current] || { ids: [] };
  var users = userPages.ids.map(function (id) {
    return entity.users[id];
  });

  return {
    apiEngine: apiEngine,
    users: users,
    page: page
  };
})(ListPage);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZXMvYWRtaW4vdXNlci9MaXN0UGFnZS5qcyJdLCJuYW1lcyI6WyJMaXN0UGFnZSIsImhhbmRsZVBhZ2VDaGFuZ2UiLCJfaGFuZGxlUGFnZUNoYW5nZSIsImJpbmQiLCJmZXRjaFVzZXJzIiwiX2ZldGNoVXNlcnMiLCJsb2NhdGlvbiIsInByb3BzIiwicXVlcnkiLCJwYWdlIiwicHJldlByb3BzIiwidXNlcnMiLCJsZW5ndGgiLCJjdXJyZW50IiwicGFnZUlkIiwiZGlzcGF0Y2giLCJVU0VSIiwiYXBpRW5naW5lIiwibGlzdCIsImNhdGNoIiwiZXJyIiwidGhlbiIsImpzb24iLCJwYXRobmFtZSIsInRvdGFsIiwibWFwIiwidXNlciIsIl9pZCIsImF2YXRhclVSTCIsIm1heEhlaWdodCIsIm5hbWUiLCJlbWFpbCIsInZhbHVlIiwicm9sZSIsImNyZWF0ZWRBdCIsInBhZ2luYXRpb24iLCJlbnRpdHkiLCJ1c2VyUGFnZXMiLCJwYWdlcyIsImlkcyIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsUTs7O0FBQ0osc0JBQWM7QUFBQTs7QUFBQTs7QUFFWixVQUFLQyxnQkFBTCxHQUF3QixNQUFLQyxpQkFBTCxDQUF1QkMsSUFBdkIsT0FBeEI7QUFDQSxVQUFLQyxVQUFMLEdBQWtCLE1BQUtDLFdBQUwsQ0FBaUJGLElBQWpCLE9BQWxCO0FBSFk7QUFJYjs7Ozt3Q0FFbUI7QUFBQSxVQUNaRyxRQURZLEdBQ0MsS0FBS0MsS0FETixDQUNaRCxRQURZOzs7QUFHbEIsV0FBS0YsVUFBTCxDQUFnQkUsU0FBU0UsS0FBVCxDQUFlQyxJQUFmLElBQXVCLENBQXZDO0FBQ0Q7Ozt1Q0FFa0JDLFMsRUFBVztBQUFBLG1CQUNOLEtBQUtILEtBREM7QUFBQSxVQUN0QkUsSUFEc0IsVUFDdEJBLElBRHNCO0FBQUEsVUFDaEJFLEtBRGdCLFVBQ2hCQSxLQURnQjs7O0FBRzVCLFVBQUlBLE1BQU1DLE1BQU4sS0FBaUIsQ0FBakIsSUFBc0JGLFVBQVVELElBQVYsQ0FBZUksT0FBZixLQUEyQkosS0FBS0ksT0FBMUQsRUFBbUU7QUFDakUsYUFBS1QsVUFBTCxDQUFnQkssS0FBS0ksT0FBckI7QUFDRDtBQUNGOzs7c0NBRWlCQyxNLEVBQVE7QUFBQSxVQUNsQkMsUUFEa0IsR0FDTCxLQUFLUixLQURBLENBQ2xCUSxRQURrQjs7O0FBR3hCQSxlQUFTLGdDQUFjLG9CQUFVQyxJQUF4QixFQUE4QkYsTUFBOUIsQ0FBVDtBQUNEOzs7Z0NBRVdMLEksRUFBTTtBQUFBLG9CQUN3QixLQUFLRixLQUQ3QjtBQUFBLFVBQ1ZRLFFBRFUsV0FDVkEsUUFEVTtBQUFBLFVBQ0FFLFNBREEsV0FDQUEsU0FEQTtBQUFBLFVBQ1dYLFFBRFgsV0FDV0EsUUFEWDs7O0FBR2hCLDBCQUFRVyxTQUFSLEVBQ0dDLElBREgsQ0FDUSxFQUFFVCxVQUFGLEVBRFIsRUFFR1UsS0FGSCxDQUVTLFVBQUNDLEdBQUQsRUFBUztBQUNkTCxpQkFBUyw4QkFBV0ssR0FBWCxDQUFUO0FBQ0EsY0FBTUEsR0FBTjtBQUNELE9BTEgsRUFNR0MsSUFOSCxDQU1RLFVBQUNDLElBQUQsRUFBVTtBQUNkUCxpQkFBUywyQkFBU08sSUFBVCxDQUFUO0FBQ0FQLGlCQUFTLDRCQUFLO0FBQ1pRLG9CQUFVakIsU0FBU2lCLFFBRFA7QUFFWmYsaUJBQU8sRUFBRUMsTUFBTWEsS0FBS2IsSUFBTCxDQUFVSSxPQUFsQjtBQUZLLFNBQUwsQ0FBVDtBQUlELE9BWkg7QUFhRDs7OzZCQUVRO0FBQUEsb0JBQ2UsS0FBS04sS0FEcEI7QUFBQSxVQUNESSxLQURDLFdBQ0RBLEtBREM7QUFBQSxVQUNNRixJQUROLFdBQ01BLElBRE47OztBQUdQLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBMkJBLGVBQUtJLE9BQWhDLFdBQTZDSixLQUFLZSxLQUFsRDtBQUFBO0FBQUEsU0FERjtBQUVFO0FBQUE7QUFBQSxZQUFPLGFBQVAsRUFBZSxjQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGO0FBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGO0FBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGO0FBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBREYsV0FERjtBQVdFO0FBQUE7QUFBQTtBQUNHYixrQkFBTWMsR0FBTixDQUFVLFVBQUNDLElBQUQ7QUFBQSxxQkFDVDtBQUFBO0FBQUEsa0JBQUksS0FBS0EsS0FBS0MsR0FBZDtBQUNFO0FBQUE7QUFBQTtBQUFLRCx1QkFBS0M7QUFBVixpQkFERjtBQUVFO0FBQUE7QUFBQTtBQUNFO0FBQ0UseUJBQUtELEtBQUtFLFNBRFo7QUFFRSwyQkFBTztBQUNMQyxpQ0FBVztBQUROO0FBRlQ7QUFERixpQkFGRjtBQVVFO0FBQUE7QUFBQTtBQUFLSCx1QkFBS0k7QUFBVixpQkFWRjtBQVdFO0FBQUE7QUFBQTtBQUFLSix1QkFBS0ssS0FBTCxDQUFXQztBQUFoQixpQkFYRjtBQVlFO0FBQUE7QUFBQTtBQUFLTix1QkFBS087QUFBVixpQkFaRjtBQWFFO0FBQUE7QUFBQTtBQUFLUCx1QkFBS1E7QUFBVjtBQWJGLGVBRFM7QUFBQSxhQUFWO0FBREg7QUFYRixTQUZGO0FBaUNFO0FBQ0UsZ0JBQU16QixJQURSO0FBRUUsd0JBQWMsS0FBS1I7QUFGckI7QUFqQ0YsT0FERjtBQXdDRDs7Ozs7O2tCQUdZLHlCQUFRLGdCQUF1QztBQUFBLE1BQXBDZ0IsU0FBb0MsUUFBcENBLFNBQW9DO0FBQUEsTUFBekJrQixVQUF5QixRQUF6QkEsVUFBeUI7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7QUFBQSxNQUN0RDNCLElBRHNELEdBQzdDMEIsV0FBV3hCLEtBRGtDLENBQ3RERixJQURzRDs7QUFFNUQsTUFBSTRCLFlBQVlGLFdBQVd4QixLQUFYLENBQWlCMkIsS0FBakIsQ0FBdUI3QixLQUFLSSxPQUE1QixLQUF3QyxFQUFFMEIsS0FBSyxFQUFQLEVBQXhEO0FBQ0EsTUFBSTVCLFFBQVEwQixVQUFVRSxHQUFWLENBQWNkLEdBQWQsQ0FBa0I7QUFBQSxXQUFNVyxPQUFPekIsS0FBUCxDQUFhNkIsRUFBYixDQUFOO0FBQUEsR0FBbEIsQ0FBWjs7QUFFQSxTQUFPO0FBQ0x2Qix3QkFESztBQUVMTixnQkFGSztBQUdMRjtBQUhLLEdBQVA7QUFLRCxDQVZjLEVBVVpULFFBVlksQyIsImZpbGUiOiJjb21wb25lbnRzL3BhZ2VzL2FkbWluL3VzZXIvTGlzdFBhZ2UuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
