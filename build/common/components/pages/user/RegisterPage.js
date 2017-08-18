'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PageHeader = require('react-bootstrap/lib/PageHeader');

var _PageHeader2 = _interopRequireDefault(_PageHeader);

var _Row = require('react-bootstrap/lib/Row');

var _Row2 = _interopRequireDefault(_Row);

var _Col = require('react-bootstrap/lib/Col');

var _Col2 = _interopRequireDefault(_Col);

var _PageLayout = require('../../layouts/PageLayout');

var _PageLayout2 = _interopRequireDefault(_PageLayout);

var _RegisterForm = require('../../forms/user/RegisterForm');

var _RegisterForm2 = _interopRequireDefault(_RegisterForm);

var _SocialAuthButtonList = require('../../utils/SocialAuthButtonList');

var _SocialAuthButtonList2 = _interopRequireDefault(_SocialAuthButtonList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RegisterPage = function RegisterPage(props) {
  return _react2.default.createElement(
    _PageLayout2.default,
    null,
    _react2.default.createElement(
      _PageHeader2.default,
      null,
      'Register'
    ),
    _react2.default.createElement(
      _Row2.default,
      null,
      _react2.default.createElement(
        _Col2.default,
        { md: 9 },
        _react2.default.createElement(_RegisterForm2.default, null)
      ),
      _react2.default.createElement(
        _Col2.default,
        { md: 3 },
        _react2.default.createElement(_SocialAuthButtonList2.default, null)
      )
    )
  );
};

exports.default = RegisterPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZXMvdXNlci9SZWdpc3RlclBhZ2UuanMiXSwibmFtZXMiOlsiUmVnaXN0ZXJQYWdlIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxlQUFlLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRDtBQUFBLFNBQ25CO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERjtBQUVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxVQUFLLElBQUksQ0FBVDtBQUNFO0FBREYsT0FERjtBQUlFO0FBQUE7QUFBQSxVQUFLLElBQUksQ0FBVDtBQUNFO0FBREY7QUFKRjtBQUZGLEdBRG1CO0FBQUEsQ0FBckI7O2tCQWNlRCxZIiwiZmlsZSI6ImNvbXBvbmVudHMvcGFnZXMvdXNlci9SZWdpc3RlclBhZ2UuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
