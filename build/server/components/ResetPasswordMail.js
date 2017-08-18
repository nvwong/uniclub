'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _tokenToURL = require('../utils/tokenToURL');

var _tokenToURL2 = _interopRequireDefault(_tokenToURL);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ResetPasswordMail = function ResetPasswordMail(_ref) {
  var requestedAt = _ref.requestedAt,
      token = _ref.token;

  var url = (0, _tokenToURL2.default)('/user/password/reset', token);

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'p',
      null,
      'Someone requested to reset your password at',
      ' ',
      _react2.default.createElement(
        'time',
        null,
        requestedAt.toString()
      ),
      '. If you didn\'t ask for such request, please ignore this mail.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Please follow the link to reset your email:'
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

ResetPasswordMail.propTypes = {
  requestedAt: _react.PropTypes.instanceOf(Date),
  token: _react.PropTypes.string
};

exports.default = ResetPasswordMail;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVzZXRQYXNzd29yZE1haWwuanMiXSwibmFtZXMiOlsiUmVzZXRQYXNzd29yZE1haWwiLCJyZXF1ZXN0ZWRBdCIsInRva2VuIiwidXJsIiwidG9TdHJpbmciLCJwcm9wVHlwZXMiLCJpbnN0YW5jZU9mIiwiRGF0ZSIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBSUEsb0JBQW9CLFNBQXBCQSxpQkFBb0IsT0FBNEI7QUFBQSxNQUF6QkMsV0FBeUIsUUFBekJBLFdBQXlCO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZOztBQUNsRCxNQUFJQyxNQUFNLDBCQUFXLHNCQUFYLEVBQW1DRCxLQUFuQyxDQUFWOztBQUVBLFNBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFFRyxTQUZIO0FBRU87QUFBQTtBQUFBO0FBQU9ELG9CQUFZRyxRQUFaO0FBQVAsT0FGUDtBQUFBO0FBQUEsS0FERjtBQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FORjtBQVNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxVQUFHLE1BQU1ELEdBQVQ7QUFDR0E7QUFESDtBQURGO0FBVEYsR0FERjtBQWlCRCxDQXBCRDs7QUFzQkFILGtCQUFrQkssU0FBbEIsR0FBOEI7QUFDNUJKLGVBQWEsaUJBQVVLLFVBQVYsQ0FBcUJDLElBQXJCLENBRGU7QUFFNUJMLFNBQU8saUJBQVVNO0FBRlcsQ0FBOUI7O2tCQUtlUixpQiIsImZpbGUiOiJjb21wb25lbnRzL1Jlc2V0UGFzc3dvcmRNYWlsLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
