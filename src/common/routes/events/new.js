export default (store) => ({
  path: 'new',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../../components/pages/events/NewEventPage').default);
    });
  },
});
