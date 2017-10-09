'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (apiEngine) {
  return {
    list: function list(_ref) {
      var page = _ref.page;
      return apiEngine.get('/api/events', { params: { page: page } });
    },
    create: function create(oneEvent) {
      return apiEngine.post('/api/events', { data: oneEvent });
    },
    update: function update(id, oneEvent) {
      return apiEngine.put('/api/events/' + id, { data: oneEvent });
    },
    remove: function remove(id) {
      return apiEngine.del('/api/events/' + id);
    },
    search: function search(queryString, tag) {
      return apiEngine.get('/api/events', { queryString: { queryString: queryString }, tag: { tag: tag } });
    }
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9ldmVudC5qcyJdLCJuYW1lcyI6WyJhcGlFbmdpbmUiLCJsaXN0IiwicGFnZSIsImdldCIsInBhcmFtcyIsImNyZWF0ZSIsIm9uZUV2ZW50IiwicG9zdCIsImRhdGEiLCJ1cGRhdGUiLCJpZCIsInB1dCIsInJlbW92ZSIsImRlbCIsInNlYXJjaCIsInF1ZXJ5U3RyaW5nIiwidGFnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7a0JBQWUsVUFBQ0EsU0FBRDtBQUFBLFNBQWdCO0FBQzdCQyxVQUFNO0FBQUEsVUFBR0MsSUFBSCxRQUFHQSxJQUFIO0FBQUEsYUFBY0YsVUFBVUcsR0FBVixDQUFjLGFBQWQsRUFBNkIsRUFBRUMsUUFBUSxFQUFFRixVQUFGLEVBQVYsRUFBN0IsQ0FBZDtBQUFBLEtBRHVCO0FBRTdCRyxZQUFRLGdCQUFDQyxRQUFEO0FBQUEsYUFBY04sVUFBVU8sSUFBVixDQUFlLGFBQWYsRUFBOEIsRUFBRUMsTUFBTUYsUUFBUixFQUE5QixDQUFkO0FBQUEsS0FGcUI7QUFHN0JHLFlBQVEsZ0JBQUNDLEVBQUQsRUFBS0osUUFBTDtBQUFBLGFBQ1FOLFVBQVVXLEdBQVYsa0JBQTZCRCxFQUE3QixFQUFtQyxFQUFFRixNQUFNRixRQUFSLEVBQW5DLENBRFI7QUFBQSxLQUhxQjtBQUs3Qk0sWUFBUSxnQkFBQ0YsRUFBRDtBQUFBLGFBQVFWLFVBQVVhLEdBQVYsa0JBQTZCSCxFQUE3QixDQUFSO0FBQUEsS0FMcUI7QUFNN0JJLFlBQVEsZ0JBQUNDLFdBQUQsRUFBY0MsR0FBZDtBQUFBLGFBQXNCaEIsVUFBVUcsR0FBVixDQUM1QixhQUQ0QixFQUU1QixFQUFFWSxhQUFhLEVBQUVBLHdCQUFGLEVBQWYsRUFBZ0NDLEtBQUssRUFBRUEsUUFBRixFQUFyQyxFQUY0QixDQUF0QjtBQUFBO0FBTnFCLEdBQWhCO0FBQUEsQyIsImZpbGUiOiJhcGkvZXZlbnQuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
