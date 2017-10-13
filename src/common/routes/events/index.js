export default (store) => ({
  path: 'events',
  getChildRoutes(location, cb) {
    require.ensure([], (require) => {
      cb(null, [
        require('./all').default(store),
        require('./new').default(store),
        require('./edit').default(store),
      ]);
    });
  },
});
