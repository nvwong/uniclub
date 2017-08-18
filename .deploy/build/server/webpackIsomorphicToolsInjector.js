'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _webpackIsomorphicTools = require('webpack-isomorphic-tools');

var _webpackIsomorphicTools2 = _interopRequireDefault(_webpackIsomorphicTools);

var _webpackIsomorphicToolsConfiguration = require('../../configs/project/webpack-isomorphic-tools-configuration');

var _webpackIsomorphicToolsConfiguration2 = _interopRequireDefault(_webpackIsomorphicToolsConfiguration);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var injector = new Promise(function (resolve, reject) {
  // project root, sync with `webpack.config.dev.js` and `webpack.config.prod.js`
  var projectBasePath = _path2.default.resolve(__dirname, '../');
  global.__webpackIsomorphicTools__ = new _webpackIsomorphicTools2.default(_webpackIsomorphicToolsConfiguration2.default).development(process.env.NODE_ENV === 'development').server(projectBasePath, resolve);
});

exports.default = injector;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2tJc29tb3JwaGljVG9vbHNJbmplY3Rvci5qcyJdLCJuYW1lcyI6WyJpbmplY3RvciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicHJvamVjdEJhc2VQYXRoIiwiX19kaXJuYW1lIiwiZ2xvYmFsIiwiX193ZWJwYWNrSXNvbW9ycGhpY1Rvb2xzX18iLCJkZXZlbG9wbWVudCIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsInNlcnZlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFHQSxJQUFNQSxXQUFXLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDaEQ7QUFDQSxNQUFJQyxrQkFBa0IsZUFBS0YsT0FBTCxDQUFhRyxTQUFiLEVBQXdCLEtBQXhCLENBQXRCO0FBQ0FDLFNBQU9DLDBCQUFQLEdBQ0Usb0ZBQ0dDLFdBREgsQ0FDZUMsUUFBUUMsR0FBUixDQUFZQyxRQUFaLEtBQXlCLGFBRHhDLEVBRUdDLE1BRkgsQ0FFVVIsZUFGVixFQUUyQkYsT0FGM0IsQ0FERjtBQUlELENBUGdCLENBQWpCOztrQkFTZUYsUSIsImZpbGUiOiJ3ZWJwYWNrSXNvbW9ycGhpY1Rvb2xzSW5qZWN0b3IuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
