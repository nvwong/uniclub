'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var args = process.argv.slice(2);
  var portIndex = args.indexOf('-p');
  var argPort = null;
  if (portIndex >= 0) {
    argPort = parseInt(args[portIndex + 1]);
  }
  return process.env.PORT || argPort || 3000;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL2dldFBvcnQuanMiXSwibmFtZXMiOlsiYXJncyIsInByb2Nlc3MiLCJhcmd2Iiwic2xpY2UiLCJwb3J0SW5kZXgiLCJpbmRleE9mIiwiYXJnUG9ydCIsInBhcnNlSW50IiwiZW52IiwiUE9SVCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2tCQUFlLFlBQU07QUFDbkIsTUFBTUEsT0FBT0MsUUFBUUMsSUFBUixDQUFhQyxLQUFiLENBQW1CLENBQW5CLENBQWI7QUFDQSxNQUFNQyxZQUFZSixLQUFLSyxPQUFMLENBQWEsSUFBYixDQUFsQjtBQUNBLE1BQUlDLFVBQVUsSUFBZDtBQUNBLE1BQUlGLGFBQWEsQ0FBakIsRUFBb0I7QUFDbEJFLGNBQVVDLFNBQVNQLEtBQUtJLFlBQVksQ0FBakIsQ0FBVCxDQUFWO0FBQ0Q7QUFDRCxTQUFPSCxRQUFRTyxHQUFSLENBQVlDLElBQVosSUFBb0JILE9BQXBCLElBQStCLElBQXRDO0FBQ0QsQyIsImZpbGUiOiJ1dGlscy9nZXRQb3J0LmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
