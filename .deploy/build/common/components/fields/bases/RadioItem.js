"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } // ref:
//  - <https://github.com/erikras/redux-form/issues/1857#issuecomment-249890206>


var RadioItem = function RadioItem(_ref) {
  var input = _ref.input,
      option = _ref.option;

  var label = option.label,
      value = option.value,
      optionProps = _objectWithoutProperties(option, ["label", "value"]);

  return _react2.default.createElement(
    "label",
    null,
    _react2.default.createElement("input", _extends({}, input, {
      type: "radio",
      name: input.name + "_" + value,
      value: value,
      checked: value === input.value
    }, optionProps)),
    " ",
    label
  );
};

RadioItem.propTypes = {
  input: _react.PropTypes.object.isRequired,
  option: _react.PropTypes.shape({
    label: _react.PropTypes.string,
    value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number])
  })
};

exports.default = RadioItem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZmllbGRzL2Jhc2VzL1JhZGlvSXRlbS5qcyJdLCJuYW1lcyI6WyJSYWRpb0l0ZW0iLCJpbnB1dCIsIm9wdGlvbiIsImxhYmVsIiwidmFsdWUiLCJvcHRpb25Qcm9wcyIsIm5hbWUiLCJwcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwic2hhcGUiLCJzdHJpbmciLCJvbmVPZlR5cGUiLCJudW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUE7Ozs7Ozs2TkFGQTtBQUNBOzs7QUFHQSxJQUFJQSxZQUFZLFNBQVpBLFNBQVksT0FBdUI7QUFBQSxNQUFwQkMsS0FBb0IsUUFBcEJBLEtBQW9CO0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhOztBQUFBLE1BQy9CQyxLQUQrQixHQUNFRCxNQURGLENBQy9CQyxLQUQrQjtBQUFBLE1BQ3hCQyxLQUR3QixHQUNFRixNQURGLENBQ3hCRSxLQUR3QjtBQUFBLE1BQ2RDLFdBRGMsNEJBQ0VILE1BREY7O0FBR3JDLFNBQ0U7QUFBQTtBQUFBO0FBQ0Usd0RBQ01ELEtBRE47QUFFRSxZQUFLLE9BRlA7QUFHRSxZQUFTQSxNQUFNSyxJQUFmLFNBQXVCRixLQUh6QjtBQUlFLGFBQU9BLEtBSlQ7QUFLRSxlQUFTQSxVQUFVSCxNQUFNRztBQUwzQixPQU1NQyxXQU5OLEVBREY7QUFBQTtBQVFNRjtBQVJOLEdBREY7QUFZRCxDQWZEOztBQWlCQUgsVUFBVU8sU0FBVixHQUFzQjtBQUNwQk4sU0FBTyxpQkFBVU8sTUFBVixDQUFpQkMsVUFESjtBQUVwQlAsVUFBUSxpQkFBVVEsS0FBVixDQUFnQjtBQUN0QlAsV0FBTyxpQkFBVVEsTUFESztBQUV0QlAsV0FBTyxpQkFBVVEsU0FBVixDQUFvQixDQUN6QixpQkFBVUQsTUFEZSxFQUV6QixpQkFBVUUsTUFGZSxDQUFwQjtBQUZlLEdBQWhCO0FBRlksQ0FBdEI7O2tCQVdlYixTIiwiZmlsZSI6ImNvbXBvbmVudHMvZmllbGRzL2Jhc2VzL1JhZGlvSXRlbS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
