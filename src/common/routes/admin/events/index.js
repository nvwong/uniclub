export default (store) => ({
  path: 'events',
  getIndexRoute(location, cb) {
    require.ensure([], (require) => {
      cb(null, {
        component:
          require('../../../components/pages/admin/events/ListPage').default,
      });
    });
  },
});
