'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Errors = require('../../common/constants/Errors');

var _Errors2 = _interopRequireDefault(_Errors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var roleRequired = function roleRequired(requiredRoles) {
  return function (req, res, next) {
    if (requiredRoles instanceof Array && requiredRoles.indexOf(req.user.role) >= 0 || req.user.role === requiredRoles) {
      next();
    } else {
      return res.errors([_Errors2.default.PERMISSION_DENIED]);
    }
  };
};

exports.default = roleRequired;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pZGRsZXdhcmVzL3JvbGVSZXF1aXJlZC5qcyJdLCJuYW1lcyI6WyJyb2xlUmVxdWlyZWQiLCJyZXF1aXJlZFJvbGVzIiwicmVxIiwicmVzIiwibmV4dCIsIkFycmF5IiwiaW5kZXhPZiIsInVzZXIiLCJyb2xlIiwiZXJyb3JzIiwiUEVSTUlTU0lPTl9ERU5JRUQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7QUFFQSxJQUFNQSxlQUFlLFNBQWZBLFlBQWUsQ0FBQ0MsYUFBRDtBQUFBLFNBQW1CLFVBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFXQyxJQUFYLEVBQW9CO0FBQzFELFFBQ0VILHlCQUF5QkksS0FBekIsSUFDQUosY0FBY0ssT0FBZCxDQUFzQkosSUFBSUssSUFBSixDQUFTQyxJQUEvQixLQUF3QyxDQUZ0QyxJQUlGTixJQUFJSyxJQUFKLENBQVNDLElBQVQsS0FBa0JQLGFBSnBCLEVBS0c7QUFDREc7QUFDRCxLQVBELE1BT087QUFDTCxhQUFPRCxJQUFJTSxNQUFKLENBQVcsQ0FBQyxpQkFBT0MsaUJBQVIsQ0FBWCxDQUFQO0FBQ0Q7QUFDRixHQVhvQjtBQUFBLENBQXJCOztrQkFhZVYsWSIsImZpbGUiOiJtaWRkbGV3YXJlcy9yb2xlUmVxdWlyZWQuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
