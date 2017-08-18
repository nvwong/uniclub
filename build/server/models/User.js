'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _server = require('../../../configs/project/server');

var _server2 = _interopRequireDefault(_server);

var _Roles = require('../../common/constants/Roles');

var _Roles2 = _interopRequireDefault(_Roles);

var _paginate = require('./plugins/paginate');

var _paginate2 = _interopRequireDefault(_paginate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hashPassword = function hashPassword() {
  var rawPassword = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var recursiveLevel = 5;
  while (recursiveLevel) {
    rawPassword = _crypto2.default.createHash('md5').update(rawPassword).digest('hex');
    recursiveLevel -= 1;
  }
  return rawPassword;
};

var UserSchema = new _mongoose2.default.Schema({
  name: String,
  email: {
    value: {
      type: String,
      required: true
    },
    isVerified: {
      type: Boolean,
      default: false
    },
    verifiedAt: Date
  },
  password: {
    type: String,
    // there is no password for a social account
    required: false,
    set: hashPassword
  },
  role: {
    type: String,
    enum: Object.keys(_Roles2.default).map(function (r) {
      return _Roles2.default[r];
    }),
    default: _Roles2.default.USER
  },
  avatarURL: {
    type: String,
    default: '/img/default-avatar.png'
  },
  social: {
    profile: {
      facebook: Object,
      linkedin: Object
    }
  },
  nonce: {
    verifyEmail: Number,
    resetPassword: Number
  },
  lastLoggedInAt: Date
}, {
  versionKey: false,
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
});

UserSchema.plugin(_paginate2.default);

UserSchema.methods.auth = function (password, cb) {
  var isAuthenticated = this.password === hashPassword(password);
  cb(null, isAuthenticated);
};

UserSchema.methods.toVerifyEmailToken = function (cb) {
  var user = {
    _id: this._id,
    nonce: this.nonce.verifyEmail
  };
  var token = _jsonwebtoken2.default.sign(user, _server2.default.jwt.verifyEmail.secret, {
    expiresIn: _server2.default.jwt.verifyEmail.expiresIn
  });
  return token;
};

UserSchema.methods.toResetPasswordToken = function (cb) {
  var user = {
    _id: this._id,
    nonce: this.nonce.resetPassword
  };
  var token = _jsonwebtoken2.default.sign(user, _server2.default.jwt.resetPassword.secret, {
    expiresIn: _server2.default.jwt.resetPassword.expiresIn
  });
  return token;
};

UserSchema.methods.toAuthenticationToken = function (cb) {
  var user = {
    _id: this._id,
    name: this.name,
    email: this.email
  };
  var token = _jsonwebtoken2.default.sign(user, _server2.default.jwt.authentication.secret, {
    expiresIn: _server2.default.jwt.authentication.expiresIn
  });
  return token;
};

UserSchema.methods.toJSON = function () {
  var obj = this.toObject();
  delete obj.password;
  return obj;
};

var User = _mongoose2.default.model('User', UserSchema);
exports.default = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9Vc2VyLmpzIl0sIm5hbWVzIjpbImhhc2hQYXNzd29yZCIsInJhd1Bhc3N3b3JkIiwicmVjdXJzaXZlTGV2ZWwiLCJjcmVhdGVIYXNoIiwidXBkYXRlIiwiZGlnZXN0IiwiVXNlclNjaGVtYSIsIlNjaGVtYSIsIm5hbWUiLCJTdHJpbmciLCJlbWFpbCIsInZhbHVlIiwidHlwZSIsInJlcXVpcmVkIiwiaXNWZXJpZmllZCIsIkJvb2xlYW4iLCJkZWZhdWx0IiwidmVyaWZpZWRBdCIsIkRhdGUiLCJwYXNzd29yZCIsInNldCIsInJvbGUiLCJlbnVtIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsInIiLCJVU0VSIiwiYXZhdGFyVVJMIiwic29jaWFsIiwicHJvZmlsZSIsImZhY2Vib29rIiwibGlua2VkaW4iLCJub25jZSIsInZlcmlmeUVtYWlsIiwiTnVtYmVyIiwicmVzZXRQYXNzd29yZCIsImxhc3RMb2dnZWRJbkF0IiwidmVyc2lvbktleSIsInRpbWVzdGFtcHMiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJwbHVnaW4iLCJtZXRob2RzIiwiYXV0aCIsImNiIiwiaXNBdXRoZW50aWNhdGVkIiwidG9WZXJpZnlFbWFpbFRva2VuIiwidXNlciIsIl9pZCIsInRva2VuIiwic2lnbiIsImp3dCIsInNlY3JldCIsImV4cGlyZXNJbiIsInRvUmVzZXRQYXNzd29yZFRva2VuIiwidG9BdXRoZW50aWNhdGlvblRva2VuIiwiYXV0aGVudGljYXRpb24iLCJ0b0pTT04iLCJvYmoiLCJ0b09iamVjdCIsIlVzZXIiLCJtb2RlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxlQUFlLFNBQWZBLFlBQWUsR0FBc0I7QUFBQSxNQUFyQkMsV0FBcUIsdUVBQVAsRUFBTzs7QUFDekMsTUFBSUMsaUJBQWlCLENBQXJCO0FBQ0EsU0FBT0EsY0FBUCxFQUF1QjtBQUNyQkQsa0JBQWMsaUJBQ1hFLFVBRFcsQ0FDQSxLQURBLEVBRVhDLE1BRlcsQ0FFSkgsV0FGSSxFQUdYSSxNQUhXLENBR0osS0FISSxDQUFkO0FBSUFILHNCQUFrQixDQUFsQjtBQUNEO0FBQ0QsU0FBT0QsV0FBUDtBQUNELENBVkQ7O0FBWUEsSUFBSUssYUFBYSxJQUFJLG1CQUFTQyxNQUFiLENBQW9CO0FBQ25DQyxRQUFNQyxNQUQ2QjtBQUVuQ0MsU0FBTztBQUNMQyxXQUFPO0FBQ0xDLFlBQU1ILE1BREQ7QUFFTEksZ0JBQVU7QUFGTCxLQURGO0FBS0xDLGdCQUFZO0FBQ1ZGLFlBQU1HLE9BREk7QUFFVkMsZUFBUztBQUZDLEtBTFA7QUFTTEMsZ0JBQVlDO0FBVFAsR0FGNEI7QUFhbkNDLFlBQVU7QUFDUlAsVUFBTUgsTUFERTtBQUVSO0FBQ0FJLGNBQVUsS0FIRjtBQUlSTyxTQUFLcEI7QUFKRyxHQWJ5QjtBQW1CbkNxQixRQUFNO0FBQ0pULFVBQU1ILE1BREY7QUFFSmEsVUFBTUMsT0FBT0MsSUFBUCxrQkFBbUJDLEdBQW5CLENBQXVCO0FBQUEsYUFBSyxnQkFBTUMsQ0FBTixDQUFMO0FBQUEsS0FBdkIsQ0FGRjtBQUdKVixhQUFTLGdCQUFNVztBQUhYLEdBbkI2QjtBQXdCbkNDLGFBQVc7QUFDVGhCLFVBQU1ILE1BREc7QUFFVE8sYUFBUztBQUZBLEdBeEJ3QjtBQTRCbkNhLFVBQVE7QUFDTkMsYUFBUztBQUNQQyxnQkFBVVIsTUFESDtBQUVQUyxnQkFBVVQ7QUFGSDtBQURILEdBNUIyQjtBQWtDbkNVLFNBQU87QUFDTEMsaUJBQWFDLE1BRFI7QUFFTEMsbUJBQWVEO0FBRlYsR0FsQzRCO0FBc0NuQ0Usa0JBQWdCbkI7QUF0Q21CLENBQXBCLEVBdUNkO0FBQ0RvQixjQUFZLEtBRFg7QUFFREMsY0FBWTtBQUNWQyxlQUFXLFdBREQ7QUFFVkMsZUFBVztBQUZEO0FBRlgsQ0F2Q2MsQ0FBakI7O0FBK0NBbkMsV0FBV29DLE1BQVg7O0FBRUFwQyxXQUFXcUMsT0FBWCxDQUFtQkMsSUFBbkIsR0FBMEIsVUFBU3pCLFFBQVQsRUFBbUIwQixFQUFuQixFQUF1QjtBQUMvQyxNQUFNQyxrQkFBbUIsS0FBSzNCLFFBQUwsS0FBa0JuQixhQUFhbUIsUUFBYixDQUEzQztBQUNBMEIsS0FBRyxJQUFILEVBQVNDLGVBQVQ7QUFDRCxDQUhEOztBQUtBeEMsV0FBV3FDLE9BQVgsQ0FBbUJJLGtCQUFuQixHQUF3QyxVQUFTRixFQUFULEVBQWE7QUFDbkQsTUFBTUcsT0FBTztBQUNYQyxTQUFLLEtBQUtBLEdBREM7QUFFWGhCLFdBQU8sS0FBS0EsS0FBTCxDQUFXQztBQUZQLEdBQWI7QUFJQSxNQUFNZ0IsUUFBUSx1QkFBSUMsSUFBSixDQUFTSCxJQUFULEVBQWUsaUJBQVFJLEdBQVIsQ0FBWWxCLFdBQVosQ0FBd0JtQixNQUF2QyxFQUErQztBQUMzREMsZUFBVyxpQkFBUUYsR0FBUixDQUFZbEIsV0FBWixDQUF3Qm9CO0FBRHdCLEdBQS9DLENBQWQ7QUFHQSxTQUFPSixLQUFQO0FBQ0QsQ0FURDs7QUFXQTVDLFdBQVdxQyxPQUFYLENBQW1CWSxvQkFBbkIsR0FBMEMsVUFBU1YsRUFBVCxFQUFhO0FBQ3JELE1BQU1HLE9BQU87QUFDWEMsU0FBSyxLQUFLQSxHQURDO0FBRVhoQixXQUFPLEtBQUtBLEtBQUwsQ0FBV0c7QUFGUCxHQUFiO0FBSUEsTUFBTWMsUUFBUSx1QkFBSUMsSUFBSixDQUFTSCxJQUFULEVBQWUsaUJBQVFJLEdBQVIsQ0FBWWhCLGFBQVosQ0FBMEJpQixNQUF6QyxFQUFpRDtBQUM3REMsZUFBVyxpQkFBUUYsR0FBUixDQUFZaEIsYUFBWixDQUEwQmtCO0FBRHdCLEdBQWpELENBQWQ7QUFHQSxTQUFPSixLQUFQO0FBQ0QsQ0FURDs7QUFXQTVDLFdBQVdxQyxPQUFYLENBQW1CYSxxQkFBbkIsR0FBMkMsVUFBU1gsRUFBVCxFQUFhO0FBQ3RELE1BQU1HLE9BQU87QUFDWEMsU0FBSyxLQUFLQSxHQURDO0FBRVh6QyxVQUFNLEtBQUtBLElBRkE7QUFHWEUsV0FBTyxLQUFLQTtBQUhELEdBQWI7QUFLQSxNQUFNd0MsUUFBUSx1QkFBSUMsSUFBSixDQUFTSCxJQUFULEVBQWUsaUJBQVFJLEdBQVIsQ0FBWUssY0FBWixDQUEyQkosTUFBMUMsRUFBa0Q7QUFDOURDLGVBQVcsaUJBQVFGLEdBQVIsQ0FBWUssY0FBWixDQUEyQkg7QUFEd0IsR0FBbEQsQ0FBZDtBQUdBLFNBQU9KLEtBQVA7QUFDRCxDQVZEOztBQVlBNUMsV0FBV3FDLE9BQVgsQ0FBbUJlLE1BQW5CLEdBQTRCLFlBQVc7QUFDckMsTUFBSUMsTUFBTSxLQUFLQyxRQUFMLEVBQVY7QUFDQSxTQUFPRCxJQUFJeEMsUUFBWDtBQUNBLFNBQU93QyxHQUFQO0FBQ0QsQ0FKRDs7QUFNQSxJQUFJRSxPQUFPLG1CQUFTQyxLQUFULENBQWUsTUFBZixFQUF1QnhELFVBQXZCLENBQVg7a0JBQ2V1RCxJIiwiZmlsZSI6Im1vZGVscy9Vc2VyLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
