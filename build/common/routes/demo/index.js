'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (store) {
  return {
    path: 'demo',
    getChildRoutes: function getChildRoutes(location, cb) {
      require.ensure([], function (require) {
        cb(null, [require('./formElement').default(store)]);
      });
    }
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy9kZW1vL2luZGV4LmpzIl0sIm5hbWVzIjpbInN0b3JlIiwicGF0aCIsImdldENoaWxkUm91dGVzIiwibG9jYXRpb24iLCJjYiIsInJlcXVpcmUiLCJlbnN1cmUiLCJkZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7a0JBQWUsVUFBQ0EsS0FBRDtBQUFBLFNBQVk7QUFDekJDLFVBQU0sTUFEbUI7QUFFekJDLGtCQUZ5QiwwQkFFVkMsUUFGVSxFQUVBQyxFQUZBLEVBRUk7QUFDM0JDLGNBQVFDLE1BQVIsQ0FBZSxFQUFmLEVBQW1CLFVBQUNELE9BQUQsRUFBYTtBQUM5QkQsV0FBRyxJQUFILEVBQVMsQ0FDUEMsUUFBUSxlQUFSLEVBQXlCRSxPQUF6QixDQUFpQ1AsS0FBakMsQ0FETyxDQUFUO0FBR0QsT0FKRDtBQUtEO0FBUndCLEdBQVo7QUFBQSxDIiwiZmlsZSI6InJvdXRlcy9kZW1vL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
