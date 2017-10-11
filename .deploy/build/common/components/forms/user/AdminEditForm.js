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

var _cookieActions = require('../../../actions/cookieActions');

var _adapters = require('../../fields/adapters');

var _widgets = require('../../fields/widgets');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var validate = exports.validate = function validate(values) {
  var errors = {};

  if (!values.username) {
    errors.username = 'Required';
  }

  return errors;
};

var AdminEditForm = function (_Component) {
  _inherits(AdminEditForm, _Component);

  function AdminEditForm(props) {
    _classCallCheck(this, AdminEditForm);

    // super();
    var _this = _possibleConstructorReturn(this, (AdminEditForm.__proto__ || Object.getPrototypeOf(AdminEditForm)).call(this, props));

    _this.init = _this._init.bind(_this);
    _this.handleSubmit = _this._handleSubmit.bind(_this);
    return _this;
  }

  _createClass(AdminEditForm, [{
    key: '_init',
    value: function _init(user) {
      var initialize = this.props.initialize;


      initialize({
        username: user.username,
        lastname: user.lastname,
        firstname: user.firstname,
        uniemail: user.uniemail,
        curriculum: user.curriculum,
        phone: user.phone
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var _props = this.props,
          dispatch = _props.dispatch,
          apiEngine = _props.apiEngine,
          user = _props.user;


      (0, _user2.default)(apiEngine).readAny(user).catch(function (err) {
        dispatch((0, _errorActions.pushErrors)(err));
        throw err;
      }).then(function (json) {
        _this2.init(json.user);
      });
    }
  }, {
    key: '_handleSubmit',
    value: function _handleSubmit(formData) {
      var _this3 = this;

      var _props2 = this.props,
          dispatch = _props2.dispatch,
          apiEngine = _props2.apiEngine;


      return (0, _user2.default)(apiEngine).update(formData).catch(function (err) {
        dispatch((0, _errorActions.pushErrors)(err));
        throw err;
      }).then(function (json) {
        _this3.init(json.user);
        dispatch((0, _cookieActions.setCookies)({
          user: json.user
        }));
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          handleSubmit = _props3.handleSubmit,
          submitSucceeded = _props3.submitSucceeded,
          submitFailed = _props3.submitFailed,
          error = _props3.error,
          pristine = _props3.pristine,
          submitting = _props3.submitting,
          invalid = _props3.invalid;


      return _react2.default.createElement(
        _widgets.BsForm,
        { onSubmit: handleSubmit(this.handleSubmit) },
        submitSucceeded && _react2.default.createElement(
          _Alert2.default,
          { bsStyle: 'success' },
          'Profile Saved'
        ),
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
        _react2.default.createElement(
          _widgets.BsFormFooter,
          null,
          _react2.default.createElement(
            _Button2.default,
            { type: 'submit', disabled: pristine || submitting || invalid },
            'Save',
            submitting && _react2.default.createElement('i', { className: 'fa fa-spinner fa-spin', 'aria-hidden': 'true' })
          )
        )
      );
    }
  }]);

  return AdminEditForm;
}(_react.Component);

;

exports.default = (0, _reduxForm.reduxForm)({
  form: _FormNames2.default.ADMIN_EDIT_USER,
  validate: validate
})((0, _reactRedux.connect)(function (state) {
  return {
    apiEngine: state.apiEngine
  };
})(AdminEditForm));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9ybXMvdXNlci9BZG1pbkVkaXRGb3JtLmpzIl0sIm5hbWVzIjpbInZhbGlkYXRlIiwidmFsdWVzIiwiZXJyb3JzIiwidXNlcm5hbWUiLCJBZG1pbkVkaXRGb3JtIiwicHJvcHMiLCJpbml0IiwiX2luaXQiLCJiaW5kIiwiaGFuZGxlU3VibWl0IiwiX2hhbmRsZVN1Ym1pdCIsInVzZXIiLCJpbml0aWFsaXplIiwibGFzdG5hbWUiLCJmaXJzdG5hbWUiLCJ1bmllbWFpbCIsImN1cnJpY3VsdW0iLCJwaG9uZSIsImRpc3BhdGNoIiwiYXBpRW5naW5lIiwicmVhZEFueSIsImNhdGNoIiwiZXJyIiwidGhlbiIsImpzb24iLCJmb3JtRGF0YSIsInVwZGF0ZSIsInN1Ym1pdFN1Y2NlZWRlZCIsInN1Ym1pdEZhaWxlZCIsImVycm9yIiwicHJpc3RpbmUiLCJzdWJtaXR0aW5nIiwiaW52YWxpZCIsImZvcm0iLCJBRE1JTl9FRElUX1VTRVIiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBS08sSUFBTUEsOEJBQVcsU0FBWEEsUUFBVyxDQUFDQyxNQUFELEVBQVk7QUFDbEMsTUFBTUMsU0FBUyxFQUFmOztBQUVBLE1BQUksQ0FBQ0QsT0FBT0UsUUFBWixFQUFzQjtBQUNwQkQsV0FBT0MsUUFBUCxHQUFrQixVQUFsQjtBQUNEOztBQUVELFNBQU9ELE1BQVA7QUFDRCxDQVJNOztJQVVERSxhOzs7QUFDSix5QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUVqQjtBQUZpQiw4SEFDWEEsS0FEVzs7QUFHakIsVUFBS0MsSUFBTCxHQUFZLE1BQUtDLEtBQUwsQ0FBV0MsSUFBWCxPQUFaO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixNQUFLQyxhQUFMLENBQW1CRixJQUFuQixPQUFwQjtBQUppQjtBQUts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TUFMUDtBQU1FLHVCQUFZO0FBTmQsVUFuQ0Y7QUEyQ0U7QUFDRSxnQkFBSyxPQURQO0FBRUUscUNBRkY7QUFHRSxpQkFBTSxnQkFIUjtBQUlFLG9DQUpGO0FBS0UsZ0JBQUssUUFMUDtBQU1FLHVCQUFZO0FBTmQsVUEzQ0Y7QUFvREU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGNBQVEsTUFBSyxRQUFiLEVBQXNCLFVBQVVDLFlBQVlDLFVBQVosSUFBMEJDLE9BQTFEO0FBQUE7QUFFR0QsMEJBQ0MscUNBQUcsV0FBVSx1QkFBYixFQUFxQyxlQUFZLE1BQWpEO0FBSEo7QUFERjtBQXBERixPQURGO0FBK0REOzs7Ozs7QUFDRjs7a0JBRWMsMEJBQVU7QUFDdkJFLFFBQU0sb0JBQVVDLGVBRE87QUFFdkJsQztBQUZ1QixDQUFWLEVBR1oseUJBQVE7QUFBQSxTQUFVO0FBQ25CbUIsZUFBV2dCLE1BQU1oQjtBQURFLEdBQVY7QUFBQSxDQUFSLEVBRUNmLGFBRkQsQ0FIWSxDIiwiZmlsZSI6ImNvbXBvbmVudHMvZm9ybXMvdXNlci9BZG1pbkVkaXRGb3JtLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
