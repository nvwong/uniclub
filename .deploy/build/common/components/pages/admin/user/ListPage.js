'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _Button = require('react-bootstrap/lib/Button');

var _Button2 = _interopRequireDefault(_Button);

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
                'Username'
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
                'Edit'
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
                  user.firstname,
                  ' ',
                  user.lastname
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  user.username
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
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/user/' + user.username + '/edit', params: user },
                    _react2.default.createElement(
                      _Button2.default,
                      { bsStyle: 'primary' },
                      'Edit'
                    )
                  )
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZXMvYWRtaW4vdXNlci9MaXN0UGFnZS5qcyJdLCJuYW1lcyI6WyJMaXN0UGFnZSIsImhhbmRsZVBhZ2VDaGFuZ2UiLCJfaGFuZGxlUGFnZUNoYW5nZSIsImJpbmQiLCJmZXRjaFVzZXJzIiwiX2ZldGNoVXNlcnMiLCJsb2NhdGlvbiIsInByb3BzIiwicXVlcnkiLCJwYWdlIiwicHJldlByb3BzIiwidXNlcnMiLCJsZW5ndGgiLCJjdXJyZW50IiwicGFnZUlkIiwiZGlzcGF0Y2giLCJVU0VSIiwiYXBpRW5naW5lIiwibGlzdCIsImNhdGNoIiwiZXJyIiwidGhlbiIsImpzb24iLCJwYXRobmFtZSIsInRvdGFsIiwibWFwIiwidXNlciIsIl9pZCIsImF2YXRhclVSTCIsIm1heEhlaWdodCIsImZpcnN0bmFtZSIsImxhc3RuYW1lIiwidXNlcm5hbWUiLCJlbWFpbCIsInZhbHVlIiwicm9sZSIsInBhZ2luYXRpb24iLCJlbnRpdHkiLCJ1c2VyUGFnZXMiLCJwYWdlcyIsImlkcyIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxROzs7QUFDSixzQkFBYztBQUFBOztBQUFBOztBQUVaLFVBQUtDLGdCQUFMLEdBQXdCLE1BQUtDLGlCQUFMLENBQXVCQyxJQUF2QixPQUF4QjtBQUNBLFVBQUtDLFVBQUwsR0FBa0IsTUFBS0MsV0FBTCxDQUFpQkYsSUFBakIsT0FBbEI7QUFIWTtBQUliOzs7O3dDQUVtQjtBQUFBLFVBQ1pHLFFBRFksR0FDQyxLQUFLQyxLQUROLENBQ1pELFFBRFk7OztBQUdsQixXQUFLRixVQUFMLENBQWdCRSxTQUFTRSxLQUFULENBQWVDLElBQWYsSUFBdUIsQ0FBdkM7QUFDRDs7O3VDQUVrQkMsUyxFQUFXO0FBQUEsbUJB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O0FBREg7QUFaRixTQUZGO0FBdUNFO0FBQ0UsZ0JBQU1qQixJQURSO0FBRUUsd0JBQWMsS0FBS1I7QUFGckI7QUF2Q0YsT0FERjtBQThDRDs7Ozs7O2tCQUdZLHlCQUFRLGdCQUF1QztBQUFBLE1BQXBDZ0IsU0FBb0MsUUFBcENBLFNBQW9DO0FBQUEsTUFBekJtQixVQUF5QixRQUF6QkEsVUFBeUI7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7QUFBQSxNQUN0RDVCLElBRHNELEdBQzdDMkIsV0FBV3pCLEtBRGtDLENBQ3RERixJQURzRDs7QUFFNUQsTUFBSTZCLFlBQVlGLFdBQVd6QixLQUFYLENBQWlCNEIsS0FBakIsQ0FBdUI5QixLQUFLSSxPQUE1QixLQUF3QyxFQUFFMkIsS0FBSyxFQUFQLEVBQXhEO0FBQ0EsTUFBSTdCLFFBQVEyQixVQUFVRSxHQUFWLENBQWNmLEdBQWQsQ0FBa0I7QUFBQSxXQUFNWSxPQUFPMUIsS0FBUCxDQUFhOEIsRUFBYixDQUFOO0FBQUEsR0FBbEIsQ0FBWjs7QUFFQSxTQUFPO0FBQ0x4Qix3QkFESztBQUVMTixnQkFGSztBQUdMRjtBQUhLLEdBQVA7QUFLRCxDQVZjLEVBVVpULFFBVlksQyIsImZpbGUiOiJjb21wb25lbnRzL3BhZ2VzL2FkbWluL3VzZXIvTGlzdFBhZ2UuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
