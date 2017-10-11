'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Roles = require('../../constants/Roles');

var _Roles2 = _interopRequireDefault(_Roles);

var _composeEnterHooks = require('../../utils/composeEnterHooks');

var _composeEnterHooks2 = _interopRequireDefault(_composeEnterHooks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (store) {
  return {
    path: 'admin',
    getIndexRoute: function getIndexRoute(location, cb) {
      require.ensure([], function (require) {
        cb(null, {
          component: require('../../components/pages/admin/user/ListPage').default
        });
      });
    },
    getChildRoutes: function getChildRoutes(location, cb) {
      require.ensure([], function (require) {
        cb(null, [require('./user').default(store), require('./events').default(store)]);
      });
    },

    onEnter: _composeEnterHooks2.default.series(require('../../utils/authRequired').default(store), require('../../utils/roleRequired').default(store)(_Roles2.default.ADMIN))
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy9hZG1pbi9pbmRleC5qcyJdLCJuYW1lcyI6WyJzdG9yZSIsInBhdGgiLCJnZXRJbmRleFJvdXRlIiwibG9jYXRpb24iLCJjYiIsInJlcXVpcmUiLCJlbnN1cmUiLCJjb21wb25lbnQiLCJkZWZhdWx0IiwiZ2V0Q2hpbGRSb3V0ZXMiLCJvbkVudGVyIiwic2VyaWVzIiwiQURNSU4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztrQkFFZSxVQUFDQSxLQUFEO0FBQUEsU0FBWTtBQUN6QkMsVUFBTSxPQURtQjtBQUV6QkMsaUJBRnlCLHlCQUVYQyxRQUZXLEVBRURDLEVBRkMsRUFFRztBQUMxQkMsY0FBUUMsTUFBUixDQUFlLEVBQWYsRUFBbUIsVUFBQ0QsT0FBRCxFQUFhO0FBQzlCRCxXQUFHLElBQUgsRUFBUztBQUNQRyxxQkFDRUYsUUFBUSw0Q0FBUixFQUFzREc7QUFGakQsU0FBVDtBQUlELE9BTEQ7QUFNRCxLQVR3QjtBQVV6QkMsa0JBVnlCLDBCQVVWTixRQVZVLEVBVUFDLEVBVkEsRUFVSTtBQUMzQkMsY0FBUUMsTUFBUixDQUFlLEVBQWYsRUFBbUIsVUFBQ0QsT0FBRCxFQUFhO0FBQzlCRCxXQUFHLElBQUgsRUFBUyxDQUNQQyxRQUFRLFFBQVIsRUFBa0JHLE9BQWxCLENBQTBCUixLQUExQixDQURPLEVBRVBLLFFBQVEsVUFBUixFQUFvQkcsT0FBcEIsQ0FBNEJSLEtBQTVCLENBRk8sQ0FBVDtBQUlELE9BTEQ7QUFNRCxLQWpCd0I7O0FBa0J6QlUsYUFBUyw0QkFBUUMsTUFBUixDQUNQTixRQUFRLDBCQUFSLEVBQW9DRyxPQUFwQyxDQUE0Q1IsS0FBNUMsQ0FETyxFQUVQSyxRQUFRLDBCQUFSLEVBQW9DRyxPQUFwQyxDQUE0Q1IsS0FBNUMsRUFBbUQsZ0JBQU1ZLEtBQXpELENBRk87QUFsQmdCLEdBQVo7QUFBQSxDIiwiZmlsZSI6InJvdXRlcy9hZG1pbi9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
