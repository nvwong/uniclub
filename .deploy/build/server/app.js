'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _env = require('./utils/env');

var _env2 = _interopRequireDefault(_env);

require('./webpackIsomorphicToolsInjector');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _server = require('../../configs/project/server');

var _server2 = _interopRequireDefault(_server);

var _client = require('../../configs/project/client');

var _client2 = _interopRequireDefault(_client);

var _middlewares = require('./middlewares');

var _middlewares2 = _interopRequireDefault(_middlewares);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appPromise = new Promise(function (resolve, reject) {
  var app = (0, _express2.default)();
  app.set('env', _env2.default);

  // error handler for the whole app process
  process.on('uncaughtException', function (err) {
    console.log('uncaughtException', err);
    process.exit(1);
  });

  process.on('unhandledRejection', function (reason, p) {
    throw reason;
  });

  // initialize firebase
  if (_server2.default.firebase && _client2.default.firebase) {
    var firebase = require('firebase');
    firebase.initializeApp({
      serviceAccount: _server2.default.firebase,
      databaseURL: _client2.default.firebase.databaseURL
    });
    if (_env2.default !== 'test') {
      console.log('[Service] [Firebase]\tenabled');
    }
  } else {
    if (_env2.default !== 'test') {
      console.log('[Service] [Firebase]\tdisabled');
    }
  }

  // connect to mongolab
  if (_server2.default.mongo) {
    _mongoose2.default.connect(_server2.default.mongo[_env2.default], function (err) {
      if (err) {
        throw err;
      }
      if (_env2.default !== 'test') {
        console.log('[Service] [Mongo]\tenabled');
      }
      (0, _middlewares2.default)({ app: app });
      (0, _routes2.default)({ app: app });
      // error handler for the current request
      app.use(function (err, req, res, next) {
        console.error(err.stack);
        if (_env2.default !== 'production') {
          res.status(500).send('<pre>' + err.stack + '</pre>');
        } else {
          res.status(500).send('Service Unavailable');
        }
      });
      return resolve(app);
    });
  } else {
    if (_env2.default !== 'test') {
      console.log('[Service] [Mongo]\tdisabled');
    }
    return reject(new Error('MongoDB URI is required'));
  }
});
// just import the injector and don't use it as normal promise
// otherwise you will go into a deadlock
// (webpackIsomorphicTools is waiting for server's webpack-dev-middleware to compiler,
// and the server is waiting for webpackIsomorphicTools' after-compilation-callback)
exports.default = appPromise;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJhcHBQcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJhcHAiLCJzZXQiLCJwcm9jZXNzIiwib24iLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZXhpdCIsInJlYXNvbiIsInAiLCJmaXJlYmFzZSIsInJlcXVpcmUiLCJpbml0aWFsaXplQXBwIiwic2VydmljZUFjY291bnQiLCJkYXRhYmFzZVVSTCIsIm1vbmdvIiwiY29ubmVjdCIsInVzZSIsInJlcSIsInJlcyIsIm5leHQiLCJlcnJvciIsInN0YWNrIiwic3RhdHVzIiwic2VuZCIsIkVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUtBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsYUFBYSxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ2xELE1BQU1DLE1BQU0sd0JBQVo7QUFDQUEsTUFBSUMsR0FBSixDQUFRLEtBQVI7O0FBRUE7QUFDQUMsVUFBUUMsRUFBUixDQUFXLG1CQUFYLEVBQWdDLFVBQUNDLEdBQUQsRUFBUztBQUN2Q0MsWUFBUUMsR0FBUixDQUFZLG1CQUFaLEVBQWlDRixHQUFqQztBQUNBRixZQUFRSyxJQUFSLENBQWEsQ0FBYjtBQUNELEdBSEQ7O0FBS0FMLFVBQVFDLEVBQVIsQ0FBVyxvQkFBWCxFQUFpQyxVQUFDSyxNQUFELEVBQVNDLENBQVQsRUFBZTtBQUM5QyxVQUFNRCxNQUFOO0FBQ0QsR0FGRDs7QUFJQTtBQUNBLE1BQUksaUJBQVFFLFFBQVIsSUFBb0IsaUJBQWNBLFFBQXRDLEVBQWdEO0FBQzlDLFFBQUlBLFdBQVdDLFFBQVEsVUFBUixDQUFmO0FBQ0FELGFBQVNFLGFBQVQsQ0FBdUI7QUFDckJDLHNCQUFnQixpQkFBUUgsUUFESDtBQUVyQkksbUJBQWEsaUJBQWNKLFFBQWQsQ0FBdUJJO0FBRmYsS0FBdkI7QUFJQSxRQUFJLGtCQUFRLE1BQVosRUFBb0I7QUFDbEJULGNBQVFDLEdBQVIsQ0FBWSwrQkFBWjtBQUNEO0FBQ0YsR0FURCxNQVNPO0FBQ0wsUUFBSSxrQkFBUSxNQUFaLEVBQW9CO0FBQ2xCRCxjQUFRQyxHQUFSLENBQVksZ0NBQVo7QUFDRDtBQUNGOztBQUVEO0FBQ0EsTUFBSSxpQkFBUVMsS0FBWixFQUFtQjtBQUNqQix1QkFBU0MsT0FBVCxDQUFpQixpQkFBUUQsS0FBUixlQUFqQixFQUFxQyxVQUFDWCxHQUFELEVBQVM7QUFDNUMsVUFBSUEsR0FBSixFQUFTO0FBQ1AsY0FBTUEsR0FBTjtBQUNEO0FBQ0QsVUFBSSxrQkFBUSxNQUFaLEVBQW9CO0FBQ2xCQyxnQkFBUUMsR0FBUixDQUFZLDRCQUFaO0FBQ0Q7QUFDRCxpQ0FBWSxFQUFFTixRQUFGLEVBQVo7QUFDQSw0QkFBTyxFQUFFQSxRQUFGLEVBQVA7QUFDQTtBQUNBQSxVQUFJaUIsR0FBSixDQUFRLFVBQUNiLEdBQUQsRUFBTWMsR0FBTixFQUFXQyxHQUFYLEVBQWdCQyxJQUFoQixFQUF5QjtBQUMvQmYsZ0JBQVFnQixLQUFSLENBQWNqQixJQUFJa0IsS0FBbEI7QUFDQSxZQUFJLGtCQUFRLFlBQVosRUFBMEI7QUFDeEJILGNBQUlJLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixXQUE2QnBCLElBQUlrQixLQUFqQztBQUNELFNBRkQsTUFFTztBQUNMSCxjQUFJSSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUIscUJBQXJCO0FBQ0Q7QUFDRixPQVBEO0FBUUEsYUFBTzFCLFFBQVFFLEdBQVIsQ0FBUDtBQUNELEtBbkJEO0FBb0JELEdBckJELE1BcUJPO0FBQ0wsUUFBSSxrQkFBUSxNQUFaLEVBQW9CO0FBQ2xCSyxjQUFRQyxHQUFSLENBQVksNkJBQVo7QUFDRDtBQUNELFdBQU9QLE9BQU8sSUFBSTBCLEtBQUosQ0FBVSx5QkFBVixDQUFQLENBQVA7QUFDRDtBQUNGLENBMURrQixDQUFuQjtBQVpBO0FBQ0E7QUFDQTtBQUNBO2tCQXFFZTdCLFUiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
