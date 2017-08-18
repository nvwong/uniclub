'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  readToken: function readToken(req, res) {
    // ref: <https://firebase.google.com/docs/auth/server#create_a_custom_token>
    var token = _firebase2.default.auth().createCustomToken(req.user._id.toString());
    res.json({
      token: token
    });
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL2ZpcmViYXNlLmpzIl0sIm5hbWVzIjpbInJlYWRUb2tlbiIsInJlcSIsInJlcyIsInRva2VuIiwiYXV0aCIsImNyZWF0ZUN1c3RvbVRva2VuIiwidXNlciIsIl9pZCIsInRvU3RyaW5nIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7OztrQkFFZTtBQUNiQSxXQURhLHFCQUNIQyxHQURHLEVBQ0VDLEdBREYsRUFDTztBQUNsQjtBQUNBLFFBQUlDLFFBQVEsbUJBQVNDLElBQVQsR0FBZ0JDLGlCQUFoQixDQUFrQ0osSUFBSUssSUFBSixDQUFTQyxHQUFULENBQWFDLFFBQWIsRUFBbEMsQ0FBWjtBQUNBTixRQUFJTyxJQUFKLENBQVM7QUFDUE4sYUFBT0E7QUFEQSxLQUFUO0FBR0Q7QUFQWSxDIiwiZmlsZSI6ImNvbnRyb2xsZXJzL2ZpcmViYXNlLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
