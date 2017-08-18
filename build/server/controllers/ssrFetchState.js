'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Errors = require('../../common/constants/Errors');

var _Errors2 = _interopRequireDefault(_Errors);

var _todo = require('../../common/api/todo');

var _todo2 = _interopRequireDefault(_todo);

var _wrapTimeout = require('../decorators/wrapTimeout');

var _wrapTimeout2 = _interopRequireDefault(_wrapTimeout);

var _userActions = require('../../common/actions/userActions');

var _intlActions = require('../../common/actions/intlActions');

var _todoActions = require('../../common/actions/todoActions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  user: function user(req, res, next) {
    var _req$store$getState = req.store.getState(),
        cookies = _req$store$getState.cookies;

    req.store.dispatch((0, _userActions.loginUser)({
      token: cookies.token,
      data: cookies.user
    }));
    next();
  },
  intl: (0, _wrapTimeout2.default)(3000)(function (req, res, next) {
    var cookieLocale = req.store.getState().cookies.locale;
    var lang = void 0;
    if (cookieLocale) {
      lang = cookieLocale;
    } else {
      lang = req.acceptsLanguages('en-us', 'zh-tw');
    }
    req.store.dispatch((0, _intlActions.updateLocale)(lang)).then(function () {
      next();
    }, function () {
      res.pushError(_Errors2.default.STATE_PRE_FETCHING_FAIL, {
        detail: 'Cannot setup locale'
      });
      next();
    });
  }),
  todo: (0, _wrapTimeout2.default)(3000)(function (req, res, next) {
    (0, _todo2.default)(req.store.getState().apiEngine).list({ page: req.query.page || 1 }).catch(function () {
      res.pushError(_Errors2.default.STATE_PRE_FETCHING_FAIL, {
        detail: 'Cannot list todos'
      });
      next();
    }).then(function (json) {
      req.store.dispatch((0, _todoActions.setTodos)(json));
      next();
    });
  })
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL3NzckZldGNoU3RhdGUuanMiXSwibmFtZXMiOlsidXNlciIsInJlcSIsInJlcyIsIm5leHQiLCJzdG9yZSIsImdldFN0YXRlIiwiY29va2llcyIsImRpc3BhdGNoIiwidG9rZW4iLCJkYXRhIiwiaW50bCIsImNvb2tpZUxvY2FsZSIsImxvY2FsZSIsImxhbmciLCJhY2NlcHRzTGFuZ3VhZ2VzIiwidGhlbiIsInB1c2hFcnJvciIsIlNUQVRFX1BSRV9GRVRDSElOR19GQUlMIiwiZGV0YWlsIiwidG9kbyIsImFwaUVuZ2luZSIsImxpc3QiLCJwYWdlIiwicXVlcnkiLCJjYXRjaCIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O2tCQUVlO0FBQ2JBLFFBQU0sY0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQVdDLElBQVgsRUFBb0I7QUFBQSw4QkFDTkYsSUFBSUcsS0FBSixDQUFVQyxRQUFWLEVBRE07QUFBQSxRQUNsQkMsT0FEa0IsdUJBQ2xCQSxPQURrQjs7QUFFeEJMLFFBQUlHLEtBQUosQ0FBVUcsUUFBVixDQUFtQiw0QkFBVTtBQUMzQkMsYUFBT0YsUUFBUUUsS0FEWTtBQUUzQkMsWUFBTUgsUUFBUU47QUFGYSxLQUFWLENBQW5CO0FBSUFHO0FBQ0QsR0FSWTtBQVNiTyxRQUFNLDJCQUFZLElBQVosRUFBa0IsVUFBQ1QsR0FBRCxFQUFNQyxHQUFOLEVBQVdDLElBQVgsRUFBb0I7QUFDMUMsUUFBTVEsZUFBZVYsSUFBSUcsS0FBSixDQUFVQyxRQUFWLEdBQXFCQyxPQUFyQixDQUE2Qk0sTUFBbEQ7QUFDQSxRQUFJQyxhQUFKO0FBQ0EsUUFBSUYsWUFBSixFQUFrQjtBQUNoQkUsYUFBT0YsWUFBUDtBQUNELEtBRkQsTUFFTztBQUNMRSxhQUFPWixJQUFJYSxnQkFBSixDQUFxQixPQUFyQixFQUE4QixPQUE5QixDQUFQO0FBQ0Q7QUFDRGIsUUFBSUcsS0FBSixDQUNHRyxRQURILENBQ1ksK0JBQWFNLElBQWIsQ0FEWixFQUVHRSxJQUZILENBRVEsWUFBTTtBQUNWWjtBQUNELEtBSkgsRUFJSyxZQUFNO0FBQ1BELFVBQUljLFNBQUosQ0FBYyxpQkFBT0MsdUJBQXJCLEVBQThDO0FBQzVDQyxnQkFBUTtBQURvQyxPQUE5QztBQUdBZjtBQUNELEtBVEg7QUFVRCxHQWxCSyxDQVRPO0FBNEJiZ0IsUUFBTSwyQkFBWSxJQUFaLEVBQWtCLFVBQUNsQixHQUFELEVBQU1DLEdBQU4sRUFBV0MsSUFBWCxFQUFvQjtBQUMxQyx3QkFBUUYsSUFBSUcsS0FBSixDQUFVQyxRQUFWLEdBQXFCZSxTQUE3QixFQUNHQyxJQURILENBQ1EsRUFBRUMsTUFBTXJCLElBQUlzQixLQUFKLENBQVVELElBQVYsSUFBa0IsQ0FBMUIsRUFEUixFQUVHRSxLQUZILENBRVMsWUFBTTtBQUNYdEIsVUFBSWMsU0FBSixDQUFjLGlCQUFPQyx1QkFBckIsRUFBOEM7QUFDNUNDLGdCQUFRO0FBRG9DLE9BQTlDO0FBR0FmO0FBQ0QsS0FQSCxFQVFHWSxJQVJILENBUVEsVUFBQ1UsSUFBRCxFQUFVO0FBQ2R4QixVQUFJRyxLQUFKLENBQVVHLFFBQVYsQ0FBbUIsMkJBQVNrQixJQUFULENBQW5CO0FBQ0F0QjtBQUNELEtBWEg7QUFZRCxHQWJLO0FBNUJPLEMiLCJmaWxlIjoiY29udHJvbGxlcnMvc3NyRmV0Y2hTdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
