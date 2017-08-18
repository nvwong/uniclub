'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Plaintext = function Plaintext(_ref) {
  var input = _ref.input,
      text = _ref.text,
      rest = _objectWithoutProperties(_ref, ['input', 'text']);

  return _react2.default.createElement(
    'p',
    rest,
    text
  );
};

Plaintext.propTypes = {
  input: _react.PropTypes.object.isRequired,
  text: _react.PropTypes.string
};

exports.default = Plaintext;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZmllbGRzL2Jhc2VzL1BsYWludGV4dC5qcyJdLCJuYW1lcyI6WyJQbGFpbnRleHQiLCJpbnB1dCIsInRleHQiLCJyZXN0IiwicHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7Ozs7O0FBRUEsSUFBSUEsWUFBWSxTQUFaQSxTQUFZO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsSUFBVixRQUFVQSxJQUFWO0FBQUEsTUFBbUJDLElBQW5COztBQUFBLFNBQ2Q7QUFBQTtBQUFPQSxRQUFQO0FBQ0dEO0FBREgsR0FEYztBQUFBLENBQWhCOztBQU1BRixVQUFVSSxTQUFWLEdBQXNCO0FBQ3BCSCxTQUFPLGlCQUFVSSxNQUFWLENBQWlCQyxVQURKO0FBRXBCSixRQUFNLGlCQUFVSztBQUZJLENBQXRCOztrQkFLZVAsUyIsImZpbGUiOiJjb21wb25lbnRzL2ZpZWxkcy9iYXNlcy9QbGFpbnRleHQuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
