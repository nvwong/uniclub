'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

var _socialAuth = require('./socialAuth');

var _socialAuth2 = _interopRequireDefault(_socialAuth);

var _ssrFetchState = require('./ssrFetchState');

var _ssrFetchState2 = _interopRequireDefault(_ssrFetchState);

var _ssr = require('./ssr');

var _ssr2 = _interopRequireDefault(_ssr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var app = _ref.app;

  (0, _api2.default)({ app: app });
  (0, _socialAuth2.default)({ app: app });
  (0, _ssrFetchState2.default)({ app: app });
  (0, _ssr2.default)({ app: app });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7a0JBRWUsZ0JBQWE7QUFBQSxNQUFWQSxHQUFVLFFBQVZBLEdBQVU7O0FBQzFCLHFCQUFVLEVBQUVBLFFBQUYsRUFBVjtBQUNBLDRCQUFpQixFQUFFQSxRQUFGLEVBQWpCO0FBQ0EsK0JBQW9CLEVBQUVBLFFBQUYsRUFBcEI7QUFDQSxxQkFBVSxFQUFFQSxRQUFGLEVBQVY7QUFDRCxDIiwiZmlsZSI6InJvdXRlcy9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
