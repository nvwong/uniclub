'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Input = function Input(_ref) {
  var input = _ref.input,
      type = _ref.type,
      rest = _objectWithoutProperties(_ref, ['input', 'type']);

  return _react2.default.createElement('input', _extends({}, input, {
    type: type
  }, rest));
};

Input.propTypes = {
  input: _react.PropTypes.object.isRequired,
  type: _react.PropTypes.oneOf(['text', 'password', 'number', 'date', 'time', 'file'])
};

exports.default = Input;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZmllbGRzL2Jhc2VzL0lucHV0LmpzIl0sIm5hbWVzIjpbIklucHV0IiwiaW5wdXQiLCJ0eXBlIiwicmVzdCIsInByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJvbmVPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7QUFFQSxJQUFJQSxRQUFRLFNBQVJBLEtBQVE7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxJQUFWLFFBQVVBLElBQVY7QUFBQSxNQUFtQkMsSUFBbkI7O0FBQUEsU0FDVixvREFDTUYsS0FETjtBQUVFLFVBQU1DO0FBRlIsS0FHTUMsSUFITixFQURVO0FBQUEsQ0FBWjs7QUFRQUgsTUFBTUksU0FBTixHQUFrQjtBQUNoQkgsU0FBTyxpQkFBVUksTUFBVixDQUFpQkMsVUFEUjtBQUVoQkosUUFBTSxpQkFBVUssS0FBVixDQUFnQixDQUNwQixNQURvQixFQUVwQixVQUZvQixFQUdwQixRQUhvQixFQUlwQixNQUpvQixFQUtwQixNQUxvQixFQU1wQixNQU5vQixDQUFoQjtBQUZVLENBQWxCOztrQkFZZVAsSyIsImZpbGUiOiJjb21wb25lbnRzL2ZpZWxkcy9iYXNlcy9JbnB1dC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
