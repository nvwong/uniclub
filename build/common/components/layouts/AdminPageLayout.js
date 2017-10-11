'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Navbar = require('react-bootstrap/lib/Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Grid = require('react-bootstrap/lib/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _Row = require('react-bootstrap/lib/Row');

var _Row2 = _interopRequireDefault(_Row);

var _Col = require('react-bootstrap/lib/Col');

var _Col2 = _interopRequireDefault(_Col);

var _Nav = require('react-bootstrap/lib/Nav');

var _Nav2 = _interopRequireDefault(_Nav);

var _NavItem = require('react-bootstrap/lib/NavItem');

var _NavItem2 = _interopRequireDefault(_NavItem);

var _ErrorList = require('../utils/ErrorList');

var _ErrorList2 = _interopRequireDefault(_ErrorList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var AdminPageLayout = function AdminPageLayout(_ref) {
  var children = _ref.children,
      rest = _objectWithoutProperties(_ref, ['children']);

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _Navbar2.default,
      { fluid: true },
      _react2.default.createElement(
        _Navbar2.default.Header,
        null,
        _react2.default.createElement(
          _Navbar2.default.Brand,
          null,
          _react2.default.createElement(
            'a',
            { href: '/admin' },
            'Admin System'
          )
        ),
        _react2.default.createElement(_Navbar2.default.Toggle, null)
      ),
      _react2.default.createElement(_Navbar2.default.Collapse, null)
    ),
    _react2.default.createElement(
      _Grid2.default,
      { fluid: true },
      _react2.default.createElement(
        _Row2.default,
        null,
        _react2.default.createElement(
          _Col2.default,
          { md: 2 },
          _react2.default.createElement(
            _Nav2.default,
            { bsStyle: 'pills', stacked: true },
            _react2.default.createElement(
              _NavItem2.default,
              { eventKey: 1, href: '/admin/user' },
              'User'
            ),
            _react2.default.createElement(
              _NavItem2.default,
              { eventKey: 2, href: '/admin/events' },
              'Events'
            ),
            _react2.default.createElement(
              _NavItem2.default,
              { eventKey: 3, href: '/' },
              'Go back to site'
            )
          )
        ),
        _react2.default.createElement(
          _Col2.default,
          _extends({ md: 10 }, rest),
          _react2.default.createElement(_ErrorList2.default, null),
          children
        )
      )
    )
  );
};

exports.default = AdminPageLayout;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGF5b3V0cy9BZG1pblBhZ2VMYXlvdXQuanMiXSwibmFtZXMiOlsiQWRtaW5QYWdlTGF5b3V0IiwiY2hpbGRyZW4iLCJyZXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTUEsa0JBQWtCLFNBQWxCQSxlQUFrQjtBQUFBLE1BQUdDLFFBQUgsUUFBR0EsUUFBSDtBQUFBLE1BQWdCQyxJQUFoQjs7QUFBQSxTQUN0QjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsUUFBUSxXQUFSO0FBQ0U7QUFBQSx5QkFBUSxNQUFSO0FBQUE7QUFDRTtBQUFBLDJCQUFRLEtBQVI7QUFBQTtBQUNFO0FBQUE7QUFBQSxjQUFHLE1BQUssUUFBUjtBQUFBO0FBQUE7QUFERixTQURGO0FBSUUsdURBQVEsTUFBUjtBQUpGLE9BREY7QUFPRSxxREFBUSxRQUFSO0FBUEYsS0FERjtBQVdFO0FBQUE7QUFBQSxRQUFNLFdBQU47QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBSyxJQUFJLENBQVQ7QUFDRTtBQUFBO0FBQUEsY0FBSyxTQUFRLE9BQWIsRUFBcUIsYUFBckI7QUFDRTtBQUFBO0FBQUEsZ0JBQVMsVUFBVSxDQUFuQixFQUFzQixNQUFLLGFBQTNCO0FBQUE7QUFBQSxhQURGO0FBRUU7QUFBQTtBQUFBLGdCQUFTLFVBQVUsQ0FBbkIsRUFBc0IsTUFBSyxlQUEzQjtBQUFBO0FBQUEsYUFGRjtBQUdFO0FBQUE7QUFBQSxnQkFBUyxVQUFVLENBQW5CLEVBQXNCLE1BQUssR0FBM0I7QUFBQTtBQUFBO0FBSEY7QUFERixTQURGO0FBUUU7QUFBQTtBQUFBLHFCQUFLLElBQUksRUFBVCxJQUFpQkEsSUFBakI7QUFDRSxrRUFERjtBQUVHRDtBQUZIO0FBUkY7QUFERjtBQVhGLEdBRHNCO0FBQUEsQ0FBeEI7O2tCQThCZUQsZSIsImZpbGUiOiJjb21wb25lbnRzL2xheW91dHMvQWRtaW5QYWdlTGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
