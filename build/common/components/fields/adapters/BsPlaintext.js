'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Plaintext = require('../bases/Plaintext');

var _Plaintext2 = _interopRequireDefault(_Plaintext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var BsPlaintext = function BsPlaintext(_ref) {
  var input = _ref.input,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ['input', 'className']);

  return _react2.default.createElement(_Plaintext2.default, _extends({
    className: (0, _classnames2.default)('form-control-static', className),
    input: input
  }, rest));
};

BsPlaintext.propTypes = {
  input: _react.PropTypes.object.isRequired,
  className: _react.PropTypes.string
};

exports.default = BsPlaintext;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZmllbGRzL2FkYXB0ZXJzL0JzUGxhaW50ZXh0LmpzIl0sIm5hbWVzIjpbIkJzUGxhaW50ZXh0IiwiaW5wdXQiLCJjbGFzc05hbWUiLCJyZXN0IiwicHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBSUEsY0FBYyxTQUFkQSxXQUFjO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsU0FBVixRQUFVQSxTQUFWO0FBQUEsTUFBd0JDLElBQXhCOztBQUFBLFNBQ2hCO0FBQ0UsZUFBVywwQkFBRyxxQkFBSCxFQUEwQkQsU0FBMUIsQ0FEYjtBQUVFLFdBQU9EO0FBRlQsS0FHTUUsSUFITixFQURnQjtBQUFBLENBQWxCOztBQVFBSCxZQUFZSSxTQUFaLEdBQXdCO0FBQ3RCSCxTQUFPLGlCQUFVSSxNQUFWLENBQWlCQyxVQURGO0FBRXRCSixhQUFXLGlCQUFVSztBQUZDLENBQXhCOztrQkFLZVAsVyIsImZpbGUiOiJjb21wb25lbnRzL2ZpZWxkcy9hZGFwdGVycy9Cc1BsYWludGV4dC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
