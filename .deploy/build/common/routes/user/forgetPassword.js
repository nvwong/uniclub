'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (store) {
  return {
    path: 'password/forget',
    getComponent: function getComponent(nextState, cb) {
      require.ensure([], function (require) {
        cb(null, require('../../components/pages/user/ForgetPasswordPage').default);
      });
    }
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy91c2VyL2ZvcmdldFBhc3N3b3JkLmpzIl0sIm5hbWVzIjpbInN0b3JlIiwicGF0aCIsImdldENvbXBvbmVudCIsIm5leHRTdGF0ZSIsImNiIiwicmVxdWlyZSIsImVuc3VyZSIsImRlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7OztrQkFBZSxVQUFDQSxLQUFEO0FBQUEsU0FBWTtBQUN6QkMsVUFBTSxpQkFEbUI7QUFFekJDLGdCQUZ5Qix3QkFFWkMsU0FGWSxFQUVEQyxFQUZDLEVBRUc7QUFDMUJDLGNBQVFDLE1BQVIsQ0FBZSxFQUFmLEVBQW1CLFVBQUNELE9BQUQsRUFBYTtBQUM5QkQsV0FDRSxJQURGLEVBRUVDLFFBQVEsZ0RBQVIsRUFBMERFLE9BRjVEO0FBSUQsT0FMRDtBQU1EO0FBVHdCLEdBQVo7QUFBQSxDIiwiZmlsZSI6InJvdXRlcy91c2VyL2ZvcmdldFBhc3N3b3JkLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
