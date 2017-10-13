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
// import { setCookies } from '../../../actions/cookieActions';


var validate = exports.validate = function validate(values) {
  var errors = {};

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
    value: function _init(oneEvent) {
      var initialize = this.props.initialize;


      initialize({
        name: oneEvent.name,
        date: oneEvent.date,
        location: oneEvent.location,
        description: oneEvent.description,
        tag: oneEvent.tag,
        category: oneEvent.category,
        price: oneEvent.price,
        quota: oneEvent.quota,
        state: oneEvent.state
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var _props = this.props,
          dispatch = _props.dispatch,
          apiEngine = _props.apiEngine;


      (0, _event2.default)(apiEngine).readEvent().catch(function (err) {
        dispatch((0, _errorActions.pushErrors)(err));
        throw err;
      }).then(function (json) {
        _this2.init(json.oneEvent);
      });
    }
  }, {
    key: '_handleSubmit',
    value: function _handleSubmit(formData) {
      var _this3 = this;

      var _props2 = this.props,
          dispatch = _props2.dispatch,
          apiEngine = _props2.apiEngine;


      return (0, _event2.default)(apiEngine).update(formData).catch(function (err) {
        dispatch((0, _errorActions.pushErrors)(err));
        throw err;
      }).then(function (json) {
        _this3.init(json.oneEvent);
        /* dispatch(setCookies({
          oneEvent: json.oneEvent,
        }))*/;
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
  form: _FormNames2.default.EDIT_EVENT,
  validate: validate
})((0, _reactRedux.connect)(function (state) {
  return {
    apiEngine: state.apiEngine
  };
})(EditForm));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9ybXMvZXZlbnRzL0VkaXRFdmVudEZvcm0uanMiXSwibmFtZXMiOlsidmFsaWRhdGUiLCJ2YWx1ZXMiLCJlcnJvcnMiLCJuYW1lIiwiZGF0ZSIsImxvY2F0aW9uIiwiZGVzY3JpcHRpb24iLCJ0YWciLCJjYXRlZ29yeSIsInByaWNlIiwicXVvdGEiLCJzdGF0ZSIsIkVkaXRGb3JtIiwicHJvcHMiLCJpbml0IiwiX2luaXQiLCJiaW5kIiwiaGFuZGxlU3VibWl0IiwiX2hhbmRsZVN1Ym1pdCIsIm9uZUV2ZW50IiwiaW5pdGlhbGl6ZSIsImRpc3BhdGNoIiwiYXBpRW5naW5lIiwicmVhZEV2ZW50IiwiY2F0Y2giLCJlcnIiLCJ0aGVuIiwianNvbiIsImZvcm1EYXRhIiwidXBkYXRlIiwic3VibWl0U3VjY2VlZGVkIiwic3VibWl0RmFpbGVkIiwiZXJyb3IiLCJwcmlzdGluZSIsInN1Ym1pdHRpbmciLCJpbnZhbGlkIiwiZmxvYXQiLCJwYWRkaW5nUmlnaHQiLCJtYXJnaW5Ub3AiLCJsYWJlbCIsInZhbHVlIiwiZm9ybSIsIkVESVRfRVZFTlQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFFQTs7QUFDQTs7QUFNQTs7Ozs7Ozs7O0FBUkE7OztBQWFPLElBQU1BLDhCQUFXLFNBQVhBLFFBQVcsQ0FBQ0MsTUFBRCxFQUFZO0FBQ2xDLE1BQU1DLFNBQVMsRUFBZjs7QUFFQSxNQUFJLENBQUNELE9BQU9FLElBQVosRUFBa0I7QUFDaEJELFdBQU9DLElBQVAsR0FBYyxVQUFkO0FBQ0Q7O0FBRUQsTUFBSSxDQUFDRixPQUFPRyxJQUFaLEVBQWtCO0FBQ2hCRixXQUFPRSxJQUFQLEdBQWMsVUFBZDtBQUNEOztBQUVELE1BQUksQ0FBQ0gsT0FBT0ksUUFBWixFQUFzQjtBQUNwQkgsV0FBT0csUUFBUCxHQUFrQixVQUFsQjtBQUNEOztBQUVELE1B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
