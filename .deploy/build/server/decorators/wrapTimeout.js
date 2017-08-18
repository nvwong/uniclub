'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var wrapTimeout = function wrapTimeout(milliseconds) {
  return function (fn) {
    return function (req, res, next) {
      var t = setTimeout(function () {
        console.log('-- time out --');
        console.log('url:', req.url);
        console.log('--------------');
        next();
      }, milliseconds);
      var done = function done() {
        clearTimeout(t);
        next.apply(undefined, arguments);
      };
      fn(req, res, done);
    };
  };
};

exports.default = wrapTimeout;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlY29yYXRvcnMvd3JhcFRpbWVvdXQuanMiXSwibmFtZXMiOlsid3JhcFRpbWVvdXQiLCJtaWxsaXNlY29uZHMiLCJmbiIsInJlcSIsInJlcyIsIm5leHQiLCJ0Iiwic2V0VGltZW91dCIsImNvbnNvbGUiLCJsb2ciLCJ1cmwiLCJkb25lIiwiY2xlYXJUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQU1BLGNBQWMsU0FBZEEsV0FBYyxDQUFDQyxZQUFEO0FBQUEsU0FBa0IsVUFBQ0MsRUFBRDtBQUFBLFdBQVEsVUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQVdDLElBQVgsRUFBb0I7QUFDaEUsVUFBSUMsSUFBSUMsV0FBVyxZQUFNO0FBQ3ZCQyxnQkFBUUMsR0FBUixDQUFZLGdCQUFaO0FBQ0FELGdCQUFRQyxHQUFSLENBQVksTUFBWixFQUFvQk4sSUFBSU8sR0FBeEI7QUFDQUYsZ0JBQVFDLEdBQVIsQ0FBWSxnQkFBWjtBQUNBSjtBQUNELE9BTE8sRUFLTEosWUFMSyxDQUFSO0FBTUEsVUFBSVUsT0FBTyxTQUFQQSxJQUFPLEdBQWE7QUFDdEJDLHFCQUFhTixDQUFiO0FBQ0FEO0FBQ0QsT0FIRDtBQUlBSCxTQUFHQyxHQUFILEVBQVFDLEdBQVIsRUFBYU8sSUFBYjtBQUNELEtBWnFDO0FBQUEsR0FBbEI7QUFBQSxDQUFwQjs7a0JBY2VYLFciLCJmaWxlIjoiZGVjb3JhdG9ycy93cmFwVGltZW91dC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
