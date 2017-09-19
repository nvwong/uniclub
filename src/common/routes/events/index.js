export default (store) => ({
  path: 'events',
  getChildRoutes(location, cb) {
    require.ensure([], (require) => {
      cb(null, [
        require('./list').default(store),
        require('./new').default(store),
      ]);
    });
  },
});
