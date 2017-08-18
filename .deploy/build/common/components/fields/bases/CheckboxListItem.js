"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // ref:
//  - <https://github.com/erikras/redux-form/issues/1037>


var CheckboxListItem = function (_Component) {
  _inherits(CheckboxListItem, _Component);

  function CheckboxListItem() {
    _classCallCheck(this, CheckboxListItem);

    var _this = _possibleConstructorReturn(this, (CheckboxListItem.__proto__ || Object.getPrototypeOf(CheckboxListItem)).call(this));

    _this.onChange = _this._onChange.bind(_this);
    return _this;
  }

  _createClass(CheckboxListItem, [{
    key: "_onChange",
    value: function _onChange(e) {
      var _props = this.props,
          input = _props.input,
          value = _props.option.value;

      var newValue = [].concat(_toConsumableArray(input.value));

      if (e.target.checked) {
        newValue.push(value);
      } else {
        newValue.splice(newValue.indexOf(value), 1);
      }

      return input.onChange(newValue);
    }
  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          input = _props2.input,
          index = _props2.index,
          option = _props2.option;

      var label = option.label,
          value = option.value,
          optionProps = _objectWithoutProperties(option, ["label", "value"]);

      return _react2.default.createElement(
        "label",
        null,
        _react2.default.createElement("input", _extends({
          type: "checkbox",
          name: input.name + "[" + index + "]",
          value: value,
          checked: input.value.indexOf(value) !== -1,
          onChange: this.onChange
        }, optionProps)),
        " ",
        label
      );
    }
  }]);

  return CheckboxListItem;
}(_react.Component);

;

CheckboxListItem.propTypes = {
  input: _react.PropTypes.object.isRequired,
  index: _react.PropTypes.number,
  option: _react.PropTypes.shape({
    label: _react.PropTypes.string,
    value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number])
  })
};

exports.default = CheckboxListItem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZmllbGRzL2Jhc2VzL0NoZWNrYm94TGlzdEl0ZW0uanMiXSwibmFtZXMiOlsiQ2hlY2tib3hMaXN0SXRlbSIsIm9uQ2hhbmdlIiwiX29uQ2hhbmdlIiwiYmluZCIsImUiLCJwcm9wcyIsImlucHV0IiwidmFsdWUiLCJvcHRpb24iLCJuZXdWYWx1ZSIsInRhcmdldCIsImNoZWNrZWQiLCJwdXNoIiwic3BsaWNlIiwiaW5kZXhPZiIsImluZGV4IiwibGFiZWwiLCJvcHRpb25Qcm9wcyIsIm5hbWUiLCJwcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwibnVtYmVyIiwic2hhcGUiLCJzdHJpbmciLCJvbmVPZlR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7K2VBRkE7QUFDQTs7O0lBR01BLGdCOzs7QUFDSiw4QkFBYztBQUFBOztBQUFBOztBQUVaLFVBQUtDLFFBQUwsR0FBZ0IsTUFBS0MsU0FBTCxDQUFlQyxJQUFmLE9BQWhCO0FBRlk7QUFHYjs7Ozs4QkFFU0MsQyxFQUFHO0FBQUEsbUJBQ3dCLEtBQUtDLEtBRDdCO0FBQUEsVUFDTEMsS0FESyxVQUNMQSxLQURLO0FBQUEsVUFDWUMsS0FEWixVQUNFQyxNQURGLENBQ1lELEtBRFo7O0FBRVgsVUFBSUUsd0NBQWVILE1BQU1DLEtBQXJCLEVBQUo7O0FBRUEsVUFBSUgsRUFBRU0sTUFBRixDQUFTQyxPQUFiLEVBQXNCO0FBQ3BCRixpQkFBU0csSUFBVCxDQUFjTCxLQUFkO0FBQ0QsT0FGRCxNQUVPO0FBQ0xFLGlCQUFTSSxNQUFULENBQWdCSixTQUFTSyxPQUFULENBQWlCUCxLQUFqQixDQUFoQixFQUF5QyxDQUF6QztBQUNEOztBQUVELGFBQU9ELE1BQU1MLFFBQU4sQ0FBZVEsUUFBZixDQUFQO0FBQ0Q7Ozs2QkFFUTtBQUFBLG9CQUN3QixLQUFLSixLQUQ3QjtBQUFBLFVBQ0RDLEtBREMsV0FDREEsS0FEQztBQUFBLFVBQ01TLEtBRE4sV0FDTUEsS0FETjtBQUFBLFVBQ2FQLE1BRGIsV0FDYUEsTUFEYjs7QUFBQSxVQUVEUSxLQUZDLEdBRWdDUixNQUZoQyxDQUVEUSxLQUZDO0FBQUEsVUFFTVQsS0FGTixHQUVnQ0MsTUFGaEMsQ0FFTUQsS0FGTjtBQUFBLFVBRWdCVSxXQUZoQiw0QkFFZ0NULE1BRmhDOztBQUlQLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFDRSxnQkFBSyxVQURQO0FBRUUsZ0JBQVNGLE1BQU1ZLElBQWYsU0FBdUJILEtBQXZCLE1BRkY7QUFHRSxpQkFBT1IsS0FIVDtBQUlFLG1CQUFTRCxNQUFNQyxLQUFOLENBQVlPLE9BQVosQ0FBb0JQLEtBQXBCLE1BQStCLENBQUMsQ0FKM0M7QUFLRSxvQkFBVSxLQUFLTjtBQUxqQixXQU1NZ0IsV0FOTixFQURGO0FBQUE7QUFRTUQ7QUFSTixPQURGO0FBWUQ7Ozs7OztBQUNGOztBQUVEaEIsaUJBQWlCbUIsU0FBakIsR0FBNkI7QUFDM0JiLFNBQU8saUJBQVVjLE1BQVYsQ0FBaUJDLFVBREc7QUFFM0JOLFNBQU8saUJBQVVPLE1BRlU7QUFHM0JkLFVBQVEsaUJBQVVlLEtBQVYsQ0FBZ0I7QUFDdEJQLFdBQU8saUJBQVVRLE1BREs7QUFFdEJqQixXQUFPLGlCQUFVa0IsU0FBVixDQUFvQixDQUN6QixpQkFBVUQsTUFEZSxFQUV6QixpQkFBVUYsTUFGZSxDQUFwQjtBQUZlLEdBQWhCO0FBSG1CLENBQTdCOztrQkFZZXRCLGdCIiwiZmlsZSI6ImNvbXBvbmVudHMvZmllbGRzL2Jhc2VzL0NoZWNrYm94TGlzdEl0ZW0uanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
