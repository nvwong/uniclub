'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  setupError: function setupError(req, res) {
    res.send('Please setup and turn on `passportStrategy.&lt;social provider&gt;` ' + 'of config file `configs/project/server.js`');
  },
  initFacebook: function initFacebook(req, res, next) {
    return _passport2.default.authenticate('facebook', {
      scope: ['public_profile', 'email'],
      state: JSON.stringify({ next: req.query.next })
    })(req, res, next);
  },
  initLinkedin: function initLinkedin(req, res, next) {
    return _passport2.default.authenticate('linkedin', {
      state: JSON.stringify({
        next: req.query.next,
        random: Math.random()
      })
    })(req, res, next);
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL3NvY2lhbEF1dGguanMiXSwibmFtZXMiOlsic2V0dXBFcnJvciIsInJlcSIsInJlcyIsInNlbmQiLCJpbml0RmFjZWJvb2siLCJuZXh0IiwiYXV0aGVudGljYXRlIiwic2NvcGUiLCJzdGF0ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJxdWVyeSIsImluaXRMaW5rZWRpbiIsInJhbmRvbSIsIk1hdGgiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7a0JBRWU7QUFDYkEsY0FBWSxvQkFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDeEJBLFFBQUlDLElBQUosQ0FDRSx5RUFDQSw0Q0FGRjtBQUlELEdBTlk7QUFPYkMsZ0JBQWMsc0JBQUNILEdBQUQsRUFBTUMsR0FBTixFQUFXRyxJQUFYO0FBQUEsV0FDWixtQkFBU0MsWUFBVCxDQUFzQixVQUF0QixFQUFrQztBQUNoQ0MsYUFBTyxDQUFDLGdCQUFELEVBQW1CLE9BQW5CLENBRHlCO0FBRWhDQyxhQUFPQyxLQUFLQyxTQUFMLENBQWUsRUFBRUwsTUFBTUosSUFBSVUsS0FBSixDQUFVTixJQUFsQixFQUFmO0FBRnlCLEtBQWxDLEVBR0dKLEdBSEgsRUFHUUMsR0FIUixFQUdhRyxJQUhiLENBRFk7QUFBQSxHQVBEO0FBYWJPLGdCQUFjLHNCQUFDWCxHQUFELEVBQU1DLEdBQU4sRUFBV0csSUFBWDtBQUFBLFdBQ1osbUJBQVNDLFlBQVQsQ0FBc0IsVUFBdEIsRUFBa0M7QUFDaENFLGFBQU9DLEtBQUtDLFNBQUwsQ0FBZTtBQUNwQkwsY0FBTUosSUFBSVUsS0FBSixDQUFVTixJQURJO0FBRXBCUSxnQkFBUUMsS0FBS0QsTUFBTDtBQUZZLE9BQWY7QUFEeUIsS0FBbEMsRUFLR1osR0FMSCxFQUtRQyxHQUxSLEVBS2FHLElBTGIsQ0FEWTtBQUFBO0FBYkQsQyIsImZpbGUiOiJjb250cm9sbGVycy9zb2NpYWxBdXRoLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
