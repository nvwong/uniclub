'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

var _getPort = require('./utils/getPort');

var _getPort2 = _interopRequireDefault(_getPort);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_app2.default.catch(function (err) {
  console.log(err.stack);
}).then(function (app) {
  // launch server
  var port = (0, _getPort2.default)();
  app.listen(port, function (err) {
    if (err) {
      throw err;
    }
    if (app.get('env') !== 'test') {
      console.log('Listening at port', port);
    }
  });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlci5qcyJdLCJuYW1lcyI6WyJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJzdGFjayIsInRoZW4iLCJhcHAiLCJwb3J0IiwibGlzdGVuIiwiZ2V0Il0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBLGNBQ0dBLEtBREgsQ0FDUyxVQUFDQyxHQUFELEVBQVM7QUFDZEMsVUFBUUMsR0FBUixDQUFZRixJQUFJRyxLQUFoQjtBQUNELENBSEgsRUFJR0MsSUFKSCxDQUlRLFVBQUNDLEdBQUQsRUFBUztBQUNiO0FBQ0EsTUFBTUMsT0FBTyx3QkFBYjtBQUNBRCxNQUFJRSxNQUFKLENBQVdELElBQVgsRUFBaUIsVUFBQ04sR0FBRCxFQUFTO0FBQ3hCLFFBQUlBLEdBQUosRUFBUztBQUNQLFlBQU1BLEdBQU47QUFDRDtBQUNELFFBQUlLLElBQUlHLEdBQUosQ0FBUSxLQUFSLE1BQW1CLE1BQXZCLEVBQStCO0FBQzdCUCxjQUFRQyxHQUFSLENBQVksbUJBQVosRUFBaUNJLElBQWpDO0FBQ0Q7QUFDRixHQVBEO0FBUUQsQ0FmSCIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
