'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (store) {
  return {
    path: 'email/verify',
    getComponent: function getComponent(nextState, cb) {
      require.ensure([], function (require) {
        cb(null, require('../../components/pages/user/VerifyEmailPage').default);
      });
    }
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy91c2VyL3ZlcmlmeUVtYWlsLmpzIl0sIm5hbWVzIjpbInN0b3JlIiwicGF0aCIsImdldENvbXBvbmVudCIsIm5leHRTdGF0ZSIsImNiIiwicmVxdWlyZSIsImVuc3VyZSIsImRlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7OztrQkFBZSxVQUFDQSxLQUFEO0FBQUEsU0FBWTtBQUN6QkMsVUFBTSxjQURtQjtBQUV6QkMsZ0JBRnlCLHdCQUVaQyxTQUZZLEVBRURDLEVBRkMsRUFFRztBQUMxQkMsY0FBUUMsTUFBUixDQUFlLEVBQWYsRUFBbUIsVUFBQ0QsT0FBRCxFQUFhO0FBQzlCRCxXQUFHLElBQUgsRUFBU0MsUUFBUSw2Q0FBUixFQUF1REUsT0FBaEU7QUFDRCxPQUZEO0FBR0Q7QUFOd0IsR0FBWjtBQUFBLEMiLCJmaWxlIjoicm91dGVzL3VzZXIvdmVyaWZ5RW1haWwuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
