'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSlider = require('react-slider');

var _reactSlider2 = _interopRequireDefault(_reactSlider);

require('./RangeSlider.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultValue = {
  min: 0,
  max: 0
};

var RangeSlider = function (_Component) {
  _inherits(RangeSlider, _Component);

  function RangeSlider() {
    _classCallCheck(this, RangeSlider);

    return _possibleConstructorReturn(this, (RangeSlider.__proto__ || Object.getPrototypeOf(RangeSlider)).apply(this, arguments));
  }

  _createClass(RangeSlider, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          input = _props.input,
          rest = _objectWithoutProperties(_props, ['input']);

      return _react2.default.createElement(
        _reactSlider2.default,
        _extends({}, rest, {
          onChange: function onChange(value) {
            input.onChange({
              min: value[0],
              max: value[1]
            });
          },
          value: [input.value.min || defaultValue.min, input.value.max || defaultValue.max],
          withBars: true
        }),
        _react2.default.createElement('div', { className: 'slider-handle' }),
        _react2.default.createElement('div', { className: 'slider-handle' })
      );
    }
  }]);

  return RangeSlider;
}(_react.Component);

RangeSlider.propTypes = {
  input: _react.PropTypes.object.isRequired
};

exports.default = RangeSlider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZmllbGRzL2Jhc2VzL1JhbmdlU2xpZGVyL1JhbmdlU2xpZGVyLmpzIl0sIm5hbWVzIjpbImRlZmF1bHRWYWx1ZSIsIm1pbiIsIm1heCIsIlJhbmdlU2xpZGVyIiwicHJvcHMiLCJpbnB1dCIsInJlc3QiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwicHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSUEsZUFBZTtBQUNqQkMsT0FBSyxDQURZO0FBRWpCQyxPQUFLO0FBRlksQ0FBbkI7O0lBS01DLFc7Ozs7Ozs7Ozs7OzZCQUNLO0FBQUEsbUJBSUgsS0FBS0MsS0FKRjtBQUFBLFVBRUxDLEtBRkssVUFFTEEsS0FGSztBQUFBLFVBR0ZDLElBSEU7O0FBTVAsYUFDRTtBQUFBO0FBQUEscUJBQ01BLElBRE47QUFFRSxvQkFBVSxrQkFBQ0MsS0FBRCxFQUFXO0FBQ25CRixrQkFBTUcsUUFBTixDQUFlO0FBQ2JQLG1CQUFLTSxNQUFNLENBQU4sQ0FEUTtBQUViTCxtQkFBS0ssTUFBTSxDQUFOO0FBRlEsYUFBZjtBQUlELFdBUEg7QUFRRSxpQkFBTyxDQUNMRixNQUFNRSxLQUFOLENBQVlOLEdBQVosSUFBbUJELGFBQWFDLEdBRDNCLEVBRUxJLE1BQU1FLEtBQU4sQ0FBWUwsR0FBWixJQUFtQkYsYUFBYUUsR0FGM0IsQ0FSVDtBQVlFO0FBWkY7QUFjRSwrQ0FBSyxXQUFVLGVBQWYsR0FkRjtBQWVFLCtDQUFLLFdBQVUsZUFBZjtBQWZGLE9BREY7QUFtQkQ7Ozs7OztBQUdIQyxZQUFZTSxTQUFaLEdBQXdCO0FBQ3RCSixTQUFPLGlCQUFVSyxNQUFWLENBQWlCQztBQURGLENBQXhCOztrQkFJZVIsVyIsImZpbGUiOiJjb21wb25lbnRzL2ZpZWxkcy9iYXNlcy9SYW5nZVNsaWRlci9SYW5nZVNsaWRlci5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
