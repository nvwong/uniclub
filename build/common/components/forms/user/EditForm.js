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

  if (!values.name) {
    errors.name = 'Required';
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
        name: user.name
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
          name: 'name',
          component: _widgets.BsField,
          label: 'Name',
          adapter: _adapters.BsInput,
          type: 'text',
          placeholder: 'Name'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9ybXMvdXNlci9FZGl0Rm9ybS5qcyJdLCJuYW1lcyI6WyJ2YWxpZGF0ZSIsInZhbHVlcyIsImVycm9ycyIsIm5hbWUiLCJFZGl0Rm9ybSIsInByb3BzIiwiaW5pdCIsIl9pbml0IiwiYmluZCIsImhhbmRsZVN1Ym1pdCIsIl9oYW5kbGVTdWJtaXQiLCJ1c2VyIiwiaW5pdGlhbGl6ZSIsImRpc3BhdGNoIiwiYXBpRW5naW5lIiwicmVhZFNlbGYiLCJjYXRjaCIsImVyciIsInRoZW4iLCJqc29uIiwiZm9ybURhdGEiLCJ1cGRhdGUiLCJzdWJtaXRTdWNjZWVkZWQiLCJzdWJtaXRGYWlsZWQiLCJlcnJvciIsInByaXN0aW5lIiwic3VibWl0dGluZyIsImludmFsaWQiLCJmb3JtIiwiVVNFUl9FRElUIiwic3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUtPLElBQU1BLDhCQUFXLFNBQVhBLFFBQVcsQ0FBQ0MsTUFBRCxFQUFZO0FBQ2xDLE1BQU1DLFNBQVMsRUFBZjs7QUFFQSxNQUFJLENBQUNELE9BQU9FLElBQVosRUFBa0I7QUFDaEJELFdBQU9DLElBQVAsR0FBYyxVQUFkO0FBQ0Q7O0FBRUQsU0FBT0QsTUFBUDtBQUNELENBUk07O0lBVURFLFE7OztBQUNKLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsb0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLElBQUwsR0FBWSxNQUFLQyxLQUFMLENBQVdDLElBQVgsT0FBWjtBQUNBLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0MsYUFBTCxDQUFtQkYsSUFBbkIsT0FBcEI7QUFIaUI7QUFJbEI7Ozs7MEJBRUtHLEksRUFBTTtBQUFBLFVBQ0pDLFVBREksR0FDVyxLQUFLUCxLQURoQixDQUNKTyxVQURJOzs7QUFHVkEsaUJBQVc7QUFDVFQsY0FBTVEsS0FBS1I7QUFERixPQUFYO0FBR0Q7Ozt3Q0FFbUI7QUFBQTs7QUFBQSxtQkFDWSxLQUFLRSxLQURqQjtBQUFBLFVBQ1pRLFFBRFksVUFDWkEsUUFEWTtBQUFBLFVBQ0ZDLFNBREUsVUFDRkEsU0FERTs7O0FBR2xCLDBCQUFRQSxTQUFSLEVBQ0dDLFFBREgsR0FFR0MsS0FGSCxDQUVTLFVBQUNDLEdBQUQsRUFBUztBQUNkSixpQkFBUyw4QkFBV0ksR0FBWCxDQUFUO0FBQ0EsY0FBTUEsR0FBTjtBQUNELE9BTEgsRUFNR0MsSUFOSCxDQU1RLFVBQUNDLElBQUQsRUFBVTtBQUNkLGVBQUtiLElBQUwsQ0FBVWEsS0FBS1IsSUFBZjtBQUNELE9BUkg7QUFTRDs7O2tDQUVhUyxRLEVBQVU7QUFBQTs7QUFBQSxvQkFDUSxLQUFLZixLQURiO0FBQUEsVUFDaEJRLFFBRGdCLFdBQ2hCQSxRQURnQjtBQUFBLFVBQ05DLFNBRE0sV0FDTkEsU0FETTs7O0FBR3RCLGFBQU8sb0JBQVFBLFNBQVIsRUFDSk8sTUFESSxDQUNHRCxRQURILEVBRUpKLEtBRkksQ0FFRSxVQUFDQyxHQUFELEVBQVM7QUFDZEosaUJBQVMsOEJBQVdJLEdBQVgsQ0FBVDtBQUNBLGNBQU1BLEdBQU47QUFDRCxPQUxJLEVBTUpDLElBTkksQ0FNQyxVQUFDQyxJQUFELEVBQVU7QUFDZCxlQUFLYixJQUFMLENBQVVhLEtBQUtSLElBQWY7QUFDQUUsaUJBQVMsK0JBQVc7QUFDbEJGLGdCQUFNUSxLQUFLUjtBQURPLFNBQVgsQ0FBVDtBQUdELE9BWEksQ0FBUDtBQVlEOzs7NkJBRVE7QUFBQSxvQkFTSCxLQUFLTixLQVRGO0FBQUEsVUFFTEksWUFGSyxXQUVMQSxZQUZLO0FBQUEsVUFHTGEsZUFISyxXQUdMQSxlQUhLO0FBQUEsVUFJTEMsWUFKSyxXQUlMQSxZQUpLO0FBQUEsVUFLTEMsS0FMSyxXQUtMQSxLQUxLO0FBQUEsVUFNTEMsUUFOSyxXQU1MQSxRQU5LO0FBQUEsVUFPTEMsVUFQSyxXQU9MQSxVQVBLO0FBQUEsVUFRTEMsT0FSSyxXQVFMQSxPQVJLOzs7QUFXUCxhQUNFO0FBQUE7QUFBQSxVQUFNLFVBQVVsQixhQUFhLEtBQUtBLFlBQWxCLENBQWhCO0FBQ0dhLDJCQUFvQjtBQUFBO0FBQUEsWUFBTyxTQUFRLFNBQWY7QUFBQTtBQUFBLFNBRHZCO0FBRUdDLHdCQUFnQkMsS0FBaEIsSUFBMEI7QUFBQTtBQUFBLFlBQU8sU0FBUSxRQUFmO0FBQXlCQTtBQUF6QixTQUY3QjtBQUdFO0FBQ0UsZ0JBQUssTUFEUDtBQUVFLHFDQUZGO0FBR0UsaUJBQU0sTUFIUjtBQUlFLG9DQUpGO0FBS0UsZ0JBQUssTUFMUDtBQU1FLHVCQUFZO0FBTmQsVUFIRjtBQVdFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxjQUFRLE1BQUssUUFBYixFQUFzQixVQUFVQyxZQUFZQyxVQUFaLElBQTBCQyxPQUExRDtBQUFBO0FBRUdELDBCQUNDLHFDQUFHLFdBQVUsdUJBQWIsRUFBcUMsZUFBWSxNQUFqRDtBQUhKO0FBREY7QUFYRixPQURGO0FBc0JEOzs7Ozs7QUFDRjs7a0JBRWMsMEJBQVU7QUFDdkJFLFFBQU0sb0JBQVVDLFNBRE87QUFFdkI3QjtBQUZ1QixDQUFWLEVBR1oseUJBQVE7QUFBQSxTQUFVO0FBQ25CYyxlQUFXZ0IsTUFBTWhCO0FBREUsR0FBVjtBQUFBLENBQVIsRUFFQ1YsUUFGRCxDQUhZLEMiLCJmaWxlIjoiY29tcG9uZW50cy9mb3Jtcy91c2VyL0VkaXRGb3JtLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
