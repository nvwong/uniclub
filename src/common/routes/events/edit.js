export default (store) => ({
  path: 'edit',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../../components/pages/events/EditEventPage').default);
    });
  },
});
