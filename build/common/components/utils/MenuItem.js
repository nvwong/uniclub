'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var MenuItem = function MenuItem(_ref) {
  var title = _ref.title,
      href = _ref.href,
      rest = _objectWithoutProperties(_ref, ['title', 'href']);

  return _react2.default.createElement(
    'li',
    null,
    _react2.default.createElement(
      'a',
      _extends({ href: href }, rest),
      title
    )
  );
};

MenuItem.propTypes = {
  title: _react.PropTypes.string,
  href: _react.PropTypes.string
};

MenuItem.defaultProps = {
  href: '#'
};

exports.default = MenuItem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdXRpbHMvTWVudUl0ZW0uanMiXSwibmFtZXMiOlsiTWVudUl0ZW0iLCJ0aXRsZSIsImhyZWYiLCJyZXN0IiwicHJvcFR5cGVzIiwic3RyaW5nIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7OztBQUVBLElBQU1BLFdBQVcsU0FBWEEsUUFBVztBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLElBQVYsUUFBVUEsSUFBVjtBQUFBLE1BQW1CQyxJQUFuQjs7QUFBQSxTQUNmO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxpQkFBRyxNQUFNRCxJQUFULElBQW1CQyxJQUFuQjtBQUNHRjtBQURIO0FBREYsR0FEZTtBQUFBLENBQWpCOztBQVFBRCxTQUFTSSxTQUFULEdBQXFCO0FBQ25CSCxTQUFPLGlCQUFVSSxNQURFO0FBRW5CSCxRQUFNLGlCQUFVRztBQUZHLENBQXJCOztBQUtBTCxTQUFTTSxZQUFULEdBQXdCO0FBQ3RCSixRQUFNO0FBRGdCLENBQXhCOztrQkFJZUYsUSIsImZpbGUiOiJjb21wb25lbnRzL3V0aWxzL01lbnVJdGVtLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
