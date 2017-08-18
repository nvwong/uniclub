'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = undefined;

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


var validate = exports.validate = function validate(values) {
  var errors = {};

  // if (values.email && !validator.isEmail(values.email)) {
  //   errors.email = 'Not an email';
  // }

  if (!values.email) {
    errors.email = 'Required';
  }

  if (_client2.default.recaptcha && !values.recaptcha) {
    errors.recaptcha = 'Required';
  }

  return errors;
};

var asyncValidate = function asyncValidate(values, dispatch) {
  return dispatch((0, _formActions.validateForm)(_FormNames2.default.USER_VERIFY_EMAIL, 'email', values.email)).then(function (json) {
    var validationError = {};
    if (!json.isPassed) {
      validationError.email = json.message;
      throw validationError;
    }
  });
};

var VerifyEmailForm = function (_Component) {
  _inherits(VerifyEmailForm, _Component);

  function VerifyEmailForm() {
    _classCallCheck(this, VerifyEmailForm);

    var _this = _possibleConstructorReturn(this, (VerifyEmailForm.__proto__ || Object.getPrototypeOf(VerifyEmailForm)).call(this));

    _this.handleSubmit = _this._handleSubmit.bind(_this);
    _this.handleCancleClick = _this._handleCancleClick.bind(_this);
    return _this;
  }

  _createClass(VerifyEmailForm, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          email = _props.email,
          initialize = _props.initialize;


      if (email) {
        initialize({ email: email });
      }
    }
  }, {
    key: '_handleSubmit',
    value: function _handleSubmit(formData) {
      var _props2 = this.props,
          dispatch = _props2.dispatch,
          apiEngine = _props2.apiEngine,
          initialize = _props2.initialize;


      return (0, _user2.default)(apiEngine).requestVerifyEmail(formData).catch(function (err) {
        dispatch((0, _errorActions.pushErrors)(err));
        throw err;
      }).then(function (json) {
        initialize({
          email: ''
        });
      });
    }
  }, {
    key: '_handleCancleClick',
    value: function _handleCancleClick() {
      var _props3 = this.props,
          onCancel = _props3.onCancel,
          dispatch = _props3.dispatch;


      if (onCancel) {
        onCancel();
      } else {
        dispatch((0, _reactRouterRedux.push)('/'));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props4 = this.props,
          email = _props4.email,
          handleSubmit = _props4.handleSubmit,
          submitSucceeded = _props4.submitSucceeded,
          submitFailed = _props4.submitFailed,
          error = _props4.error,
          pristine = _props4.pristine,
          submitting = _props4.submitting,
          invalid = _props4.invalid;


      return _react2.default.createElement(
        _widgets.BsForm,
        { onSubmit: handleSubmit(this.handleSubmit) },
        submitSucceeded && _react2.default.createElement(
          _Alert2.default,
          { bsStyle: 'success' },
          'A verification link is sent'
        ),
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
          disabled: Boolean(email),
          placeholder: 'Email'
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
              disabled: !email && pristine || submitting || invalid
            },
            'Send An Email to Verify My Email Address',
            submitting && _react2.default.createElement('i', { className: 'fa fa-spinner fa-spin', 'aria-hidden': 'true' })
          ),
          _react2.default.createElement(
            _Button2.default,
            {
              bsStyle: 'link',
              onClick: this.handleCancleClick
            },
            'Cancel'
          )
        )
      );
    }
  }]);

  return VerifyEmailForm;
}(_react.Component);

;

VerifyEmailForm.propTypes = {
  email: _react.PropTypes.string,
  onCancel: _react.PropTypes.func
};

