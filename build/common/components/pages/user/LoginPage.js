'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PageHeader = require('react-bootstrap/lib/PageHeader');

var _PageHeader2 = _interopRequireDefault(_PageHeader);

var _Alert = require('react-bootstrap/lib/Alert');

var _Alert2 = _interopRequireDefault(_Alert);

var _Row = require('react-bootstrap/lib/Row');

var _Row2 = _interopRequireDefault(_Row);

var _Col = require('react-bootstrap/lib/Col');

var _Col2 = _interopRequireDefault(_Col);

var _PageLayout = require('../../layouts/PageLayout');

var _PageLayout2 = _interopRequireDefault(_PageLayout);

var _LoginForm = require('../../forms/user/LoginForm');

var _LoginForm2 = _interopRequireDefault(_LoginForm);

var _SocialAuthButtonList = require('../../utils/SocialAuthButtonList');

var _SocialAuthButtonList2 = _interopRequireDefault(_SocialAuthButtonList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoginPage = function LoginPage(_ref) {
  var location = _ref.location;
  return _react2.default.createElement(
    _PageLayout2.default,
    null,
    _react2.default.createElement(
      _PageHeader2.default,
      null,
      'Login'
    ),
    _react2.default.createElement(
      _Row2.default,
      null,
      _react2.default.createElement(
        _Col2.default,
        { md: 12 },
        location.query.next && _react2.default.createElement(
          _Alert2.default,
          { bsStyle: 'warning' },
          _react2.default.createElement(
            'strong',
            null,
            'Authentication Required'
          ),
          ' ',
          'Please login first.'
        )
      )
    ),
    _react2.default.createElement(
      _Row2.default,
      null,
      _react2.default.createElement(
        _Col2.default,
        { md: 9 },
        _react2.default.createElement(_LoginForm2.default, null)
      ),
      _react2.default.createElement(
        _Col2.default,
        { md: 3 },
        _react2.default.createElement(_SocialAuthButtonList2.default, null)
      )
    )
  );
};

exports.default = LoginPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZXMvdXNlci9Mb2dpblBhZ2UuanMiXSwibmFtZXMiOlsiTG9naW5QYWdlIiwibG9jYXRpb24iLCJxdWVyeSIsIm5leHQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQUlBLFlBQVksU0FBWkEsU0FBWTtBQUFBLE1BQUdDLFFBQUgsUUFBR0EsUUFBSDtBQUFBLFNBQ2Q7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGO0FBRUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFVBQUssSUFBSSxFQUFUO0FBQ0dBLGlCQUFTQyxLQUFULENBQWVDLElBQWYsSUFDQztBQUFBO0FBQUEsWUFBTyxTQUFRLFNBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFFRyxhQUZIO0FBQUE7QUFBQTtBQUZKO0FBREYsS0FGRjtBQVlFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxVQUFLLElBQUksQ0FBVDtBQUNFO0FBREYsT0FERjtBQUlFO0FBQUE7QUFBQSxVQUFLLElBQUksQ0FBVDtBQUNFO0FBREY7QUFKRjtBQVpGLEdBRGM7QUFBQSxDQUFoQjs7a0JBd0JlSCxTIiwiZmlsZSI6ImNvbXBvbmVudHMvcGFnZXMvdXNlci9Mb2dpblBhZ2UuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
