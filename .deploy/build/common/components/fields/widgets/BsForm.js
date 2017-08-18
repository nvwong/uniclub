'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Form = require('react-bootstrap/lib/Form');

var _Form2 = _interopRequireDefault(_Form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BsForm = function (_Component) {
  _inherits(BsForm, _Component);

  function BsForm() {
    _classCallCheck(this, BsForm);

    return _possibleConstructorReturn(this, (BsForm.__proto__ || Object.getPrototypeOf(BsForm)).apply(this, arguments));
  }

  _createClass(BsForm, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var _props = this.props,
          defaultHorizontal = _props.defaultHorizontal,
          defaultLabelDimensions = _props.defaultLabelDimensions,
          defaultFieldDimensions = _props.defaultFieldDimensions;


      return {
        defaultHorizontal: defaultHorizontal,
        defaultLabelDimensions: defaultLabelDimensions,
        defaultFieldDimensions: defaultFieldDimensions
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          defaultHorizontal = _props2.defaultHorizontal,
          defaultLabelDimensions = _props2.defaultLabelDimensions,
          defaultFieldDimensions = _props2.defaultFieldDimensions,
          children = _props2.children,
          rest = _objectWithoutProperties(_props2, ['defaultHorizontal', 'defaultLabelDimensions', 'defaultFieldDimensions', 'children']);

      return _react2.default.createElement(
        _Form2.default,
        _extends({ horizontal: defaultHorizontal }, rest),
        children
      );
    }
  }]);

  return BsForm;
}(_react.Component);

;

BsForm.propTypes = {
  defaultHorizontal: _react.PropTypes.bool,
  defaultLabelDimensions: _react.PropTypes.object,
  defaultFieldDimensions: _react.PropTypes.object
};

BsForm.childContextTypes = {
  defaultHorizontal: _react.PropTypes.bool,
  defaultLabelDimensions: _react.PropTypes.object,
  defaultFieldDimensions: _react.PropTypes.object
};

BsForm.defaultProps = {
  defaultHorizontal: true,
  defaultLabelDimensions: {
    sm: 2
  },
  defaultFieldDimensions: {
    sm: 10
  }
};

exports.default = BsForm;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZmllbGRzL3dpZGdldHMvQnNGb3JtLmpzIl0sIm5hbWVzIjpbIkJzRm9ybSIsInByb3BzIiwiZGVmYXVsdEhvcml6b250YWwiLCJkZWZhdWx0TGFiZWxEaW1lbnNpb25zIiwiZGVmYXVsdEZpZWxkRGltZW5zaW9ucyIsImNoaWxkcmVuIiwicmVzdCIsInByb3BUeXBlcyIsImJvb2wiLCJvYmplY3QiLCJjaGlsZENvbnRleHRUeXBlcyIsImRlZmF1bHRQcm9wcyIsInNtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsTTs7Ozs7Ozs7Ozs7c0NBQ2M7QUFBQSxtQkFLWixLQUFLQyxLQUxPO0FBQUEsVUFFZEMsaUJBRmMsVUFFZEEsaUJBRmM7QUFBQSxVQUdkQyxzQkFIYyxVQUdkQSxzQkFIYztBQUFBLFVBSWRDLHNCQUpjLFVBSWRBLHNCQUpjOzs7QUFPaEIsYUFBTztBQUNMRiw0Q0FESztBQUVMQyxzREFGSztBQUdMQztBQUhLLE9BQVA7QUFLRDs7OzZCQUVRO0FBQUEsb0JBUUgsS0FBS0gsS0FSRjtBQUFBLFVBSUxDLGlCQUpLLFdBSUxBLGlCQUpLO0FBQUEsVUFJY0Msc0JBSmQsV0FJY0Esc0JBSmQ7QUFBQSxVQUlzQ0Msc0JBSnRDLFdBSXNDQSxzQkFKdEM7QUFBQSxVQU1MQyxRQU5LLFdBTUxBLFFBTks7QUFBQSxVQU9GQyxJQVBFOztBQVVQLGFBQ0U7QUFBQTtBQUFBLG1CQUFNLFlBQVlKLGlCQUFsQixJQUF5Q0ksSUFBekM7QUFDR0Q7QUFESCxPQURGO0FBS0Q7Ozs7OztBQUNGOztBQUVETCxPQUFPTyxTQUFQLEdBQW1CO0FBQ2pCTCxxQkFBbUIsaUJBQVVNLElBRFo7QUFFakJMLDBCQUF3QixpQkFBVU0sTUFGakI7QUFHakJMLDBCQUF3QixpQkFBVUs7QUFIakIsQ0FBbkI7O0FBTUFULE9BQU9VLGlCQUFQLEdBQTJCO0FBQ3pCUixxQkFBbUIsaUJBQVVNLElBREo7QUFFekJMLDBCQUF3QixpQkFBVU0sTUFGVDtBQUd6QkwsMEJBQXdCLGlCQUFVSztBQUhULENBQTNCOztBQU1BVCxPQUFPVyxZQUFQLEdBQXNCO0FBQ3BCVCxxQkFBbUIsSUFEQztBQUVwQkMsMEJBQXdCO0FBQ3RCUyxRQUFJO0FBRGtCLEdBRko7QUFLcEJSLDBCQUF3QjtBQUN0QlEsUUFBSTtBQURrQjtBQUxKLENBQXRCOztrQkFVZVosTSIsImZpbGUiOiJjb21wb25lbnRzL2ZpZWxkcy93aWRnZXRzL0JzRm9ybS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
