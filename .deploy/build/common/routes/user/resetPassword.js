'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (store) {
  return {
    path: 'password/reset',
    getComponent: function getComponent(nextState, cb) {
      require.ensure([], function (require) {
        cb(null, require('../../components/pages/user/ResetPasswordPage').default);
      });
    }
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy91c2VyL3Jlc2V0UGFzc3dvcmQuanMiXSwibmFtZXMiOlsic3RvcmUiLCJwYXRoIiwiZ2V0Q29tcG9uZW50IiwibmV4dFN0YXRlIiwiY2IiLCJyZXF1aXJlIiwiZW5zdXJlIiwiZGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2tCQUFlLFVBQUNBLEtBQUQ7QUFBQSxTQUFZO0FBQ3pCQyxVQUFNLGdCQURtQjtBQUV6QkMsZ0JBRnlCLHdCQUVaQyxTQUZZLEVBRURDLEVBRkMsRUFFRztBQUMxQkMsY0FBUUMsTUFBUixDQUFlLEVBQWYsRUFBbUIsVUFBQ0QsT0FBRCxFQUFhO0FBQzlCRCxXQUNFLElBREYsRUFFRUMsUUFBUSwrQ0FBUixFQUF5REUsT0FGM0Q7QUFJRCxPQUxEO0FBTUQ7QUFUd0IsR0FBWjtBQUFBLEMiLCJmaWxlIjoicm91dGVzL3VzZXIvcmVzZXRQYXNzd29yZC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
