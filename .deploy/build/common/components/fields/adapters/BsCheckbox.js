'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Checkbox = require('../bases/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var BsCheckbox = function BsCheckbox(_ref) {
  var input = _ref.input,
      rest = _objectWithoutProperties(_ref, ['input']);

  return _react2.default.createElement(
    'div',
    { className: 'checkbox' },
    _react2.default.createElement(_Checkbox2.default, _extends({
      input: input
    }, rest))
  );
};

BsCheckbox.propTypes = {
  input: _react.PropTypes.object.isRequired
};

exports.default = BsCheckbox;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZmllbGRzL2FkYXB0ZXJzL0JzQ2hlY2tib3guanMiXSwibmFtZXMiOlsiQnNDaGVja2JveCIsImlucHV0IiwicmVzdCIsInByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFJQSxhQUFhLFNBQWJBLFVBQWE7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFhQyxJQUFiOztBQUFBLFNBQ2Y7QUFBQTtBQUFBLE1BQUssV0FBVSxVQUFmO0FBQ0U7QUFDRSxhQUFPRDtBQURULE9BRU1DLElBRk47QUFERixHQURlO0FBQUEsQ0FBakI7O0FBU0FGLFdBQVdHLFNBQVgsR0FBdUI7QUFDckJGLFNBQU8saUJBQVVHLE1BQVYsQ0FBaUJDO0FBREgsQ0FBdkI7O2tCQUllTCxVIiwiZmlsZSI6ImNvbXBvbmVudHMvZmllbGRzL2FkYXB0ZXJzL0JzQ2hlY2tib3guanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
