'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CheckboxListItem = require('../bases/CheckboxListItem');

var _CheckboxListItem2 = _interopRequireDefault(_CheckboxListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var BsCheckboxList = function BsCheckboxList(_ref) {
  var input = _ref.input,
      options = _ref.options,
      rest = _objectWithoutProperties(_ref, ['input', 'options']);

  return _react2.default.createElement(
    'span',
    null,
    options.map(function (option, index) {
      return _react2.default.createElement(
        'div',
        _extends({
          className: 'checkbox',
          key: option.value
        }, rest),
        _react2.default.createElement(_CheckboxListItem2.default, {
          input: input,
          index: index,
          option: option
        })
      );
    })
  );
};

BsCheckboxList.propTypes = {
  input: _react.PropTypes.object.isRequired,
  options: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    label: _react.PropTypes.string,
    value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number])
  }))
};

exports.default = BsCheckboxList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZmllbGRzL2FkYXB0ZXJzL0JzQ2hlY2tib3hMaXN0LmpzIl0sIm5hbWVzIjpbIkJzQ2hlY2tib3hMaXN0IiwiaW5wdXQiLCJvcHRpb25zIiwicmVzdCIsIm1hcCIsIm9wdGlvbiIsImluZGV4IiwidmFsdWUiLCJwcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiYXJyYXlPZiIsInNoYXBlIiwibGFiZWwiLCJzdHJpbmciLCJvbmVPZlR5cGUiLCJudW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFJQSxpQkFBaUIsU0FBakJBLGNBQWlCO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsT0FBVixRQUFVQSxPQUFWO0FBQUEsTUFBc0JDLElBQXRCOztBQUFBLFNBQ25CO0FBQUE7QUFBQTtBQUNHRCxZQUFRRSxHQUFSLENBQVksVUFBQ0MsTUFBRCxFQUFTQyxLQUFUO0FBQUEsYUFDWDtBQUFBO0FBQUE7QUFDRSxxQkFBVSxVQURaO0FBRUUsZUFBS0QsT0FBT0U7QUFGZCxXQUdNSixJQUhOO0FBS0U7QUFDRSxpQkFBT0YsS0FEVDtBQUVFLGlCQUFPSyxLQUZUO0FBR0Usa0JBQVFEO0FBSFY7QUFMRixPQURXO0FBQUEsS0FBWjtBQURILEdBRG1CO0FBQUEsQ0FBckI7O0FBa0JBTCxlQUFlUSxTQUFmLEdBQTJCO0FBQ3pCUCxTQUFPLGlCQUFVUSxNQUFWLENBQWlCQyxVQURDO0FBRXpCUixXQUFTLGlCQUFVUyxPQUFWLENBQ1AsaUJBQVVDLEtBQVYsQ0FBZ0I7QUFDZEMsV0FBTyxpQkFBVUMsTUFESDtBQUVkUCxXQUFPLGlCQUFVUSxTQUFWLENBQW9CLENBQ3pCLGlCQUFVRCxNQURlLEVBRXpCLGlCQUFVRSxNQUZlLENBQXBCO0FBRk8sR0FBaEIsQ0FETztBQUZnQixDQUEzQjs7a0JBYWVoQixjIiwiZmlsZSI6ImNvbXBvbmVudHMvZmllbGRzL2FkYXB0ZXJzL0JzQ2hlY2tib3hMaXN0LmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
