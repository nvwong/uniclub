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
  username: String,
  uid: Number,
  lastname: String,
  firstname: String,
  gender: String,
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
  uniemail: String,
  curriculum: String,
  phone: Number,
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
    username: this.username,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9Vc2VyLmpzIl0sIm5hbWVzIjpbImhhc2hQYXNzd29yZCIsInJhd1Bhc3N3b3JkIiwicmVjdXJzaXZlTGV2ZWwiLCJjcmVhdGVIYXNoIiwidXBkYXRlIiwiZGlnZXN0IiwiVXNlclNjaGVtYSIsIlNjaGVtYSIsInVzZXJuYW1lIiwiU3RyaW5nIiwidWlkIiwiTnVtYmVyIiwibGFzdG5hbWUiLCJmaXJzdG5hbWUiLCJnZW5kZXIiLCJlbWFpbCIsInZhbHVlIiwidHlwZSIsInJlcXVpcmVkIiwiaXNWZXJpZmllZCIsIkJvb2xlYW4iLCJkZWZhdWx0IiwidmVyaWZpZWRBdCIsIkRhdGUiLCJ1bmllbWFpbCIsImN1cnJpY3VsdW0iLCJwaG9uZSIsInBhc3N3b3JkIiwic2V0Iiwicm9sZSIsImVudW0iLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiciIsIlVTRVIiLCJhdmF0YXJVUkwiLCJzb2NpYWwiLCJwcm9maWxlIiwiZmFjZWJvb2siLCJsaW5rZWRpbiIsIm5vbmNlIiwidmVyaWZ5RW1haWwiLCJyZXNldFBhc3N3b3JkIiwibGFzdExvZ2dlZEluQXQiLCJ2ZXJzaW9uS2V5IiwidGltZXN0YW1wcyIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsInBsdWdpbiIsIm1ldGhvZHMiLCJhdXRoIiwiY2IiLCJpc0F1dGhlbnRpY2F0ZWQiLCJ0b1ZlcmlmeUVtYWlsVG9rZW4iLCJ1c2VyIiwiX2lkIiwidG9rZW4iLCJzaWduIiwiand0Iiwic2VjcmV0IiwiZXhwaXJlc0luIiwidG9SZXNldFBhc3N3b3JkVG9rZW4iLCJ0b0F1dGhlbnRpY2F0aW9uVG9rZW4iLCJhdXRoZW50aWNhdGlvbiIsInRvSlNPTiIsIm9iaiIsInRvT2JqZWN0IiwiVXNlciIsIm1vZGVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGVBQWUsU0FBZkEsWUFBZSxHQUFzQjtBQUFBLE1BQXJC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
