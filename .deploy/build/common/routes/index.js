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
        cb(null, [require('./admin').default(store), require('./user').default(store), require('./todo').default(store), require('./demo').default(store), require('./notFound').default(store)]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJzdG9yZSIsInBhdGgiLCJjb21wb25lbnQiLCJnZXRDaGlsZFJvdXRlcyIsImxvY2F0aW9uIiwiY2IiLCJyZXF1aXJlIiwiZW5zdXJlIiwiZGVmYXVsdCIsImdldEluZGV4Um91dGUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBOztBQUNBOzs7Ozs7QUFGQTtrQkFJZSxVQUFDQSxLQUFEO0FBQUEsU0FBWTtBQUN6QkMsVUFBTSxHQURtQjtBQUV6QkMsa0NBRnlCO0FBR3pCQyxrQkFIeUIsMEJBR1ZDLFFBSFUsRUFHQUMsRUFIQSxFQUdJO0FBQzNCQyxjQUFRQyxNQUFSLENBQWUsRUFBZixFQUFtQixVQUFDRCxPQUFELEVBQWE7QUFDOUJELFdBQUcsSUFBSCxFQUFTLENBQ1BDLFFBQVEsU0FBUixFQUFtQkUsT0FBbkIsQ0FBMkJSLEtBQTNCLENBRE8sRUFFUE0sUUFBUSxRQUFSLEVBQWtCRSxPQUFsQixDQUEwQlIsS0FBMUIsQ0FGTyxFQUdQTSxRQUFRLFFBQVIsRUFBa0JFLE9BQWxCLENBQTBCUixLQUExQixDQUhPLEVBSVBNLFFBQVEsUUFBUixFQUFrQkUsT0FBbEIsQ0FBMEJSLEtBQTFCLENBSk8sRUFLUE0sUUFBUSxZQUFSLEVBQXNCRSxPQUF0QixDQUE4QlIsS0FBOUIsQ0FMTyxDQUFUO0FBT0QsT0FSRDtBQVNELEtBYndCO0FBY3pCUyxpQkFkeUIseUJBY1hMLFFBZFcsRUFjREMsRUFkQyxFQWNHO0FBQzFCQyxjQUFRQyxNQUFSLENBQWUsRUFBZixFQUFtQixVQUFDRCxPQUFELEVBQWE7QUFDOUJELFdBQUcsSUFBSCxFQUFTO0FBQ1BILHFCQUFXSSxRQUFRLDhCQUFSLEVBQXdDRTtBQUQ1QyxTQUFUO0FBR0QsT0FKRDtBQUtEO0FBcEJ3QixHQUFaO0FBQUEsQyIsImZpbGUiOiJyb3V0ZXMvaW5kZXguanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
