'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Roles = require('../../constants/Roles');

var _Roles2 = _interopRequireDefault(_Roles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (store) {
  return {
    path: '/edit',
    getComponent: function getComponent(nextState, cb) {
      require.ensure([], function (require) {
        cb(null, require('../../components/pages/user/adminEditPage').default);
      });
    },

    onEnter: require('../../utils/roleRequired').default(store)(_Roles2.default.ADMIN)
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy91c2VyL2FkbWluRWRpdC5qcyJdLCJuYW1lcyI6WyJzdG9yZSIsInBhdGgiLCJnZXRDb21wb25lbnQiLCJuZXh0U3RhdGUiLCJjYiIsInJlcXVpcmUiLCJlbnN1cmUiLCJkZWZhdWx0Iiwib25FbnRlciIsIkFETUlOIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O2tCQUVlLFVBQUNBLEtBQUQ7QUFBQSxTQUFZO0FBQ3pCQyxVQUFNLE9BRG1CO0FBRXpCQyxnQkFGeUIsd0JBRVpDLFNBRlksRUFFREMsRUFGQyxFQUVHO0FBQzFCQyxjQUFRQyxNQUFSLENBQWUsRUFBZixFQUFtQixVQUFDRCxPQUFELEVBQWE7QUFDOUJELFdBQUcsSUFBSCxFQUFTQyxRQUFRLDJDQUFSLEVBQXFERSxPQUE5RDtBQUNELE9BRkQ7QUFHRCxLQU53Qjs7QUFPekJDLGFBQVNILFFBQVEsMEJBQVIsRUFBb0NFLE9BQXBDLENBQTRDUCxLQUE1QyxFQUFtRCxnQkFBTVMsS0FBekQ7QUFQZ0IsR0FBWjtBQUFBLEMiLCJmaWxlIjoicm91dGVzL3VzZXIvYWRtaW5FZGl0LmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
