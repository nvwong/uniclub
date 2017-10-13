'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

var _Grid = require('react-bootstrap/lib/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _Image = require('react-bootstrap/lib/Image');

var _Image2 = _interopRequireDefault(_Image);

var _Roles = require('../../constants/Roles');

var _Roles2 = _interopRequireDefault(_Roles);

var _intlActions = require('../../actions/intlActions');

var _errorActions = require('../../actions/errorActions');

var _BsNavbar = require('./BsNavbar');

var _BsNavbar2 = _interopRequireDefault(_BsNavbar);

var _NavLink = require('./NavLink');

var _NavLink2 = _interopRequireDefault(_NavLink);

var _MenuItem = require('./MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Text = require('../widgets/Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navigation = function (_Component) {
  _inherits(Navigation, _Component);

  function Navigation() {
    _classCallCheck(this, Navigation);

    return _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).apply(this, arguments));
  }

  _createClass(Navigation, [{
    key: '_setLanguage',
    value: function _setLanguage(lang) {
      var store = this.context.store;

      store.dispatch((0, _intlActions.updateLocale)(lang)).then(function () {
        console.log('load locale (manually) ok');
      }, function (err) {
        store.dispatch((0, _errorActions.pushErrors)(err));
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          isAuth = _props.isAuth,
          user = _props.user;

      var isAdmin = user.role === _Roles2.default.ADMIN;
      var isSociety = user.role === _Roles2.default.SOCIETY;

      return _react2.default.createElement(
        _BsNavbar2.default,
        { staticTop: true },
        _react2.default.createElement(
          _Grid2.default,
          null,
          _react2.default.createElement(
            _BsNavbar2.default.Header,
            null,
            _react2.default.createElement(
              _reactRouter.Link,
              {
                className: 'navbar-brand',
                to: '/',
                style: {
                  padding: 5
                }
              },
              _react2.default.createElement('img', {
                src: '/img/logo.png',
                style: {
                  display: 'block',
                  height: '100%'
                }
              })
            )
          ),
          _react2.default.createElement(
            _BsNavbar2.default.Body,
            null,
            _react2.default.createElement(
              _BsNavbar2.default.Nav,
              null,
              _react2.default.createElement(
                _NavLink2.default,
                { to: '/', onlyActiveOnIndex: true },
                _react2.default.createElement(_Text2.default, { id: 'nav.home' })
              ),
              _react2.default.createElement(
                _NavLink2.default,
                { to: '/todo' },
                _react2.default.createElement(_Text2.default, { id: 'nav.todo' })
              ),
              _react2.default.createElement(
                _NavLink2.default,
                { to: '/demo/form-element' },
                'Form Elements'
              ),
              _react2.default.createElement(
                _NavLink2.default,
                { to: '/userlist' },
                'User List'
              ),
              _react2.default.createElement(
                _NavLink2.default,
                { to: '/events/all' },
                'Events'
              ),
              _react2.default.createElement(
                _NavLink2.default,
                { to: '/search' },
                'Search'
              ),
              _react2.default.createElement(
                _NavLink2.default,
                { to: '/does/not/exist' },
                '404'
              )
            ),
            _react2.default.createElement(
              _BsNavbar2.default.Nav,
              { right: true },
              _react2.default.createElement(
                _BsNavbar2.default.Dropdown,
                { title: _react2.default.createElement(_Text2.default, { id: 'nav.language' }) },
                _react2.default.createElement(_MenuItem2.default, {
                  title: 'English',
                  onClick: this._setLanguage.bind(this, 'en-us')
                }),
                _react2.default.createElement(_MenuItem2.default, {
                  title: '\u7E41\u9AD4\u4E2D\u6587',
                  onClick: this._setLanguage.bind(this, 'zh-tw')
                }),
                _react2.default.createElement(_MenuItem2.default, {
                  title: 'Not supported',
                  onClick: this._setLanguage.bind(this, 'foo-bar')
                })
              ),
              _react2.default.createElement(
                _BsNavbar2.default.Dropdown,
                {
                  title: !isAuth ? _react2.default.createElement(_Text2.default, { id: 'nav.user' }) : user.avatarURL ? _react2.default.createElement(_Image2.default, {
                    style: { height: 18 },
                    src: user.avatarURL, rounded: true
                  }) : user.name || user.email
                },
                !isAuth && _react2.default.createElement(
                  _NavLink2.default,
                  { to: '/user/login' },
                  _react2.default.createElement(_Text2.default, { id: 'nav.user.login' })
                ),
                !isAuth && _react2.default.createElement(
                  _NavLink2.default,
                  { to: '/user/register' },
                  _react2.default.createElement(_Text2.default, { id: 'nav.user.register' })
                ),
                isAuth && isAdmin && _react2.default.createElement(
                  _NavLink2.default,
                  { to: '/admin' },
                  'Admin System'
                ),
                isSociety && _react2.default.createElement(
                  _NavLink2.default,
                  { to: '/events/new' },
                  'New Event'
                ),
                isAuth && _react2.default.createElement(
                  _NavLink2.default,
                  { to: '/user/me' },
                  _react2.default.createElement(_Text2.default, { id: 'nav.user.profile' })
                ),
                isAuth && _react2.default.createElement(
                  _NavLink2.default,
                  { to: '/user/logout' },
                  _react2.default.createElement(_Text2.default, { id: 'nav.user.logout' })
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Navigation;
}(_react.Component);

;

Navigation.contextTypes = {
  store: _react2.default.PropTypes.object.isRequired
};

exports.default = (0, _reactRedux.connect)(function (_ref) {
  var _ref$cookies = _ref.cookies,
      token = _ref$cookies.token,
      user = _ref$cookies.user;
  return {
    isAuth: !!token,
    user: user || {}
  };
}, null, null, {
  pure: false
})(Navigation);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdXRpbHMvTmF2aWdhdGlvbi5qcyJdLCJuYW1lcyI6WyJOYXZpZ2F0aW9uIiwibGFuZyIsInN0b3JlIiwiY29udGV4dCIsImRpc3BhdGNoIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJwcm9wcyIsImlzQXV0aCIsInVzZXIiLCJpc0FkbWluIiwicm9sZSIsIkFETUlOIiwiaXNTb2NpZXR5IiwiU09DSUVUWSIsInBhZGRpbmciLCJkaXNwbGF5IiwiaGVpZ2h0IiwiX3NldExhbmd1YWdlIiwiYmluZCIsImF2YXRhclVSTCIsIm5hbWUiLCJlbWFpbCIsImNvbnRleHRUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJjb29raWVzIiwidG9rZW4iLCJwdXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxVOzs7Ozs7Ozs7OztpQ0FDU0MsSSxFQUFNO0FBQUEsVUFDWEMsS0FEVyxHQUNELEtBQUtDLE9BREosQ0FDWEQsS0FEVzs7QUFFakJBLFlBQ0dFLFFBREgsQ0FDWSwrQkFBYUgsSUFBYixDQURaLEVBRUdJLElBRkgsQ0FFUSxZQUFNO0FBQ1ZDLGdCQUFRQyxHQUFSLENBQVksMkJBQVo7QUFDRCxPQUpILEVBSUssVUFBQ0MsR0FBRCxFQUFTO0FBQ1ZOLGNBQU1FLFFBQU4sQ0FBZSw4QkFBV0ksR0FBWCxDQUFmO0FBQ0QsT0FOSDtBQU9EOzs7NkJBRVE7QUFBQSxtQkFDZ0IsS0FBS0MsS0FEckI7QUFBQSxVQUNEQyxNQURDLFVBQ0RBLE1BREM7QUFBQSxVQUNPQyxJQURQLFVBQ09BLElBRFA7O0FBRVAsVUFBSUMsVUFBV0QsS0FBS0UsSUFBTCxLQUFjLGdCQUFNQyxLQUFuQztBQUNBLFVBQUlDLFlBQWFKLEtBQUtFLElBQUwsS0FBYyxnQkFBTUcsT0FBckM7O0FBRUEsYUFDRTtBQUFBO0FBQUEsVUFBUSxlQUFSO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQSwrQkFBUSxNQUFSO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRSwyQkFBVSxjQURaO0FBRUUsb0JBQUcsR0FGTDtBQUdFLHVCQUFPO0FBQ0xDLDJCQUFTO0FBREo7QUFIVDtBQU9FO0FBQ0UscUJBQUksZUFETjtBQUVFLHVCQUFPO0FBQ0xDLDJCQUFTLE9BREo7QUFFTEMsMEJBQVE7QUFGSDtBQUZUO0FBUEY7QUFERixXQURGO0FBbUJFO0FBQUEsK0JBQVEsSUFBUjtBQUFBO0FBQ0U7QUFBQSxpQ0FBUSxHQUFSO0FBQUE7QUFDRTtBQUFBO0FBQUEsa0JBQVMsSUFBRyxHQUFaLEVBQWdCLHVCQUFoQjtBQUNFLGdFQUFNLElBQUcsVUFBVDtBQURGLGVBREY7QUFJRTtBQUFBO0FBQUEsa0JBQVMsSUFBRyxPQUFaO0FBQ0UsZ0VBQU0sSUFBRyxVQUFUO0FBREYsZUFKRjtBQU9FO0FBQUE7QUFBQSxrQkFBUyxJQUFHLG9CQUFaO0FBQUE7QUFBQSxlQVBGO0FBVUU7QUFBQTtBQUFBLGtCQUFTLElBQUcsV0FBWjtBQUFBO0FBQUEsZUFWRjtBQWFFO0FBQUE7QUFBQSxrQkFBUyxJQUFHLGFBQVo7QUFBQTtBQUFBLGVBYkY7QUFnQkU7QUFBQTtBQUFBLGtCQUFTLElBQUcsU0FBWjtBQUFBO0FBQUEsZUFoQkY7QUFtQkU7QUFBQTtBQUFBLGtCQUFTLElBQUcsaUJBQVo7QUFBQTtBQUFBO0FBbkJGLGFBREY7QUF5QkU7QUFBQSxpQ0FBUSxHQUFSO0FBQUEsZ0JBQVksV0FBWjtBQUNFO0FBQUEsbUNBQVEsUUFBUjtBQUFBLGtCQUFpQixPQUFPLGdEQUFNLElBQUcsY0FBVCxHQUF4QjtBQUNFO0FBQ0UseUJBQU0sU0FEUjtBQUVFLDJCQUFTLEtBQUtDLFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLEVBQTZCLE9BQTdCO0FBRlgsa0JBREY7QUFLRTtBQUNFLHlCQUFNLDBCQURSO0FBRUUsMkJBQVMsS0FBS0QsWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsRUFBNkIsT0FBN0I7QUFGWCxrQkFMRjtBQVNFO0FBQ0UseUJBQU0sZUFEUjtBQUVFLDJCQUFTLEtBQUtELFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLEVBQTZCLFNBQTdCO0FBRlg7QUFURixlQURGO0FBZUU7QUFBQSxtQ0FBUSxRQUFSO0FBQUE7QUFDRSx5QkFDRSxDQUFDWCxNQUFELEdBQ0EsZ0RBQU0sSUFBRyxVQUFULEdBREEsR0FFQUMsS0FBS1csU0FBTCxHQUNFO0FBQ0UsMkJBQU8sRUFBRUgsUUFBUSxFQUFWLEVBRFQ7QUFFRSx5QkFBS1IsS0FBS1csU0FGWixFQUV1QjtBQUZ2QixvQkFERixHQUtLWCxLQUFLWSxJQUFMLElBQWFaLEtBQUthO0FBVDNCO0FBWUcsaUJBQUNkLE1BQUQsSUFDQztBQUFBO0FBQUEsb0JBQVMsSUFBRyxhQUFaO0FBQ0Usa0VBQU0sSUFBRyxnQkFBVDtBQURGLGlCQWJKO0FBZ0JHLGlCQUFDQSxNQUFELElBQ0M7QUFBQTtBQUFBLG9CQUFTLElBQUcsZ0JBQVo7QUFDRSxrRUFBTSxJQUFHLG1CQUFUO0FBREYsaUJBakJKO0FBb0JHQSwwQkFBVUUsT0FBVixJQUNDO0FBQUE7QUFBQSxvQkFBUyxJQUFHLFFBQVo7QUFBQTtBQUFBLGlCQXJCSjtBQXdCSUcseUJBQUQsSUFDQztBQUFBO0FBQUEsb0JBQVMsSUFBRyxhQUFaO0FBQUE7QUFBQSxpQkF6Qko7QUE0QkdMLDBCQUNDO0FBQUE7QUFBQSxvQkFBUyxJQUFHLFVBQVo7QUFDRSxrRUFBTSxJQUFHLGtCQUFUO0FBREYsaUJBN0JKO0FBZ0NHQSwwQkFDQztBQUFBO0FBQUEsb0JBQVMsSUFBRyxjQUFaO0FBQ0Usa0VBQU0sSUFBRyxpQkFBVDtBQURGO0FBakNKO0FBZkY7QUF6QkY7QUFuQkY7QUFERixPQURGO0FBdUdEOzs7Ozs7QUFDRjs7QUFFRFYsV0FBV3lCLFlBQVgsR0FBMEI7QUFDeEJ2QixTQUFPLGdCQUFNd0IsU0FBTixDQUFnQkMsTUFBaEIsQ0FBdUJDO0FBRE4sQ0FBMUI7O2tCQUllLHlCQUFRO0FBQUEsMEJBQUdDLE9BQUg7QUFBQSxNQUFjQyxLQUFkLGdCQUFjQSxLQUFkO0FBQUEsTUFBcUJuQixJQUFyQixnQkFBcUJBLElBQXJCO0FBQUEsU0FBbUM7QUFDeERELFlBQVEsQ0FBQyxDQUFDb0IsS0FEOEM7QUFFeERuQixVQUFNQSxRQUFRO0FBRjBDLEdBQW5DO0FBQUEsQ0FBUixFQUdYLElBSFcsRUFHTCxJQUhLLEVBR0M7QUFDZG9CLFFBQU07QUFEUSxDQUhELEVBS1ovQixVQUxZLEMiLCJmaWxlIjoiY29tcG9uZW50cy91dGlscy9OYXZpZ2F0aW9uLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
