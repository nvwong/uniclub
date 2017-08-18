'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _server = require('../../../configs/project/server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (baseURL, token) {
  return '' + _server2.default.host[process.env.NODE_ENV] + baseURL + '?token=' + token;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL3Rva2VuVG9VUkwuanMiXSwibmFtZXMiOlsiYmFzZVVSTCIsInRva2VuIiwiaG9zdCIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7OztrQkFFZSxVQUFDQSxPQUFELEVBQVVDLEtBQVY7QUFBQSxjQUNWLGlCQUFRQyxJQUFSLENBQWFDLFFBQVFDLEdBQVIsQ0FBWUMsUUFBekIsQ0FEVSxHQUMyQkwsT0FEM0IsZUFDNENDLEtBRDVDO0FBQUEsQyIsImZpbGUiOiJ1dGlscy90b2tlblRvVVJMLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
