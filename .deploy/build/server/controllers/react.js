'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _env = require('../utils/env');

var _env2 = _interopRequireDefault(_env);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _reactRouter = require('react-router');

var _reactRedux = require('react-redux');

var _LocaleProvider = require('../../common/components/utils/LocaleProvider');

var _LocaleProvider2 = _interopRequireDefault(_LocaleProvider);

var _Html = require('../components/Html');

var _Html2 = _interopRequireDefault(_Html);

var _routes = require('../../common/routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  render: function render(req, res) {
    if (_env2.default === 'development') {
      __webpackIsomorphicTools__.refresh();
    }
    var routes = (0, _routes2.default)(req.store);
    (0, _reactRouter.match)({
      routes: routes,
      // we use `history: req.history` instead of `location: req.url` to deal with redirections
      history: req.history
    }, function (error, redirectLocation, renderProps) {
      if (error) {
        return res.status(500).send(error.message);
      }
      if (redirectLocation) {
        return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      }
      if (renderProps == null) {
        return res.status(404).send('Not found');
      }
      var finalState = req.store.getState();
      var markup = '<!doctype html>\n' + (0, _server.renderToString)(_react2.default.createElement(
        _Html2.default,
        {
          initialState: finalState,
          assets: __webpackIsomorphicTools__.assets()
        },
        _react2.default.createElement(
          _reactRedux.Provider,
          { store: req.store },
          _react2.default.createElement(
            _LocaleProvider2.default,
            null,
            _react2.default.createElement(_reactRouter.RouterContext, renderProps)
          )
        )
      ));
      res.send(markup);
    });
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL3JlYWN0LmpzIl0sIm5hbWVzIjpbInJlbmRlciIsInJlcSIsInJlcyIsIl9fd2VicGFja0lzb21vcnBoaWNUb29sc19fIiwicmVmcmVzaCIsInJvdXRlcyIsInN0b3JlIiwiaGlzdG9yeSIsImVycm9yIiwicmVkaXJlY3RMb2NhdGlvbiIsInJlbmRlclByb3BzIiwic3RhdHVzIiwic2VuZCIsIm1lc3NhZ2UiLCJyZWRpcmVjdCIsInBhdGhuYW1lIiwic2VhcmNoIiwiZmluYWxTdGF0ZSIsImdldFN0YXRlIiwibWFya3VwIiwiYXNzZXRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7a0JBRWU7QUFDYkEsUUFEYSxrQkFDTkMsR0FETSxFQUNEQyxHQURDLEVBQ0k7QUFDZixRQUFJLGtCQUFRLGFBQVosRUFBMkI7QUFDekJDLGlDQUEyQkMsT0FBM0I7QUFDRDtBQUNELFFBQUlDLFNBQVMsc0JBQVVKLElBQUlLLEtBQWQsQ0FBYjtBQUNBLDRCQUFNO0FBQ0pELG9CQURJO0FBRUo7QUFDQUUsZUFBU04sSUFBSU07QUFIVCxLQUFOLEVBSUcsVUFBQ0MsS0FBRCxFQUFRQyxnQkFBUixFQUEwQkMsV0FBMUIsRUFBMEM7QUFDM0MsVUFBSUYsS0FBSixFQUFXO0FBQ1QsZUFBT04sSUFBSVMsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCSixNQUFNSyxPQUEzQixDQUFQO0FBQ0Q7QUFDRCxVQUFJSixnQkFBSixFQUFzQjtBQUNwQixlQUFPUCxJQUFJWSxRQUFKLENBQ0wsR0FESyxFQUNBTCxpQkFBaUJNLFFBQWpCLEdBQTRCTixpQkFBaUJPLE1BRDdDLENBQVA7QUFFRDtBQUNELFVBQUlOLGVBQWUsSUFBbkIsRUFBeUI7QUFDdkIsZUFBT1IsSUFBSVMsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCLFdBQXJCLENBQVA7QUFDRDtBQUNELFVBQU1LLGFBQWFoQixJQUFJSyxLQUFKLENBQVVZLFFBQVYsRUFBbkI7QUFDQSxVQUFNQyxTQUFTLHNCQUFzQiw0QkFDbkM7QUFBQTtBQUFBO0FBQ0Usd0JBQWNGLFVBRGhCO0FBRUUsa0JBQVFkLDJCQUEyQmlCLE1BQTNCO0FBRlY7QUFJRTtBQUFBO0FBQUEsWUFBVSxPQUFPbkIsSUFBSUssS0FBckI7QUFDRTtBQUFBO0FBQUE7QUFDRSxzRUFBbUJJLFdBQW5CO0FBREY7QUFERjtBQUpGLE9BRG1DLENBQXJDO0FBWUFSLFVBQUlVLElBQUosQ0FBU08sTUFBVDtBQUNELEtBN0JEO0FBOEJEO0FBcENZLEMiLCJmaWxlIjoiY29udHJvbGxlcnMvcmVhY3QuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
