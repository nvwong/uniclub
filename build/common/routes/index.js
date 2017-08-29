'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('../utils/ensure-polyfill');

var _AppLayout = require('../components/layouts/AppLayout');

var _AppLayout2 = _interopRequireDefault(_AppLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// essential polyfill for `require.ensure`
exports.default = function (store) {
  return {
    path: '/',
    component: _AppLayout2.default,
    getChildRoutes: function getChildRoutes(location, cb) {
      require.ensure([], function (require) {
        cb(null, [require('./admin').default(store), require('./user').default(store), require('./userlist').default(store), require('./todo').default(store), require('./demo').default(store), require('./notFound').default(store)]);
      });
    },
    getIndexRoute: function getIndexRoute(location, cb) {
      require.ensure([], function (require) {
        cb(null, {
          component: require('../components/pages/HomePage').default
        });
      });
    }
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJzdG9yZSIsInBhdGgiLCJjb21wb25lbnQiLCJnZXRDaGlsZFJvdXRlcyIsImxvY2F0aW9uIiwiY2IiLCJyZXF1aXJlIiwiZW5zdXJlIiwiZGVmYXVsdCIsImdldEluZGV4Um91dGUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBOztBQUNBOzs7Ozs7QUFGQTtrQkFJZSxVQUFDQSxLQUFEO0FBQUEsU0FBWTtBQUN6QkMsVUFBTSxHQURtQjtBQUV6QkMsa0NBRnlCO0FBR3pCQyxrQkFIeUIsMEJBR1ZDLFFBSFUsRUFHQUMsRUFIQSxFQUdJO0FBQzNCQyxjQUFRQyxNQUFSLENBQWUsRUFBZixFQUFtQixVQUFDRCxPQUFELEVBQWE7QUFDOUJELFdBQUcsSUFBSCxFQUFTLENBQ1BDLFFBQVEsU0FBUixFQUFtQkUsT0FBbkIsQ0FBMkJSLEtBQTNCLENBRE8sRUFFUE0sUUFBUSxRQUFSLEVBQWtCRSxPQUFsQixDQUEwQlIsS0FBMUIsQ0FGTyxFQUdQTSxRQUFRLFlBQVIsRUFBc0JFLE9BQXRCLENBQThCUixLQUE5QixDQUhPLEVBSVBNLFFBQVEsUUFBUixFQUFrQkUsT0FBbEIsQ0FBMEJSLEtBQTFCLENBSk8sRUFLUE0sUUFBUSxRQUFSLEVBQWtCRSxPQUFsQixDQUEwQlIsS0FBMUIsQ0FMTyxFQU1QTSxRQUFRLFlBQVIsRUFBc0JFLE9BQXRCLENBQThCUixLQUE5QixDQU5PLENBQVQ7QUFRRCxPQVREO0FBVUQsS0Fkd0I7QUFlekJTLGlCQWZ5Qix5QkFlWEwsUUFmVyxFQWVEQyxFQWZDLEVBZUc7QUFDMUJDLGNBQVFDLE1BQVIsQ0FBZSxFQUFmLEVBQW1CLFVBQUNELE9BQUQsRUFBYTtBQUM5QkQsV0FBRyxJQUFILEVBQVM7QUFDUEgscUJBQVdJLFFBQVEsOEJBQVIsRUFBd0NFO0FBRDVDLFNBQVQ7QUFHRCxPQUpEO0FBS0Q7QUFyQndCLEdBQVo7QUFBQSxDIiwiZmlsZSI6InJvdXRlcy9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
