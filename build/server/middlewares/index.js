'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _env = require('../utils/env');

var _env2 = _interopRequireDefault(_env);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _serveFavicon = require('serve-favicon');

var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

var _morgan = require('./morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _passportInit = require('./passportInit');

var _passportInit2 = _interopRequireDefault(_passportInit);

var _mountStore = require('./mountStore');

var _mountStore2 = _interopRequireDefault(_mountStore);

var _mountHelper = require('./mountHelper');

var _mountHelper2 = _interopRequireDefault(_mountHelper);

var _initCookie = require('./initCookie');

var _initCookie2 = _interopRequireDefault(_initCookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var app = _ref.app;

  // inject livereload feature
  if (_env2.default === 'development') {
    console.log('using livereload');
    var webpack = require('webpack');
    var config = require('../../../configs/env/webpack.config.dev');
    var compiler = webpack(config);

    app.use(require('webpack-dev-middleware')(compiler, {
      noInfo: true,
      publicPath: config.output.publicPath
    }));

    app.use(require('webpack-hot-middleware')(compiler));
  }

  // favicon
  app.use((0, _serveFavicon2.default)(_path2.default.join(__dirname, '../../public/img/logo.png')));

  // log request
  app.use(_morgan2.default);

  // static files
  app.use(_express2.default.static(_path2.default.join(__dirname, '../../public')));

  // mount redux store
  app.use(_mountStore2.default);

  // mount custom helpers
  app.use(_mountHelper2.default);

  // initialize cookie
  app.use(_initCookie2.default);

  // setup passport
  app.use(_passportInit2.default);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pZGRsZXdhcmVzL2luZGV4LmpzIl0sIm5hbWVzIjpbImFwcCIsImNvbnNvbGUiLCJsb2ciLCJ3ZWJwYWNrIiwicmVxdWlyZSIsImNvbmZpZyIsImNvbXBpbGVyIiwidXNlIiwibm9JbmZvIiwicHVibGljUGF0aCIsIm91dHB1dCIsImpvaW4iLCJfX2Rpcm5hbWUiLCJzdGF0aWMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O2tCQUVlLGdCQUFhO0FBQUEsTUFBVkEsR0FBVSxRQUFWQSxHQUFVOztBQUMxQjtBQUNBLE1BQUksa0JBQVEsYUFBWixFQUEyQjtBQUN6QkMsWUFBUUMsR0FBUixDQUFZLGtCQUFaO0FBQ0EsUUFBTUMsVUFBVUMsUUFBUSxTQUFSLENBQWhCO0FBQ0EsUUFBTUMsU0FBU0QsUUFBUSx5Q0FBUixDQUFmO0FBQ0EsUUFBTUUsV0FBV0gsUUFBUUUsTUFBUixDQUFqQjs7QUFFQUwsUUFBSU8sR0FBSixDQUFRSCxRQUFRLHdCQUFSLEVBQWtDRSxRQUFsQyxFQUE0QztBQUNsREUsY0FBUSxJQUQwQztBQUVsREMsa0JBQVlKLE9BQU9LLE1BQVAsQ0FBY0Q7QUFGd0IsS0FBNUMsQ0FBUjs7QUFLQVQsUUFBSU8sR0FBSixDQUFRSCxRQUFRLHdCQUFSLEVBQWtDRSxRQUFsQyxDQUFSO0FBQ0Q7O0FBRUQ7QUFDQU4sTUFBSU8sR0FBSixDQUFRLDRCQUFRLGVBQUtJLElBQUwsQ0FBVUMsU0FBVixFQUFxQiwyQkFBckIsQ0FBUixDQUFSOztBQUVBO0FBQ0FaLE1BQUlPLEdBQUo7O0FBRUE7QUFDQVAsTUFBSU8sR0FBSixDQUFRLGtCQUFRTSxNQUFSLENBQ04sZUFBS0YsSUFBTCxDQUFVQyxTQUFWLEVBQXFCLGNBQXJCLENBRE0sQ0FBUjs7QUFHQTtBQUNBWixNQUFJTyxHQUFKOztBQUVBO0FBQ0FQLE1BQUlPLEdBQUo7O0FBRUE7QUFDQVAsTUFBSU8sR0FBSjs7QUFFQTtBQUNBUCxNQUFJTyxHQUFKO0FBQ0QsQyIsImZpbGUiOiJtaWRkbGV3YXJlcy9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
