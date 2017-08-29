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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdXRpbHMvTmF2aWdhdGlvbi5qcyJdLCJuYW1lcyI6WyJOYXZpZ2F0aW9uIiwibGFuZyIsInN0b3JlIiwiY29udGV4dCIsImRpc3BhdGNoIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJwcm9wcyIsImlzQXV0aCIsInVzZXIiLCJpc0FkbWluIiwicm9sZSIsIkFETUlOIiwicGFkZGluZyIsImRpc3BsYXkiLCJoZWlnaHQiLCJfc2V0TGFuZ3VhZ2UiLCJiaW5kIiwiYXZhdGFyVVJMIiwibmFtZSIsImVtYWlsIiwiY29udGV4dFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImNvb2tpZXMiLCJ0b2tlbiIsInB1cmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLFU7Ozs7Ozs7Ozs7O2lDQUNTQyxJLEVBQU07QUFBQSxVQUNYQyxLQURXLEdBQ0QsS0FBS0MsT0FESixDQUNYRCxLQURXOztBQUVqQkEsWUFDR0UsUUFESCxDQUNZLCtCQUFhSCxJQUFiLENBRFosRUFFR0ksSUFGSCxDQUVRLFlBQU07QUFDVkMsZ0JBQVFDLEdBQVIsQ0FBWSwyQkFBWjtBQUNELE9BSkgsRUFJSyxVQUFDQyxHQUFELEVBQVM7QUFDVk4sY0FBTUUsUUFBTixDQUFlLDhCQUFXSSxHQUFYLENBQWY7QUFDRCxPQU5IO0FBT0Q7Ozs2QkFFUTtBQUFBLG1CQUNnQixLQUFLQyxLQURyQjtBQUFBLFVBQ0RDLE1BREMsVUFDREEsTUFEQztBQUFBLFVBQ09DLElBRFAsVUFDT0EsSUFEUDs7QUFFUCxVQUFJQyxVQUFXRCxLQUFLRSxJQUFMLEtBQWMsZ0JBQU1DLEtBQW5DOztBQUVBLGFBQ0U7QUFBQTtBQUFBLFVBQVEsZUFBUjtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUEsK0JBQVEsTUFBUjtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0UsMkJBQVUsY0FEWjtBQUVFLG9CQUFHLEdBRkw7QUFHRSx1QkFBTztBQUNMQywyQkFBUztBQURKO0FBSFQ7QUFPRTtBQUNFLHFCQUFJLGVBRE47QUFFRSx1QkFBTztBQUNMQywyQkFBUyxPQURKO0FBRUxDLDBCQUFRO0FBRkg7QUFGVDtBQVBGO0FBREYsV0FERjtBQW1CRTtBQUFBLCtCQUFRLElBQVI7QUFBQTtBQUNFO0FBQUEsaUNBQVEsR0FBUjtBQUFBO0FBQ0U7QUFBQTtBQUFBLGtCQUFTLElBQUcsR0FBWixFQUFnQix1QkFBaEI7QUFDRSxnRUFBTSxJQUFHLFVBQVQ7QUFERixlQURGO0FBSUU7QUFBQTtBQUFBLGtCQUFTLElBQUcsT0FBWjtBQUNFLGdFQUFNLElBQUcsVUFBVDtBQURGLGVBSkY7QUFPRTtBQUFBO0FBQUEsa0JBQVMsSUFBRyxvQkFBWjtBQUFBO0FBQUEsZUFQRjtBQVVFO0FBQUE7QUFBQSxrQkFBUyxJQUFHLFdBQVo7QUFBQTtBQUFBLGVBVkY7QUFhRTtBQUFBO0FBQUEsa0JBQVMsSUFBRyxpQkFBWjtBQUFBO0FBQUE7QUFiRixhQURGO0FBbUJFO0FBQUEsaUNBQVEsR0FBUjtBQUFBLGdCQUFZLFdBQVo7QUFDRTtBQUFBLG1DQUFRLFFBQVI7QUFBQSxrQkFBaUIsT0FBTyxnREFBTSxJQUFHLGNBQVQsR0FBeEI7QUFDRTtBQUNFLHlCQUFNLFNBRFI7QUFFRSwyQkFBUyxLQUFLQyxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixFQUE2QixPQUE3QjtBQUZYLGtCQURGO0FBS0U7QUFDRSx5QkFBTSwwQkFEUjtBQUVFLDJCQUFTLEtBQUtELFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLEVBQTZCLE9BQTdCO0FBRlgsa0JBTEY7QUFTRTtBQUNFLHlCQUFNLGVBRFI7QUFFRSwyQkFBUyxLQUFLRCxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixFQUE2QixTQUE3QjtBQUZYO0FBVEYsZUFERjtBQWVFO0FBQUEsbUNBQVEsUUFBUjtBQUFBO0FBQ0UseUJBQ0UsQ0FBQ1QsTUFBRCxHQUNBLGdEQUFNLElBQUcsVUFBVCxHQURBLEdBRUFDLEtBQUtTLFNBQUwsR0FDRTtBQUNFLDJCQUFPLEVBQUVILFFBQVEsRUFBVixFQURUO0FBRUUseUJBQUtOLEtBQUtTLFNBRlosRUFFdUI7QUFGdkIsb0JBREYsR0FLS1QsS0FBS1UsSUFBTCxJQUFhVixLQUFLVztBQVQzQjtBQVlHLGlCQUFDWixNQUFELElBQ0M7QUFBQTtBQUFBLG9CQUFTLElBQUcsYUFBWjtBQUNFLGtFQUFNLElBQUcsZ0JBQVQ7QUFERixpQkFiSjtBQWdCRyxpQkFBQ0EsTUFBRCxJQUNDO0FBQUE7QUFBQSxvQkFBUyxJQUFHLGdCQUFaO0FBQ0Usa0VBQU0sSUFBRyxtQkFBVDtBQURGLGlCQWpCSjtBQW9CR0EsMEJBQVVFLE9BQVYsSUFDQztBQUFBO0FBQUEsb0JBQVMsSUFBRyxRQUFaO0FBQUE7QUFBQSxpQkFyQko7QUF3QkdGLDBCQUNDO0FBQUE7QUFBQSxvQkFBUyxJQUFHLFVBQVo7QUFDRSxrRUFBTSxJQUFHLGtCQUFUO0FBREYsaUJBekJKO0FBNEJHQSwwQkFDQztBQUFBO0FBQUEsb0JBQVMsSUFBRyxjQUFaO0FBQ0Usa0VBQU0sSUFBRyxpQkFBVDtBQURGO0FBN0JKO0FBZkY7QUFuQkY7QUFuQkY7QUFERixPQURGO0FBNkZEOzs7Ozs7QUFDRjs7QUFFRFYsV0FBV3VCLFlBQVgsR0FBMEI7QUFDeEJyQixTQUFPLGdCQUFNc0IsU0FBTixDQUFnQkMsTUFBaEIsQ0FBdUJDO0FBRE4sQ0FBMUI7O2tCQUllLHlCQUFRO0FBQUEsMEJBQUdDLE9BQUg7QUFBQSxNQUFjQyxLQUFkLGdCQUFjQSxLQUFkO0FBQUEsTUFBcUJqQixJQUFyQixnQkFBcUJBLElBQXJCO0FBQUEsU0FBbUM7QUFDeERELFlBQVEsQ0FBQyxDQUFDa0IsS0FEOEM7QUFFeERqQixVQUFNQSxRQUFRO0FBRjBDLEdBQW5DO0FBQUEsQ0FBUixFQUdYLElBSFcsRUFHTCxJQUhLLEVBR0M7QUFDZGtCLFFBQU07QUFEUSxDQUhELEVBS1o3QixVQUxZLEMiLCJmaWxlIjoiY29tcG9uZW50cy91dGlscy9OYXZpZ2F0aW9uLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
