'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _handleError = require('../decorators/handleError');

var _handleError2 = _interopRequireDefault(_handleError);

var _Errors = require('../../common/constants/Errors');

var _Errors2 = _interopRequireDefault(_Errors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var authRequired = function authRequired(req, res, next) {
  _passport2.default.authenticate('jwt', { session: false }, (0, _handleError2.default)(res)(function (user, info) {
    (0, _handleError.handlePassportError)(res)(function (user) {
      if (!user) {
        res.pushError(_Errors2.default.USER_UNAUTHORIZED);
        return res.errors();
      }
      req.user = user;
      next();
    })(info, user);
  }))(req, res, next);
};

exports.default = authRequired;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pZGRsZXdhcmVzL2F1dGhSZXF1aXJlZC5qcyJdLCJuYW1lcyI6WyJhdXRoUmVxdWlyZWQiLCJyZXEiLCJyZXMiLCJuZXh0IiwiYXV0aGVudGljYXRlIiwic2Vzc2lvbiIsInVzZXIiLCJpbmZvIiwicHVzaEVycm9yIiwiVVNFUl9VTkFVVEhPUklaRUQiLCJlcnJvcnMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsZUFBZSxTQUFmQSxZQUFlLENBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFXQyxJQUFYLEVBQW9CO0FBQ3ZDLHFCQUFTQyxZQUFULENBQ0UsS0FERixFQUVFLEVBQUVDLFNBQVMsS0FBWCxFQUZGLEVBR0UsMkJBQVlILEdBQVosRUFBaUIsVUFBQ0ksSUFBRCxFQUFPQyxJQUFQLEVBQWdCO0FBQy9CLDBDQUFvQkwsR0FBcEIsRUFBeUIsVUFBQ0ksSUFBRCxFQUFVO0FBQ2pDLFVBQUksQ0FBQ0EsSUFBTCxFQUFXO0FBQ1RKLFlBQUlNLFNBQUosQ0FBYyxpQkFBT0MsaUJBQXJCO0FBQ0EsZUFBT1AsSUFBSVEsTUFBSixFQUFQO0FBQ0Q7QUFDRFQsVUFBSUssSUFBSixHQUFXQSxJQUFYO0FBQ0FIO0FBQ0QsS0FQRCxFQU9HSSxJQVBILEVBT1NELElBUFQ7QUFRRCxHQVRELENBSEYsRUFhRUwsR0FiRixFQWFPQyxHQWJQLEVBYVlDLElBYlo7QUFjRCxDQWZEOztrQkFpQmVILFkiLCJmaWxlIjoibWlkZGxld2FyZXMvYXV0aFJlcXVpcmVkLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
