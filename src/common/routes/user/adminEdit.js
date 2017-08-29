import Roles from '../../constants/Roles';

export default (store) => ({
  path: '/edit',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../../components/pages/user/adminEditPage').default);
    });
  },
  onEnter: require('../../utils/roleRequired').default(store)(Roles.ADMIN),
});
