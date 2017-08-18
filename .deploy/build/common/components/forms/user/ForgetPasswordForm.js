'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

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
  return dispatch((0, _formActions.validateForm)(_FormNames2.default.USER_FORGET_PASSWORD, 'email', values.email)).then(function (json) {
    var validationError = {};
    if (!json.isPassed) {
      validationError.email = json.message;
      throw validationError;
    }
  });
};

var ForgetPasswordForm = function (_Component) {
  _inherits(ForgetPasswordForm, _Component);

  function ForgetPasswordForm() {
    _classCallCheck(this, ForgetPasswordForm);

    var _this = _possibleConstructorReturn(this, (ForgetPasswordForm.__proto__ || Object.getPrototypeOf(ForgetPasswordForm)).call(this));

    _this.handleSubmit = _this._handleSubmit.bind(_this);
    return _this;
  }

  _createClass(ForgetPasswordForm, [{
    key: '_handleSubmit',
    value: function _handleSubmit(formData) {
      var _props = this.props,
          dispatch = _props.dispatch,
          apiEngine = _props.apiEngine,
          initialize = _props.initialize;


      return (0, _user2.default)(apiEngine).requestResetPassword(formData).catch(function (err) {
        dispatch((0, _errorActions.pushErrors)(err));
        throw err;
      }).then(function (json) {
        initialize({
          email: ''
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          handleSubmit = _props2.handleSubmit,
          submitSucceeded = _props2.submitSucceeded,
          submitFailed = _props2.submitFailed,
          error = _props2.error,
          pristine = _props2.pristine,
          submitting = _props2.submitting,
          invalid = _props2.invalid;


      return _react2.default.createElement(
        _widgets.BsForm,
        { onSubmit: handleSubmit(this.handleSubmit) },
        submitSucceeded && _react2.default.createElement(
          _Alert2.default,
          { bsStyle: 'success' },
          'A reset link is sent'
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
            { type: 'submit', disabled: pristine || submitting || invalid },
            'Request An Email to Reset My Password'
          ),
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/user/login' },
            _react2.default.createElement(
              _Button2.default,
              { bsStyle: 'link' },
              'Cancel'
            )
          )
        )
      );
    }
  }]);

  return ForgetPasswordForm;
}(_react.Component);

;

exports.default = (0, _reduxForm.reduxForm)({
  form: _FormNames2.default.USER_FORGET_PASSWORD,
  validate: validate,
  asyncValidate: asyncValidate,
  asyncBlurFields: ['email']
})((0, _reactRedux.connect)(function (state) {
  return {
    apiEngine: state.apiEngine
  };
})(ForgetPasswordForm));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9ybXMvdXNlci9Gb3JnZXRQYXNzd29yZEZvcm0uanMiXSwibmFtZXMiOlsidmFsaWRhdGUiLCJ2YWx1ZXMiLCJlcnJvcnMiLCJlbWFpbCIsInJlY2FwdGNoYSIsImFzeW5jVmFsaWRhdGUiLCJkaXNwYXRjaCIsIlVTRVJfRk9SR0VUX1BBU1NXT1JEIiwidGhlbiIsImpzb24iLCJ2YWxpZGF0aW9uRXJyb3IiLCJpc1Bhc3NlZCIsIm1lc3NhZ2UiLCJGb3JnZXRQYXNzd29yZEZvcm0iLCJoYW5kbGVTdWJtaXQiLCJfaGFuZGxlU3VibWl0IiwiYmluZCIsImZvcm1EYXRhIiwicHJvcHMiLCJhcGlFbmdpbmUiLCJpbml0aWFsaXplIiwicmVxdWVzdFJlc2V0UGFzc3dvcmQiLCJjYXRjaCIsImVyciIsInN1Ym1pdFN1Y2NlZWRlZCIsInN1Ym1pdEZhaWxlZCIsImVycm9yIiwicHJpc3RpbmUiLCJzdWJtaXR0aW5nIiwiaW52YWxpZCIsImZvcm0iLCJhc3luY0JsdXJGaWVsZHMiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUtBOzs7Ozs7Ozs7OztBQVpBOzs7QUFjTyxJQUFJQSw4QkFBVyxTQUFYQSxRQUFXLENBQUNDLE1BQUQsRUFBWTtBQUNoQyxNQUFJQyxTQUFTLEVBQWI7O0FBRUE7QUFDQTtBQUNBOztBQUVBLE1BQUksQ0FBQ0QsT0FBT0UsS0FBWixFQUFtQjtBQUNqQkQsV0FBT0MsS0FBUCxHQUFlLFVBQWY7QUFDRDs7QUFFRCxNQUFJLGlCQUFRQyxTQUFSLElBQXFCLENBQUNILE9BQU9HLFNBQWpDLEVBQTRDO0FBQzFDRixXQUFPRSxTQUFQLEdBQW1CLFVBQW5CO0FBQ0Q7O0FBRUQsU0FBT0YsTUFBUDtBQUNELENBaEJNOztBQWtCUCxJQUFJRyxnQkFBZ0IsU0FBaEJBLGFBQWdCLENBQUNKLE1BQUQsRUFBU0ssUUFBVCxFQUFzQjtBQUN4QyxTQUFPQSxTQUFTLCtCQUNkLG9CQUFVQyxvQkFESSxFQUVkLE9BRmMsRUFHZE4sT0FBT0UsS0FITyxDQUFULEVBSUpLLElBSkksQ0FJQyxVQUFDQyxJQUFELEVBQVU7QUFDaEIsUUFBSUMsa0JBQWtCLEVBQXRCO0FBQ0EsUUFBSSxDQUFDRCxLQUFLRSxRQUFWLEVBQW9CO0FBQ2xCRCxzQkFBZ0JQLEtBQWhCLEdBQXdCTSxLQUFLRyxPQUE3QjtBQUNBLFlBQU1GLGVBQU47QUFDRDtBQUNGLEdBVk0sQ0FBUDtBQVdELENBWkQ7O0lBY01HLGtCOzs7QUFDSixnQ0FBYztBQUFBOztBQUFBOztBQUVaLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0MsYUFBTCxDQUFtQkMsSUFBbkIsT0FBcEI7QUFGWTtBQUdiOzs7O2tDQUVhQyxRLEVBQVU7QUFBQSxtQkFDb0IsS0FBS0MsS0FEekI7QUFBQSxVQUNoQlosUUFEZ0IsVUFDaEJBLFFBRGdCO0FBQUEsVUFDTmEsU0FETSxVQUNOQSxTQURNO0FBQUEsVUFDS0MsVUFETCxVQUNLQSxVQURMOzs7QUFHdEIsYUFBTyxvQkFBUUQsU0FBUixFQUNKRSxvQkFESSxDQUNpQkosUUFEakIsRUFFSkssS0FGSSxDQUVFLFVBQUNDLEdBQUQsRUFBUztBQUNkakIsaUJBQVMsOEJBQVdpQixHQUFYLENBQVQ7QUFDQSxjQUFNQSxHQUFOO0FBQ0QsT0FMSSxFQU1KZixJQU5JLENBTUMsVUFBQ0MsSUFBRCxFQUFVO0FBQ2RXLG1CQUFXO0FBQ1RqQixpQkFBTztBQURFLFNBQVg7QUFHRCxPQVZJLENBQVA7QUFXRDs7OzZCQUVRO0FBQUEsb0JBU0gsS0FBS2UsS0FURjtBQUFBLFVBRUxKLFlBRkssV0FFTEEsWUFGSztBQUFBLFVBR0xVLGVBSEssV0FHTEEsZUFISztBQUFBLFVBSUxDLFlBSkssV0FJTEEsWUFKSztBQUFBLFVBS0xDLEtBTEssV0FLTEEsS0FMSztBQUFBLFVBTUxDLFFBTkssV0FNTEEsUUFOSztBQUFBLFVBT0xDLFVBUEssV0FPTEEsVUFQSztBQUFBLFVBUUxDLE9BUkssV0FRTEEsT0FSSzs7O0FBV1AsYUFDRTtBQUFBO0FBQUEsVUFBTSxVQUFVZixhQUFhLEtBQUtBLFlBQWxCLENBQWhCO0FBQ0dVLDJCQUNDO0FBQUE7QUFBQSxZQUFPLFNBQVEsU0FBZjtBQUFBO0FBQUEsU0FGSjtBQUlHQyx3QkFBZ0JDLEtBQWhCLElBQTBCO0FBQUE7QUFBQSxZQUFPLFNBQVEsUUFBZjtBQUF5QkE7QUFBekIsU0FKN0I7QUFLRTtBQUNFLGdCQUFLLE9BRFA7QUFFRSxxQ0FGRjtBQUdFLGlCQUFNLE9BSFI7QUFJRSxvQ0FKRjtBQUtFLGdCQUFLLE1BTFA7QUFNRSx1QkFBWTtBQU5kLFVBTEY7QUFhRTtBQUNFLGdCQUFLLFdBRFA7QUFFRSxxQ0FGRjtBQUdFLGlCQUFNLEVBSFI7QUFJRTtBQUpGLFVBYkY7QUFtQkU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGNBQVEsTUFBSyxRQUFiLEVBQXNCLFVBQVVDLFlBQVlDLFVBQVosSUFBMEJDLE9BQTFEO0FBQUE7QUFBQSxXQURGO0FBSUU7QUFBQTtBQUFBLGNBQU0sSUFBRyxhQUFUO0FBQ0U7QUFBQTtBQUFBLGdCQUFRLFNBQVEsTUFBaEI7QUFBQTtBQUFBO0FBREY7QUFKRjtBQW5CRixPQURGO0FBOEJEOzs7Ozs7QUFDRjs7a0JBRWMsMEJBQVU7QUFDdkJDLFFBQU0sb0JBQVV2QixvQkFETztBQUV2QlAsb0JBRnVCO0FBR3ZCSyw4QkFIdUI7QUFJdkIwQixtQkFBaUIsQ0FBQyxPQUFEO0FBSk0sQ0FBVixFQUtaLHlCQUFRO0FBQUEsU0FBVTtBQUNuQlosZUFBV2EsTUFBTWI7QUFERSxHQUFWO0FBQUEsQ0FBUixFQUVDTixrQkFGRCxDQUxZLEMiLCJmaWxlIjoiY29tcG9uZW50cy9mb3Jtcy91c2VyL0ZvcmdldFBhc3N3b3JkRm9ybS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
