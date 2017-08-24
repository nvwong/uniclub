export default (apiEngine) => ({
  // list: () => new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve(apiEngine.get('/api/todo'));
  //   }, 5000);
  // }),
  list: ({ page }) => apiEngine.get('/api/todos2', { params: { page } }),
  create: (todo2) => apiEngine.post('/api/todos2', { data: todo2 }),
  update: (id, todo2) => apiEngine.put(`/api/todos2/${id}`, { data: todo2 }),
  remove: (id) => apiEngine.del(`/api/todos2/${id}`),
});
