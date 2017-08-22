'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

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

var _formActions = require('../../../actions/formActions');

var _errorActions = require('../../../actions/errorActions');

var _bases = require('../../fields/bases');

var _adapters = require('../../fields/adapters');

var _widgets = require('../../fields/widgets');

var _client = require('../../../../../configs/project/client');

var _client2 = _interopRequireDefault(_client);

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

  if (!values.isAgreeTerms) {
    errors.isAgreeTerms = 'Required';
  }

  if (_client2.default.recaptcha && !values.recaptcha) {
    errors.recaptcha = 'Required';
  }

  return errors;
};

var asyncValidate = function asyncValidate(values, dispatch) {
  return dispatch((0, _formActions.validateForm)(_FormNames2.default.USER_REGISTER, 'email', values.email)).then(function (json) {
    var validationError = {};
    if (!json.isPassed) {
      validationError.email = json.message;
      throw validationError;
    }
  });
};

var RegisterForm = function (_Component) {
  _inherits(RegisterForm, _Component);

  function RegisterForm(props) {
    _classCallCheck(this, RegisterForm);

    var _this = _possibleConstructorReturn(this, (RegisterForm.__proto__ || Object.getPrototypeOf(RegisterForm)).call(this, props));

    _this.handleSubmit = _this._handleSubmit.bind(_this);
    return _this;
  }

  _createClass(RegisterForm, [{
    key: '_handleSubmit',
    value: function _handleSubmit(formData) {
      var _props = this.props,
          dispatch = _props.dispatch,
          apiEngine = _props.apiEngine;


      return (0, _user2.default)(apiEngine).register(formData).catch(function (err) {
        dispatch((0, _errorActions.pushErrors)(err));
        throw err;
      }).then(function (json) {
        dispatch((0, _reactRouterRedux.push)('/user/login'));
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
          asyncValidating = _props2.asyncValidating,
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
          name: 'name',
          component: _widgets.BsField,
          label: 'Name',
          adapter: _adapters.BsInput,
          type: 'text',
          placeholder: 'Name'
        }),
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
        _react2.default.createElement(_reduxForm.Field, {
          name: 'isAgreeTerms',
          component: _widgets.BsField,
          label: '',
          adapter: _adapters.BsCheckbox,
          text: _react2.default.createElement(
            'span',
            null,
            'I agree the ',
            _react2.default.createElement(
              'a',
              { href: '#' },
              'terms'
            )
          )
        }),
        _react2.default.createElement(_reduxForm.Field, {
          name: 'recaptcha',
          component: _widgets.BsField,
          label: '',
          adapter: _bases.Recaptcha
        }),
        _react2.default.createElement(
          _widgets.BsFormFooter,
          null,
          _react2.default.createElement(
            _Button2.default,
            {
              type: 'submit',
              disabled: pristine || !!asyncValidating || submitting || invalid
            },
            'Register'
          )
        )
      );
    }
  }]);

  return RegisterForm;
}(_react.Component);

;