exports.default = (0, _reduxForm.reduxForm)({
  form: _FormNames2.default.USER_VERIFY_EMAIL,
  validate: validate,
  asyncValidate: asyncValidate,
  asyncBlurFields: ['email']
})((0, _reactRedux.connect)(function (state) {
  return {
    apiEngine: state.apiEngine
  };
})(VerifyEmailForm));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9ybXMvdXNlci9WZXJpZnlFbWFpbEZvcm0uanMiXSwibmFtZXMiOlsidmFsaWRhdGUiLCJ2YWx1ZXMiLCJlcnJvcnMiLCJlbWFpbCIsInJlY2FwdGNoYSIsImFzeW5jVmFsaWRhdGUiLCJkaXNwYXRjaCIsIlVTRVJfVkVSSUZZX0VNQUlMIiwidGhlbiIsImpzb24iLCJ2YWxpZGF0aW9uRXJyb3IiLCJpc1Bhc3NlZCIsIm1lc3NhZ2UiLCJWZXJpZnlFbWFpbEZvcm0iLCJoYW5kbGVTdWJtaXQiLCJfaGFuZGxlU3VibWl0IiwiYmluZCIsImhhbmRsZUNhbmNsZUNsaWNrIiwiX2hhbmRsZUNhbmNsZUNsaWNrIiwicHJvcHMiLCJpbml0aWFsaXplIiwiZm9ybURhdGEiLCJhcGlFbmdpbmUiLCJyZXF1ZXN0VmVyaWZ5RW1haWwiLCJjYXRjaCIsImVyciIsIm9uQ2FuY2VsIiwic3VibWl0U3VjY2VlZGVkIiwic3VibWl0RmFpbGVkIiwiZXJyb3IiLCJwcmlzdGluZSIsInN1Ym1pdHRpbmciLCJpbnZhbGlkIiwiQm9vbGVhbiIsInByb3BUeXBlcyIsInN0cmluZyIsImZ1bmMiLCJmb3JtIiwiYXN5bmNCbHVyRmllbGRzIiwic3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFLQTs7Ozs7Ozs7Ozs7QUFaQTs7O0FBY08sSUFBSUEsOEJBQVcsU0FBWEEsUUFBVyxDQUFDQyxNQUFELEVBQVk7QUFDaEMsTUFBSUMsU0FBUyxFQUFiOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxNQUFJLENBQUNELE9BQU9FLEtBQVosRUFBbUI7QUFDakJELFdBQU9DLEtBQVAsR0FBZSxVQUFmO0FBQ0Q7O0FBRUQsTUFBSSxpQkFBUUMsU0FBUixJQUFxQixDQUFDSCxPQUFPRyxTQUFqQyxFQUE0QztBQUMxQ0Ys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RjtBQW9CRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRSxvQkFBSyxRQURQO0FBRUUsd0JBQVcsQ0FBQ0EsS0FBRCxJQUFVMkIsUUFBWCxJQUF3QkMsVUFBeEIsSUFBc0NDO0FBRmxEO0FBQUE7QUFLR0QsMEJBQ0MscUNBQUcsV0FBVSx1QkFBYixFQUFxQyxlQUFZLE1BQWpEO0FBTkosV0FERjtBQVVFO0FBQUE7QUFBQTtBQUNFLHVCQUFRLE1BRFY7QUFFRSx1QkFBUyxLQUFLZDtBQUZoQjtBQUFBO0FBQUE7QUFWRjtBQXBCRixPQURGO0FBd0NEOzs7Ozs7QUFDRjs7QUFFREosZ0JBQWdCcUIsU0FBaEIsR0FBNEI7QUFDMUIvQixTQUFPLGlCQUFVZ0MsTUFEUztBQUUxQlQsWUFBVSxpQkFBVVU7QUFGTSxDQUE1Qjs7a0JBS2UsMEJBQVU7QUFDdkJDLFFBQU0sb0JBQVU5QixpQkFETztBQUV2QlAsb0JBRnVCO0FBR3ZCSyw4QkFIdUI7QUFJdkJpQyxtQkFBaUIsQ0FBQyxPQUFEO0FBSk0sQ0FBVixFQUtaLHlCQUFRO0FBQUEsU0FBVTtBQUNuQmhCLGVBQVdpQixNQUFNakI7QUFERSxHQUFWO0FBQUEsQ0FBUixFQUVDVCxlQUZELENBTFksQyIsImZpbGUiOiJjb21wb25lbnRzL2Zvcm1zL3VzZXIvVmVyaWZ5RW1haWxGb3JtLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
