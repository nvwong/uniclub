'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (store) {
  return {
    path: 'user',
    getIndexRoute: function getIndexRoute(location, cb) {
      require.ensure([], function (require) {
        cb(null, {
          component: require('../../../components/pages/admin/user/ListPage').default
        });
      });
    }
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy9hZG1pbi91c2VyL2luZGV4LmpzIl0sIm5hbWVzIjpbInN0b3JlIiwicGF0aCIsImdldEluZGV4Um91dGUiLCJsb2NhdGlvbiIsImNiIiwicmVxdWlyZSIsImVuc3VyZSIsImNvbXBvbmVudCIsImRlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7OztrQkFBZSxVQUFDQSxLQUFEO0FBQUEsU0FBWTtBQUN6QkMsVUFBTSxNQURtQjtBQUV6QkMsaUJBRnlCLHlCQUVYQyxRQUZXLEVBRURDLEVBRkMsRUFFRztBQUMxQkMsY0FBUUMsTUFBUixDQUFlLEVBQWYsRUFBbUIsVUFBQ0QsT0FBRCxFQUFhO0FBQzlCRCxXQUFHLElBQUgsRUFBUztBQUNQRyxxQkFDRUYsUUFBUSwrQ0FBUixFQUF5REc7QUFGcEQsU0FBVDtBQUlELE9BTEQ7QUFNRDtBQVR3QixHQUFaO0FBQUEsQyIsImZpbGUiOiJyb3V0ZXMvYWRtaW4vdXNlci9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