exports.default = (0, _reduxForm.reduxForm)({
  form: _FormNames2.default.USER_REGISTER,
  initialValues: {
    slide: {
      min: 30,
      max: 40
    }
  },
  validate: validate,
  asyncValidate: asyncValidate,
  asyncBlurFields: ['email']
})((0, _reactRedux.connect)(function (state) {
  return {
    apiEngine: state.apiEngine
  };
})(RegisterForm));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9ybXMvdXNlci9SZWdpc3RlckZvcm0gY29weS5qcyJdLCJuYW1lcyI6WyJ2YWxpZGF0ZSIsInZhbHVlcyIsImVycm9ycyIsImVtYWlsIiwicGFzc3dvcmQiLCJpc0FncmVlVGVybXMiLCJyZWNhcHRjaGEiLCJhc3luY1ZhbGlkYXRlIiwiZGlzcGF0Y2giLCJVU0VSX1JFR0lTVEVSIiwidGhlbiIsImpzb24iLCJ2YWxpZGF0aW9uRXJyb3IiLCJpc1Bhc3NlZCIsIm1lc3NhZ2UiLCJSZWdpc3RlckZvcm0iLCJwcm9wcyIsImhhbmRsZVN1Ym1pdCIsIl9oYW5kbGVTdWJtaXQiLCJiaW5kIiwiZm9ybURhdGEiLCJhcGlFbmdpbmUiLCJyZWdpc3RlciIsImNhdGNoIiwiZXJyIiwic3VibWl0RmFpbGVkIiwiZXJyb3IiLCJwcmlzdGluZSIsImFzeW5jVmFsaWRhdGluZyIsInN1Ym1pdHRpbmciLCJpbnZhbGlkIiwiZm9ybSIsImluaXRpYWxWYWx1ZXMiLCJzbGlkZSIsIm1pbiIsIm1heCIsImFzeW5jQmx1ckZpZWxkcyIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFJQTs7QUFLQTs7Ozs7Ozs7Ozs7QUFmQTs7O0FBaUJBLElBQU1BLFdBQVcsU0FBWEEsUUFBVyxDQUFDQyxNQUFELEVBQVk7QUFDM0IsTUFBTUMsU0FBUyxFQUFmOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxNQUFJLENBQUNELE9BQU9FLEtBQVosRUFBbUI7QUFDakJELFdBQU9DLEtBQVAsR0FBZSxVQUFmO0FBQ0Q7O0FBRUQsTUFBSSxDQUFDRixPQUFPRyxRQUFaLEVBQXNCO0FBQ3BCRixXQUFPRSxRQUFQLEdBQWtCLFVBQWxCO0FBQ0Q7O0FBRUQsTUFBSSxDQUFDSCxPQUFPSSxZQUFaLEVBQTBCO0FBQ3hCSCxXQUFPRyxZQUFQLEdBQXNCLFVBQXRCO0FBQ0Q7O0FBRUQsTUFBSSxpQkFBUUMsU0FBUixJQUFxQixDQUFDTCxPQUFPSyxTQUFqQyxFQUE0QztBQUMxQ0osV0FBT0ksU0FBUCxHQUFtQixVQUFuQjtBQUNEOztBQUVELFNBQU9KLE1BQVA7QUFDRCxDQXhCRDs7QUEwQkEsSUFBSUssZ0JBQWdCLFNBQWhCQSxhQUFnQixDQUFDTixNQUFELEVBQVNPLFFBQVQsRUFBc0I7QUFDeEMsU0FBT0EsU0FBUywrQkFBYSxvQkFBVUMsYUFBdkIsRUFBc0MsT0FBdEMsRUFBK0NSLE9BQU9FLEtBQXRELENBQVQsRUFDSk8sSUFESSxDQUNDLFVBQUNDLElBQUQsRUFBVTtBQUNkLFFBQUlDLGtCQUFrQixFQUF0QjtBQUNBLFFBQUksQ0FBQ0QsS0FBS0UsUUFBVixFQUFvQjtBQUNsQkQsc0JBQWdCVCxLQUFoQixHQUF3QlEsS0FBS0csT0FBN0I7QUFDQSxZQUFNRixlQUFOO0FBQ0Q7QUFDRixHQVBJLENBQVA7QUFRRCxDQVREOztJQVdNRyxZOzs7QUFDSix3QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDRIQUNYQSxLQURXOztBQUVqQixVQUFLQyxZQUFMLEdBQW9CLE1BQUtDLGFBQUwsQ0FBbUJDLElBQW5CLE9BQXBCO0FBRmlCO0FBR2xCOzs7O2tDQUVhQyxRLEVBQVU7QUFBQSxtQkFDUSxLQUFLSixLQURiO0FBQUEsVUFDaEJSLFFBRGdCLFVBQ2hCQSxRQURnQjtBQUFBLFVBQ05hLFNBRE0sVUFDTkEsU0FETTs7O0FBR3RCLGFBQU8sb0JBQVFBLFNBQVIsRUFDSkMsUUFESSxDQUNLRixRQURMLEVBRUpHLEtBRkksQ0FFRSxVQUFDQyxHQUFELEVBQVM7QUFDZGhCLGlCQUFTLDhCQUFXZ0IsR0FBWCxDQUFUO0FBQ0EsY0FBTUEsR0FBTjtBQUNELE9BTEksRUFNSmQsSUFOSSxDQU1DLFVBQUNDLElBQUQsRUFBVTtBQUNkSCxpQkFBUyw0QkFBSyxhQUFMLENBQVQ7QUFDRCxPQVJJLENBQVA7QUFTRDs7OzZCQUVRO0FBQUEsb0JBU0gsS0FBS1EsS0FURjtBQUFBLFVBRUxDLFlBRkssV0FFTEEsWUFGSztBQUFBLFVBR0xRLFlBSEssV0FHTEEsWUFISztBQUFBLFVBSUxDLEtBSkssV0FJTEEsS0FKSztBQUFBLFVBS0xDLFFBTEssV0FLTEEsUUFMSztBQUFBLFVBTUxDLGVBTkssV0FNTEEsZUFOSztBQUFBLFVBT0xDLFVBUEssV0FPTEEsVUFQSztBQUFBLFVBUUxDLE9BUkssV0FRTEEsT0FSSzs7O0FBV1AsYUFDRTtBQUFBO0FBQUEsVUFBTSxVQUFVYixhQUFhLEtBQUtBLFlBQWxCLENBQWhCO0FBQ0dRLHdCQUFnQkMsS0FBaEIsSUFBMEI7QUFBQTtBQUFBLFlBQU8sU0FBUSxRQUFmO0FBQXlCQTtBQUF6QixTQUQ3QjtBQUVFO0FBQ0UsZ0JBQUssTUFEUDtBQUVFLHFDQUZGO0FBR0UsaUJBQU0sTUFIUjtBQUlFLG9DQUpGO0FBS0UsZ0JBQUssTUFMUDtBQU1FLHVCQUFZO0FBTmQsVUFGRjtBQVVFO0FBQ0UsZ0JBQUssT0FEUDtBQUVFLHFDQUZGO0FBR0UsaUJBQU0sT0FIUjtBQUlFLG9DQUpGO0FBS0UsZ0JBQUssTUFMUDtBQU1FLHVCQUFZO0FBTmQsVUFWRjtBQWtCRTtBQUNFLGdCQUFLLFVBRFA7QUFFRSxxQ0FGRjtBQUdFLGlCQUFNLFVBSFI7QUFJRSxvQ0FKRjtBQUtFLGdCQUFLLFVBTFA7QUFNRSx1QkFBWTtBQU5kLFVBbEJGO0FBMEJFO0FBQ0UsZ0JBQUssY0FEUDtBQUVFLHFDQUZGO0FBR0UsaUJBQU0sRUFIUjtBQUlFLHVDQUpGO0FBS0UsZ0JBQU07QUFBQTtBQUFBO0FBQUE7QUFBa0I7QUFBQTtBQUFBLGdCQUFHLE1BQUssR0FBUjtBQUFBO0FBQUE7QUFBbEI7QUFMUixVQTFCRjtBQWlDRTtBQUNFLGdCQUFLLFdBRFA7QUFFRSxxQ0FGRjtBQUdFLGlCQUFNLEVBSFI7QUFJRTtBQUpGLFVBakNGO0FBdUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFLG9CQUFLLFFBRFA7QUFFRSx3QkFBVUMsWUFBWSxDQUFDLENBQUNDLGVBQWQsSUFBaUNDLFVBQWpDLElBQStDQztBQUYzRDtBQUFBO0FBQUE7QUFERjtBQXZDRixPQURGO0FBa0REOzs7Ozs7QUFDRjs7a0JBRWMsMEJBQVU7QUFDdkJDLFFBQU0sb0JBQVV0QixhQURPO0FBRXZCdUIsaUJBQWU7QUFDYkMsV0FBTztBQUNMQyxXQUFLLEVBREE7QUFFTEMsV0FBSztBQUZBO0FBRE0sR0FGUTtBQVF2Qm5DLG9CQVJ1QjtBQVN2Qk8sOEJBVHVCO0FBVXZCNkIsbUJBQWlCLENBQUMsT0FBRDtBQVZNLENBQVYsRUFXWix5QkFBUTtBQUFBLFNBQVU7QUFDbkJmLGVBQVdnQixNQUFNaEI7QUFERSxHQUFWO0FBQUEsQ0FBUixFQUVDTixZQUZELENBWFksQyIsImZpbGUiOiJjb21wb25lbnRzL2Zvcm1zL3VzZXIvUmVnaXN0ZXJGb3JtIGNvcHkuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
