'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouterRedux = require('react-router-redux');

var _user = require('../../../api/user');

var _user2 = _interopRequireDefault(_user);

var _userActions = require('../../../actions/userActions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LogoutPage = function (_React$Component) {
  _inherits(LogoutPage, _React$Component);

  function LogoutPage() {
    _classCallCheck(this, LogoutPage);

    return _possibleConstructorReturn(this, (LogoutPage.__proto__ || Object.getPrototypeOf(LogoutPage)).apply(this, arguments));
  }

  _createClass(LogoutPage, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          dispatch = _props.dispatch,
          apiEngine = _props.apiEngine;


      (0, _user2.default)(apiEngine).logout().catch(function (err) {
        alert('Logout user fail');
        throw err;
      }).then(function (json) {
        return dispatch((0, _userActions.logoutUser)());
      }).then(function () {
        return dispatch((0, _reactRouterRedux.push)('/'));
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return LogoutPage;
}(_react2.default.Component);

;

exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    apiEngine: state.apiEngine
  };
})(LogoutPage);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZXMvdXNlci9Mb2dvdXRQYWdlLmpzIl0sIm5hbWVzIjpbIkxvZ291dFBhZ2UiLCJwcm9wcyIsImRpc3BhdGNoIiwiYXBpRW5naW5lIiwibG9nb3V0IiwiY2F0Y2giLCJlcnIiLCJhbGVydCIsInRoZW4iLCJqc29uIiwiQ29tcG9uZW50Iiwic3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRU1BLFU7Ozs7Ozs7Ozs7O3lDQUNpQjtBQUFBLG1CQUNXLEtBQUtDLEtBRGhCO0FBQUEsVUFDYkMsUUFEYSxVQUNiQSxRQURhO0FBQUEsVUFDSEMsU0FERyxVQUNIQSxTQURHOzs7QUFHbkIsMEJBQVFBLFNBQVIsRUFDR0MsTUFESCxHQUVHQyxLQUZILENBRVMsVUFBQ0MsR0FBRCxFQUFTO0FBQ2RDLGNBQU0sa0JBQU47QUFDQSxjQUFNRCxHQUFOO0FBQ0QsT0FMSCxFQU1HRSxJQU5ILENBTVEsVUFBQ0MsSUFBRDtBQUFBLGVBQVVQLFNBQVMsOEJBQVQsQ0FBVjtBQUFBLE9BTlIsRUFPR00sSUFQSCxDQU9RO0FBQUEsZUFBTU4sU0FBUyw0QkFBSyxHQUFMLENBQVQsQ0FBTjtBQUFBLE9BUFI7QUFRRDs7OzZCQUVRO0FBQ1AsYUFBTyxJQUFQO0FBQ0Q7Ozs7RUFoQnNCLGdCQUFNUSxTOztBQWlCOUI7O2tCQUVjLHlCQUFRO0FBQUEsU0FBVTtBQUMvQlAsZUFBV1EsTUFBTVI7QUFEYyxHQUFWO0FBQUEsQ0FBUixFQUVYSCxVQUZXLEMiLCJmaWxlIjoiY29tcG9uZW50cy9wYWdlcy91c2VyL0xvZ291dFBhZ2UuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
