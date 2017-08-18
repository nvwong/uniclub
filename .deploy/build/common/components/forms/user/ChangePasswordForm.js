'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

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

  if (values.oldPassword === values.newPassword) {
    errors.newPassword = 'Cannot be same as old password';
  }

  if (!values.oldPassword) {
    errors.oldPassword = 'Required';
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
          initialize = _props.initialize;


      return (0, _user2.default)(apiEngine).updatePassword(formData).catch(function (err) {
        dispatch((0, _errorActions.pushErrors)(err));
        throw err;
      }).then(function (json) {
        if (json.isAuth) {
          initialize({
            oldPassword: '',
            newPassword: '',
            newPasswordConfirm: ''
          });
        } else {
          throw new _reduxForm.SubmissionError({
            oldPassword: 'Wrong old password',
            _error: 'Change password failed'
          });
        }
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
        {
          defaultHorizontal: false,
          defaultLabelDimensions: { sm: 12 },
          defaultFieldDimensions: { sm: 12 },
          onSubmit: handleSubmit(this.handleSubmit)
        },
        submitSucceeded && _react2.default.createElement(
          _Alert2.default,
          { bsStyle: 'success' },
          'Password Changed'
        ),
        submitFailed && error && _react2.default.createElement(
          _Alert2.default,
          { bsStyle: 'danger' },
          error
        ),
        _react2.default.createElement(_reduxForm.Field, {
          name: 'oldPassword',
          component: _widgets.BsField,
          label: 'Old Password',
          adapter: _adapters.BsInput,
          type: 'password',
          placeholder: 'Old Password'
        }),
        _react2.default.createElement(_reduxForm.Field, {
          name: 'newPassword',
          component: _widgets.BsField,
          label: 'New Password',
          adapter: _adapters.BsInput,
          type: 'password',
          placeholder: 'New Password'
        }),
        _react2.default.createElement(_reduxForm.Field, {
          name: 'newPasswordConfirm',
          component: _widgets.BsField,
          label: 'New Password Confirm',
          adapter: _adapters.BsInput,
          type: 'password',
          placeholder: 'New Password Confirm'
        }),
        _react2.default.createElement(
          _widgets.BsFormFooter,
          null,
          _react2.default.createElement(
            _Button2.default,
            { type: 'submit', disabled: pristine || submitting || invalid },
            'Change',
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
  form: _FormNames2.default.USER_CHANGE_PASSWORD,
  validate: validate
})((0, _reactRedux.connect)(function (state) {
  return {
    apiEngine: state.apiEngine
  };
})(ChangePasswordForm));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9ybXMvdXNlci9DaGFuZ2VQYXNzd29yZEZvcm0uanMiXSwibmFtZXMiOlsidmFsaWRhdGUiLCJ2YWx1ZXMiLCJlcnJvcnMiLCJuZXdQYXNzd29yZENvbmZpcm0iLCJuZXdQYXNzd29yZCIsIm9sZFBhc3N3b3JkIiwiQ2hhbmdlUGFzc3dvcmRGb3JtIiwicHJvcHMiLCJoYW5kbGVTdWJtaXQiLCJfaGFuZGxlU3VibWl0IiwiYmluZCIsImZvcm1EYXRhIiwiZGlzcGF0Y2giLCJhcGlFbmdpbmUiLCJpbml0aWFsaXplIiwidXBkYXRlUGFzc3dvcmQiLCJjYXRjaCIsImVyciIsInRoZW4iLCJqc29uIiwiaXNBdXRoIiwiX2Vycm9yIiwic3VibWl0U3VjY2VlZGVkIiwic3VibWl0RmFpbGVkIiwiZXJyb3IiLCJwcmlzdGluZSIsInN1Ym1pdHRpbmciLCJpbnZhbGlkIiwic20iLCJmb3JtIiwiVVNFUl9DSEFOR0VfUEFTU1dPUkQiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBTU8sSUFBTUEsOEJBQVcsU0FBWEEsUUFBVyxDQUFDQyxNQUFELEVBQVk7QUFDbEMsTUFBTUMsU0FBUyxFQUFmOztBQUVBLE1BQ0VELE9BQU9FLGtCQUFQLElBQ0FGLE9BQU9HLFdBQVAsS0FBdUJILE9BQU9FLGtCQUZoQyxFQUdFO0FBQ0FELFdBQU9FLFdBQVAsR0FBcUJGLE9BQU9DLGtCQUFQLEdBQTRCLHNCQUFqRDtBQUNEOztBQUVELE1BQUlGLE9BQU9JLFdBQVAsS0FBdUJKLE9BQU9HLFdBQWxDLEVBQStDO0FBQzdDRixXQUFPRSxXQUFQLEdBQXFCLGdDQUFyQjtBQUNEOztBQUVELE1BQUksQ0FBQ0gsT0FBT0ksV0FBWixFQUF5QjtBQUN2QkgsV0FBT0csV0FBUCxHQUFxQixVQUFyQjtBQUNEOztBQUVELE1BQUksQ0FBQ0osT0FBT0csV0FBWixFQUF5QjtBQUN2QkYsV0FBT0UsV0FBUCxHQUFxQixVQUFyQjtBQUNEOztBQUVELE1BQUksQ0FBQ0gsT0FBT0Usa0JBQVosRUFBZ0M7QUFDOUJELFdBQU9DLGtCQUFQLEdBQTRCLFVBQTVCO0FBQ0Q7O0FBRUQsU0FBT0QsTUFBUDtBQUNELENBM0JNOztJQTZCREksa0I7OztBQUNKLDhCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsd0lBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0MsYUFBTCxDQUFtQkMsSUFBbkIsT0FBcEI7QUFGaUI7QUFHbEI7Ozs7a0NBRWFDLFEsRUFBVTtBQUFBLG1CQUNvQixLQUFLSixLQUR6QjtBQUFBLFVBQ2hCSyxRQURnQixVQUNoQkEsUUFEZ0I7QUFBQSxVQUNOQyxTQURNLFVBQ05BLFNBRE07QUFBQSxVQUNLQyxVQURMLFVBQ0tBLFVBREw7OztBQUd0QixhQUFPLG9CQUFRRCxTQUFSLEVBQ0pFLGNBREksQ0FDV0osUUFEWCxFQUVKSyxLQUZJLENBRUUsVUFBQ0MsR0FBRCxFQUFTO0FBQ2RMLGlCQUFTLDhCQUFXSyxHQUFYLENBQVQ7QUFDQSxjQUFNQSxHQUFOO0FBQ0QsT0FMSSxFQU1KQyxJQU5JLENBTUMsVUFBQ0MsSUFBRCxFQUFVO0FBQ2QsWUFBSUEsS0FBS0MsTUFBVCxFQUFpQjtBQUNmTixxQkFBVztBQUNUVCx5QkFBYSxFQURKO0FBRVRELHlCQUFhLEVBRko7QUFHVEQsZ0NBQW9CO0FBSFgsV0FBWDtBQUtELFNBTkQsTUFNTztBQUNMLGdCQUFNLCtCQUFvQjtBQUN4QkUseUJBQWEsb0JBRFc7QUFFeEJnQixvQkFBUTtBQUZnQixXQUFwQixDQUFOO0FBSUQ7QUFDRixPQW5CSSxDQUFQO0FBb0JEOzs7NkJBRVE7QUFBQSxvQkFTSCxLQUFLZCxLQVRGO0FBQUEsVUFFTEMsWUFGSyxXQUVMQSxZQUZLO0FBQUEsVUFHTGMsZUFISyxXQUdMQSxlQUhLO0FBQUEsVUFJTEMsWUFKSyxXQUlMQSxZQUpLO0FBQUEsVUFLTEMsS0FMSyxXQUtMQSxLQUxLO0FBQUEsVUFNTEMsUUFOSyxXQU1MQSxRQU5LO0FBQUEsVUFPTEMsVUFQSyxXQU9MQSxVQVBLO0FBQUEsVUFRTEMsT0FSSyxXQVFMQSxPQVJLOzs7QUFXUCxhQUNFO0FBQUE7QUFBQTtBQUNFLDZCQUFtQixLQURyQjtBQUVFLGtDQUF3QixFQUFFQyxJQUFJLEVBQU4sRUFGMUI7QUFHRSxrQ0FBd0IsRUFBRUEsSUFBSSxFQUFOLEVBSDFCO0FBSUUsb0JBQVVwQixhQUFhLEtBQUtBLFlBQWxCO0FBSlo7QUFNR2MsMkJBQW9CO0FBQUE7QUFBQSxZQUFPLFNBQVEsU0FBZjtBQUFBO0FBQUEsU0FOdkI7QUFPR0Msd0JBQWdCQyxLQUFoQixJQUEwQjtBQUFBO0FBQUEsWUFBTyxTQUFRLFFBQWY7QUFBeUJBO0FBQXpCLFNBUDdCO0FBUUU7QUFDRSxnQkFBSyxhQURQO0FBRUUscUNBRkY7QUFHRSxpQkFBTSxjQUhSO0FBSUUsb0NBSkY7QUFLRSxnQkFBSyxVQUxQO0FBTUUsdUJBQVk7QUFOZCxVQVJGO0FBZ0JFO0FBQ0UsZ0JBQUssYUFEUDtBQUVFLHFDQUZGO0FBR0UsaUJBQU0sY0FIUjtBQUlFLG9DQUpGO0FBS0UsZ0JBQUssVUFMUDtBQU1FLHVCQUFZO0FBTmQsVUFoQkY7QUF3QkU7QUFDRSxnQkFBSyxvQkFEUDtBQUVFLHFDQUZGO0FBR0UsaUJBQU0sc0JBSFI7QUFJRSxvQ0FKRjtBQUtFLGdCQUFLLFVBTFA7QUFNRSx1QkFBWTtBQU5kLFVBeEJGO0FBZ0NFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxjQUFRLE1BQUssUUFBYixFQUFzQixVQUFVQyxZQUFZQyxVQUFaLElBQTBCQyxPQUExRDtBQUFBO0FBRUdELDBCQUNDLHFDQUFHLFdBQVUsdUJBQWIsRUFBcUMsZUFBWSxNQUFqRDtBQUhKO0FBREY7QUFoQ0YsT0FERjtBQTJDRDs7Ozs7O0FBQ0Y7O2tCQUVjLDBCQUFVO0FBQ3ZCRyxRQUFNLG9CQUFVQyxvQkFETztBQUV2QjlCO0FBRnVCLENBQVYsRUFHWix5QkFBUTtBQUFBLFNBQVU7QUFDbkJhLGVBQVdrQixNQUFNbEI7QUFERSxHQUFWO0FBQUEsQ0FBUixFQUVDUCxrQkFGRCxDQUhZLEMiLCJmaWxlIjoiY29tcG9uZW50cy9mb3Jtcy91c2VyL0NoYW5nZVBhc3N3b3JkRm9ybS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
