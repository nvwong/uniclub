'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

var _reactRouterRedux = require('react-router-redux');

var _reduxForm = require('redux-form');

var _Alert = require('react-bootstrap/lib/Alert');

var _Alert2 = _interopRequireDefault(_Alert);

var _Button = require('react-bootstrap/lib/Button');

var _Button2 = _interopRequireDefault(_Button);

var _FormNames = require('../../../constants/FormNames');

var _FormNames2 = _interopRequireDefault(_FormNames);

var _user = require('../../../api/user');

var _user2 = _interopRequireDefault(_user);

var _errorActions = require('../../../actions/errorActions');

var _userActions = require('../../../actions/userActions');

var _adapters = require('../../fields/adapters');

var _widgets = require('../../fields/widgets');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import validator from 'validator';


var validate = function validate(values) {
  var errors = {};

  // if (values.email && !validator.isEmail(values.email)) {
  //   errors.email = 'Not an email';
  // }

  if (!values.email) {
    errors.email = 'Required';
  }

  if (!values.password) {
    errors.password = 'Required';
  }

  return errors;
};

var LoginForm = function (_Component) {
  _inherits(LoginForm, _Component);

  function LoginForm(props) {
    _classCallCheck(this, LoginForm);

    var _this = _possibleConstructorReturn(this, (LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).call(this, props));

    _this.handleSubmit = _this._handleSubmit.bind(_this);
    return _this;
  }

  _createClass(LoginForm, [{
    key: '_handleSubmit',
    value: function _handleSubmit(formData) {
      var _this2 = this;

      var _props = this.props,
          dispatch = _props.dispatch,
          apiEngine = _props.apiEngine,
          change = _props.change;


      return (0, _user2.default)(apiEngine).login(formData).catch(function (err) {
        dispatch((0, _errorActions.pushErrors)(err));
        throw err;
      }).then(function (json) {
        if (json.isAuth) {
          // redirect to the origin path before logging in
          var next = _this2.props.routing.locationBeforeTransitions.query.next;


          dispatch((0, _userActions.loginUser)({
            token: json.token,
            data: json.user
          }));
          dispatch((0, _reactRouterRedux.push)(next || '/'));
        } else {
          change('password', '');
          throw new _reduxForm.SubmissionError({
            _error: 'Login failed. You may type wrong email or password.'
          });
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          handleSubmit = _props2.handleSubmit,
          submitFailed = _props2.submitFailed,
          error = _props2.error,
          pristine = _props2.pristine,
          submitting = _props2.submitting,
          invalid = _props2.invalid;


      return _react2.default.createElement(
        _widgets.BsForm,
        { onSubmit: handleSubmit(this.handleSubmit) },
        submitFailed && error && _react2.default.createElement(
          _Alert2.default,
          { bsStyle: 'danger' },
          error
        ),
        _react2.default.createElement(_reduxForm.Field, {
          name: 'email',
          component: _widgets.BsField,
          label: 'Email',
          adapter: _adapters.BsInput,
          type: 'text',
          placeholder: 'Email'
        }),
        _react2.default.createElement(_reduxForm.Field, {
          name: 'password',
          component: _widgets.BsField,
          label: 'Password',
          adapter: _adapters.BsInput,
          type: 'password',
          placeholder: 'Password'
        }),
        _react2.default.createElement(
          _widgets.BsFormFooter,
          null,
          _react2.default.createElement(
            _Button2.default,
            { type: 'submit', disabled: pristine || submitting || invalid },
            'Login'
          ),
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/user/password/forget' },
            _react2.default.createElement(
              _Button2.default,
              { bsStyle: 'link' },
              'Forget password?'
            )
          )
        )
      );
    }
  }]);

  return LoginForm;
}(_react.Component);

;

exports.default = (0, _reduxForm.reduxForm)({
  form: _FormNames2.default.USER_LOGIN,
  validate: validate
})((0, _reactRedux.connect)(function (state) {
  return {
    apiEngine: state.apiEngine,
    routing: state.routing
  };
})(LoginForm));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9ybXMvdXNlci9Mb2dpbkZvcm0uanMiXSwibmFtZXMiOlsidmFsaWRhdGUiLCJ2YWx1ZXMiLCJlcnJvcnMiLCJlbWFpbCIsInBhc3N3b3JkIiwiTG9naW5Gb3JtIiwicHJvcHMiLCJoYW5kbGVTdWJtaXQiLCJfaGFuZGxlU3VibWl0IiwiYmluZCIsImZvcm1EYXRhIiwiZGlzcGF0Y2giLCJhcGlFbmdpbmUiLCJjaGFuZ2UiLCJsb2dpbiIsImNhdGNoIiwiZXJyIiwidGhlbiIsImpzb24iLCJpc0F1dGgiLCJuZXh0Iiwicm91dGluZyIsImxvY2F0aW9uQmVmb3JlVHJhbnNpdGlvbnMiLCJxdWVyeSIsInRva2VuIiwiZGF0YSIsInVzZXIiLCJfZXJyb3IiLCJzdWJtaXRGYWlsZWQiLCJlcnJvciIsInByaXN0aW5lIiwic3VibWl0dGluZyIsImludmFsaWQiLCJmb3JtIiwiVVNFUl9MT0dJTiIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7O0FBTkE7OztBQVlBLElBQU1BLFdBQVcsU0FBWEEsUUFBVyxDQUFDQyxNQUFELEVBQVk7QUFDM0IsTUFBTUMsU0FBUyxFQUFmOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxNQUFJLENBQUNELE9BQU9FLEtBQVosRUFBbUI7QUFDakJELFdBQU9DLEtBQVAsR0FBZSxVQUFmO0FBQ0Q7O0FBRUQsTUFBSSxDQUFDRixPQUFPRyxRQUFaLEVBQXNCO0FBQ3BCRixXQUFPRSxRQUFQLEdBQWtCLFVBQWxCO0FBQ0Q7O0FBRUQsU0FBT0YsTUFBUDtBQUNELENBaEJEOztJQWtCTUcsUzs7O0FBQ0oscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxzSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsWUFBTCxHQUFvQixNQUFLQyxhQUFMLENBQW1CQyxJQUFuQixPQUFwQjtBQUZpQjtBQUdsQjs7OztrQ0FFYUMsUSxFQUFVO0FBQUE7O0FBQUEsbUJBQ2dCLEtBQUtKLEtBRHJCO0FBQUEsVUFDaEJLLFFBRGdCLFVBQ2hCQSxRQURnQjtBQUFBLFVBQ05DLFNBRE0sVUFDTkEsU0FETTtBQUFBLFVBQ0tDLE1BREwsVUFDS0EsTUFETDs7O0FBR3RCLGFBQU8sb0JBQVFELFNBQVIsRUFDSkUsS0FESSxDQUNFSixRQURGLEVBRUpLLEtBRkksQ0FFRSxVQUFDQyxHQUFELEVBQVM7QUFDZEwsaUJBQVMsOEJBQVdLLEdBQVgsQ0FBVDtBQUNBLGNBQU1BLEdBQU47QUFDRCxPQUxJLEVBTUpDLElBTkksQ0FNQyxVQUFDQyxJQUFELEVBQVU7QUFDZCxZQUFJQSxLQUFLQyxNQUFULEVBQWlCO0FBQ2Y7QUFEZSxjQUVUQyxJQUZTLEdBRUEsT0FBS2QsS0FBTCxDQUFXZSxPQUFYLENBQW1CQyx5QkFBbkIsQ0FBNkNDLEtBRjdDLENBRVRILElBRlM7OztBQUlmVCxtQkFBUyw0QkFBVTtBQUNqQmEsbUJBQU9OLEtBQUtNLEtBREs7QUFFakJDLGtCQUFNUCxLQUFLUTtBQUZNLFdBQVYsQ0FBVDtBQUlBZixtQkFBUyw0QkFBS1MsUUFBUSxHQUFiLENBQVQ7QUFDRCxTQVRELE1BU087QUFDTFAsaUJBQU8sVUFBUCxFQUFtQixFQUFuQjtBQUNBLGdCQUFNLCtCQUFvQjtBQUN4QmMsb0JBQVE7QUFEZ0IsV0FBcEIsQ0FBTjtBQUdEO0FBQ0YsT0F0QkksQ0FBUDtBQXVCRDs7OzZCQUVRO0FBQUEsb0JBUUgsS0FBS3JCLEtBUkY7QUFBQSxVQUVMQyxZQUZLLFdBRUxBLFlBRks7QUFBQSxVQUdMcUIsWUFISyxXQUdMQSxZQUhLO0FBQUEsVUFJTEMsS0FKSyxXQUlMQSxLQUpLO0FBQUEsVUFLTEMsUUFMSyxXQUtMQSxRQUxLO0FBQUEsVUFNTEMsVUFOSyxXQU1MQSxVQU5LO0FBQUEsVUFPTEMsT0FQSyxXQU9MQSxPQVBLOzs7QUFVUCxhQUNFO0FBQUE7QUFBQSxVQUFNLFVBQVV6QixhQUFhLEtBQUtBLFlBQWxCLENBQWhCO0FBQ0dxQix3QkFBZ0JDLEtBQWhCLElBQTBCO0FBQUE7QUFBQSxZQUFPLFNBQVEsUUFBZjtBQUF5QkE7QUFBekIsU0FEN0I7QUFFRTtBQUNFLGdCQUFLLE9BRFA7QUFFRSxxQ0FGRjtBQUdFLGlCQUFNLE9BSFI7QUFJRSxvQ0FKRjtBQUtFLGdCQUFLLE1BTFA7QUFNRSx1QkFBWTtBQU5kLFVBRkY7QUFVRTtBQUNFLGdCQUFLLFVBRFA7QUFFRSxxQ0FGRjtBQUdFLGlCQUFNLFVBSFI7QUFJRSxvQ0FKRjtBQUtFLGdCQUFLLFVBTFA7QUFNRSx1QkFBWTtBQU5kLFVBVkY7QUFrQkU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGNBQVEsTUFBSyxRQUFiLEVBQXNCLFVBQVVDLFlBQVlDLFVBQVosSUFBMEJDLE9BQTFEO0FBQUE7QUFBQSxXQURGO0FBSUU7QUFBQTtBQUFBLGNBQU0sSUFBRyx1QkFBVDtBQUNFO0FBQUE7QUFBQSxnQkFBUSxTQUFRLE1BQWhCO0FBQUE7QUFBQTtBQURGO0FBSkY7QUFsQkYsT0FERjtBQTZCRDs7Ozs7O0FBQ0Y7O2tCQUVjLDBCQUFVO0FBQ3ZCQyxRQUFNLG9CQUFVQyxVQURPO0FBRXZCbEM7QUFGdUIsQ0FBVixFQUdaLHlCQUFRO0FBQUEsU0FBVTtBQUNuQlksZUFBV3VCLE1BQU12QixTQURFO0FBRW5CUyxhQUFTYyxNQUFNZDtBQUZJLEdBQVY7QUFBQSxDQUFSLEVBR0NoQixTQUhELENBSFksQyIsImZpbGUiOiJjb21wb25lbnRzL2Zvcm1zL3VzZXIvTG9naW5Gb3JtLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
