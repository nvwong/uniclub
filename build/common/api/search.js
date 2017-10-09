'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (apiEngine) {
  return {
    list: function list(_ref) {
      var page = _ref.page;
      return apiEngine.get('/api/search', { params: { page: page } });
    }
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9zZWFyY2guanMiXSwibmFtZXMiOlsiYXBpRW5naW5lIiwibGlzdCIsInBhZ2UiLCJnZXQiLCJwYXJhbXMiXSwibWFwcGluZ3MiOiI7Ozs7OztrQkFBZSxVQUFDQSxTQUFEO0FBQUEsU0FBZ0I7QUFDN0JDLFVBQU07QUFBQSxVQUFHQyxJQUFILFFBQUdBLElBQUg7QUFBQSxhQUFjRixVQUFVRyxHQUFWLENBQWMsYUFBZCxFQUE2QixFQUFFQyxRQUFRLEVBQUVGLFVBQUYsRUFBVixFQUE3QixDQUFkO0FBQUE7QUFEdUIsR0FBaEI7QUFBQSxDIiwiZmlsZSI6ImFwaS9zZWFyY2guanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
