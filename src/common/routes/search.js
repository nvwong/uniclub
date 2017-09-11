export default (store) => ({
  path: 'search',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../components/pages/search/SearchPage').default);
    });
  },
});
