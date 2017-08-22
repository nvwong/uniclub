export default (store) => ({
  path: 'userlist',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../components/pages/userlist/ListPage').default);
    });
  },
});
