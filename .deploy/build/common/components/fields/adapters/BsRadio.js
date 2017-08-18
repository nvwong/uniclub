'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RadioItem = require('../bases/RadioItem');

var _RadioItem2 = _interopRequireDefault(_RadioItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var BsRadio = function BsRadio(_ref) {
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
          className: 'radio',
          key: option.value
        }, rest),
        _react2.default.createElement(_RadioItem2.default, {
          input: input,
          option: option
        })
      );
    })
  );
};

BsRadio.propTypes = {
  input: _react.PropTypes.object.isRequired,
  options: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    label: _react.PropTypes.string,
    value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number])
  }))
};

exports.default = BsRadio;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZmllbGRzL2FkYXB0ZXJzL0JzUmFkaW8uanMiXSwibmFtZXMiOlsiQnNSYWRpbyIsImlucHV0Iiwib3B0aW9ucyIsInJlc3QiLCJtYXAiLCJvcHRpb24iLCJpbmRleCIsInZhbHVlIiwicHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImFycmF5T2YiLCJzaGFwZSIsImxhYmVsIiwic3RyaW5nIiwib25lT2ZUeXBlIiwibnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBSUEsVUFBVSxTQUFWQSxPQUFVO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsT0FBVixRQUFVQSxPQUFWO0FBQUEsTUFBc0JDLElBQXRCOztBQUFBLFNBQ1o7QUFBQTtBQUFBO0FBQ0dELFlBQVFFLEdBQVIsQ0FBWSxVQUFDQyxNQUFELEVBQVNDLEtBQVQ7QUFBQSxhQUNYO0FBQUE7QUFBQTtBQUNFLHFCQUFVLE9BRFo7QUFFRSxlQUFLRCxPQUFPRTtBQUZkLFdBR01KLElBSE47QUFLRTtBQUNFLGlCQUFPRixLQURUO0FBRUUsa0JBQVFJO0FBRlY7QUFMRixPQURXO0FBQUEsS0FBWjtBQURILEdBRFk7QUFBQSxDQUFkOztBQWlCQUwsUUFBUVEsU0FBUixHQUFvQjtBQUNsQlAsU0FBTyxpQkFBVVEsTUFBVixDQUFpQkMsVUFETjtBQUVsQlIsV0FBUyxpQkFBVVMsT0FBVixDQUNQLGlCQUFVQyxLQUFWLENBQWdCO0FBQ2RDLFdBQU8saUJBQVVDLE1BREg7QUFFZFAsV0FBTyxpQkFBVVEsU0FBVixDQUFvQixDQUN6QixpQkFBVUQsTUFEZSxFQUV6QixpQkFBVUUsTUFGZSxDQUFwQjtBQUZPLEdBQWhCLENBRE87QUFGUyxDQUFwQjs7a0JBYWVoQixPIiwiZmlsZSI6ImNvbXBvbmVudHMvZmllbGRzL2FkYXB0ZXJzL0JzUmFkaW8uanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
