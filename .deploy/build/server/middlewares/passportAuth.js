'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _handleError = require('../decorators/handleError');

var _handleError2 = _interopRequireDefault(_handleError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (strategyName) {
  return function (req, res, next) {
    return _passport2.default.authenticate(strategyName, {
      failureRedirect: '/user/login',
      session: false
    }, (0, _handleError2.default)(res)(function (user, info) {
      // mount user instance
      req.user = user;
      next();
    }))(req, res, next);
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pZGRsZXdhcmVzL3Bhc3Nwb3J0QXV0aC5qcyJdLCJuYW1lcyI6WyJzdHJhdGVneU5hbWUiLCJyZXEiLCJyZXMiLCJuZXh0IiwiYXV0aGVudGljYXRlIiwiZmFpbHVyZVJlZGlyZWN0Iiwic2Vzc2lvbiIsInVzZXIiLCJpbmZvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7a0JBRWUsVUFBQ0EsWUFBRDtBQUFBLFNBQWtCLFVBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFXQyxJQUFYO0FBQUEsV0FDL0IsbUJBQVNDLFlBQVQsQ0FBc0JKLFlBQXRCLEVBQW9DO0FBQ2xDSyx1QkFBaUIsYUFEaUI7QUFFbENDLGVBQVM7QUFGeUIsS0FBcEMsRUFHRywyQkFBWUosR0FBWixFQUFpQixVQUFDSyxJQUFELEVBQU9DLElBQVAsRUFBZ0I7QUFDbEM7QUFDQVAsVUFBSU0sSUFBSixHQUFXQSxJQUFYO0FBQ0FKO0FBQ0QsS0FKRSxDQUhILEVBT0lGLEdBUEosRUFPU0MsR0FQVCxFQU9jQyxJQVBkLENBRCtCO0FBQUEsR0FBbEI7QUFBQSxDIiwiZmlsZSI6Im1pZGRsZXdhcmVzL3Bhc3Nwb3J0QXV0aC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
