'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactGoogleRecaptcha = require('react-google-recaptcha');

var _reactGoogleRecaptcha2 = _interopRequireDefault(_reactGoogleRecaptcha);

var _client = require('../../../../../configs/project/client');

var _client2 = _interopRequireDefault(_client);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } // ref:
//   - <https://github.com/erikras/redux-form/issues/1880>


var Recaptcha = function Recaptcha(_ref) {
  var input = _ref.input,
      disableHint = _ref.disableHint,
      rest = _objectWithoutProperties(_ref, ['input', 'disableHint']);

  return _client2.default.recaptcha ? _react2.default.createElement(_reactGoogleRecaptcha2.default, _extends({
    sitekey: _client2.default.recaptcha[process.env.NODE_ENV].siteKey,
    onChange: input.onChange
  }, rest)) : _react2.default.createElement(
    'span',
    null,
    disableHint
  );
};

Recaptcha.propTypes = {
  input: _react.PropTypes.object.isRequired,
  disableHint: _react.PropTypes.node
};

Recaptcha.defaultProps = {
  disableHint: _react2.default.createElement(
    'pre',
    null,
    'Recaptcha is disabled'
  )
};

exports.default = Recaptcha;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZmllbGRzL2Jhc2VzL1JlY2FwdGNoYS5qcyJdLCJuYW1lcyI6WyJSZWNhcHRjaGEiLCJpbnB1dCIsImRpc2FibGVIaW50IiwicmVzdCIsInJlY2FwdGNoYSIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsInNpdGVLZXkiLCJvbkNoYW5nZSIsInByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJub2RlIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7OzZOQUpBO0FBQ0E7OztBQUtBLElBQUlBLFlBQVksU0FBWkEsU0FBWTtBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLFdBQVYsUUFBVUEsV0FBVjtBQUFBLE1BQTBCQyxJQUExQjs7QUFBQSxTQUNkLGlCQUFRQyxTQUFSLEdBQ0U7QUFDRSxhQUFTLGlCQUFRQSxTQUFSLENBQWtCQyxRQUFRQyxHQUFSLENBQVlDLFFBQTlCLEVBQXdDQyxPQURuRDtBQUVFLGNBQVVQLE1BQU1RO0FBRmxCLEtBR01OLElBSE4sRUFERixHQU9FO0FBQUE7QUFBQTtBQUNHRDtBQURILEdBUlk7QUFBQSxDQUFoQjs7QUFjQUYsVUFBVVUsU0FBVixHQUFzQjtBQUNwQlQsU0FBTyxpQkFBVVUsTUFBVixDQUFpQkMsVUFESjtBQUVwQlYsZUFBYSxpQkFBVVc7QUFGSCxDQUF0Qjs7QUFLQWIsVUFBVWMsWUFBVixHQUF5QjtBQUN2QlosZUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRnFCLENBQXpCOztrQkFRZUYsUyIsImZpbGUiOiJjb21wb25lbnRzL2ZpZWxkcy9iYXNlcy9SZWNhcHRjaGEuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
