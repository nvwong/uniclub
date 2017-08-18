'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (store) {
  return {
    path: 'user',
    getChildRoutes: function getChildRoutes(location, cb) {
      require.ensure([], function (require) {
        cb(null, [require('./register').default(store), require('./verifyEmail').default(store), require('./login').default(store), require('./edit').default(store), require('./forgetPassword').default(store), require('./resetPassword').default(store), require('./logout').default(store), require('./me').default(store)]);
      });
    }
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy91c2VyL2luZGV4LmpzIl0sIm5hbWVzIjpbInN0b3JlIiwicGF0aCIsImdldENoaWxkUm91dGVzIiwibG9jYXRpb24iLCJjYiIsInJlcXVpcmUiLCJlbnN1cmUiLCJkZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7a0JBQWUsVUFBQ0EsS0FBRDtBQUFBLFNBQVk7QUFDekJDLFVBQU0sTUFEbUI7QUFFekJDLGtCQUZ5QiwwQkFFVkMsUUFGVSxFQUVBQyxFQUZBLEVBRUk7QUFDM0JDLGNBQVFDLE1BQVIsQ0FBZSxFQUFmLEVBQW1CLFVBQUNELE9BQUQsRUFBYTtBQUM5QkQsV0FBRyxJQUFILEVBQVMsQ0FDUEMsUUFBUSxZQUFSLEVBQXNCRSxPQUF0QixDQUE4QlAsS0FBOUIsQ0FETyxFQUVQSyxRQUFRLGVBQVIsRUFBeUJFLE9BQXpCLENBQWlDUCxLQUFqQyxDQUZPLEVBR1BLLFFBQVEsU0FBUixFQUFtQkUsT0FBbkIsQ0FBMkJQLEtBQTNCLENBSE8sRUFJUEssUUFBUSxRQUFSLEVBQWtCRSxPQUFsQixDQUEwQlAsS0FBMUIsQ0FKTyxFQUtQSyxRQUFRLGtCQUFSLEVBQTRCRSxPQUE1QixDQUFvQ1AsS0FBcEMsQ0FMTyxFQU1QSyxRQUFRLGlCQUFSLEVBQTJCRSxPQUEzQixDQUFtQ1AsS0FBbkMsQ0FOTyxFQU9QSyxRQUFRLFVBQVIsRUFBb0JFLE9BQXBCLENBQTRCUCxLQUE1QixDQVBPLEVBUVBLLFFBQVEsTUFBUixFQUFnQkUsT0FBaEIsQ0FBd0JQLEtBQXhCLENBUk8sQ0FBVDtBQVVELE9BWEQ7QUFZRDtBQWZ3QixHQUFaO0FBQUEsQyIsImZpbGUiOiJyb3V0ZXMvdXNlci9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
