export default (apiEngine) => ({
  // list: () => new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve(apiEngine.get('/api/todo'));
  //   }, 5000);
  // }),
  list: ({ page }) => apiEngine.get('/api/userlist', { params: { page } }),
  //create: (todo) => apiEngine.post('/api/userlist', { data: user }),
  //update: (id, todo) => apiEngine.put(`/api/userlist/${id}`, { data: user }),
  //remove: (id) => apiEngine.del(`/api/userlist/${id}`),
});
