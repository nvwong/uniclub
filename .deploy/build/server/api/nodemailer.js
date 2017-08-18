'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _nodemailer = require('nodemailer');

var _nodemailer2 = _interopRequireDefault(_nodemailer);

var _server = require('../../../configs/project/server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultTransport = void 0;
if (_server2.default.nodemailer) {
  defaultTransport = _server2.default.nodemailer[process.env.NODE_ENV];
}

exports.default = function () {
  var transport = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultTransport;

  var transporter = _nodemailer2.default.createTransport(transport);
  return {
    sendMail: function sendMail(mailOptions) {
      return new Promise(function (resolve, reject) {
        mailOptions = (0, _objectAssign2.default)({}, _server2.default.mailOptions.default, _server2.default.mailOptions[process.env.NODE_ENV], mailOptions);
        transporter.sendMail(mailOptions, function (err, info) {
          if (process.env.NODE_ENV !== 'test' && err) {
            return reject(err);
          }
          return resolve(info);
        });
      });
    }
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9ub2RlbWFpbGVyLmpzIl0sIm5hbWVzIjpbImRlZmF1bHRUcmFuc3BvcnQiLCJub2RlbWFpbGVyIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwidHJhbnNwb3J0IiwidHJhbnNwb3J0ZXIiLCJjcmVhdGVUcmFuc3BvcnQiLCJzZW5kTWFpbCIsIm1haWxPcHRpb25zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJkZWZhdWx0IiwiZXJyIiwiaW5mbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFJQSx5QkFBSjtBQUNBLElBQUksaUJBQVFDLFVBQVosRUFBd0I7QUFDdEJELHFCQUFtQixpQkFBUUMsVUFBUixDQUFtQkMsUUFBUUMsR0FBUixDQUFZQyxRQUEvQixDQUFuQjtBQUNEOztrQkFFYyxZQUFrQztBQUFBLE1BQWpDQyxTQUFpQyx1RUFBckJMLGdCQUFxQjs7QUFDL0MsTUFBSU0sY0FBYyxxQkFBV0MsZUFBWCxDQUEyQkYsU0FBM0IsQ0FBbEI7QUFDQSxTQUFPO0FBQ0xHLGNBQVUsa0JBQUNDLFdBQUQ7QUFBQSxhQUFpQixJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQzFESCxzQkFBYyw0QkFDWixFQURZLEVBRVosaUJBQVFBLFdBQVIsQ0FBb0JJLE9BRlIsRUFHWixpQkFBUUosV0FBUixDQUFvQlAsUUFBUUMsR0FBUixDQUFZQyxRQUFoQyxDQUhZLEVBSVpLLFdBSlksQ0FBZDtBQU1BSCxvQkFBWUUsUUFBWixDQUFxQkMsV0FBckIsRUFBa0MsVUFBQ0ssR0FBRCxFQUFNQyxJQUFOLEVBQWU7QUFDL0MsY0FBSWIsUUFBUUMsR0FBUixDQUFZQyxRQUFaLEtBQXlCLE1BQXpCLElBQW1DVSxHQUF2QyxFQUE0QztBQUMxQyxtQkFBT0YsT0FBT0UsR0FBUCxDQUFQO0FBQ0Q7QUFDRCxpQkFBT0gsUUFBUUksSUFBUixDQUFQO0FBQ0QsU0FMRDtBQU1ELE9BYjBCLENBQWpCO0FBQUE7QUFETCxHQUFQO0FBZ0JELEMiLCJmaWxlIjoiYXBpL25vZGVtYWlsZXIuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
