'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Head = require('../widgets/Head');

var _Head2 = _interopRequireDefault(_Head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppLayout = function AppLayout(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Head2.default, {
      title: 'Express-React-HMR-Boilerplate',
      metas: [{ charset: 'utf-8' }, {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0'
      }],
      links: ['https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css', '/css/main.css'],
      scripts: ['https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js']
    }),
    children
  );
};

exports.default = AppLayout;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGF5b3V0cy9BcHBMYXlvdXQuanMiXSwibmFtZXMiOlsiQXBwTGF5b3V0IiwiY2hpbGRyZW4iLCJjaGFyc2V0IiwibmFtZSIsImNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFlBQVksU0FBWkEsU0FBWTtBQUFBLE1BQUdDLFFBQUgsUUFBR0EsUUFBSDtBQUFBLFNBQ2hCO0FBQUE7QUFBQTtBQUNFO0FBQ0UsYUFBTSwrQkFEUjtBQUVFLGFBQU8sQ0FDTCxFQUFDQyxTQUFTLE9BQVYsRUFESyxFQUVMO0FBQ0VDLGNBQU0sVUFEUjtBQUVFQyxpQkFBUztBQUZYLE9BRkssQ0FGVDtBQVNFLGFBQU8sQ0FDTCw2RUFESyxFQUVMLGVBRkssQ0FUVDtBQWFFLGVBQVMsQ0FDUCxxRUFETztBQWJYLE1BREY7QUFrQkdIO0FBbEJILEdBRGdCO0FBQUEsQ0FBbEI7O2tCQXVCZUQsUyIsImZpbGUiOiJjb21wb25lbnRzL2xheW91dHMvQXBwTGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
