'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDates = require('react-dates');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

require('react-dates/lib/css/_datepicker.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultValue = {
  startDate: null,
  endDate: null
};

var AirDateRange = function (_Component) {
  _inherits(AirDateRange, _Component);

  function AirDateRange() {
    _classCallCheck(this, AirDateRange);

    var _this = _possibleConstructorReturn(this, (AirDateRange.__proto__ || Object.getPrototypeOf(AirDateRange)).call(this));

    _this.state = {
      focusedInput: null
    };
    _this.onDatesChange = _this._onDatesChange.bind(_this);
    _this.onFocusChange = _this._onFocusChange.bind(_this);
    return _this;
  }

  _createClass(AirDateRange, [{
    key: '_onDatesChange',
    value: function _onDatesChange(_ref) {
      var startDate = _ref.startDate,
          endDate = _ref.endDate;

      this.props.input.onChange({ startDate: startDate, endDate: endDate });
    }
  }, {
    key: '_onFocusChange',
    value: function _onFocusChange(focusedInput) {
      this.setState({ focusedInput: focusedInput });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          input = _props.input,
          rest = _objectWithoutProperties(_props, ['input']);

      var focusedInput = this.state.focusedInput;


      return _react2.default.createElement(_reactDates.DateRangePicker, _extends({}, rest, {
        onDatesChange: this.onDatesChange,
        onFocusChange: this.onFocusChange,
        focusedInput: focusedInput,
        startDate: input.value.startDate ? (0, _moment2.default)(input.value.startDate) : defaultValue.startDate,
        endDate: input.value.endDate ? (0, _moment2.default)(input.value.endDate) : defaultValue.endDate
      }));
    }
  }]);

  return AirDateRange;
}(_react.Component);

AirDateRange.propTypes = {
  input: _react.PropTypes.object.isRequired
};

exports.default = AirDateRange;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZmllbGRzL2Jhc2VzL0FpckRhdGVSYW5nZS5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0VmFsdWUiLCJzdGFydERhdGUiLCJlbmREYXRlIiwiQWlyRGF0ZVJhbmdlIiwic3RhdGUiLCJmb2N1c2VkSW5wdXQiLCJvbkRhdGVzQ2hhbmdlIiwiX29uRGF0ZXNDaGFuZ2UiLCJiaW5kIiwib25Gb2N1c0NoYW5nZSIsIl9vbkZvY3VzQ2hhbmdlIiwicHJvcHMiLCJpbnB1dCIsIm9uQ2hhbmdlIiwic2V0U3RhdGUiLCJyZXN0IiwidmFsdWUiLCJwcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxlQUFlO0FBQ2pCQyxhQUFXLElBRE07QUFFakJDLFdBQVM7QUFGUSxDQUFuQjs7SUFLTUMsWTs7O0FBQ0osMEJBQWM7QUFBQTs7QUFBQTs7QUFFWixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsb0JBQWM7QUFESCxLQUFiO0FBR0EsVUFBS0MsYUFBTCxHQUFxQixNQUFLQyxjQUFMLENBQW9CQyxJQUFwQixPQUFyQjtBQUNBLFVBQUtDLGFBQUwsR0FBcUIsTUFBS0MsY0FBTCxDQUFvQkYsSUFBcEIsT0FBckI7QUFOWTtBQU9iOzs7O3lDQUVzQztBQUFBLFVBQXRCUCxTQUFzQixRQUF0QkEsU0FBc0I7QUFBQSxVQUFYQyxPQUFXLFFBQVhBLE9BQVc7O0FBQ3JDLFdBQUtTLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQkMsUUFBakIsQ0FBMEIsRUFBRVosb0JBQUYsRUFBYUMsZ0JBQWIsRUFBMUI7QUFDRDs7O21DQUVjRyxZLEVBQWM7QUFDM0IsV0FBS1MsUUFBTCxDQUFjLEVBQUVULDBCQUFGLEVBQWQ7QUFDRDs7OzZCQUVRO0FBQUEsbUJBSUgsS0FBS00sS0FKRjtBQUFBLFVBRUxDLEtBRkssVUFFTEEsS0FGSztBQUFBLFVBR0ZHLElBSEU7O0FBQUEsVUFLRFYsWUFMQyxHQUtnQixLQUFLRCxLQUxyQixDQUtEQyxZQUxDOzs7QUFPUCxhQUNFLHdFQUNNVSxJQUROO0FBRUUsdUJBQWUsS0FBS1QsYUFGdEI7QUFHRSx1QkFBZSxLQUFLRyxhQUh0QjtBQUlFLHNCQUFjSixZQUpoQjtBQUtFLG1CQUNFTyxNQUFNSSxLQUFOLENBQVlmLFNBQVosR0FDQSxzQkFBT1csTUFBTUksS0FBTixDQUFZZixTQUFuQixDQURBLEdBRUFELGFBQWFDLFNBUmpCO0FBVUUsaUJBQ0VXLE1BQU1JLEtBQU4sQ0FBWWQsT0FBWixHQUNBLHNCQUFPVSxNQUFNSSxLQUFOLENBQVlkLE9BQW5CLENBREEsR0FFQUYsYUFBYUU7QUFiakIsU0FERjtBQWtCRDs7Ozs7O0FBR0hDLGFBQWFjLFNBQWIsR0FBeUI7QUFDdkJMLFNBQU8saUJBQVVNLE1BQVYsQ0FBaUJDO0FBREQsQ0FBekI7O2tCQUllaEIsWSIsImZpbGUiOiJjb21wb25lbnRzL2ZpZWxkcy9iYXNlcy9BaXJEYXRlUmFuZ2UuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
