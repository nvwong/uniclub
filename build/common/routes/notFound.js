'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (store) {
  return {
    path: '*',
    getComponent: function getComponent(nextState, cb) {
      require.ensure([], function (require) {
        cb(null, require('../components/pages/NotFoundPage').default);
      });
    }
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy9ub3RGb3VuZC5qcyJdLCJuYW1lcyI6WyJzdG9yZSIsInBhdGgiLCJnZXRDb21wb25lbnQiLCJuZXh0U3RhdGUiLCJjYiIsInJlcXVpcmUiLCJlbnN1cmUiLCJkZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7a0JBQWUsVUFBQ0EsS0FBRDtBQUFBLFNBQVk7QUFDekJDLFVBQU0sR0FEbUI7QUFFekJDLGdCQUZ5Qix3QkFFWkMsU0FGWSxFQUVEQyxFQUZDLEVBRUc7QUFDMUJDLGNBQVFDLE1BQVIsQ0FBZSxFQUFmLEVBQW1CLFVBQUNELE9BQUQsRUFBYTtBQUM5QkQsV0FBRyxJQUFILEVBQVNDLFFBQVEsa0NBQVIsRUFBNENFLE9BQXJEO0FBQ0QsT0FGRDtBQUdEO0FBTndCLEdBQVo7QUFBQSxDIiwiZmlsZSI6InJvdXRlcy9ub3RGb3VuZC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
