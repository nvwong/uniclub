'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (store) {
  return {
    path: 'events',
    getIndexRoute: function getIndexRoute(location, cb) {
      require.ensure([], function (require) {
        cb(null, {
          component: require('../../../components/pages/admin/events/ListPage').default
        });
      });
    }
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy9hZG1pbi9ldmVudHMvaW5kZXguanMiXSwibmFtZXMiOlsic3RvcmUiLCJwYXRoIiwiZ2V0SW5kZXhSb3V0ZSIsImxvY2F0aW9uIiwiY2IiLCJyZXF1aXJlIiwiZW5zdXJlIiwiY29tcG9uZW50IiwiZGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2tCQUFlLFVBQUNBLEtBQUQ7QUFBQSxTQUFZO0FBQ3pCQyxVQUFNLFFBRG1CO0FBRXpCQyxpQkFGeUIseUJBRVhDLFFBRlcsRUFFREMsRUFGQyxFQUVHO0FBQzFCQyxjQUFRQyxNQUFSLENBQWUsRUFBZixFQUFtQixVQUFDRCxPQUFELEVBQWE7QUFDOUJELFdBQUcsSUFBSCxFQUFTO0FBQ1BHLHFCQUNFRixRQUFRLGlEQUFSLEVBQTJERztBQUZ0RCxTQUFUO0FBSUQsT0FMRDtBQU1EO0FBVHdCLEdBQVo7QUFBQSxDIiwiZmlsZSI6InJvdXRlcy9hZG1pbi9ldmVudHMvaW5kZXguanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
