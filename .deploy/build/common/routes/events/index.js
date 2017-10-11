'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (store) {
  return {
    path: 'events',
    getChildRoutes: function getChildRoutes(location, cb) {
      require.ensure([], function (require) {
        cb(null, [require('./all').default(store), require('./new').default(store), require('./edit').default(store)]);
      });
    }
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy9ldmVudHMvaW5kZXguanMiXSwibmFtZXMiOlsic3RvcmUiLCJwYXRoIiwiZ2V0Q2hpbGRSb3V0ZXMiLCJsb2NhdGlvbiIsImNiIiwicmVxdWlyZSIsImVuc3VyZSIsImRlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7OztrQkFBZSxVQUFDQSxLQUFEO0FBQUEsU0FBWTtBQUN6QkMsVUFBTSxRQURtQjtBQUV6QkMsa0JBRnlCLDBCQUVWQyxRQUZVLEVBRUFDLEVBRkEsRUFFSTtBQUMzQkMsY0FBUUMsTUFBUixDQUFlLEVBQWYsRUFBbUIsVUFBQ0QsT0FBRCxFQUFhO0FBQzlCRCxXQUFHLElBQUgsRUFBUyxDQUNQQyxRQUFRLE9BQVIsRUFBaUJFLE9BQWpCLENBQXlCUCxLQUF6QixDQURPLEVBRVBLLFFBQVEsT0FBUixFQUFpQkUsT0FBakIsQ0FBeUJQLEtBQXpCLENBRk8sRUFHUEssUUFBUSxRQUFSLEVBQWtCRSxPQUFsQixDQUEwQlAsS0FBMUIsQ0FITyxDQUFUO0FBS0QsT0FORDtBQU9EO0FBVndCLEdBQVo7QUFBQSxDIiwiZmlsZSI6InJvdXRlcy9ldmVudHMvaW5kZXguanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
