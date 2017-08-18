'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _FormNames = require('../../constants/FormNames');

var _FormNames2 = _interopRequireDefault(_FormNames);

var _bases = require('../fields/bases');

var _adapters = require('../fields/adapters');

var _widgets = require('../fields/widgets');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var validate = function validate(values) {
  var errors = {};

  if (!values.someText) {
    errors.someText = 'Required';
  }

  return errors;
};

var DemoForm = function (_Component) {
  _inherits(DemoForm, _Component);

  function DemoForm() {
    _classCallCheck(this, DemoForm);

    var _this = _possibleConstructorReturn(this, (DemoForm.__proto__ || Object.getPrototypeOf(DemoForm)).call(this));

    _this.handleSubmit = _this._handleSubmit.bind(_this);
    return _this;
  }

  _createClass(DemoForm, [{
    key: '_handleSubmit',
    value: function _handleSubmit(formData) {
      console.log('formData', formData);
      // let { dispatch, apiEngine } = this.props;
      //
      // return someAPI(apiEngine)
      //   .doSomething(formData)
      //   .catch((err) => {
      //     dispatch(pushErrors(err));
      //     throw err;
      //   })
      //   .then((json) => {
      //     console.log('json', json);
      //   });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          handleSubmit = _props.handleSubmit,
          submitFailed = _props.submitFailed,
          error = _props.error,
          pristine = _props.pristine,
          submitting = _props.submitting,
          invalid = _props.invalid,
          values = _props.demoForm.values;


      return _react2.default.createElement(
        _widgets.BsForm,
        {
          defaultHorizontal: true,
          defaultLabelDimensions: { sm: 2 },
          defaultFieldDimensions: { sm: 6 },
          onSubmit: handleSubmit(this.handleSubmit)
        },
        submitFailed && error && _react2.default.createElement(
          _Alert2.default,
          { bsStyle: 'danger' },
          error
        ),
        _react2.default.createElement(
          _Alert2.default,
          { bsStyle: 'info' },
          'File object is not going to show here. Please submit the form and check the console.'
        ),
        _react2.default.createElement(
          'pre',
          null,
          JSON.stringify(values, null, 2)
        ),
        _react2.default.createElement(_reduxForm.Field, {
          name: 'someText',
          component: _widgets.BsField,
          label: 'Text',
          adapter: _adapters.BsInput,
          type: 'text',
          placeholder: 'Text'
        }),
        _react2.default.createElement(_reduxForm.Field, {
          name: 'somePassword',
          component: _widgets.BsField,
          label: 'Password',
          adapter: _adapters.BsInput,
          type: 'password',
          placeholder: 'Password'
        }),
        _react2.default.createElement(_reduxForm.Field, {
          name: 'someNumber',
          component: _widgets.BsField,
          label: 'Number',
          adapter: _adapters.BsInput,
          type: 'number',
          placeholder: 'Number'
        }),
        _react2.default.createElement(_reduxForm.Field, {
          name: 'someDate',
          component: _widgets.BsField,
          label: 'Date',
          fieldDimensions: { sm: 3 },
          adapter: _adapters.BsInput,
          type: 'date',
          placeholder: 'Date'
        }),
        _react2.default.createElement(_reduxForm.Field, {
          name: 'someTime',
          component: _widgets.BsField,
          label: 'Time',
          fieldDimensions: { sm: 3 },
          adapter: _adapters.BsInput,
          type: 'time',
          placeholder: 'Time'
        }),
        _react2.default.createElement(_reduxForm.Field, {
          name: 'someFile',
          component: _widgets.BsField,
          label: 'File',
          adapter: _adapters.BsInput,
          type: 'file'
        }),
        _react2.default.createElement(_reduxForm.Field, {
          name: 'someTextarea',
          component: _widgets.BsField,
          label: 'Textarea',
          adapter: _adapters.BsTextarea,
          rows: '6'
        }),
        _react2.default.createElement(_reduxForm.Field, {
          name: 'somePlainText',
          component: _widgets.BsField,
          label: '',
          adapter: _adapters.BsPlaintext,
          text: 'Plain Text'
        }),
        _react2.default.createElement(_reduxForm.Field, {
          name: 'someRangeSlider',
          component: _widgets.BsField,
          label: 'Range Slider',
          adapter: _bases.RangeSlider,
          min: 0,
          max: 100,
          step: 5
        }),
        _react2.default.createElement(_reduxForm.Field, {
          name: '_',
          component: _widgets.BsField,
          label: '',
          adapter: _adapters.BsPlaintext,
          text: 'range slider value is ' + (values.someRangeSlider.min + ' ~ ' + values.someRangeSlider.max)
        }),
        _react2.default.createElement(_reduxForm.Field, {
          name: 'someAirSingleDate',
          component: _widgets.BsField,
          label: 'Airbnb Single Date',
          adapter: _bases.AirSingleDate,
          displayFormat: 'YYYY/MM/DD',
          showClearDate: true
        }),
        _react2.default.createElement(_reduxForm.Field, {
          name: 'someAirDateRange',
          component: _widgets.BsField,
          label: 'Airbnb Date Range',
          adapter: _bases.AirDateRange,
          displayFormat: 'YYYY/MM/DD',
          showClearDate: true
        }),
        _react2.default.createElement(_reduxForm.Field, {
          name: 'someSelect',
          component: _widgets.BsField,
          label: 'Select',
          fieldDimensions: { sm: 2 },
          adapter: _adapters.BsSelect,
          options: [{
            label: 'Taiwan',
            value: 'TW'
          }, {
            label: 'Japan',
            value: 'JP'
          }, {
            label: 'China',
            value: 'CH',
            disabled: true
          }, {
            label: 'United States',
            value: 'US'
          }]
        }),
        _react2.default.createElement(_reduxForm.Field, {
          name: 'someCheckbox',
          component: _widgets.BsField,
          label: 'Checkbox',
          adapter: _adapters.BsCheckbox,
          text: 'This is a checkbox'
        }),
        _react2.default.createElement(_reduxForm.Field, {
          name: 'someInlineCheckboxList',
          component: _widgets.BsField,
          label: 'CheckboxList',
          adapter: _adapters.BsCheckboxList,
          style: {
            float: 'left',
            paddingRight: 20,
            marginTop: 10
          },
          options: [{
            label: 'There',
            value: 'VALUE1'
          }, {
            label: 'are',
            value: 'VALUE2'
          }, {
            label: 'many',
            value: 'VALUE3'
          }, {
            label: 'inline',
            value: 'VALUE4',
            disabled: true
          }, {
            label: 'checkboxes',
            value: 'VALUE5'
          }]
        }),
        _react2.default.createElement(_reduxForm.Field, {
          name: 'someInlineRadio',
          component: _widgets.BsField,
          label: 'Radio',
          adapter: _adapters.BsRadio,
          style: {
            float: 'left',
            paddingRight: 20,
            marginTop: 10
          },
          options: [{
            label: 'some',
            value: 'VALUE1'
          }, {
            label: 'radio',
            value: 'VALUE2',
            disabled: true
          }, {
            label: 'buttons',
            value: 'VALUE3'
          }]
        }),
        _react2.default.createElement(_reduxForm.Field, {
          name: 'someRecaptcha',
          component: _widgets.BsField,
          label: 'Recaptcha',
          adapter: _bases.Recaptcha,
          disableHint: 'recaptcha is disabled'
        }),
        _react2.default.createElement(
          _widgets.BsFormFooter,
          null,
          _react2.default.createElement(
            _Button2.default,
            { type: 'submit', disabled: pristine || submitting || invalid },
            'Submit'
          ),
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '#' },
            _react2.default.createElement(
              _Button2.default,
              { bsStyle: 'link' },
              'Some link'
            )
          )
        )
      );
    }
  }]);

  return DemoForm;
}(_react.Component);

