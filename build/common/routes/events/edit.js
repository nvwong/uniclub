'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (store) {
  return {
    path: 'edit',
    getComponent: function getComponent(nextState, cb) {
      require.ensure([], function (require) {
        cb(null, require('../../components/pages/events/EditEventPage').default);
      });
    }
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy9ldmVudHMvZWRpdC5qcyJdLCJuYW1lcyI6WyJzdG9yZSIsInBhdGgiLCJnZXRDb21wb25lbnQiLCJuZXh0U3RhdGUiLCJjYiIsInJlcXVpcmUiLCJlbnN1cmUiLCJkZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7a0JBQWUsVUFBQ0EsS0FBRDtBQUFBLFNBQVk7QUFDekJDLFVBQU0sTUFEbUI7QUFFekJDLGdCQUZ5Qix3QkFFWkMsU0FGWSxFQUVEQyxFQUZDLEVBRUc7QUFDMUJDLGNBQVFDLE1BQVIsQ0FBZSxFQUFmLEVBQW1CLFVBQUNELE9BQUQsRUFBYTtBQUM5QkQsV0FBRyxJQUFILEVBQVNDLFFBQVEsNkNBQVIsRUFBdURFLE9BQWhFO0FBQ0QsT0FGRDtBQUdEO0FBTndCLEdBQVo7QUFBQSxDIiwiZmlsZSI6InJvdXRlcy9ldmVudHMvZWRpdC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
