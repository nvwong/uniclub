'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // ref: <https://github.com/erikras/react-redux-universal-hot-example/blob/master/src/helpers/ApiClient.js>


var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

var _getPort = require('../../server/utils/getPort');

var _getPort2 = _interopRequireDefault(_getPort);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BASE = process.env.BROWSER ? '' : 'http://localhost:' + (0, _getPort2.default)();
var methods = ['get', 'post', 'put', 'patch', 'del'];

function formatUrl(path) {
  return '' + BASE + path;
}

var ApiEngine = function () {
  function ApiEngine(req) {
    var _this = this;

    _classCallCheck(this, ApiEngine);

    methods.forEach(function (method) {
      _this[method] = function (path) {
        var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            params = _ref.params,
            data = _ref.data,
            files = _ref.files;

        return new Promise(function (resolve, reject) {
          var request = _superagent2.default[method](formatUrl(path));

          if (params) {
            request.query(params);
          }

          if (!process.env.BROWSER && req.get('cookie')) {
            request.set('cookie', req.get('cookie'));
          }

          if (data) {
            request.send(data);
          }

          if (files) {
            var formData = new FormData();
            Object.keys(files).forEach(function (name) {
              formData.append(name, files[name]);
            });
            request.send(formData);
          }

          request.end(function (err) {
            var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                body = _ref2.body;

            if (err) {
              return reject(body || err);
            }
            if (body.errors && body.errors.length > 0) {
              return reject(body.errors);
            }
            return resolve(body);
          });
        });
      };
    });
  }
  /*
   * There's a V8 bug where, when using Babel, exporting classes with only
   * constructors sometimes fails. Until it's patched, this is a solution to
   * "ApiClient is not defined" from issue #14.
   * https://github.com/erikras/react-redux-universal-hot-example/issues/14
   *
   * Relevant Babel bug (but they claim it's V8): https://phabricator.babeljs.io/T2455
   *
   * Remove it at your own risk.
   */


  _createClass(ApiEngine, [{
    key: 'empty',
    value: function empty() {}
  }]);

  return ApiEngine;
}();

exports.default = ApiEngine;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL0FwaUVuZ2luZS5qcyJdLCJuYW1lcyI6WyJCQVNFIiwicHJvY2VzcyIsImVudiIsIkJST1dTRVIiLCJtZXRob2RzIiwiZm9ybWF0VXJsIiwicGF0aCIsIkFwaUVuZ2luZSIsInJlcSIsImZvckVhY2giLCJtZXRob2QiLCJwYXJhbXMiLCJkYXRhIiwiZmlsZXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlcXVlc3QiLCJxdWVyeSIsImdldCIsInNldCIsInNlbmQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiT2JqZWN0Iiwia2V5cyIsIm5hbWUiLCJhcHBlbmQiLCJlbmQiLCJlcnIiLCJib2R5IiwiZXJyb3JzIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O3FqQkFBQTs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRQyxHQUFSLENBQVlDLE9BQVosR0FBc0IsRUFBdEIseUJBQStDLHdCQUE1RDtBQUNBLElBQU1DLFVBQVUsQ0FBQyxLQUFELEVBQVEsTUFBUixFQUFnQixLQUFoQixFQUF1QixPQUF2QixFQUFnQyxLQUFoQyxDQUFoQjs7QUFFQSxTQUFTQyxTQUFULENBQW1CQyxJQUFuQixFQUF5QjtBQUN2QixjQUFVTixJQUFWLEdBQWlCTSxJQUFqQjtBQUNEOztJQUVvQkMsUztBQUNuQixxQkFBWUMsR0FBWixFQUFpQjtBQUFBOztBQUFBOztBQUNmSixZQUFRSyxPQUFSLENBQWdCLFVBQUNDLE1BQUQsRUFBWTtBQUMxQixZQUFLQSxNQUFMLElBQWUsVUFBQ0osSUFBRCxFQUF3QztBQUFBLHVGQUFQLEVBQU87QUFBQSxZQUEvQkssTUFBK0IsUUFBL0JBLE1BQStCO0FBQUEsWUFBdkJDLElBQXVCLFFBQXZCQSxJQUF1QjtBQUFBLFlBQWpCQyxLQUFpQixRQUFqQkEsS0FBaUI7O0FBQ3JELGVBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0QyxjQUFNQyxVQUFVLHFCQUFXUCxNQUFYLEVBQW1CTCxVQUFVQyxJQUFWLENBQW5CLENBQWhCOztBQUVBLGNBQUlLLE1BQUosRUFBWTtBQUNWTSxvQkFBUUMsS0FBUixDQUFjUCxNQUFkO0FBQ0Q7O0FBRUQsY0FBSSxDQUFDVixRQUFRQyxHQUFSLENBQVlDLE9BQWIsSUFBd0JLLElBQUlXLEdBQUosQ0FBUSxRQUFSLENBQTVCLEVBQStDO0FBQzdDRixvQkFBUUcsR0FBUixDQUFZLFFBQVosRUFBc0JaLElBQUlXLEdBQUosQ0FBUSxRQUFSLENBQXRCO0FBQ0Q7O0FBRUQsY0FBSVAsSUFBSixFQUFVO0FBQ1JLLG9CQUFRSSxJQUFSLENBQWFULElBQWI7QUFDRDs7QUFFRCxjQUFJQyxLQUFKLEVBQVc7QUFDVCxnQkFBSVMsV0FBVyxJQUFJQyxRQUFKLEVBQWY7QUFDQUMsbUJBQU9DLElBQVAsQ0FBWVosS0FBWixFQUFtQkosT0FBbkIsQ0FBMkIsVUFBQ2lCLElBQUQsRUFBVTtBQUNuQ0osdUJBQVNLLE1BQVQsQ0FBZ0JELElBQWhCLEVBQXNCYixNQUFNYSxJQUFOLENBQXRCO0FBQ0QsYUFGRDtBQUdBVCxvQkFBUUksSUFBUixDQUFhQyxRQUFiO0FBQ0Q7O0FBRURMLGtCQUFRVyxHQUFSLENBQVksVUFBQ0MsR0FBRCxFQUF3QjtBQUFBLDRGQUFQLEVBQU87QUFBQSxnQkFBaEJDLElBQWdCLFNBQWhCQSxJQUFnQjs7QUFDbEMsZ0JBQUlELEdBQUosRUFBUztBQUNQLHFCQUFPYixPQUFPYyxRQUFRRCxHQUFmLENBQVA7QUFDRDtBQUNELGdCQUFJQyxLQUFLQyxNQUFMLElBQWVELEtBQUtDLE1BQUwsQ0FBWUMsTUFBWixHQUFxQixDQUF4QyxFQUEyQztBQUN6QyxxQkFBT2hCLE9BQU9jLEtBQUtDLE1BQVosQ0FBUDtBQUNEO0FBQ0QsbUJBQU9oQixRQUFRZSxJQUFSLENBQVA7QUFDRCxXQVJEO0FBU0QsU0FoQ00sQ0FBUDtBQWlDRCxPQWxDRDtBQW1DRCxLQXBDRDtBQXFDRDtBQUNEOzs7Ozs7Ozs7Ozs7Ozs0QkFVUSxDQUFFOzs7Ozs7a0JBbERTdkIsUyIsImZpbGUiOiJ1dGlscy9BcGlFbmdpbmUuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
