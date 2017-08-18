'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _env = require('../utils/env');

var _env2 = _interopRequireDefault(_env);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _pass = require('./pass');

var _pass2 = _interopRequireDefault(_pass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_morgan2.default.token('colorStatus', function (req, res) {
  var status = res.statusCode;
  var color = '';

  if (status < 200) {
    // 1xx
    color = '\x1b[0m';
  } else if (status < 300) {
    // 2xx
    color = '\x1b[0;32m';
  } else if (status < 400) {
    // 3xx
    color = '\x1b[1;33m';
  } else if (status < 500) {
    // 4xx
    color = '\x1b[0;31m';
  } else {
    // 5xx
    color = '\x1b[0;35m';
  }

  return color + status + '\x1b[0m';
});

var morganMiddleware = null;
if (_env2.default === 'development') {
  morganMiddleware = (0, _morgan2.default)('\x1b[1;30m' + '[:date[iso]] ' + '\x1b[0m' + ':remote-addr\t' + ':colorStatus ' + ':method ' + ':url\t' + '\x1b[0m' + ':res[content-length] - ' + '\x1b[0;36m' + ':response-time ms' + '\x1b[0m');
} else if (_env2.default === 'test') {
  morganMiddleware = _pass2.default;
} else if (_env2.default === 'production') {
  morganMiddleware = (0, _morgan2.default)('[:date[iso]] ' + ':remote-addr\t' + ':status ' + ':method ' + ':url\t' + ':res[content-length] - ' + ':response-time ms');
}
exports.default = morganMiddleware;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pZGRsZXdhcmVzL21vcmdhbi5qcyJdLCJuYW1lcyI6WyJ0b2tlbiIsInJlcSIsInJlcyIsInN0YXR1cyIsInN0YXR1c0NvZGUiLCJjb2xvciIsIm1vcmdhbk1pZGRsZXdhcmUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsaUJBQU9BLEtBQVAsQ0FBYSxhQUFiLEVBQTRCLFVBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQ3hDLE1BQU1DLFNBQVNELElBQUlFLFVBQW5CO0FBQ0EsTUFBSUMsUUFBUSxFQUFaOztBQUVBLE1BQUlGLFNBQVMsR0FBYixFQUFrQjtBQUNoQjtBQUNBRSxZQUFRLFNBQVI7QUFDRCxHQUhELE1BR08sSUFBSUYsU0FBUyxHQUFiLEVBQWtCO0FBQ3ZCO0FBQ0FFLFlBQVEsWUFBUjtBQUNELEdBSE0sTUFHQSxJQUFJRixTQUFTLEdBQWIsRUFBa0I7QUFDdkI7QUFDQUUsWUFBUSxZQUFSO0FBQ0QsR0FITSxNQUdBLElBQUlGLFNBQVMsR0FBYixFQUFrQjtBQUN2QjtBQUNBRSxZQUFRLFlBQVI7QUFDRCxHQUhNLE1BR0E7QUFDTDtBQUNBQSxZQUFRLFlBQVI7QUFDRDs7QUFFRCxTQUFPQSxRQUFRRixNQUFSLEdBQWlCLFNBQXhCO0FBQ0QsQ0F0QkQ7O0FBd0JBLElBQUlHLG1CQUFtQixJQUF2QjtBQUNBLElBQUksa0JBQVEsYUFBWixFQUEyQjtBQUN6QkEscUJBQW1CLHNCQUNqQixlQUFlLGVBQWYsR0FDQSxTQURBLEdBQ2UsZ0JBRGYsR0FFZSxlQUZmLEdBR2UsVUFIZixHQUllLFFBSmYsR0FLQSxTQUxBLEdBS2UseUJBTGYsR0FNQSxZQU5BLEdBTWUsbUJBTmYsR0FPQSxTQVJpQixDQUFuQjtBQVVELENBWEQsTUFXTyxJQUFJLGtCQUFRLE1BQVosRUFBb0I7QUFDekJBO0FBQ0QsQ0FGTSxNQUVBLElBQUksa0JBQVEsWUFBWixFQUEwQjtBQUMvQkEscUJBQW1CLHNCQUNqQixrQkFDQSxnQkFEQSxHQUVBLFVBRkEsR0FHQSxVQUhBLEdBSUEsUUFKQSxHQUtBLHlCQUxBLEdBTUEsbUJBUGlCLENBQW5CO0FBU0Q7a0JBQ2NBLGdCIiwiZmlsZSI6Im1pZGRsZXdhcmVzL21vcmdhbi5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
