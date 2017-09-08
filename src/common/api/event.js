export default (apiEngine) => ({
  list: ({ page }) => apiEngine.get('/api/events', { params: { page } }),
  create: (oneEvent) => apiEngine.post('/api/events', { data: oneEvent }),
  update: (id, oneEvent) =>
                  apiEngine.put(`/api/events/${id}`, { data: oneEvent }),
  remove: (id) => apiEngine.del(`/api/events/${id}`),
  search: (queryString, tag) => apiEngine.get(
    '/api/events',
    { queryString: { queryString }, tag: { tag } }
  ),
});
