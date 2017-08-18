'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ssrFetchState = require('../controllers/ssrFetchState');

var _ssrFetchState2 = _interopRequireDefault(_ssrFetchState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var app = _ref.app;

  app.use('/*', _ssrFetchState2.default.user, _ssrFetchState2.default.intl);
  app.get('/todo', _ssrFetchState2.default.todo);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy9zc3JGZXRjaFN0YXRlLmpzIl0sIm5hbWVzIjpbImFwcCIsInVzZSIsInVzZXIiLCJpbnRsIiwiZ2V0IiwidG9kbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7OztrQkFFZSxnQkFBYTtBQUFBLE1BQVZBLEdBQVUsUUFBVkEsR0FBVTs7QUFDMUJBLE1BQUlDLEdBQUosQ0FBUSxJQUFSLEVBQWMsd0JBQXdCQyxJQUF0QyxFQUE0Qyx3QkFBd0JDLElBQXBFO0FBQ0FILE1BQUlJLEdBQUosQ0FBUSxPQUFSLEVBQWlCLHdCQUF3QkMsSUFBekM7QUFDRCxDIiwiZmlsZSI6InJvdXRlcy9zc3JGZXRjaFN0YXRlLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
