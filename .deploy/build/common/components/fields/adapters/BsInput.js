'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Input = require('../bases/Input');

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var BsInput = function BsInput(_ref) {
  var input = _ref.input,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ['input', 'className']);

  return _react2.default.createElement(_Input2.default, _extends({
    className: (0, _classnames2.default)('form-control', className),
    input: input
  }, rest));
};

BsInput.propTypes = {
  input: _react.PropTypes.object.isRequired,
  className: _react.PropTypes.string
};

exports.default = BsInput;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZmllbGRzL2FkYXB0ZXJzL0JzSW5wdXQuanMiXSwibmFtZXMiOlsiQnNJbnB1dCIsImlucHV0IiwiY2xhc3NOYW1lIiwicmVzdCIsInByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBLElBQUlBLFVBQVUsU0FBVkEsT0FBVTtBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLFNBQVYsUUFBVUEsU0FBVjtBQUFBLE1BQXdCQyxJQUF4Qjs7QUFBQSxTQUNaO0FBQ0UsZUFBVywwQkFBRyxjQUFILEVBQW1CRCxTQUFuQixDQURiO0FBRUUsV0FBT0Q7QUFGVCxLQUdNRSxJQUhOLEVBRFk7QUFBQSxDQUFkOztBQVFBSCxRQUFRSSxTQUFSLEdBQW9CO0FBQ2xCSCxTQUFPLGlCQUFVSSxNQUFWLENBQWlCQyxVQUROO0FBRWxCSixhQUFXLGlCQUFVSztBQUZILENBQXBCOztrQkFLZVAsTyIsImZpbGUiOiJjb21wb25lbnRzL2ZpZWxkcy9hZGFwdGVycy9Cc0lucHV0LmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
