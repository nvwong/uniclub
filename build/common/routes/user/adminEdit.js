'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Roles = require('../../constants/Roles');

var _Roles2 = _interopRequireDefault(_Roles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (store) {
  return {
    path: ':username/edit',
    getComponent: function getComponent(nextState, cb) {
      require.ensure([], function (require) {
        cb(null, require('../../components/pages/user/adminEditPage').default);
      });
    },

    onEnter: require('../../utils/roleRequired').default(store)(_Roles2.default.ADMIN)
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy91c2VyL2FkbWluRWRpdC5qcyJdLCJuYW1lcyI6WyJzdG9yZSIsInBhdGgiLCJnZXRDb21wb25lbnQiLCJuZXh0U3RhdGUiLCJjYiIsInJlcXVpcmUiLCJlbnN1cmUiLCJkZWZhdWx0Iiwib25FbnRlciIsIkFETUlOIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O2tCQUVlLFVBQUNBLEtBQUQ7QUFBQSxTQUFZO0FBQ3pCQyxVQUFNLGdCQURtQjtBQUV6QkMsZ0JBRnlCLHdCQUVaQyxTQUZZLEVBRURDLEVBRkMsRUFFRztBQUMxQkMsY0FBUUMsTUFBUixDQUFlLEVBQWYsRUFBbUIsVUFBQ0QsT0FBRCxFQUFhO0FBQzlCRCxXQUFHLElBQUgsRUFBU0MsUUFBUSwyQ0FBUixFQUFxREUsT0FBOUQ7QUFDRCxPQUZEO0FBR0QsS0FOd0I7O0FBT3pCQyxhQUFTSCxRQUFRLDBCQUFSLEVBQW9DRSxPQUFwQyxDQUE0Q1AsS0FBNUMsRUFBbUQsZ0JBQU1TLEtBQXpEO0FBUGdCLEdBQVo7QUFBQSxDIiwiZmlsZSI6InJvdXRlcy91c2VyL2FkbWluRWRpdC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
