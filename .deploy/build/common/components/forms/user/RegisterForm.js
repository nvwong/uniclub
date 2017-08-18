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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9ybXMvdXNlci9SZWdpc3RlckZvcm0uanMiXSwibmFtZXMiOlsidmFsaWRhdGUiLCJ2YWx1ZXMiLCJlcnJvcnMiLCJlbWFpbCIsInBhc3N3b3JkIiwiaXNBZ3JlZVRlcm1zIiwicmVjYXB0Y2hhIiwiYXN5bmNWYWxpZGF0ZSIsImRpc3BhdGNoIiwiVVNFUl9SRUdJU1RFUiIsInRoZW4iLCJqc29uIiwidmFsaWRhdGlvbkVycm9yIiwiaXNQYXNzZWQiLCJtZXNzYWdlIiwiUmVnaXN0ZXJGb3JtIiwicHJvcHMiLCJoYW5kbGVTdWJtaXQiLCJfaGFuZGxlU3VibWl0IiwiYmluZCIsImZvcm1EYXRhIiwiYXBpRW5naW5lIiwicmVnaXN0ZXIiLCJjYXRjaCIsImVyciIsInN1Ym1pdEZhaWxlZCIsImVycm9yIiwicHJpc3RpbmUiLCJhc3luY1ZhbGlkYXRpbmciLCJzdWJtaXR0aW5nIiwiaW52YWxpZCIsImZvcm0iLCJpbml0aWFsVmFsdWVzIiwic2xpZGUiLCJtaW4iLCJtYXgiLCJhc3luY0JsdXJGaWVsZHMiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBSUE7O0FBS0E7Ozs7Ozs7Ozs7O0FBZkE7OztBQWlCQSxJQUFNQSxXQUFXLFNBQVhBLFFBQVcsQ0FBQ0MsTUFBRCxFQUFZO0FBQzNCLE1BQU1DLFNBQVMsRUFBZjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsTUFBSSxDQUFDRCxPQUFPRSxLQUFaLEVBQW1CO0FBQ2pCRCxXQUFPQyxLQUFQLEdBQWUsVUFBZjtBQUNEOztBQUVELE1BQUksQ0FBQ0YsT0FBT0csUUFBWixFQUFzQjtBQUNwQkYsV0FBT0UsUUFBUCxHQUFrQixVQUFsQjtBQUNEOztBQUVELE1BQUksQ0FBQ0gsT0FBT0ksWUFBWixFQUEwQjtBQUN4QkgsV0FBT0csWUFBUCxHQUFzQixVQUF0QjtBQUNEOztBQUVELE1BQUksaUJBQVFDLFNBQVIsSUFBcUIsQ0FBQ0wsT0FBT0ssU0FBakMsRUFBNEM7QUFDMUNKLFdBQU9JLFNBQVAsR0FBbUIsVUFBbkI7QUFDRDs7QUFFRCxTQUFPSixNQUFQO0FBQ0QsQ0F4QkQ7O0FBMEJBLElBQUlLLGdCQUFnQixTQUFoQkEsYUFBZ0IsQ0FBQ04sTUFBRCxFQUFTTyxRQUFULEVBQXNCO0FBQ3hDLFNBQU9BLFNBQVMsK0JBQWEsb0JBQVVDLGFBQXZCLEVBQXNDLE9BQXRDLEVBQStDUixPQUFPRSxLQUF0RCxDQUFULEVBQ0pPLElBREksQ0FDQyxVQUFDQyxJQUFELEVBQVU7QUFDZCxRQUFJQyxrQkFBa0IsRUFBdEI7QUFDQSxRQUFJLENBQUNELEtBQUtFLFFBQVYsRUFBb0I7QUFDbEJELHNCQUFnQlQsS0FBaEIsR0FBd0JRLEtBQUtHLE9BQTdCO0FBQ0EsWUFBTUYsZUFBTjtBQUNEO0FBQ0YsR0FQSSxDQUFQO0FBUUQsQ0FURDs7SUFXTUcsWTs7O0FBQ0osd0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw0SEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsWUFBTCxHQUFvQixNQUFLQyxhQUFMLENBQW1CQyxJQUFuQixPQUFwQjtBQUZpQjtBQUdsQjs7OztrQ0FFYUMsUSxFQUFVO0FBQUEsbUJBQ1EsS0FBS0osS0FEYjtBQUFBLFVBQ2hCUixRQURnQixVQUNoQkEsUUFEZ0I7QUFBQSxVQUNOYSxTQURNLFVBQ05BLFNBRE07OztBQUd0QixhQUFPLG9CQUFRQSxTQUFSLEVBQ0pDLFFBREksQ0FDS0YsUUFETCxFQUVKRyxLQUZJLENBRUUsVUFBQ0MsR0FBRCxFQUFTO0FBQ2RoQixpQkFBUyw4QkFBV2dCLEdBQVgsQ0FBVDtBQUNBLGNBQU1BLEdBQU47QUFDRCxPQUxJLEVBTUpkLElBTkksQ0FNQyxVQUFDQyxJQUFELEVBQVU7QUFDZEgsaUJBQVMsNEJBQUssYUFBTCxDQUFUO0FBQ0QsT0FSSSxDQUFQO0FBU0Q7Ozs2QkFFUTtBQUFBLG9CQVNILEtBQUtRLEtBVEY7QUFBQSxVQUVMQyxZQUZLLFdBRUxBLFlBRks7QUFBQSxVQUdMUSxZQUhLLFdBR0xBLFlBSEs7QUFBQSxVQUlMQyxLQUpLLFdBSUxBLEtBSks7QUFBQSxVQUtMQyxRQUxLLFdBS0xBLFFBTEs7QUFBQSxVQU1MQyxlQU5LLFdBTUxBLGVBTks7QUFBQSxVQU9MQyxVQVBLLFdBT0xBLFVBUEs7QUFBQSxVQVFMQyxPQVJLLFdBUUxBLE9BUks7OztBQVdQLGFBQ0U7QUFBQTtBQUFBLFVBQU0sVUFBVWIsYUFBYSxLQUFLQSxZQUFsQixDQUFoQjtBQUNHUSx3QkFBZ0JDLEtBQWhCLElBQTBCO0FBQUE7QUFBQSxZQUFPLFNBQVEsUUFBZjtBQUF5QkE7QUFBekIsU0FEN0I7QUFFRTtBQUNFLGdCQUFLLE1BRFA7QUFFRSxxQ0FGRjtBQUdFLGlCQUFNLE1BSFI7QUFJRSxvQ0FKRjtBQUtFLGdCQUFLLE1BTFA7QUFNRSx1QkFBWTtBQU5kLFVBRkY7QUFVRTtBQUNFLGdCQUFLLE9BRFA7QUFFRSxxQ0FGRjtBQUdFLGlCQUFNLE9BSFI7QUFJRSxvQ0FKRjtBQUtFLGdCQUFLLE1BTFA7QUFNRSx1QkFBWTtBQU5kLFVBVkY7QUFrQkU7QUFDRSxnQkFBSyxVQURQO0FBRUUscUNBRkY7QUFHRSxpQkFBTSxVQUhSO0FBSUUsb0NBSkY7QUFLRSxnQkFBSyxVQUxQO0FBTUUsdUJBQVk7QUFOZCxVQWxCRjtBQTBCRTtBQUNFLGdCQUFLLGNBRFA7QUFFRSxxQ0FGRjtBQUdFLGlCQUFNLEVBSFI7QUFJRSx1Q0FKRjtBQUtFLGdCQUFNO0FBQUE7QUFBQTtBQUFBO0FBQWtCO0FBQUE7QUFBQSxnQkFBRyxNQUFLLEdBQVI7QUFBQTtBQUFBO0FBQWxCO0FBTFIsVUExQkY7QUFpQ0U7QUFDRSxnQkFBSyxXQURQO0FBRUUscUNBRkY7QUFHRSxpQkFBTSxFQUhSO0FBSUU7QUFKRixVQWpDRjtBQXVDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRSxvQkFBSyxRQURQO0FBRUUsd0JBQVVDLFlBQVksQ0FBQyxDQUFDQyxlQUFkLElBQWlDQyxVQUFqQyxJQUErQ0M7QUFGM0Q7QUFBQTtBQUFBO0FBREY7QUF2Q0YsT0FERjtBQWtERDs7Ozs7O0FBQ0Y7O2tCQUVjLDBCQUFVO0FBQ3ZCQyxRQUFNLG9CQUFVdEIsYUFETztBQUV2QnVCLGlCQUFlO0FBQ2JDLFdBQU87QUFDTEMsV0FBSyxFQURBO0FBRUxDLFdBQUs7QUFGQTtBQURNLEdBRlE7QUFRdkJuQyxvQkFSdUI7QUFTdkJPLDhCQVR1QjtBQVV2QjZCLG1CQUFpQixDQUFDLE9BQUQ7QUFWTSxDQUFWLEVBV1oseUJBQVE7QUFBQSxTQUFVO0FBQ25CZixlQUFXZ0IsTUFBTWhCO0FBREUsR0FBVjtBQUFBLENBQVIsRUFFQ04sWUFGRCxDQVhZLEMiLCJmaWxlIjoiY29tcG9uZW50cy9mb3Jtcy91c2VyL1JlZ2lzdGVyRm9ybS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
