'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _passportAuth = require('../middlewares/passportAuth');

var _passportAuth2 = _interopRequireDefault(_passportAuth);

var _socialAuth = require('../controllers/socialAuth');

var _socialAuth2 = _interopRequireDefault(_socialAuth);

var _user = require('../controllers/user');

var _user2 = _interopRequireDefault(_user);

var _server = require('../../../configs/project/server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var app = _ref.app;

  // facebook
  if (_server2.default.passportStrategy.facebook) {
    app.get('/auth/facebook', _socialAuth2.default.initFacebook);
    app.get('/auth/facebook/callback', (0, _passportAuth2.default)('facebook'), _user2.default.socialLogin);
  } else {
    app.get('/auth/facebook', _socialAuth2.default.setupError);
  }
  // linkedin
  if (_server2.default.passportStrategy.linkedin) {
    app.get('/auth/linkedin', _socialAuth2.default.initLinkedin);
    app.get('/auth/linkedin/callback', (0, _passportAuth2.default)('linkedin'), _user2.default.socialLogin);
  } else {
    app.get('/auth/linkedin', _socialAuth2.default.setupError);
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy9zb2NpYWxBdXRoLmpzIl0sIm5hbWVzIjpbImFwcCIsInBhc3Nwb3J0U3RyYXRlZ3kiLCJmYWNlYm9vayIsImdldCIsImluaXRGYWNlYm9vayIsInNvY2lhbExvZ2luIiwic2V0dXBFcnJvciIsImxpbmtlZGluIiwiaW5pdExpbmtlZGluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O2tCQUVlLGdCQUFhO0FBQUEsTUFBVkEsR0FBVSxRQUFWQSxHQUFVOztBQUMxQjtBQUNBLE1BQUksaUJBQVFDLGdCQUFSLENBQXlCQyxRQUE3QixFQUF1QztBQUNyQ0YsUUFBSUcsR0FBSixDQUFRLGdCQUFSLEVBQTBCLHFCQUFxQkMsWUFBL0M7QUFDQUosUUFBSUcsR0FBSixDQUFRLHlCQUFSLEVBQ0UsNEJBQWEsVUFBYixDQURGLEVBRUUsZUFBZUUsV0FGakI7QUFJRCxHQU5ELE1BTU87QUFDTEwsUUFBSUcsR0FBSixDQUFRLGdCQUFSLEVBQTBCLHFCQUFxQkcsVUFBL0M7QUFDRDtBQUNEO0FBQ0EsTUFBSSxpQkFBUUwsZ0JBQVIsQ0FBeUJNLFFBQTdCLEVBQXVDO0FBQ3JDUCxRQUFJRyxHQUFKLENBQVEsZ0JBQVIsRUFBMEIscUJBQXFCSyxZQUEvQztBQUNBUixRQUFJRyxHQUFKLENBQVEseUJBQVIsRUFDRSw0QkFBYSxVQUFiLENBREYsRUFFRSxlQUFlRSxXQUZqQjtBQUlELEdBTkQsTUFNTztBQUNMTCxRQUFJRyxHQUFKLENBQVEsZ0JBQVIsRUFBMEIscUJBQXFCRyxVQUEvQztBQUNEO0FBQ0YsQyIsImZpbGUiOiJyb3V0ZXMvc29jaWFsQXV0aC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
