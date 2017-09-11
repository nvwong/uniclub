export default (apiEngine) => ({
  list: ({ page }) => apiEngine.get('/api/search', { params: { page } }),
});
