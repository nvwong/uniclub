'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reactRouter = require('react-router');

var _reactRouterRedux = require('react-router-redux');

var _reducers = require('../../common/reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _ApiEngine = require('../../common/utils/ApiEngine');

var _ApiEngine2 = _interopRequireDefault(_ApiEngine);

var _apiEngine = require('../../common/actions/apiEngine');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, res, next) {
  // ref:
  //  - <https://github.com/reactjs/react-router-redux/issues/182#issuecomment-178701502>
  //  - <http://stackoverflow.com/questions/34821921/browserhistory-undefined-with-react-router-2-00-release-candidates>
  //  - <https://github.com/reactjs/react-router-redux/blob/master/examples/server/server.js>
  var memoryHistory = (0, _reactRouter.useRouterHistory)(_reactRouter.createMemoryHistory)(req.url);
  var store = (0, _redux.createStore)(_reducers2.default, (0, _redux.applyMiddleware)((0, _reactRouterRedux.routerMiddleware)(memoryHistory), _reduxThunk2.default));
  var history = (0, _reactRouterRedux.syncHistoryWithStore)(memoryHistory, store);
  req.store = store;
  req.history = history;
  var apiEngine = new _ApiEngine2.default(req);
  req.store.dispatch((0, _apiEngine.setApiEngine)(apiEngine));
  next();
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pZGRsZXdhcmVzL21vdW50U3RvcmUuanMiXSwibmFtZXMiOlsicmVxIiwicmVzIiwibmV4dCIsIm1lbW9yeUhpc3RvcnkiLCJ1cmwiLCJzdG9yZSIsImhpc3RvcnkiLCJhcGlFbmdpbmUiLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7a0JBRWUsVUFBQ0EsR0FBRCxFQUFNQyxHQUFOLEVBQVdDLElBQVgsRUFBb0I7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFJQyxnQkFBZ0IscUVBQXNDSCxJQUFJSSxHQUExQyxDQUFwQjtBQUNBLE1BQUlDLFFBQVEsNENBRVYsNEJBQ0Usd0NBQWlCRixhQUFqQixDQURGLHVCQUZVLENBQVo7QUFPQSxNQUFJRyxVQUFVLDRDQUFxQkgsYUFBckIsRUFBb0NFLEtBQXBDLENBQWQ7QUFDQUwsTUFBSUssS0FBSixHQUFZQSxLQUFaO0FBQ0FMLE1BQUlNLE9BQUosR0FBY0EsT0FBZDtBQUNBLE1BQUlDLFlBQVksd0JBQWNQLEdBQWQsQ0FBaEI7QUFDQUEsTUFBSUssS0FBSixDQUFVRyxRQUFWLENBQW1CLDZCQUFhRCxTQUFiLENBQW5CO0FBQ0FMO0FBQ0QsQyIsImZpbGUiOiJtaWRkbGV3YXJlcy9tb3VudFN0b3JlLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
