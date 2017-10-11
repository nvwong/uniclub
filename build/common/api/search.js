'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (apiEngine) {
  return {
    list: function list(value, field) {
      return apiEngine.get('api/search', { params: { value: value, field: field } });
    },
    search: function search(value, _ref) {
      var page = _ref.page;
      return apiEngine.post('api/search', { params: value });
    }
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9zZWFyY2guanMiXSwibmFtZXMiOlsiYXBpRW5naW5lIiwibGlzdCIsInZhbHVlIiwiZmllbGQiLCJnZXQiLCJwYXJhbXMiLCJzZWFyY2giLCJwYWdlIiwicG9zdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2tCQUFlLFVBQUNBLFNBQUQ7QUFBQSxTQUFnQjtBQUM3QkMsVUFBTSxjQUFDQyxLQUFELEVBQVFDLEtBQVI7QUFBQSxhQUFrQkgsVUFBVUksR0FBVixDQUFjLFlBQWQsRUFBNEIsRUFBRUMsUUFBUSxFQUFFSCxPQUFPQSxLQUFULEVBQWdCQyxPQUFPQSxLQUF2QixFQUFWLEVBQTVCLENBQWxCO0FBQUEsS0FEdUI7QUFFN0JHLFlBQVEsZ0JBQUNKLEtBQUQ7QUFBQSxVQUFVSyxJQUFWLFFBQVVBLElBQVY7QUFBQSxhQUFxQlAsVUFBVVEsSUFBVixDQUFlLFlBQWYsRUFBNkIsRUFBRUgsUUFBUUgsS0FBVixFQUE3QixDQUFyQjtBQUFBO0FBRnFCLEdBQWhCO0FBQUEsQyIsImZpbGUiOiJhcGkvc2VhcmNoLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
