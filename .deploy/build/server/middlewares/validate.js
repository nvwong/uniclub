'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

var _Errors = require('../../common/constants/Errors');

var _Errors2 = _interopRequireDefault(_Errors);

var _server = require('../../../configs/project/server');

var _server2 = _interopRequireDefault(_server);

var _client = require('../../../configs/project/client');

var _client2 = _interopRequireDefault(_client);

var _validateErrorObject = require('../utils/validateErrorObject');

var _validateErrorObject2 = _interopRequireDefault(_validateErrorObject);

var _handleError = require('../decorators/handleError');

var _User = require('../models/User');

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  form: function form(formPath) {
    var onlyFields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    return function (req, res, next) {
      var _require = require('../../common/components/forms/' + formPath),
          validate = _require.validate;

      var errors = validate(_extends({}, req.body, req.files));

      if (onlyFields.length > 0) {
        var newErrors = {};
        onlyFields.forEach(function (field) {
          newErrors[field] = errors[field];
        });
        errors = newErrors;
      }

      if (!(0, _validateErrorObject2.default)(errors)) {
        res.pushError(_Errors2.default.INVALID_DATA, {
          errors: errors
        });
        return res.errors();
      }
      next();
    };
  },

  verifyUserNonce: function verifyUserNonce(nonceKey) {
    return function (req, res, next) {
      var _req$decodedPayload = req.decodedPayload,
          _id = _req$decodedPayload._id,
          nonce = _req$decodedPayload.nonce;

      _User2.default.findById(_id, (0, _handleError.handleDbError)(res)(function (user) {
        if (nonce !== user.nonce[nonceKey]) {
          return res.errors([_Errors2.default.TOKEN_REUSED]);
        }
        user.nonce[nonceKey] = -1;
        req.user = user;
        next();
      }));
    };
  },

  recaptcha: function recaptcha(req, res, next) {
    if (process.env.NODE_ENV === 'test' || !_client2.default.recaptcha) {
      return next();
    }
    _superagent2.default.post('https://www.google.com/recaptcha/api/siteverify').type('form').send({
      secret: _server2.default.recaptcha[process.env.NODE_ENV].secretKey,
      response: req.body.recaptcha
    }).end(function (err) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          body = _ref.body;

      if (err) {
        res.pushError(_Errors2.default.UNKNOWN_EXCEPTION, {
          meta: err
        });
        return res.errors();
      }
      if (!body.success) {
        res.pushError(_Errors2.default.INVALID_RECAPTCHA, {
          meta: body['error-codes']
        });
        return res.errors();
      }
      next();
    });
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pZGRsZXdhcmVzL3ZhbGlkYXRlLmpzIl0sIm5hbWVzIjpbImZvcm0iLCJmb3JtUGF0aCIsIm9ubHlGaWVsZHMiLCJyZXEiLCJyZXMiLCJuZXh0IiwicmVxdWlyZSIsInZhbGlkYXRlIiwiZXJyb3JzIiwiYm9keSIsImZpbGVzIiwibGVuZ3RoIiwibmV3RXJyb3JzIiwiZm9yRWFjaCIsImZpZWxkIiwicHVzaEVycm9yIiwiSU5WQUxJRF9EQVRBIiwidmVyaWZ5VXNlck5vbmNlIiwibm9uY2VLZXkiLCJkZWNvZGVkUGF5bG9hZCIsIl9pZCIsIm5vbmNlIiwiZmluZEJ5SWQiLCJ1c2VyIiwiVE9LRU5fUkVVU0VEIiwicmVjYXB0Y2hhIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwicG9zdCIsInR5cGUiLCJzZW5kIiwic2VjcmV0Iiwic2VjcmV0S2V5IiwicmVzcG9uc2UiLCJlbmQiLCJlcnIiLCJVTktOT1dOX0VYQ0VQVElPTiIsIm1ldGEiLCJzdWNjZXNzIiwiSU5WQUxJRF9SRUNBUFRDSEEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7a0JBRWU7QUFDYkEsUUFBTSxjQUFDQyxRQUFEO0FBQUEsUUFBV0MsVUFBWCx1RUFBd0IsRUFBeEI7QUFBQSxXQUErQixVQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBV0MsSUFBWCxFQUFvQjtBQUFBLHFCQUNwQ0MsMkNBQXlDTCxRQUF6QyxDQURvQztBQUFBLFVBQ2pETSxRQURpRCxZQUNqREEsUUFEaUQ7O0FBRXZELFVBQUlDLFNBQVNELHNCQUNSSixJQUFJTSxJQURJLEVBRVJOLElBQUlPLEtBRkksRUFBYjs7QUFLQSxVQUFJUixXQUFXUyxNQUFYLEdBQW9CLENBQXhCLEVBQTJCO0FBQ3pCLFlBQUlDLFlBQVksRUFBaEI7QUFDQVYsbUJBQVdXLE9BQVgsQ0FBbUIsVUFBQ0MsS0FBRCxFQUFXO0FBQzVCRixvQkFBVUUsS0FBVixJQUFtQk4sT0FBT00sS0FBUCxDQUFuQjtBQUNELFNBRkQ7QUFHQU4saUJBQVNJLFNBQVQ7QUFDRDs7QUFFRCxVQUFJLENBQUMsbUNBQW9CSixNQUFwQixDQUFMLEVBQWtDO0FBQ2hDSixZQUFJVyxTQUFKLENBQWMsaUJBQU9DLFlBQXJCLEVBQW1DO0FBQ2pDUjtBQURpQyxTQUFuQztBQUdBLGVBQU9KLElBQUlJLE1BQUosRUFBUDtBQUNEO0FBQ0RIO0FBQ0QsS0F0Qks7QUFBQSxHQURPOztBQXlCYlksbUJBQWlCLHlCQUFDQyxRQUFEO0FBQUEsV0FBYyxVQUFDZixHQUFELEVBQU1DLEdBQU4sRUFBV0MsSUFBWCxFQUFvQjtBQUFBLGdDQUM1QkYsSUFBSWdCLGNBRHdCO0FBQUEsVUFDM0NDLEdBRDJDLHVCQUMzQ0EsR0FEMkM7QUFBQSxVQUN0Q0MsS0FEc0MsdUJBQ3RDQSxLQURzQzs7QUFFakQscUJBQUtDLFFBQUwsQ0FBY0YsR0FBZCxFQUFtQixnQ0FBY2hCLEdBQWQsRUFBbUIsVUFBQ21CLElBQUQsRUFBVTtBQUM5QyxZQUFJRixVQUFVRSxLQUFLRixLQUFMLENBQVdILFFBQVgsQ0FBZCxFQUFvQztBQUNsQyxpQkFBT2QsSUFBSUksTUFBSixDQUFXLENBQUMsaUJBQU9nQixZQUFSLENBQVgsQ0FBUDtBQUNEO0FBQ0RELGFBQUtGLEtBQUwsQ0FBV0gsUUFBWCxJQUF1QixDQUFDLENBQXhCO0FBQ0FmLFlBQUlvQixJQUFKLEdBQVdBLElBQVg7QUFDQWxCO0FBQ0QsT0FQa0IsQ0FBbkI7QUFRRCxLQVZnQjtBQUFBLEdBekJKOztBQXFDYm9CLFdBckNhLHFCQXFDSHRCLEdBckNHLEVBcUNFQyxHQXJDRixFQXFDT0MsSUFyQ1AsRUFxQ2E7QUFDeEIsUUFBSXFCLFFBQVFDLEdBQVIsQ0FBWUMsUUFBWixLQUF5QixNQUF6QixJQUFtQyxDQUFDLGlCQUFjSCxTQUF0RCxFQUFpRTtBQUMvRCxhQUFPcEIsTUFBUDtBQUNEO0FBQ0QseUJBQ0d3QixJQURILENBQ1EsaURBRFIsRUFFR0MsSUFGSCxDQUVRLE1BRlIsRUFHR0MsSUFISCxDQUdRO0FBQ0pDLGNBQVEsaUJBQWNQLFNBQWQsQ0FBd0JDLFFBQVFDLEdBQVIsQ0FBWUMsUUFBcEMsRUFBOENLLFNBRGxEO0FBRUpDLGdCQUFVL0IsSUFBSU0sSUFBSixDQUFTZ0I7QUFGZixLQUhSLEVBT0dVLEdBUEgsQ0FPTyxVQUFDQyxHQUFELEVBQXdCO0FBQUEscUZBQVAsRUFBTztBQUFBLFVBQWhCM0IsSUFBZ0IsUUFBaEJBLElBQWdCOztBQUMzQixVQUFJMkIsR0FBSixFQUFTO0FBQ1BoQyxZQUFJVyxTQUFKLENBQWMsaUJBQU9zQixpQkFBckIsRUFBd0M7QUFDdENDLGdCQUFNRjtBQURnQyxTQUF4QztBQUdBLGVBQU9oQyxJQUFJSSxNQUFKLEVBQVA7QUFDRDtBQUNELFVBQUksQ0FBQ0MsS0FBSzhCLE9BQVYsRUFBbUI7QUFDakJuQyxZQUFJVyxTQUFKLENBQWMsaUJBQU95QixpQkFBckIsRUFBd0M7QUFDdENGLGdCQUFNN0IsS0FBSyxhQUFMO0FBRGdDLFNBQXhDO0FBR0EsZUFBT0wsSUFBSUksTUFBSixFQUFQO0FBQ0Q7QUFDREg7QUFDRCxLQXJCSDtBQXNCRDtBQS9EWSxDIiwiZmlsZSI6Im1pZGRsZXdhcmVzL3ZhbGlkYXRlLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
