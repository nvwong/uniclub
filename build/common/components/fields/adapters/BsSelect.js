'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Select = require('../bases/Select');

var _Select2 = _interopRequireDefault(_Select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var BsSelect = function BsSelect(_ref) {
  var input = _ref.input,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ['input', 'className']);

  return _react2.default.createElement(_Select2.default, _extends({
    className: (0, _classnames2.default)('form-control', className),
    input: input
  }, rest));
};

BsSelect.propTypes = {
  input: _react.PropTypes.object.isRequired,
  className: _react.PropTypes.string
};

exports.default = BsSelect;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZmllbGRzL2FkYXB0ZXJzL0JzU2VsZWN0LmpzIl0sIm5hbWVzIjpbIkJzU2VsZWN0IiwiaW5wdXQiLCJjbGFzc05hbWUiLCJyZXN0IiwicHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBSUEsV0FBVyxTQUFYQSxRQUFXO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsU0FBVixRQUFVQSxTQUFWO0FBQUEsTUFBd0JDLElBQXhCOztBQUFBLFNBQ2I7QUFDRSxlQUFXLDBCQUFHLGNBQUgsRUFBbUJELFNBQW5CLENBRGI7QUFFRSxXQUFPRDtBQUZULEtBR01FLElBSE4sRUFEYTtBQUFBLENBQWY7O0FBUUFILFNBQVNJLFNBQVQsR0FBcUI7QUFDbkJILFNBQU8saUJBQVVJLE1BQVYsQ0FBaUJDLFVBREw7QUFFbkJKLGFBQVcsaUJBQVVLO0FBRkYsQ0FBckI7O2tCQUtlUCxRIiwiZmlsZSI6ImNvbXBvbmVudHMvZmllbGRzL2FkYXB0ZXJzL0JzU2VsZWN0LmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
