'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterActiveComponent = require('react-router-active-component');

var _reactRouterActiveComponent2 = _interopRequireDefault(_reactRouterActiveComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var NavLink = function NavLink(_ref) {
  var children = _ref.children,
      rest = _objectWithoutProperties(_ref, ['children']);

  var ActiveLink = (0, _reactRouterActiveComponent2.default)('li');
  return _react2.default.createElement(
    ActiveLink,
    rest,
    children
  );
};

exports.default = NavLink;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdXRpbHMvTmF2TGluay5qcyJdLCJuYW1lcyI6WyJOYXZMaW5rIiwiY2hpbGRyZW4iLCJyZXN0IiwiQWN0aXZlTGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVLFNBQVZBLE9BQVUsT0FBMkI7QUFBQSxNQUF4QkMsUUFBd0IsUUFBeEJBLFFBQXdCO0FBQUEsTUFBWEMsSUFBVzs7QUFDekMsTUFBTUMsYUFBYSwwQ0FBZ0IsSUFBaEIsQ0FBbkI7QUFDQSxTQUNFO0FBQUMsY0FBRDtBQUFnQkQsUUFBaEI7QUFDR0Q7QUFESCxHQURGO0FBS0QsQ0FQRDs7a0JBU2VELE8iLCJmaWxlIjoiY29tcG9uZW50cy91dGlscy9OYXZMaW5rLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
