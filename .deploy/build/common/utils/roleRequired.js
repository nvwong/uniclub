'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (store) {
  return function (requiredRoles) {
    return function (nextState, replace) {
      var user = store.getState().cookies.user;

      user = user || {};

      if (!(requiredRoles instanceof Array && requiredRoles.indexOf(user.role) >= 0 || user.role === requiredRoles)) {
        replace({
          pathname: '/'
        });
      }
    };
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL3JvbGVSZXF1aXJlZC5qcyJdLCJuYW1lcyI6WyJzdG9yZSIsInJlcXVpcmVkUm9sZXMiLCJuZXh0U3RhdGUiLCJyZXBsYWNlIiwidXNlciIsImdldFN0YXRlIiwiY29va2llcyIsIkFycmF5IiwiaW5kZXhPZiIsInJvbGUiLCJwYXRobmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2tCQUFlLFVBQUNBLEtBQUQ7QUFBQSxTQUFXLFVBQUNDLGFBQUQ7QUFBQSxXQUFtQixVQUFDQyxTQUFELEVBQVlDLE9BQVosRUFBd0I7QUFBQSxVQUM3REMsSUFENkQsR0FDcERKLE1BQU1LLFFBQU4sR0FBaUJDLE9BRG1DLENBQzdERixJQUQ2RDs7QUFFbkVBLGFBQU9BLFFBQVEsRUFBZjs7QUFFQSxVQUFJLEVBQ0ZILHlCQUF5Qk0sS0FBekIsSUFDQU4sY0FBY08sT0FBZCxDQUFzQkosS0FBS0ssSUFBM0IsS0FBb0MsQ0FGaEMsSUFJSkwsS0FBS0ssSUFBTCxLQUFjUixhQUpaLENBQUosRUFLSTtBQUNGRSxnQkFBUTtBQUNOTyxvQkFBVTtBQURKLFNBQVI7QUFHRDtBQUNGLEtBZHlCO0FBQUEsR0FBWDtBQUFBLEMiLCJmaWxlIjoidXRpbHMvcm9sZVJlcXVpcmVkLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
