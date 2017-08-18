'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (store) {
  return {
    path: 'login',
    getComponent: function getComponent(nextState, cb) {
      require.ensure([], function (require) {
        cb(null, require('../../components/pages/user/LoginPage').default);
      });
    }
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy91c2VyL2xvZ2luLmpzIl0sIm5hbWVzIjpbInN0b3JlIiwicGF0aCIsImdldENvbXBvbmVudCIsIm5leHRTdGF0ZSIsImNiIiwicmVxdWlyZSIsImVuc3VyZSIsImRlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7OztrQkFBZSxVQUFDQSxLQUFEO0FBQUEsU0FBWTtBQUN6QkMsVUFBTSxPQURtQjtBQUV6QkMsZ0JBRnlCLHdCQUVaQyxTQUZZLEVBRURDLEVBRkMsRUFFRztBQUMxQkMsY0FBUUMsTUFBUixDQUFlLEVBQWYsRUFBbUIsVUFBQ0QsT0FBRCxFQUFhO0FBQzlCRCxXQUFHLElBQUgsRUFBU0MsUUFBUSx1Q0FBUixFQUFpREUsT0FBMUQ7QUFDRCxPQUZEO0FBR0Q7QUFOd0IsR0FBWjtBQUFBLEMiLCJmaWxlIjoicm91dGVzL3VzZXIvbG9naW4uanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
