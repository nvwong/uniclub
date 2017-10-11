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
    addParticipant: function addParticipant(id, participantId) {
      return apiEngine.put('/api/events/addParticipant/' + id, { data: participantId });
    }
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9ldmVudC5qcyJdLCJuYW1lcyI6WyJhcGlFbmdpbmUiLCJsaXN0IiwicGFnZSIsImdldCIsInBhcmFtcyIsImNyZWF0ZSIsIm9uZUV2ZW50IiwicG9zdCIsImRhdGEiLCJ1cGRhdGUiLCJpZCIsInB1dCIsInJlbW92ZSIsImRlbCIsImFkZFBhcnRpY2lwYW50IiwicGFydGljaXBhbnRJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2tCQUFlLFVBQUNBLFNBQUQ7QUFBQSxTQUFnQjtBQUM3QkMsVUFBTTtBQUFBLFVBQUdDLElBQUgsUUFBR0EsSUFBSDtBQUFBLGFBQWNGLFVBQVVHLEdBQVYsQ0FBYyxhQUFkLEVBQTZCLEVBQUVDLFFBQVEsRUFBRUYsVUFBRixFQUFWLEVBQTdCLENBQWQ7QUFBQSxLQUR1QjtBQUU3QkcsWUFBUSxnQkFBQ0MsUUFBRDtBQUFBLGFBQWNOLFVBQVVPLElBQVYsQ0FBZSxhQUFmLEVBQThCLEVBQUVDLE1BQU1GLFFBQVIsRUFBOUIsQ0FBZDtBQUFBLEtBRnFCO0FBRzdCRyxZQUFRLGdCQUFDQyxFQUFELEVBQUtKLFFBQUw7QUFBQSxhQUNRTixVQUFVVyxHQUFWLGtCQUE2QkQsRUFBN0IsRUFBbUMsRUFBRUYsTUFBTUYsUUFBUixFQUFuQyxDQURSO0FBQUEsS0FIcUI7QUFLN0JNLFlBQVEsZ0JBQUNGLEVBQUQ7QUFBQSxhQUFRVixVQUFVYSxHQUFWLGtCQUE2QkgsRUFBN0IsQ0FBUjtBQUFBLEtBTHFCO0FBTTdCSSxvQkFBZ0Isd0JBQUNKLEVBQUQsRUFBS0ssYUFBTDtBQUFBLGFBQXVCZixVQUFVVyxHQUFWLGlDQUE0Q0QsRUFBNUMsRUFBa0QsRUFBRUYsTUFBTU8sYUFBUixFQUFsRCxDQUF2QjtBQUFBO0FBTmEsR0FBaEI7QUFBQSxDIiwiZmlsZSI6ImFwaS9ldmVudC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
