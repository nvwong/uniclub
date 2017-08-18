'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _paginate = require('./plugins/paginate');

var _paginate2 = _interopRequireDefault(_paginate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Todo = new _mongoose2.default.Schema({
  text: String
}, {
  versionKey: false,
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
});

Todo.plugin(_paginate2.default);

exports.default = _mongoose2.default.model('Todo', Todo);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9Ub2RvLmpzIl0sIm5hbWVzIjpbIlRvZG8iLCJTY2hlbWEiLCJ0ZXh0IiwiU3RyaW5nIiwidmVyc2lvbktleSIsInRpbWVzdGFtcHMiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJwbHVnaW4iLCJtb2RlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBSUEsT0FBTyxJQUFJLG1CQUFTQyxNQUFiLENBQW9CO0FBQzdCQyxRQUFNQztBQUR1QixDQUFwQixFQUVSO0FBQ0RDLGNBQVksS0FEWDtBQUVEQyxjQUFZO0FBQ1ZDLGVBQVcsV0FERDtBQUVWQyxlQUFXO0FBRkQ7QUFGWCxDQUZRLENBQVg7O0FBVUFQLEtBQUtRLE1BQUw7O2tCQUVlLG1CQUFTQyxLQUFULENBQWUsTUFBZixFQUF1QlQsSUFBdkIsQyIsImZpbGUiOiJtb2RlbHMvVG9kby5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
