'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _PageHeader = require('react-bootstrap/lib/PageHeader');

var _PageHeader2 = _interopRequireDefault(_PageHeader);

var _Row = require('react-bootstrap/lib/Row');

var _Row2 = _interopRequireDefault(_Row);

var _Col = require('react-bootstrap/lib/Col');

var _Col2 = _interopRequireDefault(_Col);

var _Button = require('react-bootstrap/lib/Button');

var _Button2 = _interopRequireDefault(_Button);

var _PageLayout = require('../../layouts/PageLayout');

var _PageLayout2 = _interopRequireDefault(_PageLayout);

var _AdminEditForm = require('../../forms/user/AdminEditForm');

var _AdminEditForm2 = _interopRequireDefault(_AdminEditForm);

var _AvatarForm = require('../../forms/user/AvatarForm');

var _AvatarForm2 = _interopRequireDefault(_AvatarForm);

var _ChangePasswordForm = require('../../forms/user/ChangePasswordForm');

var _ChangePasswordForm2 = _interopRequireDefault(_ChangePasswordForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var adminEditPage = function adminEditPage() {
  return _react2.default.createElement(
    _PageLayout2.default,
    null,
    _react2.default.createElement(
      _Row2.default,
      null,
      _react2.default.createElement(
        _Col2.default,
        { md: 12 },
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/admin/user' },
          _react2.default.createElement(
            _Button2.default,
            null,
            'Finish, Back to Admin'
          )
        )
      )
    ),
    _react2.default.createElement('hr', null),
    _react2.default.createElement(
      _Row2.default,
      null,
      _react2.default.createElement(
        _Col2.default,
        { md: 6 },
        _react2.default.createElement(
          _PageHeader2.default,
          null,
          'Edit Profile'
        ),
        _react2.default.createElement(_AdminEditForm2.default, null)
      ),
      _react2.default.createElement(
        _Col2.default,
        { md: 6 },
        _react2.default.createElement(
          _PageHeader2.default,
          null,
          'Upload Avatar'
        ),
        _react2.default.createElement(_AvatarForm2.default, null)
      ),
      _react2.default.createElement(
        _Col2.default,
        { md: 6 },
        _react2.default.createElement(
          _PageHeader2.default,
          null,
          'Change Password'
        ),
        _react2.default.createElement(_ChangePasswordForm2.default, null)
      )
    )
  );
};

exports.default = adminEditPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZXMvdXNlci9hZG1pbkVkaXRQYWdlLmpzIl0sIm5hbWVzIjpbImFkbWluRWRpdFBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBSUEsZ0JBQWdCLFNBQWhCQSxhQUFnQixHQUFNO0FBQ3hCLFNBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFVBQUssSUFBSSxFQUFUO0FBQ0U7QUFBQTtBQUFBLFlBQU0sSUFBRyxhQUFUO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBREY7QUFERixLQURGO0FBUUUsNkNBUkY7QUFTRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsVUFBSyxJQUFJLENBQVQ7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRTtBQUZGLE9BREY7QUFLRTtBQUFBO0FBQUEsVUFBSyxJQUFJLENBQVQ7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRTtBQUZGLE9BTEY7QUFTRTtBQUFBO0FBQUEsVUFBSyxJQUFJLENBQVQ7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRTtBQUZGO0FBVEY7QUFURixHQURGO0FBMEJELENBM0JEOztrQkE2QmVBLGEiLCJmaWxlIjoiY29tcG9uZW50cy9wYWdlcy91c2VyL2FkbWluRWRpdFBhZ2UuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