;

exports.default = (0, _reduxForm.reduxForm)({
  form: _FormNames2.default.DEMO,
  validate: validate,
  initialValues: {
    somePassword: 'xxxxxxxxxx',
    someRangeSlider: {
      min: 10,
      max: 30
    }
  }
})((0, _reactRedux.connect)(function (state) {
  return {
    apiEngine: state.apiEngine,
    demoForm: state.form[_FormNames2.default.DEMO]
  };
})(DemoForm));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9ybXMvRGVtb0Zvcm0uanMiXSwibmFtZXMiOlsidmFsaWRhdGUiLCJ2YWx1ZXMiLCJlcnJvcnMiLCJzb21lVGV4dCIsIkRlbW9Gb3JtIiwiaGFuZGxlU3VibWl0IiwiX2hhbmRsZVN1Ym1pdCIsImJpbmQiLCJmb3JtRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJwcm9wcyIsInN1Ym1pdEZhaWxlZCIsImVycm9yIiwicHJpc3RpbmUiLCJzdWJtaXR0aW5nIiwiaW52YWxpZCIsImRlbW9Gb3JtIiwic20iLCJKU09OIiwic3RyaW5naWZ5Iiwic29tZVJhbmdlU2xpZGVyIiwibWluIiwibWF4IiwibGFiZWwiLCJ2YWx1ZSIsImRpc2FibGVkIiwiZmxvYXQiLCJwYWRkaW5nUmlnaHQiLCJtYXJnaW5Ub3AiLCJmb3JtIiwiREVNTyIsImluaXRpYWxWYWx1ZXMiLCJzb21lUGFzc3dvcmQiLCJhcGlFbmdpbmUiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQU1BOztBQVNBOzs7Ozs7Ozs7O0FBTUEsSUFBSUEsV0FBVyxTQUFYQSxRQUFXLENBQUNDLE1BQUQsRUFBWTtBQUN6QixNQUFJQyxTQUFTLEVBQWI7O0FBRUEsTUFBSSxDQUFDRCxPQUFPRSxRQUFaLEVBQXNCO0FBQ3BCRCxXQUFPQyxRQUFQLEdBQWtCLFVBQWxCO0FBQ0Q7O0FBRUQsU0FBT0QsTUFBUDtBQUNELENBUkQ7O0lBVU1FLFE7OztBQUNKLHNCQUFjO0FBQUE7O0FBQUE7O0FBRVosVUFBS0MsWUFBTCxHQUFvQixNQUFLQyxhQUFMLENBQW1CQyxJQUFuQixPQUFwQjtBQUZZO0FBR2I7Ozs7a0NBRWFDLFEsRUFBVTtBQUN0QkMsY0FBUUMsR0FBUixDQUFZLFVBQVosRUFBd0JGLFFBQXhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEOzs7NkJBRVE7QUFBQSxtQkFTSCxLQUFLRyxLQVRGO0FBQUEsVUFFTE4sWUFGSyxVQUVMQSxZQUZLO0FBQUEsVUFHTE8sWUFISyxVQUdMQSxZQUhLO0FBQUEsVUFJTEMsS0FKSyxVQUlMQSxLQUpLO0FBQUEsVUFLTEMsUUFMSyxVQUtMQSxRQUxLO0FBQUEsVUFNTEMsVUFOSyxVQU1MQSxVQU5LO0FBQUEsVUFPTEMsT0FQSyxVQU9MQSxPQVBLO0FBQUEsVUFRT2YsTUFSUCxVQVFMZ0IsUUFSSyxDQVFPaEIsTUFSUDs7O0FBV1AsYUFDRTtBQUFBO0FBQUE7QUFDRSw2QkFBbUIsSUFEckI7QUFFRSxrQ0FBd0IsRUFBRWlCLElBQUksQ0FBTixFQUYxQjtBQUdFLGtDQUF3QixFQUFFQSxJQUFJLENBQU4sRUFIMUI7QUFJRSxvQkFBVWIsYUFBYSxLQUFLQSxZQUFsQjtBQUpaO0FBTUdPLHdCQUFnQkMsS0FBaEIsSUFBMEI7QUFBQTtBQUFBLFlBQU8sU0FBUSxRQUFmO0FBQXlCQTtBQUF6QixTQU43QjtBQU9FO0FBQUE7QUFBQSxZQUFPLFNBQVEsTUFBZjtBQUFBO0FBQUEsU0FQRjtBQVdFO0FBQUE7QUFBQTtBQUFNTSxlQUFLQyxTQUFMLENBQWVuQixNQUFmLEVBQXVCLElBQXZCLEVBQTZCLENBQTdCO0FBQU4sU0FYRjtBQVlFO0FBQ0UsZ0JBQUssVUFEUDtBQUVFLHFDQUZGO0FBR0UsaUJBQU0sTUFIUjtBQUlFLG9DQUpGO0FBS0UsZ0JBQUssTUFMUDtBQU1FLHVCQUFZO0FBTmQsVUFaRjtBQW9CRTtBQUNFLGdCQUFLLGNBRFA7QUFFRSxxQ0FGRjtBQUdFLGlCQUFNLFVBSFI7QUFJRSxvQ0FKRjtBQUtFLGdCQUFLLFVBTFA7QUFNRSx1QkFBWTtBQU5kLFVBcEJGO0FBNEJFO0FBQ0UsZ0JBQUssWUFEUDtBQUVFLHFDQUZGO0FBR0UsaUJBQU0sUUFIUjtBQUlFLG9DQUpGO0FBS0UsZ0JBQUssUUFMUDtBQU1FLHVCQUFZO0FBTmQsVUE1QkY7QUFvQ0U7QUFDRSxnQkFBSyxVQURQO0FBRUUscUNBRkY7QUFHRSxpQkFBTSxNQUhSO0FBSUUsMkJBQWlCLEVBQUVpQixJQUFJLENBQU4sRUFKbkI7QUFLRSxvQ0FMRjtBQU1FLGdCQUFLLE1BTlA7QUFPRSx1QkFBWTtBQVBkLFVBcENGO0FBNkNFO0FBQ0UsZ0JBQUssVUFEUDtBQUVFLHFDQUZGO0FBR0UsaUJBQU0sTUFIUjtBQUlFLDJCQUFpQixFQUFFQSxJQUFJLENBQU4sRUFKbkI7QUFLRSxvQ0FMRjtBQU1FLGdCQUFLLE1BTlA7QUFPRSx1QkFBWTtBQVBkLFVBN0NGO0FBc0RFO0FBQ0UsZ0JBQUssVUFEUDtBQUVFLHFDQUZGO0FBR0UsaUJBQU0sTUFIUjtBQUlFLG9DQUpGO0FBS0UsZ0JBQUs7QUFMUCxVQXRERjtBQTZERTtBQUNFLGdCQUFLLGNBRFA7QUFFRSxxQ0FGRjtBQUdFLGlCQUFNLFVBSFI7QUFJRSx1Q0FKRjtBQUtFLGdCQUFLO0FBTFAsVUE3REY7QUFvRUU7QUFDRSxnQkFBSyxlQURQO0FBRUUscUNBRkY7QUFHRSxpQkFBTSxFQUhSO0FBSUUsd0NBSkY7QUFLRSxnQkFBSztBQUxQLFVBcEVGO0FBMkVFO0FBQ0UsZ0JBQUssaUJBRFA7QUFFRSxxQ0FGRjtBQUdFLGlCQUFNLGNBSFI7QUFJRSxxQ0FKRjtBQUtFLGVBQUssQ0FMUDtBQU1FLGVBQUssR0FOUDtBQU9FLGdCQUFNO0FBUFIsVUEzRUY7QUFvRkU7QUFDRSxnQkFBSyxHQURQO0FBRUUscUNBRkY7QUFHRSxpQkFBTSxFQUhSO0FBSUUsd0NBSkY7QUFLRSxnQkFDRSw0QkFDR2pCLE9BQU9vQixlQUFQLENBQXVCQyxHQUQxQixXQUNtQ3JCLE9BQU9vQixlQUFQLENBQXVCRSxHQUQxRDtBQU5KLFVBcEZGO0FBOEZFO0FBQ0UsZ0JBQUssbUJBRFA7QUFFRSxxQ0FGRjtBQUdFLGlCQUFNLG9CQUhSO0FBSUUsdUNBSkY7QUFLRSx5QkFBYyxZQUxoQjtBQU1FO0FBTkYsVUE5RkY7QUFzR0U7QUFDRSxnQkFBSyxrQkFEUDtBQUVFLHFDQUZGO0FBR0UsaUJBQU0sbUJBSFI7QUFJRSxzQ0FKRjtBQUtFLHlCQUFjLFlBTGhCO0FBTUU7QUFORixVQXRHRjtBQThHRTtBQUNFLGdCQUFLLFlBRFA7QUFFRSxxQ0FGRjtBQUdFLGlCQUFNLFFBSFI7QUFJRSwyQkFBaUIsRUFBRUwsSUFBSSxDQUFOLEVBSm5CO0FBS0UscUNBTEY7QUFNRSxtQkFBUyxDQUFDO0FBQ1JNLG1CQUFPLFFBREM7QUFFUkMsbUJBQU87QUFGQyxXQUFELEVBR047QUFDREQsbUJBQU8sT0FETjtBQUVEQyxtQkFBTztBQUZOLFdBSE0sRUFNTjtBQUNERCxtQkFBTyxPQUROO0FBRURDLG1CQUFPLElBRk47QUFHREMsc0JBQVU7QUFIVCxXQU5NLEVBVU47QUFDREYsbUJBQU8sZUFETjtBQUVEQyxtQkFBTztBQUZOLFdBVk07QUFOWCxVQTlHRjtBQW1JRTtBQUNFLGdCQUFLLGNBRFA7QUFFRSxxQ0FGRjtBQUdFLGlCQUFNLFVBSFI7QUFJRSx1Q0FKRjtBQUtFLGdCQUFLO0FBTFAsVUFuSUY7QUEwSUU7QUFDRSxnQkFBSyx3QkFEUDtBQUVFLHFDQUZGO0FBR0UsaUJBQU0sY0FIUjtBQUlFLDJDQUpGO0FBS0UsaUJBQU87QUFDTEUsbUJBQU8sTUFERjtBQUVMQywwQkFBYyxFQUZUO0FBR0xDLHVCQUFXO0FBSE4sV0FMVDtBQVVFLG1CQUFTLENBQUM7QUFDUkwsbUJBQU8sT0FEQztBQUVSQyxtQkFBTztBQUZDLFdBQUQsRUFHTjtBQUNERCxtQkFBTyxLQUROO0FBRURDLG1CQUFPO0FBRk4sV0FITSxFQU1OO0FBQ0RELG1CQUFPLE1BRE47QUFFREMsbUJBQU87QUFGTixXQU5NLEVBU047QUFDREQsbUJBQU8sUUFETjtBQUVEQyxtQkFBTyxRQUZOO0FBR0RDLHNCQUFVO0FBSFQsV0FUTSxFQWFOO0FBQ0RGLG1CQUFPLFlBRE47QUFFREMsbUJBQU87QUFGTixXQWJNO0FBVlgsVUExSUY7QUFzS0U7QUFDRSxnQkFBSyxpQkFEUDtBQUVFLHFDQUZGO0FBR0UsaUJBQU0sT0FIUjtBQUlFLG9DQUpGO0FBS0UsaUJBQU87QUFDTEUsbUJBQU8sTUFERjtBQUVMQywwQkFBYyxFQUZUO0FBR0xDLHVCQUFXO0FBSE4sV0FMVDtBQVVFLG1CQUFTLENBQUM7QUFDUkwsbUJBQU8sTUFEQztBQUVSQyxtQkFBTztBQUZDLFdBQUQsRUFHTjtBQUNERCxtQkFBTyxPQUROO0FBRURDLG1CQUFPLFFBRk47QUFHREMsc0JBQVU7QUFIVCxXQUhNLEVBT047QUFDREYsbUJBQU8sU0FETjtBQUVEQyxtQkFBTztBQUZOLFdBUE07QUFWWCxVQXRLRjtBQTRMRTtBQUNFLGdCQUFLLGVBRFA7QUFFRSxxQ0FGRjtBQUdFLGlCQUFNLFdBSFI7QUFJRSxtQ0FKRjtBQUtFLHVCQUFZO0FBTGQsVUE1TEY7QUFtTUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGNBQVEsTUFBSyxRQUFiLEVBQXNCLFVBQVVYLFlBQVlDLFVBQVosSUFBMEJDLE9BQTFEO0FBQUE7QUFBQSxXQURGO0FBSUU7QUFBQTtBQUFBLGNBQU0sSUFBRyxHQUFUO0FBQ0U7QUFBQTtBQUFBLGdCQUFRLFNBQVEsTUFBaEI7QUFBQTtBQUFBO0FBREY7QUFKRjtBQW5NRixPQURGO0FBOE1EOzs7Ozs7QUFDRjs7a0JBRWMsMEJBQVU7QUFDdkJjLFFBQU0sb0JBQVVDLElBRE87QUFFdkIvQixvQkFGdUI7QUFHdkJnQyxpQkFBZTtBQUNiQyxrQkFBYyxZQUREO0FBRWJaLHFCQUFpQjtBQUNmQyxXQUFLLEVBRFU7QUFFZkMsV0FBSztBQUZVO0FBRko7QUFIUSxDQUFWLEVBVVoseUJBQVE7QUFBQSxTQUFVO0FBQ25CVyxlQUFXQyxNQUFNRCxTQURFO0FBRW5CakIsY0FBVWtCLE1BQU1MLElBQU4sQ0FBVyxvQkFBVUMsSUFBckI7QUFGUyxHQUFWO0FBQUEsQ0FBUixFQUdDM0IsUUFIRCxDQVZZLEMiLCJmaWxlIjoiY29tcG9uZW50cy9mb3Jtcy9EZW1vRm9ybS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
