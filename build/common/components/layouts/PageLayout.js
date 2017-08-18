'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Grid = require('react-bootstrap/lib/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _Navigation = require('../utils/Navigation');

var _Navigation2 = _interopRequireDefault(_Navigation);

var _ErrorList = require('../utils/ErrorList');

var _ErrorList2 = _interopRequireDefault(_ErrorList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PageLayout = function PageLayout(_ref) {
  var hasGrid = _ref.hasGrid,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ['hasGrid', 'children']);

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Navigation2.default, null),
    _react2.default.createElement(_ErrorList2.default, null),
    hasGrid ? _react2.default.createElement(
      _Grid2.default,
      rest,
      children
    ) : children
  );
};

PageLayout.propTypes = {
  hasGrid: _react.PropTypes.bool
};

PageLayout.defaultProps = {
  hasGrid: true
};

exports.default = PageLayout;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGF5b3V0cy9QYWdlTGF5b3V0LmpzIl0sIm5hbWVzIjpbIlBhZ2VMYXlvdXQiLCJoYXNHcmlkIiwiY2hpbGRyZW4iLCJyZXN0IiwicHJvcFR5cGVzIiwiYm9vbCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBSUEsYUFBYSxTQUFiQSxVQUFhO0FBQUEsTUFBR0MsT0FBSCxRQUFHQSxPQUFIO0FBQUEsTUFBWUMsUUFBWixRQUFZQSxRQUFaO0FBQUEsTUFBeUJDLElBQXpCOztBQUFBLFNBQ2Y7QUFBQTtBQUFBO0FBQ0UsNkRBREY7QUFFRSw0REFGRjtBQUdHRixjQUNDO0FBQUE7QUFBVUUsVUFBVjtBQUNHRDtBQURILEtBREQsR0FJR0E7QUFQTixHQURlO0FBQUEsQ0FBakI7O0FBWUFGLFdBQVdJLFNBQVgsR0FBdUI7QUFDckJILFdBQVMsaUJBQVVJO0FBREUsQ0FBdkI7O0FBSUFMLFdBQVdNLFlBQVgsR0FBMEI7QUFDeEJMLFdBQVM7QUFEZSxDQUExQjs7a0JBSWVELFUiLCJmaWxlIjoiY29tcG9uZW50cy9sYXlvdXRzL1BhZ2VMYXlvdXQuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
