'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _handleError = require('../decorators/handleError');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  // parse application/x-www-form-urlencoded
  urlencoded: _bodyParser2.default.urlencoded({ extended: false }),
  // parse application/json
  json: _bodyParser2.default.json(),
  jwt: function jwt(key, secret) {
    return function (req, res, next) {
      var token = req.body[key];

      _jsonwebtoken2.default.verify(token, secret, (0, _handleError.handleJwtError)(res)(function (decoded) {
        req.decodedPayload = decoded;
        next();
      }));
    };
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pZGRsZXdhcmVzL2JvZHlQYXJzZXIuanMiXSwibmFtZXMiOlsidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwianNvbiIsImp3dCIsImtleSIsInNlY3JldCIsInJlcSIsInJlcyIsIm5leHQiLCJ0b2tlbiIsImJvZHkiLCJ2ZXJpZnkiLCJkZWNvZGVkIiwiZGVjb2RlZFBheWxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztrQkFFZTtBQUNiO0FBQ0FBLGNBQVkscUJBQVdBLFVBQVgsQ0FBc0IsRUFBRUMsVUFBVSxLQUFaLEVBQXRCLENBRkM7QUFHYjtBQUNBQyxRQUFNLHFCQUFXQSxJQUFYLEVBSk87QUFLYkMsT0FBSyxhQUFDQyxHQUFELEVBQU1DLE1BQU47QUFBQSxXQUFpQixVQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBV0MsSUFBWCxFQUFvQjtBQUN4QyxVQUFJQyxRQUFRSCxJQUFJSSxJQUFKLENBQVNOLEdBQVQsQ0FBWjs7QUFFQSw2QkFBSU8sTUFBSixDQUFXRixLQUFYLEVBQWtCSixNQUFsQixFQUEwQixpQ0FBZUUsR0FBZixFQUFvQixVQUFDSyxPQUFELEVBQWE7QUFDekROLFlBQUlPLGNBQUosR0FBcUJELE9BQXJCO0FBQ0FKO0FBQ0QsT0FIeUIsQ0FBMUI7QUFJRCxLQVBJO0FBQUE7QUFMUSxDIiwiZmlsZSI6Im1pZGRsZXdhcmVzL2JvZHlQYXJzZXIuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
