'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } // inspired by <https://github.com/andreypopp/react-time>


var Time = function Time(_ref) {
  var value = _ref.value,
      format = _ref.format,
      relative = _ref.relative,
      rest = _objectWithoutProperties(_ref, ['value', 'format', 'relative']);

  var v = null;
  if (value) {
    v = (0, _moment2.default)(value);
    v = relative ? v.fromNow() : v.format(format);
  }
  return _react2.default.createElement(
    'time',
    rest,
    v
  );
};

Time.defaultProps = {
  format: 'YYYY-MM-DD HH:mm:ss'
};

Time.propTypes = {
  value: _react.PropTypes.oneOfType([_react.PropTypes.instanceOf(Date), _react.PropTypes.string]),
  format: _react.PropTypes.string,
  relative: _react.PropTypes.bool
};

exports.default = Time;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvd2lkZ2V0cy9UaW1lLmpzIl0sIm5hbWVzIjpbIlRpbWUiLCJ2YWx1ZSIsImZvcm1hdCIsInJlbGF0aXZlIiwicmVzdCIsInYiLCJmcm9tTm93IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwib25lT2ZUeXBlIiwiaW5zdGFuY2VPZiIsIkRhdGUiLCJzdHJpbmciLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Nk5BRkE7OztBQUlBLElBQU1BLE9BQU8sU0FBUEEsSUFBTyxPQUEwQztBQUFBLE1BQXZDQyxLQUF1QyxRQUF2Q0EsS0FBdUM7QUFBQSxNQUFoQ0MsTUFBZ0MsUUFBaENBLE1BQWdDO0FBQUEsTUFBeEJDLFFBQXdCLFFBQXhCQSxRQUF3QjtBQUFBLE1BQVhDLElBQVc7O0FBQ3JELE1BQUlDLElBQUksSUFBUjtBQUNBLE1BQUlKLEtBQUosRUFBVztBQUNUSSxRQUFJLHNCQUFPSixLQUFQLENBQUo7QUFDQUksUUFBSUYsV0FBV0UsRUFBRUMsT0FBRixFQUFYLEdBQXlCRCxFQUFFSCxNQUFGLENBQVNBLE1BQVQsQ0FBN0I7QUFDRDtBQUNELFNBQ0U7QUFBQTtBQUFVRSxRQUFWO0FBQWlCQztBQUFqQixHQURGO0FBR0QsQ0FURDs7QUFXQUwsS0FBS08sWUFBTCxHQUFvQjtBQUNsQkwsVUFBUTtBQURVLENBQXBCOztBQUlBRixLQUFLUSxTQUFMLEdBQWlCO0FBQ2ZQLFNBQU8saUJBQVVRLFNBQVYsQ0FBb0IsQ0FDekIsaUJBQVVDLFVBQVYsQ0FBcUJDLElBQXJCLENBRHlCLEVBRXpCLGlCQUFVQyxNQUZlLENBQXBCLENBRFE7QUFLZlYsVUFBUSxpQkFBVVUsTUFMSDtBQU1mVCxZQUFVLGlCQUFVVTtBQU5MLENBQWpCOztrQkFTZWIsSSIsImZpbGUiOiJjb21wb25lbnRzL3dpZGdldHMvVGltZS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
