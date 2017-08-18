'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _FormNames$USER_REGIS;

var _FormNames = require('../../common/constants/FormNames');

var _FormNames2 = _interopRequireDefault(_FormNames);

var _handleError = require('../decorators/handleError');

var _User = require('../models/User');

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = (_FormNames$USER_REGIS = {}, _defineProperty(_FormNames$USER_REGIS, _FormNames2.default.USER_REGISTER, {
  email: function email(req, res) {
    _User2.default.findOne({
      'email.value': req.body.value
    }, (0, _handleError.handleDbError)(res)(function (user) {
      if (user) {
        res.json({
          isPassed: false,
          message: 'The email is already registered'
        });
      } else {
        res.json({
          isPassed: true
        });
      }
    }));
  }
}), _defineProperty(_FormNames$USER_REGIS, _FormNames2.default.USER_VERIFY_EMAIL, {
  email: function email(req, res) {
    _User2.default.findOne({
      'email.value': req.body.value
    }, (0, _handleError.handleDbError)(res)(function (user) {
      if (!user) {
        res.json({
          isPassed: false,
          message: 'This is an invalid account'
        });
      } else {
        res.json({
          isPassed: true
        });
      }
    }));
  }
}), _defineProperty(_FormNames$USER_REGIS, _FormNames2.default.USER_FORGET_PASSWORD, {
  email: function email(req, res) {
    _User2.default.findOne({
      'email.value': req.body.value
    }, (0, _handleError.handleDbError)(res)(function (user) {
      if (!user) {
        res.json({
          isPassed: false,
          message: 'This is an invalid account'
        });
      } else {
        res.json({
          isPassed: true
        });
      }
    }));
  }
}), _FormNames$USER_REGIS);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL2Zvcm1WYWxpZGF0aW9uLmpzIl0sIm5hbWVzIjpbIlVTRVJfUkVHSVNURVIiLCJlbWFpbCIsInJlcSIsInJlcyIsImZpbmRPbmUiLCJib2R5IiwidmFsdWUiLCJ1c2VyIiwianNvbiIsImlzUGFzc2VkIiwibWVzc2FnZSIsIlVTRVJfVkVSSUZZX0VNQUlMIiwiVVNFUl9GT1JHRVRfUEFTU1dPUkQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7c0ZBR0csb0JBQVVBLGEsRUFBZ0I7QUFDekJDLE9BRHlCLGlCQUNuQkMsR0FEbUIsRUFDZEMsR0FEYyxFQUNUO0FBQ2QsbUJBQUtDLE9BQUwsQ0FBYTtBQUNYLHFCQUFlRixJQUFJRyxJQUFKLENBQVNDO0FBRGIsS0FBYixFQUVHLGdDQUFjSCxHQUFkLEVBQW1CLFVBQUNJLElBQUQsRUFBVTtBQUM5QixVQUFJQSxJQUFKLEVBQVU7QUFDUkosWUFBSUssSUFBSixDQUFTO0FBQ1BDLG9CQUFVLEtBREg7QUFFUEMsbUJBQVM7QUFGRixTQUFUO0FBSUQsT0FMRCxNQUtPO0FBQ0xQLFlBQUlLLElBQUosQ0FBUztBQUNQQyxvQkFBVTtBQURILFNBQVQ7QUFHRDtBQUNGLEtBWEUsQ0FGSDtBQWNEO0FBaEJ3QixDLDBDQW1CMUIsb0JBQVVFLGlCLEVBQW9CO0FBQzdCVixPQUQ2QixpQkFDdkJDLEdBRHVCLEVBQ2xCQyxHQURrQixFQUNiO0FBQ2QsbUJBQUtDLE9BQUwsQ0FBYTtBQUNYLHFCQUFlRixJQUFJRyxJQUFKLENBQVNDO0FBRGIsS0FBYixFQUVHLGdDQUFjSCxHQUFkLEVBQW1CLFVBQUNJLElBQUQsRUFBVTtBQUM5QixVQUFJLENBQUNBLElBQUwsRUFBVztBQUNUSixZQUFJSyxJQUFKLENBQVM7QUFDUEMsb0JBQVUsS0FESDtBQUVQQyxtQkFBUztBQUZGLFNBQVQ7QUFJRCxPQUxELE1BS087QUFDTFAsWUFBSUssSUFBSixDQUFTO0FBQ1BDLG9CQUFVO0FBREgsU0FBVDtBQUdEO0FBQ0YsS0FYRSxDQUZIO0FBY0Q7QUFoQjRCLEMsMENBbUI5QixvQkFBVUcsb0IsRUFBdUI7QUFDaENYLE9BRGdDLGlCQUMxQkMsR0FEMEIsRUFDckJDLEdBRHFCLEVBQ2hCO0FBQ2QsbUJBQUtDLE9BQUwsQ0FBYTtBQUNYLHFCQUFlRixJQUFJRyxJQUFKLENBQVNDO0FBRGIsS0FBYixFQUVHLGdDQUFjSCxHQUFkLEVBQW1CLFVBQUNJLElBQUQsRUFBVTtBQUM5QixVQUFJLENBQUNBLElBQUwsRUFBVztBQUNUSixZQUFJSyxJQUFKLENBQVM7QUFDUEMsb0JBQVUsS0FESDtBQUVQQyxtQkFBUztBQUZGLFNBQVQ7QUFJRCxPQUxELE1BS087QUFDTFAsWUFBSUssSUFBSixDQUFTO0FBQ1BDLG9CQUFVO0FBREgsU0FBVDtBQUdEO0FBQ0YsS0FYRSxDQUZIO0FBY0Q7QUFoQitCLEMiLCJmaWxlIjoiY29udHJvbGxlcnMvZm9ybVZhbGlkYXRpb24uanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
