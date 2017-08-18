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

var _EditForm = require('../../forms/user/EditForm');

var _EditForm2 = _interopRequireDefault(_EditForm);

var _AvatarForm = require('../../forms/user/AvatarForm');

var _AvatarForm2 = _interopRequireDefault(_AvatarForm);

var _ChangePasswordForm = require('../../forms/user/ChangePasswordForm');

var _ChangePasswordForm2 = _interopRequireDefault(_ChangePasswordForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EditPage = function EditPage() {
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
          { to: '/user/me' },
          _react2.default.createElement(
            _Button2.default,
            null,
            'Finish'
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
        _react2.default.createElement(_EditForm2.default, null)
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

exports.default = EditPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZXMvdXNlci9FZGl0UGFnZS5qcyJdLCJuYW1lcyI6WyJFZGl0UGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFJQSxXQUFXLFNBQVhBLFFBQVcsR0FBTTtBQUNuQixTQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxVQUFLLElBQUksRUFBVDtBQUNFO0FBQUE7QUFBQSxZQUFNLElBQUcsVUFBVDtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQURGO0FBREYsS0FERjtBQVFFLDZDQVJGO0FBU0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFVBQUssSUFBSSxDQUFUO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGO0FBRUU7QUFGRixPQURGO0FBS0U7QUFBQTtBQUFBLFVBQUssSUFBSSxDQUFUO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGO0FBRUU7QUFGRixPQUxGO0FBU0U7QUFBQTtBQUFBLFVBQUssSUFBSSxDQUFUO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGO0FBRUU7QUFGRjtBQVRGO0FBVEYsR0FERjtBQTBCRCxDQTNCRDs7a0JBNkJlQSxRIiwiZmlsZSI6ImNvbXBvbmVudHMvcGFnZXMvdXNlci9FZGl0UGFnZS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
