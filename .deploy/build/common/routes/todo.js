'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (store) {
  return {
    path: 'todo',
    getComponent: function getComponent(nextState, cb) {
      require.ensure([], function (require) {
        cb(null, require('../components/pages/todo/ListPage').default);
      });
    }
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy90b2RvLmpzIl0sIm5hbWVzIjpbInN0b3JlIiwicGF0aCIsImdldENvbXBvbmVudCIsIm5leHRTdGF0ZSIsImNiIiwicmVxdWlyZSIsImVuc3VyZSIsImRlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7OztrQkFBZSxVQUFDQSxLQUFEO0FBQUEsU0FBWTtBQUN6QkMsVUFBTSxNQURtQjtBQUV6QkMsZ0JBRnlCLHdCQUVaQyxTQUZZLEVBRURDLEVBRkMsRUFFRztBQUMxQkMsY0FBUUMsTUFBUixDQUFlLEVBQWYsRUFBbUIsVUFBQ0QsT0FBRCxFQUFhO0FBQzlCRCxXQUFHLElBQUgsRUFBU0MsUUFBUSxtQ0FBUixFQUE2Q0UsT0FBdEQ7QUFDRCxPQUZEO0FBR0Q7QUFOd0IsR0FBWjtBQUFBLEMiLCJmaWxlIjoicm91dGVzL3RvZG8uanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
