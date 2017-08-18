'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (store) {
  return {
    path: 'me',
    getComponent: function getComponent(nextState, cb) {
      require.ensure([], function (require) {
        cb(null, require('../../components/pages/user/ShowSelfPage').default);
      });
    },

    onEnter: require('../../utils/authRequired').default(store)
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy91c2VyL21lLmpzIl0sIm5hbWVzIjpbInN0b3JlIiwicGF0aCIsImdldENvbXBvbmVudCIsIm5leHRTdGF0ZSIsImNiIiwicmVxdWlyZSIsImVuc3VyZSIsImRlZmF1bHQiLCJvbkVudGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7a0JBQWUsVUFBQ0EsS0FBRDtBQUFBLFNBQVk7QUFDekJDLFVBQU0sSUFEbUI7QUFFekJDLGdCQUZ5Qix3QkFFWkMsU0FGWSxFQUVEQyxFQUZDLEVBRUc7QUFDMUJDLGNBQVFDLE1BQVIsQ0FBZSxFQUFmLEVBQW1CLFVBQUNELE9BQUQsRUFBYTtBQUM5QkQsV0FBRyxJQUFILEVBQVNDLFFBQVEsMENBQVIsRUFBb0RFLE9BQTdEO0FBQ0QsT0FGRDtBQUdELEtBTndCOztBQU96QkMsYUFBU0gsUUFBUSwwQkFBUixFQUFvQ0UsT0FBcEMsQ0FBNENQLEtBQTVDO0FBUGdCLEdBQVo7QUFBQSxDIiwiZmlsZSI6InJvdXRlcy91c2VyL21lLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
