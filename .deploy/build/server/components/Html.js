'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _serializeJavascript = require('serialize-javascript');

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// jscs:disable
var Html = function Html(_ref) {
  var assets = _ref.assets,
      children = _ref.children,
      initialState = _ref.initialState;
  return _react2.default.createElement(
    'html',
    { lang: 'utf-8' },
    _react2.default.createElement(
      'head',
      null,
      _react2.default.createElement('meta', { charSet: 'utf-8' }),
      _react2.default.createElement(
        'title',
        null,
        'Express-React-HMR-Boilerplate'
      ),
      _react2.default.createElement('link', {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css'
      }),
      _react2.default.createElement('link', {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css'
      }),
      _react2.default.createElement('script', {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js'
      }),
      Object.keys(assets.styles).map(function (style, i) {
        return _react2.default.createElement('link', {
          key: i,
          href: assets.styles[style],
          media: 'screen, projection',
          rel: 'stylesheet',
          type: 'text/css'
        });
      })
    ),
    _react2.default.createElement(
      'body',
      null,
      _react2.default.createElement('div', { id: 'root',
        dangerouslySetInnerHTML: {
          __html: (0, _server.renderToString)(children)
        }
      }),
      _react2.default.createElement('script', {
        dangerouslySetInnerHTML: {
          __html: 'window.__INITIAL_STATE__=' + (0, _serializeJavascript2.default)(initialState, { isJSON: true }) + ';'
        }
      }),
      _react2.default.createElement('script', { src: 'https://code.jquery.com/jquery-2.2.3.min.js' }),
      _react2.default.createElement('script', { src: 'https://cdn.polyfill.io/v2/polyfill.min.js?features=Intl.~locale.en' }),
      Object.keys(assets.javascript).map(function (script, i) {
        return _react2.default.createElement('script', { key: i, src: assets.javascript[script] });
      })
    )
  );
};
// jscs:enable

Html.propTypes = {
  assets: _react.PropTypes.object,
  component: _react.PropTypes.object,
  initialState: _react.PropTypes.object
};

exports.default = Html;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSHRtbC5qcyJdLCJuYW1lcyI6WyJIdG1sIiwiYXNzZXRzIiwiY2hpbGRyZW4iLCJpbml0aWFsU3RhdGUiLCJPYmplY3QiLCJrZXlzIiwic3R5bGVzIiwibWFwIiwic3R5bGUiLCJpIiwiX19odG1sIiwiaXNKU09OIiwiamF2YXNjcmlwdCIsInNjcmlwdCIsInByb3BUeXBlcyIsIm9iamVjdCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7QUFDQSxJQUFNQSxPQUFPLFNBQVBBLElBQU87QUFBQSxNQUFHQyxNQUFILFFBQUdBLE1BQUg7QUFBQSxNQUFXQyxRQUFYLFFBQVdBLFFBQVg7QUFBQSxNQUFxQkMsWUFBckIsUUFBcUJBLFlBQXJCO0FBQUEsU0FDWDtBQUFBO0FBQUEsTUFBTSxNQUFLLE9BQVg7QUFDRTtBQUFBO0FBQUE7QUFDRSw4Q0FBTSxTQUFRLE9BQWQsR0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FGRjtBQUdFO0FBQ0UsYUFBSSxZQUROO0FBRUUsY0FBSyxVQUZQO0FBR0UsY0FBSztBQUhQLFFBSEY7QUFRRTtBQUNFLGFBQUksWUFETjtBQUVFLGNBQUssVUFGUDtBQUdFLGNBQUs7QUFIUCxRQVJGO0FBYUU7QUFDRSxhQUFJO0FBRE4sUUFiRjtBQWdCR0MsYUFBT0MsSUFBUCxDQUFZSixPQUFPSyxNQUFuQixFQUEyQkMsR0FBM0IsQ0FBK0IsVUFBQ0MsS0FBRCxFQUFRQyxDQUFSO0FBQUEsZUFDOUI7QUFDRSxlQUFLQSxDQURQO0FBRUUsZ0JBQU1SLE9BQU9LLE1BQVAsQ0FBY0UsS0FBZCxDQUZSO0FBR0UsaUJBQU0sb0JBSFI7QUFJRSxlQUFJLFlBSk47QUFLRSxnQkFBSztBQUxQLFVBRDhCO0FBQUEsT0FBL0I7QUFoQkgsS0FERjtBQTJCRTtBQUFBO0FBQUE7QUFDRSw2Q0FBSyxJQUFHLE1BQVI7QUFDRSxpQ0FBeUI7QUFDdkJFLGtCQUFRLDRCQUFlUixRQUFmO0FBRGU7QUFEM0IsUUFERjtBQU9FO0FBQ0UsaUNBQXlCO0FBQ3ZCUSxnREFDRSxtQ0FBVVAsWUFBVixFQUF3QixFQUFFUSxRQUFRLElBQVYsRUFBeEIsQ0FERjtBQUR1QjtBQUQzQixRQVBGO0FBY0UsZ0RBQVEsS0FBSSw2Q0FBWixHQWRGO0FBZUUsZ0RBQVEsS0FBSSxxRUFBWixHQWZGO0FBZ0JHUCxhQUFPQyxJQUFQLENBQVlKLE9BQU9XLFVBQW5CLEVBQStCTCxHQUEvQixDQUFtQyxVQUFDTSxNQUFELEVBQVNKLENBQVQ7QUFBQSxlQUNsQywwQ0FBUSxLQUFLQSxDQUFiLEVBQWdCLEtBQUtSLE9BQU9XLFVBQVAsQ0FBa0JDLE1BQWxCLENBQXJCLEdBRGtDO0FBQUEsT0FBbkM7QUFoQkg7QUEzQkYsR0FEVztBQUFBLENBQWI7QUFrREE7O0FBRUFiLEtBQUtjLFNBQUwsR0FBaUI7QUFDZmIsVUFBUSxpQkFBVWMsTUFESDtBQUVmQyxhQUFXLGlCQUFVRCxNQUZOO0FBR2ZaLGdCQUFjLGlCQUFVWTtBQUhULENBQWpCOztrQkFNZWYsSSIsImZpbGUiOiJjb21wb25lbnRzL0h0bWwuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
