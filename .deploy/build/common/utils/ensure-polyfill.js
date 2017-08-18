'use strict';

// below is for preventing webpack warning message
// ref: <https://github.com/webpack/webpack/issues/1781>@yurydelendik
if (typeof module !== 'undefined' && module.require) {
  if (typeof require.ensure === 'undefined') {
    // ref: <https://github.com/webpack/webpack/issues/183>@snadn
    var proto = Object.getPrototypeOf(require);
    Object.defineProperties(proto, {
      ensure: {
        value: function ensure(modules, callback) {
          callback(this);
        },
        writable: false
      },
      include: {
        value: function include() {},
        writable: false
      }
    });
  }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL2Vuc3VyZS1wb2x5ZmlsbC5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJyZXF1aXJlIiwiZW5zdXJlIiwicHJvdG8iLCJPYmplY3QiLCJnZXRQcm90b3R5cGVPZiIsImRlZmluZVByb3BlcnRpZXMiLCJ2YWx1ZSIsIm1vZHVsZXMiLCJjYWxsYmFjayIsIndyaXRhYmxlIiwiaW5jbHVkZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0EsSUFBSSxPQUFPQSxNQUFQLEtBQWtCLFdBQWxCLElBQWlDQSxPQUFPQyxPQUE1QyxFQUFxRDtBQUNuRCxNQUFJLE9BQU9BLFFBQVFDLE1BQWYsS0FBMEIsV0FBOUIsRUFBMkM7QUFDekM7QUFDQSxRQUFJQyxRQUFRQyxPQUFPQyxjQUFQLENBQXNCSixPQUF0QixDQUFaO0FBQ0FHLFdBQU9FLGdCQUFQLENBQXdCSCxLQUF4QixFQUErQjtBQUM3QkQsY0FBUTtBQUNOSyxlQUFPLFNBQVNMLE1BQVQsQ0FBZ0JNLE9BQWhCLEVBQXlCQyxRQUF6QixFQUFtQztBQUN4Q0EsbUJBQVMsSUFBVDtBQUNELFNBSEs7QUFJTkMsa0JBQVU7QUFKSixPQURxQjtBQU83QkMsZUFBUztBQUNQSixlQUFPLFNBQVNJLE9BQVQsR0FBbUIsQ0FBRSxDQURyQjtBQUVQRCxrQkFBVTtBQUZIO0FBUG9CLEtBQS9CO0FBWUQ7QUFDRiIsImZpbGUiOiJ1dGlscy9lbnN1cmUtcG9seWZpbGwuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
