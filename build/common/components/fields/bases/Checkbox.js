"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Checkbox = function Checkbox(_ref) {
  var input = _ref.input,
      text = _ref.text,
      rest = _objectWithoutProperties(_ref, ["input", "text"]);

  return _react2.default.createElement(
    "label",
    null,
    _react2.default.createElement("input", _extends({}, input, {
      type: "checkbox",
      checked: input.value
    }, rest)),
    " ",
    text
  );
};

Checkbox.propTypes = {
  input: _react.PropTypes.object.isRequired,
  text: _react.PropTypes.node
};

exports.default = Checkbox;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZmllbGRzL2Jhc2VzL0NoZWNrYm94LmpzIl0sIm5hbWVzIjpbIkNoZWNrYm94IiwiaW5wdXQiLCJ0ZXh0IiwicmVzdCIsInZhbHVlIiwicHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsIm5vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7O0FBRUEsSUFBSUEsV0FBVyxTQUFYQSxRQUFXO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsSUFBVixRQUFVQSxJQUFWO0FBQUEsTUFBbUJDLElBQW5COztBQUFBLFNBQ2I7QUFBQTtBQUFBO0FBQ0Usd0RBQ01GLEtBRE47QUFFRSxZQUFLLFVBRlA7QUFHRSxlQUFTQSxNQUFNRztBQUhqQixPQUlNRCxJQUpOLEVBREY7QUFBQTtBQU1NRDtBQU5OLEdBRGE7QUFBQSxDQUFmOztBQVdBRixTQUFTSyxTQUFULEdBQXFCO0FBQ25CSixTQUFPLGlCQUFVSyxNQUFWLENBQWlCQyxVQURMO0FBRW5CTCxRQUFNLGlCQUFVTTtBQUZHLENBQXJCOztrQkFLZVIsUSIsImZpbGUiOiJjb21wb25lbnRzL2ZpZWxkcy9iYXNlcy9DaGVja2JveC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
