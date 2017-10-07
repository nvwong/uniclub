export default (apiEngine) => ({
  list: ({ page }) => apiEngine.get('/api/events', { params: { page } }),
  create: (oneEvent) => apiEngine.post('/api/events', { data: oneEvent }),
  update: (id, oneEvent) =>
                  apiEngine.put(`/api/events/${id}`, { data: oneEvent }),
  remove: (id) => apiEngine.del(`/api/events/${id}`),
  addParticipant: (id, participantId) => apiEngine.put(`/api/events/addParticipant/${id}`, { data: participantId }),
});
