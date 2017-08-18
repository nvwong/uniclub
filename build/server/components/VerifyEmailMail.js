'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _tokenToURL = require('../utils/tokenToURL');

var _tokenToURL2 = _interopRequireDefault(_tokenToURL);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VerifyEmailMail = function VerifyEmailMail(_ref) {
  var token = _ref.token;

  var url = (0, _tokenToURL2.default)('/user/email/verify', token);

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'p',
      null,
      'Please click the following link to verify your account.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement(
        'a',
        { href: url },
        url
      )
    )
  );
};

VerifyEmailMail.propTypes = {
  token: _react.PropTypes.string
};

exports.default = VerifyEmailMail;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVmVyaWZ5RW1haWxNYWlsLmpzIl0sIm5hbWVzIjpbIlZlcmlmeUVtYWlsTWFpbCIsInRva2VuIiwidXJsIiwicHJvcFR5cGVzIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFJQSxrQkFBa0IsU0FBbEJBLGVBQWtCLE9BQWU7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7O0FBQ25DLE1BQUlDLE1BQU0sMEJBQVcsb0JBQVgsRUFBaUNELEtBQWpDLENBQVY7O0FBRUEsU0FDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREY7QUFJRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsVUFBRyxNQUFNQyxHQUFUO0FBQ0dBO0FBREg7QUFERjtBQUpGLEdBREY7QUFZRCxDQWZEOztBQWlCQUYsZ0JBQWdCRyxTQUFoQixHQUE0QjtBQUMxQkYsU0FBTyxpQkFBVUc7QUFEUyxDQUE1Qjs7a0JBSWVKLGUiLCJmaWxlIjoiY29tcG9uZW50cy9WZXJpZnlFbWFpbE1haWwuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
