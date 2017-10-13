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

var _event = require('../../../api/event');

var _event2 = _interopRequireDefault(_event);

var _errorActions = require('../../../actions/errorActions');

var _bases = require('../../fields/bases');

var _adapters = require('../../fields/adapters');

var _widgets = require('../../fields/widgets');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import validator from 'validator';

// import { validateForm } from '../../../actions/formActions';


// import configs from '../../../../../configs/project/client';

var validate = function validate(values) {
  var errors = {};

  // if (values.email && !validator.isEmail(values.email)) {
  //   errors.email = 'Not an email';
  // }

  if (!values.name) {
    errors.name = 'Required';
  }

  if (!values.date) {
    errors.date = 'Required';
  }

  if (!values.location) {
    errors.location = 'Required';
  }

  if (!values.description) {
    errors.description = 'Required';
  }

  if (!values.tag) {
    errors.tag = 'Required';
  }

  if (!values.category) {
    errors.category = 'Required';
  }

  if (!values.organiser) {
    errors.organiser = 'Required';
  }

  if (!values.price) {
    errors.price = 'Required';
  }

  if (!values.quota) {
    errors.quota = 'Required';
  }

  if (!values.state) {
    errors.state = 'Required';
  }

  return errors;
};

/* let asyncValidate = (values, dispatch) => {
  return dispatch(validateForm(FormNames.NEW_EVENT, 'email', values.email))
    .then((json) => {
      let validationError = {};
      if (!json.isPassed) {
        validationError.email = json.message;
        throw validationError;
      }
    });
}; */

var NewEventForm = function (_Component) {
  _inherits(NewEventForm, _Component);

  function NewEventForm(props) {
    _classCallCheck(this, NewEventForm);

    var _this = _possibleConstructorReturn(this, (NewEventForm.__proto__ || Object.getPrototypeOf(NewEventForm)).call(this, props));

    _this.handleSubmit = _this._handleSubmit.bind(_this);
    return _this;
  }

  _createClass(NewEventForm, [{
    key: '_handleSubmit',
    value: function _handleSubmit(formData) {
      var _props = this.props,
          dispatch = _props.dispatch,
          apiEngine = _props.apiEngine;


      return (0, _event2.default)(apiEngine).create(formData).catch(function (err) {
        dispatch((0, _errorActions.pushErrors)(err));
        throw err;
      }).then(function (json) {
        dispatch((0, _reactRouterRedux.push)('/events/all'));
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
          label: 'Event Name',
          adapter: _adapters.BsInput,
          type: 'text',
          placeholder: 'Event Name'
        }),
        _react2.default.createElement(_reduxForm.Field, {
          name: 'date',
          component: _widgets.BsField,
          label: 'Event Date',
          adapter: _bases.AirSingleDate,
          displayFormat: 'YYYY/MM/DD',
          showClearDate: true
        }),
        _react2.default.createElement(_reduxForm.Field, {
          name: 'location',
          component: _widgets.BsField,
          label: 'Location',
          adapter: _adapters.BsInput,
          type: 'text',
          placeholder: 'Location'
        }),
        _react2.default.createElement(_reduxForm.Field, {
          name: 'description',
          component: _widgets.BsField,
          label: 'Description of Event',
          adapter: _adapters.BsTextarea,
          rows: '4'
        }),
        _react2.default.createElement(_reduxForm.Field, {
          name: 'tag',
          component: _widgets.BsField,
          label: 'Tag',
          adapter: _adapters.BsCheckboxList,
          style: {
            float: 'left',
            paddingRight: 20,
            marginTop: 10
          },
          options: [{
            label: 'Fun',
            value: 'Fun'
          }, {
            label: 'Ocamp',
            value: 'Ocamp'
          }, {
            label: 'Concert',
            value: 'Concert'
          }]
        }),
        _react2.default.createElement(_reduxForm.Field, {
          name: 'organiser',
          component: _widgets.BsField,
          label: 'Organiser',
          adapter: _adapters.BsInput,
          type: 'text',
          placeholder: 'Organiser'
        }),
        _react2.default.createElement(_reduxForm.Field, {
          name: 'category',
          component: _widgets.BsField,
          label: 'Category',
          adapter: _adapters.BsCheckboxList,
          style: {
            float: 'left',
            paddingRight: 20,
            marginTop: 10
          },
          options: [{
            label: 'Category1',
            value: 'Category1'
          }, {
            label: 'Category2',
            value: 'Category2'
          }, {
            label: 'Category3',
            value: 'Category3'
          }]
        }),
        _react2.default.createElement(_reduxForm.Field, {
          name: 'price',
          component: _widgets.BsField,
          label: 'Price',
          adapter: _adapters.BsInput,
          type: 'number',
          placeholder: 'Price'
        }),
        _react2.default.createElement(_reduxForm.Field, {
          name: 'quota',
          component: _widgets.BsField,
          label: 'Quota',
          adapter: _adapters.BsInput,
          type: 'number',
          placeholder: 'Quota'
        }),
        _react2.default.createElement(_reduxForm.Field, {
          name: 'state',
          component: _widgets.BsField,
          label: 'State',
          adapter: _adapters.BsRadio,
          style: {
            float: 'left',
            paddingRight: 20,
            marginTop: 10
          },
          options: [{
            label: 'Open',
            value: 'Open'
          }, {
            label: 'Not Yet Open',
            value: 'Not Yet Open'
          }]
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
              disabled: pristine || submitting || invalid
            },
            'Register'
          )
        )
      );
    }
  }]);

  return NewEventForm;
}(_react.Component);

