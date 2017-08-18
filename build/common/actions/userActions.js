'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setUsers = exports.logoutUser = exports.loginUser = undefined;

var _normalizr = require('normalizr');

var _schemas = require('../schemas');

var _Resources = require('../constants/Resources');

var _Resources2 = _interopRequireDefault(_Resources);

var _cookieActions = require('./cookieActions');

var _entityActions = require('./entityActions');

var _pageActions = require('./pageActions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loginUser = exports.loginUser = function loginUser(_ref) {
  var token = _ref.token,
      data = _ref.data;
  var res = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  return function (dispatch) {
    return dispatch((0, _cookieActions.setCookies)({
      token: token,
      user: data
    }, res));
  };
};

var logoutUser = exports.logoutUser = function logoutUser() {
  return function (dispatch) {
    return Promise.all([dispatch((0, _cookieActions.removeCookie)('token')), dispatch((0, _cookieActions.removeCookie)('user'))]);
  };
};

var setUsers = exports.setUsers = function setUsers(res) {
  return function (dispatch, getState) {
    var normalized = (0, _normalizr.normalize)(res.users, (0, _normalizr.arrayOf)(_schemas.userSchema));

    dispatch((0, _entityActions.setEntities)(normalized));
    dispatch((0, _pageActions.setPages)(_Resources2.default.USER, res.page, normalized.result));
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbnMvdXNlckFjdGlvbnMuanMiXSwibmFtZXMiOlsibG9naW5Vc2VyIiwidG9rZW4iLCJkYXRhIiwicmVzIiwiZGlzcGF0Y2giLCJ1c2VyIiwibG9nb3V0VXNlciIsIlByb21pc2UiLCJhbGwiLCJzZXRVc2VycyIsImdldFN0YXRlIiwibm9ybWFsaXplZCIsInVzZXJzIiwiVVNFUiIsInBhZ2UiLCJyZXN1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBRU8sSUFBTUEsZ0NBQVksU0FBWkEsU0FBWSxPQUFpQztBQUFBLE1BQTlCQyxLQUE4QixRQUE5QkEsS0FBOEI7QUFBQSxNQUF2QkMsSUFBdUIsUUFBdkJBLElBQXVCO0FBQUEsTUFBZkMsR0FBZSx1RUFBVCxJQUFTOztBQUN4RCxTQUFPLFVBQUNDLFFBQUQsRUFBYztBQUNuQixXQUFPQSxTQUFTLCtCQUFXO0FBQ3pCSCxrQkFEeUI7QUFFekJJLFlBQU1IO0FBRm1CLEtBQVgsRUFHYkMsR0FIYSxDQUFULENBQVA7QUFJRCxHQUxEO0FBTUQsQ0FQTTs7QUFTQSxJQUFNRyxrQ0FBYSxTQUFiQSxVQUFhLEdBQU07QUFDOUIsU0FBTyxVQUFDRixRQUFEO0FBQUEsV0FBY0csUUFBUUMsR0FBUixDQUFZLENBQy9CSixTQUFTLGlDQUFhLE9BQWIsQ0FBVCxDQUQrQixFQUUvQkEsU0FBUyxpQ0FBYSxNQUFiLENBQVQsQ0FGK0IsQ0FBWixDQUFkO0FBQUEsR0FBUDtBQUlELENBTE07O0FBT0EsSUFBTUssOEJBQVcsU0FBWEEsUUFBVyxDQUFDTixHQUFEO0FBQUEsU0FBUyxVQUFDQyxRQUFELEVBQVdNLFFBQVgsRUFBd0I7QUFDdkQsUUFBSUMsYUFBYSwwQkFBVVIsSUFBSVMsS0FBZCxFQUFxQiw0Q0FBckIsQ0FBakI7O0FBRUFSLGFBQVMsZ0NBQVlPLFVBQVosQ0FBVDtBQUNBUCxhQUFTLDJCQUFTLG9CQUFVUyxJQUFuQixFQUF5QlYsSUFBSVcsSUFBN0IsRUFBbUNILFdBQVdJLE1BQTlDLENBQVQ7QUFDRCxHQUx1QjtBQUFBLENBQWpCIiwiZmlsZSI6ImFjdGlvbnMvdXNlckFjdGlvbnMuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
