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
      return apiEngine.get('/api/todos2', { params: { page: page } });
    },
    create: function create(todo2) {
      return apiEngine.post('/api/todos2', { data: todo2 });
    },
    update: function update(id, todo2) {
      return apiEngine.put('/api/todos2/' + id, { data: todo2 });
    },
    remove: function remove(id) {
      return apiEngine.del('/api/todos2/' + id);
    }
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS90b2RvMi5qcyJdLCJuYW1lcyI6WyJhcGlFbmdpbmUiLCJsaXN0IiwicGFnZSIsImdldCIsInBhcmFtcyIsImNyZWF0ZSIsInRvZG8yIiwicG9zdCIsImRhdGEiLCJ1cGRhdGUiLCJpZCIsInB1dCIsInJlbW92ZSIsImRlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2tCQUFlLFVBQUNBLFNBQUQ7QUFBQSxTQUFnQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FDLFVBQU07QUFBQSxVQUFHQyxJQUFILFFBQUdBLElBQUg7QUFBQSxhQUFjRixVQUFVRyxHQUFWLENBQWMsYUFBZCxFQUE2QixFQUFFQyxRQUFRLEVBQUVGLFVBQUYsRUFBVixFQUE3QixDQUFkO0FBQUEsS0FOdUI7QUFPN0JHLFlBQVEsZ0JBQUNDLEtBQUQ7QUFBQSxhQUFXTixVQUFVTyxJQUFWLENBQWUsYUFBZixFQUE4QixFQUFFQyxNQUFNRixLQUFSLEVBQTlCLENBQVg7QUFBQSxLQVBxQjtBQVE3QkcsWUFBUSxnQkFBQ0MsRUFBRCxFQUFLSixLQUFMO0FBQUEsYUFBZU4sVUFBVVcsR0FBVixrQkFBNkJELEVBQTdCLEVBQW1DLEVBQUVGLE1BQU1GLEtBQVIsRUFBbkMsQ0FBZjtBQUFBLEtBUnFCO0FBUzdCTSxZQUFRLGdCQUFDRixFQUFEO0FBQUEsYUFBUVYsVUFBVWEsR0FBVixrQkFBNkJILEVBQTdCLENBQVI7QUFBQTtBQVRxQixHQUFoQjtBQUFBLEMiLCJmaWxlIjoiYXBpL3RvZG8yLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
