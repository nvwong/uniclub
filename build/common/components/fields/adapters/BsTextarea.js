'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Textarea = require('../bases/Textarea');

var _Textarea2 = _interopRequireDefault(_Textarea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var BsTextarea = function BsTextarea(_ref) {
  var input = _ref.input,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ['input', 'className']);

  return _react2.default.createElement(_Textarea2.default, _extends({
    className: (0, _classnames2.default)('form-control', className),
    input: input
  }, rest));
};

BsTextarea.propTypes = {
  input: _react.PropTypes.object.isRequired,
  className: _react.PropTypes.string
};

exports.default = BsTextarea;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZmllbGRzL2FkYXB0ZXJzL0JzVGV4dGFyZWEuanMiXSwibmFtZXMiOlsiQnNUZXh0YXJlYSIsImlucHV0IiwiY2xhc3NOYW1lIiwicmVzdCIsInByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBLElBQUlBLGFBQWEsU0FBYkEsVUFBYTtBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLFNBQVYsUUFBVUEsU0FBVjtBQUFBLE1BQXdCQyxJQUF4Qjs7QUFBQSxTQUNmO0FBQ0UsZUFBVywwQkFBRyxjQUFILEVBQW1CRCxTQUFuQixDQURiO0FBRUUsV0FBT0Q7QUFGVCxLQUdNRSxJQUhOLEVBRGU7QUFBQSxDQUFqQjs7QUFRQUgsV0FBV0ksU0FBWCxHQUF1QjtBQUNyQkgsU0FBTyxpQkFBVUksTUFBVixDQUFpQkMsVUFESDtBQUVyQkosYUFBVyxpQkFBVUs7QUFGQSxDQUF2Qjs7a0JBS2VQLFUiLCJmaWxlIjoiY29tcG9uZW50cy9maWVsZHMvYWRhcHRlcnMvQnNUZXh0YXJlYS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
