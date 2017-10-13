'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (store) {
  return {
    path: 'search',
    getComponent: function getComponent(nextState, cb) {
      require.ensure([], function (require) {
        cb(null, require('../components/pages/search/SearchPage').default);
      });
    }
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy9zZWFyY2guanMiXSwibmFtZXMiOlsic3RvcmUiLCJwYXRoIiwiZ2V0Q29tcG9uZW50IiwibmV4dFN0YXRlIiwiY2IiLCJyZXF1aXJlIiwiZW5zdXJlIiwiZGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2tCQUFlLFVBQUNBLEtBQUQ7QUFBQSxTQUFZO0FBQ3pCQyxVQUFNLFFBRG1CO0FBRXpCQyxnQkFGeUIsd0JBRVpDLFNBRlksRUFFREMsRUFGQyxFQUVHO0FBQzFCQyxjQUFRQyxNQUFSLENBQWUsRUFBZixFQUFtQixVQUFDRCxPQUFELEVBQWE7QUFDOUJELFdBQUcsSUFBSCxFQUFTQyxRQUFRLHVDQUFSLEVBQWlERSxPQUExRDtBQUNELE9BRkQ7QUFHRDtBQU53QixHQUFaO0FBQUEsQyIsImZpbGUiOiJyb3V0ZXMvc2VhcmNoLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
