'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (store) {
  return {
    path: 'me/edit',
    getComponent: function getComponent(nextState, cb) {
      require.ensure([], function (require) {
        cb(null, require('../../components/pages/user/EditPage').default);
      });
    },

    onEnter: require('../../utils/authRequired').default(store)
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy91c2VyL2VkaXQuanMiXSwibmFtZXMiOlsic3RvcmUiLCJwYXRoIiwiZ2V0Q29tcG9uZW50IiwibmV4dFN0YXRlIiwiY2IiLCJyZXF1aXJlIiwiZW5zdXJlIiwiZGVmYXVsdCIsIm9uRW50ZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztrQkFBZSxVQUFDQSxLQUFEO0FBQUEsU0FBWTtBQUN6QkMsVUFBTSxTQURtQjtBQUV6QkMsZ0JBRnlCLHdCQUVaQyxTQUZZLEVBRURDLEVBRkMsRUFFRztBQUMxQkMsY0FBUUMsTUFBUixDQUFlLEVBQWYsRUFBbUIsVUFBQ0QsT0FBRCxFQUFhO0FBQzlCRCxXQUFHLElBQUgsRUFBU0MsUUFBUSxzQ0FBUixFQUFnREUsT0FBekQ7QUFDRCxPQUZEO0FBR0QsS0FOd0I7O0FBT3pCQyxhQUFTSCxRQUFRLDBCQUFSLEVBQW9DRSxPQUFwQyxDQUE0Q1AsS0FBNUM7QUFQZ0IsR0FBWjtBQUFBLEMiLCJmaWxlIjoicm91dGVzL3VzZXIvZWRpdC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
