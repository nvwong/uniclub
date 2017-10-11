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

var SocPageLayout = function SocPageLayout(_ref) {
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
          'Society Admin System'
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
              { eventKey: 1, href: '/admin/events' },
              'Events'
            ),
            _react2.default.createElement(
              _NavItem2.default,
              { eventKey: 2, href: '/' },
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

exports.default = SocPageLayout;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGF5b3V0cy9Tb2NQYWdlTGF5b3V0LmpzIl0sIm5hbWVzIjpbIlNvY1BhZ2VMYXlvdXQiLCJjaGlsZHJlbiIsInJlc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNQSxnQkFBZ0IsU0FBaEJBLGFBQWdCO0FBQUEsTUFBR0MsUUFBSCxRQUFHQSxRQUFIO0FBQUEsTUFBZ0JDLElBQWhCOztBQUFBLFNBQ3BCO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxRQUFRLFdBQVI7QUFDRTtBQUFBLHlCQUFRLE1BQVI7QUFBQTtBQUNFO0FBQUEsMkJBQVEsS0FBUjtBQUFBO0FBQUE7QUFBQSxTQURGO0FBSUUsdURBQVEsTUFBUjtBQUpGLE9BREY7QUFPRSxxREFBUSxRQUFSO0FBUEYsS0FERjtBQVdFO0FBQUE7QUFBQSxRQUFNLFdBQU47QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBSyxJQUFJLENBQVQ7QUFDRTtBQUFBO0FBQUEsY0FBSyxTQUFRLE9BQWIsRUFBcUIsYUFBckI7QUFDRTtBQUFBO0FBQUEsZ0JBQVMsVUFBVSxDQUFuQixFQUFzQixNQUFLLGVBQTNCO0FBQUE7QUFBQSxhQURGO0FBRUU7QUFBQTtBQUFBLGdCQUFTLFVBQVUsQ0FBbkIsRUFBc0IsTUFBSyxHQUEzQjtBQUFBO0FBQUE7QUFGRjtBQURGLFNBREY7QUFPRTtBQUFBO0FBQUEscUJBQUssSUFBSSxFQUFULElBQWlCQSxJQUFqQjtBQUNFLGtFQURGO0FBRUdEO0FBRkg7QUFQRjtBQURGO0FBWEYsR0FEb0I7QUFBQSxDQUF0Qjs7a0JBNkJlRCxhIiwiZmlsZSI6ImNvbXBvbmVudHMvbGF5b3V0cy9Tb2NQYWdlTGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
