'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cookie = require('cookie');

var _cookie2 = _interopRequireDefault(_cookie);

var _cookieActions = require('../../common/actions/cookieActions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, res, next) {
  if (req.headers.cookie !== undefined) {
    var c = _cookie2.default.parse(req.headers.cookie);
    req.store.dispatch((0, _cookieActions.setCookies)(c));
  }
  next();
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pZGRsZXdhcmVzL2luaXRDb29raWUuanMiXSwibmFtZXMiOlsicmVxIiwicmVzIiwibmV4dCIsImhlYWRlcnMiLCJjb29raWUiLCJ1bmRlZmluZWQiLCJjIiwicGFyc2UiLCJzdG9yZSIsImRpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O2tCQUVlLFVBQUNBLEdBQUQsRUFBTUMsR0FBTixFQUFXQyxJQUFYLEVBQW9CO0FBQ2pDLE1BQUlGLElBQUlHLE9BQUosQ0FBWUMsTUFBWixLQUF1QkMsU0FBM0IsRUFBc0M7QUFDcEMsUUFBSUMsSUFBSSxpQkFBT0MsS0FBUCxDQUFhUCxJQUFJRyxPQUFKLENBQVlDLE1BQXpCLENBQVI7QUFDQUosUUFBSVEsS0FBSixDQUFVQyxRQUFWLENBQW1CLCtCQUFXSCxDQUFYLENBQW5CO0FBQ0Q7QUFDREo7QUFDRCxDIiwiZmlsZSI6Im1pZGRsZXdhcmVzL2luaXRDb29raWUuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
