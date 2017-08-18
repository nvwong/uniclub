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

var defaultValue = null;

var AirSingleDate = function (_Component) {
  _inherits(AirSingleDate, _Component);

  function AirSingleDate() {
    _classCallCheck(this, AirSingleDate);

    var _this = _possibleConstructorReturn(this, (AirSingleDate.__proto__ || Object.getPrototypeOf(AirSingleDate)).call(this));

    _this.state = {
      focused: false
    };
    _this.onDateChange = _this._onDateChange.bind(_this);
    _this.onFocusChange = _this._onFocusChange.bind(_this);
    return _this;
  }

  _createClass(AirSingleDate, [{
    key: '_onDateChange',
    value: function _onDateChange(date) {
      this.props.input.onChange(date);
    }
  }, {
    key: '_onFocusChange',
    value: function _onFocusChange(_ref) {
      var focused = _ref.focused;

      this.setState({ focused: focused });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          input = _props.input,
          rest = _objectWithoutProperties(_props, ['input']);

      var focused = this.state.focused;


      return _react2.default.createElement(_reactDates.SingleDatePicker, _extends({
        numberOfMonths: 1
      }, rest, {
        id: 'date_input',
        focused: focused,
        date: input.value ? (0, _moment2.default)(input.value) : defaultValue,
        onDateChange: this.onDateChange,
        onFocusChange: this.onFocusChange
      }));
    }
  }]);

  return AirSingleDate;
}(_react.Component);

AirSingleDate.propTypes = {
  input: _react.PropTypes.object.isRequired
};

exports.default = AirSingleDate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZmllbGRzL2Jhc2VzL0FpclNpbmdsZURhdGUuanMiXSwibmFtZXMiOlsiZGVmYXVsdFZhbHVlIiwiQWlyU2luZ2xlRGF0ZSIsInN0YXRlIiwiZm9jdXNlZCIsIm9uRGF0ZUNoYW5nZSIsIl9vbkRhdGVDaGFuZ2UiLCJiaW5kIiwib25Gb2N1c0NoYW5nZSIsIl9vbkZvY3VzQ2hhbmdlIiwiZGF0ZSIsInByb3BzIiwiaW5wdXQiLCJvbkNoYW5nZSIsInNldFN0YXRlIiwicmVzdCIsInZhbHVlIiwicHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSUEsZUFBZSxJQUFuQjs7SUFFTUMsYTs7O0FBQ0osMkJBQWM7QUFBQTs7QUFBQTs7QUFFWixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsZUFBUztBQURFLEtBQWI7QUFHQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtDLGFBQUwsQ0FBbUJDLElBQW5CLE9BQXBCO0FBQ0EsVUFBS0MsYUFBTCxHQUFxQixNQUFLQyxjQUFMLENBQW9CRixJQUFwQixPQUFyQjtBQU5ZO0FBT2I7Ozs7a0NBRWFHLEksRUFBTTtBQUNsQixXQUFLQyxLQUFMLENBQVdDLEtBQVgsQ0FBaUJDLFFBQWpCLENBQTBCSCxJQUExQjtBQUNEOzs7eUNBRTJCO0FBQUEsVUFBWE4sT0FBVyxRQUFYQSxPQUFXOztBQUMxQixXQUFLVSxRQUFMLENBQWMsRUFBRVYsZ0JBQUYsRUFBZDtBQUNEOzs7NkJBRVE7QUFBQSxtQkFJSCxLQUFLTyxLQUpGO0FBQUEsVUFFTEMsS0FGSyxVQUVMQSxLQUZLO0FBQUEsVUFHRkcsSUFIRTs7QUFBQSxVQUtEWCxPQUxDLEdBS1csS0FBS0QsS0FMaEIsQ0FLREMsT0FMQzs7O0FBT1AsYUFDRTtBQUNFLHdCQUFnQjtBQURsQixTQUVNVyxJQUZOO0FBR0UsWUFBRyxZQUhMO0FBSUUsaUJBQVNYLE9BSlg7QUFLRSxjQUFNUSxNQUFNSSxLQUFOLEdBQWMsc0JBQU9KLE1BQU1JLEtBQWIsQ0FBZCxHQUFvQ2YsWUFMNUM7QUFNRSxzQkFBYyxLQUFLSSxZQU5yQjtBQU9FLHVCQUFlLEtBQUtHO0FBUHRCLFNBREY7QUFXRDs7Ozs7O0FBR0hOLGNBQWNlLFNBQWQsR0FBMEI7QUFDeEJMLFNBQU8saUJBQVVNLE1BQVYsQ0FBaUJDO0FBREEsQ0FBMUI7O2tCQUllakIsYSIsImZpbGUiOiJjb21wb25lbnRzL2ZpZWxkcy9iYXNlcy9BaXJTaW5nbGVEYXRlLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
