'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

var _Alert = require('react-bootstrap/lib/Alert');

var _Alert2 = _interopRequireDefault(_Alert);

var _user = require('../../../api/user');

var _user2 = _interopRequireDefault(_user);

var _errorActions = require('../../../actions/errorActions');

var _PageLayout = require('../../layouts/PageLayout');

var _PageLayout2 = _interopRequireDefault(_PageLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VerificationPage = function (_React$Component) {
  _inherits(VerificationPage, _React$Component);

  function VerificationPage() {
    _classCallCheck(this, VerificationPage);

    var _this = _possibleConstructorReturn(this, (VerificationPage.__proto__ || Object.getPrototypeOf(VerificationPage)).call(this));

    _this.state = {
      isVerifying: true,
      isFail: true
    };
    return _this;
  }

  _createClass(VerificationPage, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var _props = this.props,
          dispatch = _props.dispatch,
          apiEngine = _props.apiEngine,
          location = _props.location;

      if (process.env.BROWSER) {
        (0, _user2.default)(apiEngine).verifyEmail({ token: location.query.token }).catch(function (err) {
          _this2.setState({
            isVerifying: false,
            isFail: true
          });
          dispatch((0, _errorActions.pushErrors)(err));
          throw err;
        }).then(function (json) {
          _this2.setState({
            isVerifying: false,
            isFail: false
          });
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          isVerifying = _state.isVerifying,
          isFail = _state.isFail;


      if (isVerifying) {
        return _react2.default.createElement(
          _PageLayout2.default,
          null,
          _react2.default.createElement(
            'p',
            null,
            'Please wait for a while...'
          )
        );
      }

      if (isFail) {
        return _react2.default.createElement(
          _PageLayout2.default,
          null,
          _react2.default.createElement(
            _Alert2.default,
            { bsStyle: 'danger' },
            _react2.default.createElement(
              'strong',
              null,
              'Verification Failed'
            )
          )
        );
      }

      return _react2.default.createElement(
        _PageLayout2.default,
        null,
        _react2.default.createElement(
          _Alert2.default,
          { bsStyle: 'success' },
          _react2.default.createElement(
            'strong',
            null,
            'Verification Success'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Go to ',
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/user/login' },
              'Login Page'
            )
          )
        )
      );
    }
  }]);

  return VerificationPage;
}(_react2.default.Component);

;

exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    apiEngine: state.apiEngine
  };
})(VerificationPage);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZXMvdXNlci9WZXJpZnlFbWFpbFBhZ2UuanMiXSwibmFtZXMiOlsiVmVyaWZpY2F0aW9uUGFnZSIsInN0YXRlIiwiaXNWZXJpZnlpbmciLCJpc0ZhaWwiLCJwcm9wcyIsImRpc3BhdGNoIiwiYXBpRW5naW5lIiwibG9jYXRpb24iLCJwcm9jZXNzIiwiZW52IiwiQlJPV1NFUiIsInZlcmlmeUVtYWlsIiwidG9rZW4iLCJxdWVyeSIsImNhdGNoIiwiZXJyIiwic2V0U3RhdGUiLCJ0aGVuIiwianNvbiIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLGdCOzs7QUFDSiw4QkFBYztBQUFBOztBQUFBOztBQUVaLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxtQkFBYSxJQURGO0FBRVhDLGNBQVE7QUFGRyxLQUFiO0FBRlk7QUFNYjs7Ozt5Q0FFb0I7QUFBQTs7QUFBQSxtQkFDcUIsS0FBS0MsS0FEMUI7QUFBQSxVQUNiQyxRQURhLFVBQ2JBLFFBRGE7QUFBQSxVQUNIQyxTQURHLFVBQ0hBLFNBREc7QUFBQSxVQUNRQyxRQURSLFVBQ1FBLFFBRFI7O0FBRW5CLFVBQUlDLFFBQVFDLEdBQVIsQ0FBWUMsT0FBaEIsRUFBeUI7QUFDdkIsNEJBQVFKLFNBQVIsRUFDR0ssV0FESCxDQUNlLEVBQUVDLE9BQU9MLFNBQVNNLEtBQVQsQ0FBZUQsS0FBeEIsRUFEZixFQUVHRSxLQUZILENBRVMsVUFBQ0MsR0FBRCxFQUFTO0FBQ2QsaUJBQUtDLFFBQUwsQ0FBYztBQUNaZCx5QkFBYSxLQUREO0FBRVpDLG9CQUFRO0FBRkksV0FBZDtBQUlBRSxtQkFBUyw4QkFBV1UsR0FBWCxDQUFUO0FBQ0EsZ0JBQU1BLEdBQU47QUFDRCxTQVRILEVBVUdFLElBVkgsQ0FVUSxVQUFDQyxJQUFELEVBQVU7QUFDZCxpQkFBS0YsUUFBTCxDQUFjO0FBQ1pkLHlCQUFhLEtBREQ7QUFFWkMsb0JBQVE7QUFGSSxXQUFkO0FBSUQsU0FmSDtBQWdCRDtBQUNGOzs7NkJBRVE7QUFBQSxtQkFDdUIsS0FBS0YsS0FENUI7QUFBQSxVQUNEQyxXQURDLFVBQ0RBLFdBREM7QUFBQSxVQUNZQyxNQURaLFVBQ1lBLE1BRFo7OztBQUdQLFVBQUlELFdBQUosRUFBaUI7QUFDZixlQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixTQURGO0FBS0Q7O0FBRUQsVUFBSUMsTUFBSixFQUFZO0FBQ1YsZUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsY0FBTyxTQUFRLFFBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFERixTQURGO0FBT0Q7O0FBRUQsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBTyxTQUFRLFNBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUNRO0FBQUE7QUFBQSxnQkFBTSxJQUFHLGFBQVQ7QUFBQTtBQUFBO0FBRFI7QUFGRjtBQURGLE9BREY7QUFVRDs7OztFQTlENEIsZ0JBQU1nQixTOztBQStEcEM7O2tCQUVjLHlCQUFRO0FBQUEsU0FBVTtBQUMvQmIsZUFBV0wsTUFBTUs7QUFEYyxHQUFWO0FBQUEsQ0FBUixFQUVYTixnQkFGVyxDIiwiZmlsZSI6ImNvbXBvbmVudHMvcGFnZXMvdXNlci9WZXJpZnlFbWFpbFBhZ2UuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
