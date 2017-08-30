export default (store) => ({
  path: 'events',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../components/pages/events/EventList').default);
    });
  },
});
