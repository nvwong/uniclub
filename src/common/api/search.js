export default (apiEngine) => ({
  list: (value, field) => apiEngine.get('api/search', { params: { value: value, field: field } }),
});
