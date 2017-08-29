'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _paginate = require('./plugins/paginate');

var _paginate2 = _interopRequireDefault(_paginate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Todo2 = new _mongoose2.default.Schema({
  text: String
}, {
  versionKey: false,
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
});

Todo2.plugin(_paginate2.default);

exports.default = _mongoose2.default.model('Todo2', Todo2);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9Ub2RvMi5qcyJdLCJuYW1lcyI6WyJUb2RvMiIsIlNjaGVtYSIsInRleHQiLCJTdHJpbmciLCJ2ZXJzaW9uS2V5IiwidGltZXN0YW1wcyIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsInBsdWdpbiIsIm1vZGVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFJQSxRQUFRLElBQUksbUJBQVNDLE1BQWIsQ0FBb0I7QUFDOUJDLFFBQU1DO0FBRHdCLENBQXBCLEVBRVQ7QUFDREMsY0FBWSxLQURYO0FBRURDLGNBQVk7QUFDVkMsZUFBVyxXQUREO0FBRVZDLGVBQVc7QUFGRDtBQUZYLENBRlMsQ0FBWjs7QUFVQVAsTUFBTVEsTUFBTjs7a0JBRWUsbUJBQVNDLEtBQVQsQ0FBZSxPQUFmLEVBQXdCVCxLQUF4QixDIiwiZmlsZSI6Im1vZGVscy9Ub2RvMi5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