;

exports.default = (0, _reduxForm.reduxForm)({
  form: _FormNames2.default.NEW_EVENT,
  initialValues: {
    slide: {
      min: 30,
      max: 40
    }
  },
  validate: validate
  // asyncValidate,
  // asyncBlurFields: ['email'],
})((0, _reactRedux.connect)(function (state) {
  return {
    apiEngine: state.apiEngine
  };
})(NewEventForm));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9ybXMvZXZlbnRzL05ld0V2ZW50Rm9ybS5qcyJdLCJuYW1lcyI6WyJ2YWxpZGF0ZSIsInZhbHVlcyIsImVycm9ycyIsIm5hbWUiLCJkYXRlIiwibG9jYXRpb24iLCJkZXNjcmlwdGlvbiIsInRhZyIsImNhdGVnb3J5Iiwib3JnYW5pc2VyIiwicHJpY2UiLCJxdW90YSIsInN0YXRlIiwiTmV3RXZlbnRGb3JtIiwicHJvcHMiLCJoYW5kbGVTdWJtaXQiLCJfaGFuZGxlU3VibWl0IiwiYmluZCIsImZvcm1EYXRhIiwiZGlzcGF0Y2giLCJhcGlFbmdpbmUiLCJjcmVhdGUiLCJjYXRjaCIsImVyciIsInRoZW4iLCJqc29uIiwic3VibWl0RmFpbGVkIiwiZXJyb3IiLCJwcmlzdGluZSIsInN1Ym1pdHRpbmciLCJpbnZhbGlkIiwiZmxvYXQiLCJwYWRkaW5nUmlnaHQiLCJtYXJnaW5Ub3AiLCJsYWJlbCIsInZhbHVlIiwiZm9ybSIsIk5FV19FVkVOVCIsImluaXRpYWxWYWx1ZXMiLCJzbGlkZSIsIm1pbiIsIm1heCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBTUE7Ozs7Ozs7OztBQVpBOztBQUdBOzs7QUFjQTs7QUFFQSxJQUFNQSxXQUFXLFNBQVhBLFFBQVcsQ0FBQ0MsTUFBRCxFQUFZO0FBQzNCLE1BQU1DLFNBQVMsRUFBZjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsTUFBSSxDQUFDRCxPQUFPRSxJQUFaLEVBQWtCO0FBQ2hCRCxXQUFPQyxJQUFQLEdBQWMsVUFBZDtBQUNEOztBQUVELE1BQUksQ0FBQ0YsT0FBT0csSUFBWixFQUFrQjtBQUNoQkYsV0FBT0UsSUFBUCxHQUFjLFVBQWQ7QUFDRDs7QUFFRCxNQUFJLENBQUNILE9BQU9JLFFBQVosRUFBc0I7QUFDcEJILFdBQU9HLFFBQVAsR0FBa0IsVUFBbEI7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RE47QUFFREMsbUJBQU87QUFGTixXQUhNO0FBVlgsVUFuR0Y7QUFxSEU7QUFDRSxnQkFBSyxXQURQO0FBRUUscUNBRkY7QUFHRSxpQkFBTSxFQUhSO0FBSUU7QUFKRixVQXJIRjtBQTJIRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRSxvQkFBSyxRQURQO0FBRUUsd0JBQVVQLFlBQVlDLFVBQVosSUFBMEJDO0FBRnRDO0FBQUE7QUFBQTtBQURGO0FBM0hGLE9BREY7QUFzSUQ7Ozs7OztBQUNGOztrQkFFYywwQkFBVTtBQUN2Qk0sUUFBTSxvQkFBVUMsU0FETztBQUV2QkMsaUJBQWU7QUFDYkMsV0FBTztBQUNMQyxXQUFLLEVBREE7QUFFTEMsV0FBSztBQUZBO0FBRE0sR0FGUTtBQVF2QnpDO0FBQ0E7QUFDQTtBQVZ1QixDQUFWLEVBV1oseUJBQVE7QUFBQSxTQUFVO0FBQ25Cb0IsZUFBV1IsTUFBTVE7QUFERSxHQUFWO0FBQUEsQ0FBUixFQUVDUCxZQUZELENBWFksQyIsImZpbGUiOiJjb21wb25lbnRzL2Zvcm1zL2V2ZW50cy9OZXdFdmVudEZvcm0uanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
