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

  if (!values.username) {
    errors.username = 'Required';
  }

  if (!values.email) {
    errors.email = 'Required';
  }

  if (!values.uniemail) {
    errors.uniemail = 'Required';
  }

  if (!values.password) {
    errors.password = 'Required';
  }

  if (!values.confirmpassword) {
    errors.confirmpassword = 'Required';
  }

  if (_client2.default.recaptcha && !values.recaptcha) {
    errors.recaptcha = 'Required';
  }

  if (values.password != values.confirmpassword) {
    errors.confirmpassword = 'Password not match';
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
          name: 'username',
          component: _widgets.BsField,
          label: 'Username',
          adapter: _adapters.BsInput,
          type: 'text',
          placeholder: 'Username'
        }),
        _react2.default.createElement(_reduxForm.Field, {
          name: 'uid',
          component: _widgets.BsField,
          label: 'UID',
          adapter: _adapters.BsInput,
          type: 'number',
          placeholder: 'UID'
        }),
        _react2.default.createElement(_reduxForm.Field, {
          name: 'lastname',
          component: _widgets.BsField,
          label: 'Last Name',
          adapter: _adapters.BsInput,
          type: 'text',
          placeholder: 'Last Name'
        }),
        _react2.default.createElement(_reduxForm.Field, {
          name: 'firstname',
          component: _widgets.BsField,
          label: 'First Name',
          adapter: _adapters.BsInput,
          type: 'text',
          placeholder: 'First Name'
        }),
        _react2.default.createElement(_reduxForm.Field, {
          name: 'gender',
          component: _widgets.BsField,
          label: 'Gender',
          adapter: _adapters.BsRadio,
          style: {
            float: 'left',
            paddingRight: 20,
            marginTop: 10
          },
          options: [{
            label: 'Male',
            value: 'male'
          }, {
            label: 'Female',
            value: 'female'
          }]
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
          name: 'uniemail',
          component: _widgets.BsField,
          label: 'University Email',
          adapter: _adapters.BsInput,
          type: 'text',
          placeholder: 'University Email'
        }),
        _react2.default.createElement(_reduxForm.Field, {
          name: 'curriculum',
          component: _widgets.BsField,
          label: 'Curriculum',
          adapter: _adapters.BsInput,
          type: 'text',
          placeholder: 'Curriculum'
        }),
        _react2.default.createElement(_reduxForm.Field, {
          name: 'phone',
          component: _widgets.BsField,
          label: 'Contact Number',
          adapter: _adapters.BsInput,
          type: 'number',
          placeholder: 'Contact Number'
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
          name: 'confirmpassword',
          component: _widgets.BsField,
          label: 'Confirm Password',
          adapter: _adapters.BsInput,
          type: 'password',
          placeholder: 'Confirm Password'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9ybXMvdXNlci9SZWdpc3RlckZvcm0uanMiXSwibmFtZXMiOlsidmFsaWRhdGUiLCJ2YWx1ZXMiLCJlcnJvcnMiLCJ1c2VybmFtZSIsImVtYWlsIiwidW5pZW1haWwiLCJwYXNzd29yZCIsImNvbmZpcm1wYXNzd29yZCIsInJlY2FwdGNoYSIsImFzeW5jVmFsaWRhdGUiLCJkaXNwYXRjaCIsIlVTRVJfUkVHSVNURVIiLCJ0aGVuIiwianNvbiIsInZhbGlkYXRpb25FcnJvciIsImlzUGFzc2VkIiwibWVzc2FnZSIsIlJlZ2lzdGVyRm9ybSIsInByb3BzIiwiaGFuZGxlU3VibWl0IiwiX2hhbmRsZVN1Ym1pdCIsImJpbmQiLCJmb3JtRGF0YSIsImFwaUVuZ2luZSIsInJlZ2lzdGVyIiwiY2F0Y2giLCJlcnIiLCJzdWJtaXRGYWlsZWQiLCJlcnJvciIsInByaXN0aW5lIiwiYXN5bmNWYWxpZGF0aW5nIiwic3VibWl0dGluZyIsImludmFsaWQiLCJmbG9hdCIsInBhZGRpbmdSaWdodCIsIm1hcmdpblRvcCIsImxhYmVsIiwidmFsdWUiLCJmb3JtIiwiaW5pdGlhbFZhbHVlcyIsInNsaWRlIiwibWluIiwibWF4IiwiYXN5bmNCbHVyRmllbGRzIiwic3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUtBOztBQUtBOzs7Ozs7Ozs7OztBQWhCQTs7O0FBa0JBLElBQU1BLFdBQVcsU0FBWEEsUUFBVyxDQUFDQyxNQUFELEVBQVk7QUFDM0IsTUFBTUMsU0FBUyxFQUFmOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxNQUFJLENBQUNELE9BQU9FLFFBQVosRUFBc0I7QUFDcEJELFdBQU9DLFFBQVAsR0FBa0IsVUFBbEI7QUFDRDs7QUFFRCxNQUFJLENBQUNGLE9BQU9HLEtBQVosRUFBbUI7QUFDakJGLFdB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QUtFLGdCQUFLLFVBTFA7QUFNRSx1QkFBWTtBQU5kLFVBNUZGO0FBb0dFO0FBQ0UsZ0JBQUssV0FEUDtBQUVFLHFDQUZGO0FBR0UsaUJBQU0sRUFIUjtBQUlFO0FBSkYsVUFwR0Y7QUEwR0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0Usb0JBQUssUUFEUDtBQUVFLHdCQUFVUixZQUFZLENBQUMsQ0FBQ0MsZUFBZCxJQUFpQ0MsVUFBakMsSUFBK0NDO0FBRjNEO0FBQUE7QUFBQTtBQURGO0FBMUdGLE9BREY7QUFxSEQ7Ozs7OztBQUNGOztrQkFFYywwQkFBVTtBQUN2Qk0sUUFBTSxvQkFBVTNCLGFBRE87QUFFdkI0QixpQkFBZTtBQUNiQyxXQUFPO0FBQ0xDLFdBQUssRUFEQTtBQUVMQyxXQUFLO0FBRkE7QUFETSxHQUZRO0FBUXZCMUMsb0JBUnVCO0FBU3ZCUyw4QkFUdUI7QUFVdkJrQyxtQkFBaUIsQ0FBQyxPQUFEO0FBVk0sQ0FBVixFQVdaLHlCQUFRO0FBQUEsU0FBVTtBQUNuQnBCLGVBQVdxQixNQUFNckI7QUFERSxHQUFWO0FBQUEsQ0FBUixFQUVDTixZQUZELENBWFksQyIsImZpbGUiOiJjb21wb25lbnRzL2Zvcm1zL3VzZXIvUmVnaXN0ZXJGb3JtLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
