'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

var _errorActions = require('../../../actions/errorActions');

var _adapters = require('../../fields/adapters');

var _widgets = require('../../fields/widgets');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var validate = exports.validate = function validate(values) {
  var errors = {};

  if (values.newPasswordConfirm && values.newPassword !== values.newPasswordConfirm) {
    errors.newPassword = errors.newPasswordConfirm = 'Password Not Matched';
  }

  if (!values.newPassword) {
    errors.newPassword = 'Required';
  }

  if (!values.newPasswordConfirm) {
    errors.newPasswordConfirm = 'Required';
  }

  return errors;
};

var ChangePasswordForm = function (_Component) {
  _inherits(ChangePasswordForm, _Component);

  function ChangePasswordForm(props) {
    _classCallCheck(this, ChangePasswordForm);

    var _this = _possibleConstructorReturn(this, (ChangePasswordForm.__proto__ || Object.getPrototypeOf(ChangePasswordForm)).call(this, props));

    _this.handleSubmit = _this._handleSubmit.bind(_this);
    return _this;
  }

  _createClass(ChangePasswordForm, [{
    key: '_handleSubmit',
    value: function _handleSubmit(formData) {
      var _props = this.props,
          dispatch = _props.dispatch,
          apiEngine = _props.apiEngine,
          routing = _props.routing,
          initialize = _props.initialize;

      var location = routing.locationBeforeTransitions;

      return (0, _user2.default)(apiEngine).resetPassword(_extends({}, formData, {
        token: location.query.token
      })).catch(function (err) {
        dispatch((0, _errorActions.pushErrors)(err));
        throw err;
      }).then(function (json) {
        initialize({
          newPassword: '',
          newPasswordConfirm: ''
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
          'Password Changed. Go to ',
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/user/login' },
            'login page'
          ),
          ' now.'
        ),
        submitFailed && error && _react2.default.createElement(
          _Alert2.default,
          { bsStyle: 'danger' },
          error
        ),
        _react2.default.createElement(_reduxForm.Field, {
          name: 'newPassword',
          component: _widgets.BsField,
          label: 'New Password',
          adapter: _adapters.BsInput,
          type: 'password',
          disabled: submitSucceeded,
          placeholder: 'New Password'
        }),
        _react2.default.createElement(_reduxForm.Field, {
          name: 'newPasswordConfirm',
          component: _widgets.BsField,
          label: 'New Password Confirm',
          adapter: _adapters.BsInput,
          type: 'password',
          disabled: submitSucceeded,
          placeholder: 'New Password Confirm'
        }),
        _react2.default.createElement(
          _widgets.BsFormFooter,
          null,
          _react2.default.createElement(
            _Button2.default,
            { type: 'submit', disabled: pristine || submitting || invalid },
            'Reset',
            submitting && _react2.default.createElement('i', { className: 'fa fa-spinner fa-spin', 'aria-hidden': 'true' })
          )
        )
      );
    }
  }]);

  return ChangePasswordForm;
}(_react.Component);

;

exports.default = (0, _reduxForm.reduxForm)({
  form: _FormNames2.default.USER_RESET_PASSWORD,
  validate: validate
})((0, _reactRedux.connect)(function (state) {
  return {
    apiEngine: state.apiEngine,
    routing: state.routing
  };
})(ChangePasswordForm));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9ybXMvdXNlci9SZXNldFBhc3N3b3JkRm9ybS5qcyJdLCJuYW1lcyI6WyJ2YWxpZGF0ZSIsInZhbHVlcyIsImVycm9ycyIsIm5ld1Bhc3N3b3JkQ29uZmlybSIsIm5ld1Bhc3N3b3JkIiwiQ2hhbmdlUGFzc3dvcmRGb3JtIiwicHJvcHMiLCJoYW5kbGVTdWJtaXQiLCJfaGFuZGxlU3VibWl0IiwiYmluZCIsImZvcm1EYXRhIiwiZGlzcGF0Y2giLCJhcGlFbmdpbmUiLCJyb3V0aW5nIiwiaW5pdGlhbGl6ZSIsImxvY2F0aW9uIiwibG9jYXRpb25CZWZvcmVUcmFuc2l0aW9ucyIsInJlc2V0UGFzc3dvcmQiLCJ0b2tlbiIsInF1ZXJ5IiwiY2F0Y2giLCJlcnIiLCJ0aGVuIiwianNvbiIsInN1Ym1pdFN1Y2NlZWRlZCIsInN1Ym1pdEZhaWxlZCIsImVycm9yIiwicHJpc3RpbmUiLCJzdWJtaXR0aW5nIiwiaW52YWxpZCIsImZvcm0iLCJVU0VSX1JFU0VUX1BBU1NXT1JEIiwic3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBTU8sSUFBTUEsOEJBQVcsU0FBWEEsUUFBVyxDQUFDQyxNQUFELEVBQVk7QUFDbEMsTUFBTUMsU0FBUyxFQUFmOztBQUVBLE1BQ0VELE9BQU9FLGtCQUFQLElBQ0FGLE9BQU9HLFdBQVAsS0FBdUJILE9BQU9FLGtCQUZoQyxFQUdFO0FBQ0FELFdBQU9FLFdBQVAsR0FBcUJGLE9BQU9DLGtCQUFQLEdBQTRCLHNCQUFqRDtBQUNEOztBQUVELE1BQUksQ0FBQ0YsT0FBT0csV0FBWixFQUF5QjtBQUN2QkYsV0FBT0UsV0FBUCxHQUFxQixVQUFyQjtBQUNEOztBQUVELE1BQUksQ0FBQ0gsT0FBT0Usa0JBQVosRUFBZ0M7QUFDOUJELFdBQU9DLGtCQUFQLEdBQTRCLFVBQTVCO0FBQ0Q7O0FBRUQsU0FBT0QsTUFBUDtBQUNELENBbkJNOztJQXFCREcsa0I7OztBQUNKLDhCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsd0lBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0MsYUFBTCxDQUFtQkMsSUFBbkIsT0FBcEI7QUFGaUI7QUFHbEI7Ozs7a0NBRWFDLFEsRUFBVTtBQUFBLG1CQUM2QixLQUFLSixLQURsQztBQUFBLFVBQ2hCSyxRQURnQixVQUNoQkEsUUFEZ0I7QUFBQSxVQUNOQyxTQURNLFVBQ05BLFNBRE07QUFBQSxVQUNLQyxPQURMLFVBQ0tBLE9BREw7QUFBQSxVQUNjQyxVQURkLFVBQ2NBLFVBRGQ7O0FBRXRCLFVBQUlDLFdBQVdGLFFBQVFHLHlCQUF2Qjs7QUFFQSxhQUFPLG9CQUFRSixTQUFSLEVBQ0pLLGFBREksY0FFQVAsUUFGQTtBQUdIUSxlQUFPSCxTQUFTSSxLQUFULENBQWVEO0FBSG5CLFVBS0pFLEtBTEksQ0FLRSxVQUFDQyxHQUFELEVBQVM7QUFDZFYsaUJBQVMsOEJBQVdVLEdBQVgsQ0FBVDtBQUNBLGNBQU1BLEdBQU47QUFDRCxPQVJJLEVBU0pDLElBVEksQ0FTQyxVQUFDQyxJQUFELEVBQVU7QUFDZFQsbUJBQVc7QUFDVFYsdUJBQWEsRUFESjtBQUVURCw4QkFBb0I7QUFGWCxTQUFYO0FBSUQsT0FkSSxDQUFQO0FBZUQ7Ozs2QkFFUTtBQUFBLG9CQVNILEtBQUtHLEtBVEY7QUFBQSxVQUVMQyxZQUZLLFdBRUxBLFlBRks7QUFBQSxVQUdMaUIsZUFISyxXQUdMQSxlQUhLO0FBQUEsVUFJTEMsWUFKSyxXQUlMQSxZQUpLO0FBQUEsVUFLTEMsS0FMSyxXQUtMQSxLQUxLO0FBQUEsVUFNTEMsUUFOSyxXQU1MQSxRQU5LO0FBQUEsVUFPTEMsVUFQSyxXQU9MQSxVQVBLO0FBQUEsVUFRTEMsT0FSSyxXQVFMQSxPQVJLOzs7QUFXUCxhQUNFO0FBQUE7QUFBQSxVQUFNLFVBQVV0QixhQUFhLEtBQUtBLFlBQWxCLENBQWhCO0FBQ0dpQiwyQkFDQztBQUFBO0FBQUEsWUFBTyxTQUFRLFNBQWY7QUFBQTtBQUVRO0FBQUE7QUFBQSxjQUFNLElBQUcsYUFBVDtBQUFBO0FBQUEsV0FGUjtBQUFBO0FBQUEsU0FGSjtBQU9HQyx3QkFBZ0JDLEtBQWhCLElBQTBCO0FBQUE7QUFBQSxZQUFPLFNBQVEsUUFBZjtBQUF5QkE7QUFBekIsU0FQN0I7QUFRRTtBQUNFLGdCQUFLLGFBRFA7QUFFRSxxQ0FGRjtBQUdFLGlCQUFNLGNBSFI7QUFJRSxvQ0FKRjtBQUtFLGdCQUFLLFVBTFA7QUFNRSxvQkFBVUYsZUFOWjtBQU9FLHVCQUFZO0FBUGQsVUFSRjtBQWlCRTtBQUNFLGdCQUFLLG9CQURQO0FBRUUscUNBRkY7QUFHRSxpQkFBTSxzQkFIUjtBQUlFLG9DQUpGO0FBS0UsZ0JBQUssVUFMUDtBQU1FLG9CQUFVQSxlQU5aO0FBT0UsdUJBQVk7QUFQZCxVQWpCRjtBQTBCRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsY0FBUSxNQUFLLFFBQWIsRUFBc0IsVUFBVUcsWUFBWUMsVUFBWixJQUEwQkMsT0FBMUQ7QUFBQTtBQUVHRCwwQkFDQyxxQ0FBRyxXQUFVLHVCQUFiLEVBQXFDLGVBQVksTUFBakQ7QUFISjtBQURGO0FBMUJGLE9BREY7QUFxQ0Q7Ozs7OztBQUNGOztrQkFFYywwQkFBVTtBQUN2QkUsUUFBTSxvQkFBVUMsbUJBRE87QUFFdkIvQjtBQUZ1QixDQUFWLEVBR1oseUJBQVE7QUFBQSxTQUFVO0FBQ25CWSxlQUFXb0IsTUFBTXBCLFNBREU7QUFFbkJDLGFBQVNtQixNQUFNbkI7QUFGSSxHQUFWO0FBQUEsQ0FBUixFQUdDUixrQkFIRCxDQUhZLEMiLCJmaWxlIjoiY29tcG9uZW50cy9mb3Jtcy91c2VyL1Jlc2V0UGFzc3dvcmRGb3JtLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
