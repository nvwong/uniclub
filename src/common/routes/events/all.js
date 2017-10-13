export default (store) => ({
  path: 'all',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../../components/pages/events/EventList').default);
    });
  },
});
