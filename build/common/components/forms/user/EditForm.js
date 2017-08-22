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

var EditForm = function (_Component) {
  _inherits(EditForm, _Component);

  function EditForm(props) {
    _classCallCheck(this, EditForm);

    var _this = _possibleConstructorReturn(this, (EditForm.__proto__ || Object.getPrototypeOf(EditForm)).call(this, props));

    _this.init = _this._init.bind(_this);
    _this.handleSubmit = _this._handleSubmit.bind(_this);
    return _this;
  }

  _createClass(EditForm, [{
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
          apiEngine = _props.apiEngine;


      (0, _user2.default)(apiEngine).readSelf().catch(function (err) {
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

  return EditForm;
}(_react.Component);

;

exports.default = (0, _reduxForm.reduxForm)({
  form: _FormNames2.default.USER_EDIT,
  validate: validate
})((0, _reactRedux.connect)(function (state) {
  return {
    apiEngine: state.apiEngine
  };
})(EditForm));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9ybXMvdXNlci9FZGl0Rm9ybS5qcyJdLCJuYW1lcyI6WyJ2YWxpZGF0ZSIsInZhbHVlcyIsImVycm9ycyIsInVzZXJuYW1lIiwiRWRpdEZvcm0iLCJwcm9wcyIsImluaXQiLCJfaW5pdCIsImJpbmQiLCJoYW5kbGVTdWJtaXQiLCJfaGFuZGxlU3VibWl0IiwidXNlciIsImluaXRpYWxpemUiLCJsYXN0bmFtZSIsImZpcnN0bmFtZSIsInVuaWVtYWlsIiwiY3VycmljdWx1bSIsInBob25lIiwiZGlzcGF0Y2giLCJhcGlFbmdpbmUiLCJyZWFkU2VsZiIsImNhdGNoIiwiZXJyIiwidGhlbiIsImpzb24iLCJmb3JtRGF0YSIsInVwZGF0ZSIsInN1Ym1pdFN1Y2NlZWRlZCIsInN1Ym1pdEZhaWxlZCIsImVycm9yIiwicHJpc3RpbmUiLCJzdWJtaXR0aW5nIiwiaW52YWxpZCIsImZvcm0iLCJVU0VSX0VESVQiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBS08sSUFBTUEsOEJBQVcsU0FBWEEsUUFBVyxDQUFDQyxNQUFELEVBQVk7QUFDbEMsTUFBTUMsU0FBUyxFQUFmOztBQUVBLE1BQUksQ0FBQ0QsT0FBT0UsUUFBWixFQUFzQjtBQUNwQkQsV0FBT0MsUUFBUCxHQUFrQixVQUFsQjtBQUNEOztBQUVELFNBQU9ELE1BQVA7QUFDRCxDQVJNOztJQVVERSxROzs7QUFDSixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG9IQUNYQSxLQURXOztBQUVqQixVQUFLQyxJQUFMLEdBQVksTUFBS0MsS0FBTCxDQUFXQyxJQUFYLE9BQVo7QUFDQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtDLGFBQUwsQ0FBbUJGLElBQW5CLE9BQXBCO0FBSGlCO0FBSWxCOzs7OzBCQUVLRyxJLEVBQU07QUFBQSxVQUNKQyxVQURJLEdBQ1csS0FBS1AsS0FEaEIsQ0FDSk8sVUFESTs7O0FBR1ZBLGlCQUFXO0FBQ1RULGtCQUFVUSxLQUFLUixRQUROO0FBRVRVLGtCQUFVRixLQUFLRSxRQUZOO0FBR1RDLG1CQUFXSCxLQUFLRyxTQUhQO0FBSVRDLGtCQUFVSixLQUFLSSxRQUpOO0FBS1RDLG9CQUFZTCxLQUFLSyxVQUxSO0FBTVRDLGVBQU9OLEtBQUtNO0FBTkgsT0FBWDtBQVFEOzs7d0NBRW1CO0FBQUE7O0FBQUEsbUJBQ1ksS0FBS1osS0FEakI7QUFBQSxVQUNaYSxRQURZLFVBQ1pBLFFBRFk7QUFBQSxVQUNGQyxTQURFLFVBQ0ZBLFNBREU7OztBQUdsQiwwQkFBUUEsU0FBUixFQUNHQyxRQURILEdBRUdDLEtBRkgsQ0FFUyxVQUFDQyxHQUFELEVBQVM7QUFDZEosaUJBQVMsOEJBQVdJLEdBQVgsQ0FBVDtBQUNBLGNBQU1BLEdBQU47QUFDRCxPQUxILEVBTUdDLElBTkgsQ0FNUSxVQUFDQyxJQUFELEVBQVU7QUFDZCxlQUFLbEIsSUFBTCxDQUFVa0IsS0FBS2IsSUFBZjtBQUNELE9BUkg7QUFTRDs7O2tDQUVhYyxRLEVBQVU7QUFBQTs7QUFBQSxvQkFDUSxLQUFLcEIsS0FEYjtBQUFBLFVBQ2hCYSxRQURnQixXQUNoQkEsUUFEZ0I7QUFBQSxVQUNOQyxTQURNLFdBQ05BLFNBRE07OztBQUd0QixhQUFPLG9CQUFRQSxTQUFSLEVBQ0pPLE1BREksQ0FDR0QsUUFESCxFQUVKSixLQUZJLENBRUUsVUFBQ0MsR0FBRCxFQUFTO0FBQ2RKLGlCQUFTLDhCQUFXSSxHQUFYLENBQVQ7QUFDQSxjQUFNQSxHQUFOO0FBQ0QsT0FMSSxFQU1KQyxJQU5JLENBTUMsVUFBQ0MsSUFBRCxFQUFVO0FBQ2QsZUFBS2xCLElBQUwsQ0FBVWtCLEtBQUtiLElBQWY7QUFDQU8saUJBQVMsK0JBQVc7QUFDbEJQLGdCQUFNYSxLQUFLYjtBQURPLFNBQVgsQ0FBVDtBQUdELE9BWEksQ0FBUDtBQVlEOzs7NkJBRVE7QUFBQSxvQkFTSCxLQUFLTixLQVRGO0FBQUEsVUFFTEksWUFGSyxXQUVMQSxZQUZLO0FBQUEsVUFHTGtCLGVBSEssV0FHTEEsZUFISztBQUFBLFVBSUxDLFlBSkssV0FJTEEsWUFKSztBQUFBLFVBS0xDLEtBTEssV0FLTEEsS0FMSztBQUFBLFVBTUxDLFFBTkssV0FNTEEsUUFOSztBQUFBLFVBT0xDLFVBUEssV0FPTEEsVUFQSztBQUFBLFVBUUxDLE9BUkssV0FRTEEsT0FSSzs7O0FBV1AsYUFDRTtBQUFBO0FBQUEsVUFBTSxVQUFVdkIsYUFBYSxLQUFLQSxZQUFsQixDQUFoQjtBQUNHa0IsMkJBQW9CO0FBQUE7QUFBQSxZQUFPLFNBQVEsU0FBZjtBQUFBO0FBQUEsU0FEdkI7QUFFR0Msd0JBQWdCQyxLQUFoQixJQUEwQjtBQUFBO0FBQUEsWUFBTyxTQUFRLFFBQWY7QUFBeUJBO0FBQXpCLFNBRjdCO0FBR0U7QUFDRSxnQkFBSyxVQURQO0FBRUUscUNBRkY7QUFHRSxpQkFBTSxVQUhSO0FBSUUsb0NBSkY7QUFLRSxnQkFBSyxNQUxQO0FBTUUsdUJBQVk7QUFOZCxVQUhGO0FBV0U7QUFDRSxnQkFBSyxVQURQO0FBRUUscUNBRkY7QUFHRSxpQkFBTSxXQUhSO0FBSUUsb0NBSkY7QUFLRSxnQkFBSyxNQUxQO0FBTUUsdUJBQVk7QUFOZCxVQVhGO0FBbUJFO0FBQ0UsZ0JBQUssV0FEUDtBQUVFLHFDQUZGO0FBR0UsaUJBQU0sWUFIUjtBQUlFLG9DQUpGO0FBS0UsZ0JBQUssTUFMUDtBQU1FLHVCQUFZO0FBTmQsVUFuQkY7QUEyQkU7QUFDRSxnQkFBSyxVQURQO0FBRUUscUNBRkY7QUFHRSxpQkFBTSxrQkFIUjtBQUlFLG9DQUpGO0FBS0UsZ0JBQUssTUFMUDtBQU1FLHVCQUFZO0FBTmQsVUEzQkY7QUFtQ0U7QUFDRSxnQkFBSyxZQURQO0FBRUUscUNBRkY7QUFHRSxpQkFBTSxZQUhSO0FBSUUsb0NBSkY7QUFLRSxnQkFBSyxNQUxQO0FBTUUsdUJBQVk7QUFOZCxVQW5DRjtBQTJDRTtBQUNFLGdCQUFLLE9BRFA7QUFFRSxxQ0FGRjtBQUdFLGlCQUFNLGdCQUhSO0FBSUUsb0NBSkY7QUFLRSxnQkFBSyxRQUxQO0FBTUUsdUJBQVk7QUFOZCxVQTNDRjtBQW9ERTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsY0FBUSxNQUFLLFFBQWIsRUFBc0IsVUFBVUMsWUFBWUMsVUFBWixJQUEwQkMsT0FBMUQ7QUFBQTtBQUVHRCwwQkFDQyxxQ0FBRyxXQUFVLHVCQUFiLEVBQXFDLGVBQVksTUFBakQ7QUFISjtBQURGO0FBcERGLE9BREY7QUErREQ7Ozs7OztBQUNGOztrQkFFYywwQkFBVTtBQUN2QkUsUUFBTSxvQkFBVUMsU0FETztBQUV2QmxDO0FBRnVCLENBQVYsRUFHWix5QkFBUTtBQUFBLFNBQVU7QUFDbkJtQixlQUFXZ0IsTUFBTWhCO0FBREUsR0FBVjtBQUFBLENBQVIsRUFFQ2YsUUFGRCxDQUhZLEMiLCJmaWxlIjoiY29tcG9uZW50cy9mb3Jtcy91c2VyL0VkaXRGb3JtLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
