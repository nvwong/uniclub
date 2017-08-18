'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (apiEngine) {
  return {
    // list: () => new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve(apiEngine.get('/api/todo'));
    //   }, 5000);
    // }),
    list: function list(_ref) {
      var page = _ref.page;
      return apiEngine.get('/api/todos', { params: { page: page } });
    },
    create: function create(todo) {
      return apiEngine.post('/api/todos', { data: todo });
    },
    update: function update(id, todo) {
      return apiEngine.put('/api/todos/' + id, { data: todo });
    },
    remove: function remove(id) {
      return apiEngine.del('/api/todos/' + id);
    }
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS90b2RvLmpzIl0sIm5hbWVzIjpbImFwaUVuZ2luZSIsImxpc3QiLCJwYWdlIiwiZ2V0IiwicGFyYW1zIiwiY3JlYXRlIiwidG9kbyIsInBvc3QiLCJkYXRhIiwidXBkYXRlIiwiaWQiLCJwdXQiLCJyZW1vdmUiLCJkZWwiXSwibWFwcGluZ3MiOiI7Ozs7OztrQkFBZSxVQUFDQSxTQUFEO0FBQUEsU0FBZ0I7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQyxVQUFNO0FBQUEsVUFBR0MsSUFBSCxRQUFHQSxJQUFIO0FBQUEsYUFBY0YsVUFBVUcsR0FBVixDQUFjLFlBQWQsRUFBNEIsRUFBRUMsUUFBUSxFQUFFRixVQUFGLEVBQVYsRUFBNUIsQ0FBZDtBQUFBLEtBTnVCO0FBTzdCRyxZQUFRLGdCQUFDQyxJQUFEO0FBQUEsYUFBVU4sVUFBVU8sSUFBVixDQUFlLFlBQWYsRUFBNkIsRUFBRUMsTUFBTUYsSUFBUixFQUE3QixDQUFWO0FBQUEsS0FQcUI7QUFRN0JHLFlBQVEsZ0JBQUNDLEVBQUQsRUFBS0osSUFBTDtBQUFBLGFBQWNOLFVBQVVXLEdBQVYsaUJBQTRCRCxFQUE1QixFQUFrQyxFQUFFRixNQUFNRixJQUFSLEVBQWxDLENBQWQ7QUFBQSxLQVJxQjtBQVM3Qk0sWUFBUSxnQkFBQ0YsRUFBRDtBQUFBLGFBQVFWLFVBQVVhLEdBQVYsaUJBQTRCSCxFQUE1QixDQUFSO0FBQUE7QUFUcUIsR0FBaEI7QUFBQSxDIiwiZmlsZSI6ImFwaS90b2RvLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
