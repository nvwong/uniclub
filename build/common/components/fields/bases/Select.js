'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Select = function Select(_ref) {
  var input = _ref.input,
      options = _ref.options,
      rest = _objectWithoutProperties(_ref, ['input', 'options']);

  return _react2.default.createElement(
    'select',
    _extends({}, input, rest),
    options.map(function (_ref2) {
      var label = _ref2.label,
          optionProps = _objectWithoutProperties(_ref2, ['label']);

      return _react2.default.createElement(
        'option',
        _extends({
          key: optionProps.value
        }, optionProps),
        label
      );
    })
  );
};

Select.propTypes = {
  input: _react.PropTypes.object.isRequired,
  options: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    label: _react.PropTypes.string,
    value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number])
  }))
};

exports.default = Select;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZmllbGRzL2Jhc2VzL1NlbGVjdC5qcyJdLCJuYW1lcyI6WyJTZWxlY3QiLCJpbnB1dCIsIm9wdGlvbnMiLCJyZXN0IiwibWFwIiwibGFiZWwiLCJvcHRpb25Qcm9wcyIsInZhbHVlIiwicHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImFycmF5T2YiLCJzaGFwZSIsInN0cmluZyIsIm9uZU9mVHlwZSIsIm51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7QUFFQSxJQUFJQSxTQUFTLFNBQVRBLE1BQVM7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxPQUFWLFFBQVVBLE9BQVY7QUFBQSxNQUFzQkMsSUFBdEI7O0FBQUEsU0FDWDtBQUFBO0FBQUEsaUJBQVlGLEtBQVosRUFBdUJFLElBQXZCO0FBQ0dELFlBQVFFLEdBQVIsQ0FBWTtBQUFBLFVBQUdDLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFVBQWFDLFdBQWI7O0FBQUEsYUFDWDtBQUFBO0FBQUE7QUFDRSxlQUFLQSxZQUFZQztBQURuQixXQUVNRCxXQUZOO0FBSUdEO0FBSkgsT0FEVztBQUFBLEtBQVo7QUFESCxHQURXO0FBQUEsQ0FBYjs7QUFhQUwsT0FBT1EsU0FBUCxHQUFtQjtBQUNqQlAsU0FBTyxpQkFBVVEsTUFBVixDQUFpQkMsVUFEUDtBQUVqQlIsV0FBUyxpQkFBVVMsT0FBVixDQUNQLGlCQUFVQyxLQUFWLENBQWdCO0FBQ2RQLFdBQU8saUJBQVVRLE1BREg7QUFFZE4sV0FBTyxpQkFBVU8sU0FBVixDQUFvQixDQUN6QixpQkFBVUQsTUFEZSxFQUV6QixpQkFBVUUsTUFGZSxDQUFwQjtBQUZPLEdBQWhCLENBRE87QUFGUSxDQUFuQjs7a0JBYWVmLE0iLCJmaWxlIjoiY29tcG9uZW50cy9maWVsZHMvYmFzZXMvU2VsZWN0LmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
