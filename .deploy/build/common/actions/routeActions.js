'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.redirect = undefined;

var _reactRouterRedux = require('react-router-redux');

var _cookieActions = require('./cookieActions');

var redirect = exports.redirect = function redirect(path) {
  return function (dispatch) {
    dispatch((0, _cookieActions.setCookie)('redirect', path));
    dispatch((0, _reactRouterRedux.push)(path));
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbnMvcm91dGVBY3Rpb25zLmpzIl0sIm5hbWVzIjpbInJlZGlyZWN0IiwicGF0aCIsImRpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBRU8sSUFBTUEsOEJBQVcsU0FBWEEsUUFBVyxDQUFDQyxJQUFELEVBQVU7QUFDaEMsU0FBTyxVQUFDQyxRQUFELEVBQWM7QUFDbkJBLGFBQVMsOEJBQVUsVUFBVixFQUFzQkQsSUFBdEIsQ0FBVDtBQUNBQyxhQUFTLDRCQUFLRCxJQUFMLENBQVQ7QUFDRCxHQUhEO0FBSUQsQ0FMTSIsImZpbGUiOiJhY3Rpb25zL3JvdXRlQWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
