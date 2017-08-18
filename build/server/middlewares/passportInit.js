'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _passportJwt = require('passport-jwt');

var _passportFacebook = require('passport-facebook');

var _passportLinkedinOauth = require('passport-linkedin-oauth2');

var _server = require('../../../configs/project/server');

var _server2 = _interopRequireDefault(_server);

var _routeActions = require('../../common/actions/routeActions');

var _Errors = require('../../common/constants/Errors');

var _Errors2 = _interopRequireDefault(_Errors);

var _handleError = require('../decorators/handleError');

var _User = require('../models/User');

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cookieExtractor = function cookieExtractor(req) {
  return req.store.getState().cookies.token;
};

exports.default = function (req, res, next) {
  function findOrCreateUser(schemaProfileKey, email, cb) {
    if (!email) {
      res.pushError(_Errors2.default.AUTHORIZATION_FAIL, {
        requiredFields: ['email']
      });
      req.store.dispatch((0, _routeActions.redirect)('/user/login'));
      return next();
    }
    _User2.default.findOne({ 'email.value': email }, function (err, user) {
      if (err) {
        return cb(err);
      }
      if (!user) {
        user = new _User2.default({
          avatarURL: '' // overwrite default avatar
        });
      }
      if (!user.social.profile[schemaProfileKey]) {
        user.social.profile[schemaProfileKey] = {};
      }
      return cb(null, user);
    });
  }

  _passport2.default.use(new _passportJwt.Strategy({
    jwtFromRequest: cookieExtractor,
    secretOrKey: _server2.default.jwt.authentication.secret
  }, function (jwtPayload, done) {
    // this callback is invoked only when jwt token is correctly decoded
    _User2.default.findById(jwtPayload._id, (0, _handleError.handleDbError)(res)(function (user) {
      done(null, user);
    }));
  }));

  if (_server2.default.passportStrategy.facebook) {
    _passport2.default.use(new _passportFacebook.Strategy(_extends({}, _server2.default.passportStrategy.facebook.default, _server2.default.passportStrategy.facebook[process.env.NODE_ENV]), function (req, accessToken, refreshToken, profile, done) {
      findOrCreateUser('facebook', profile._json.email, (0, _handleError.handleDbError)(res)(function (user) {
        // map `facebook-specific` profile fields to our custom profile fields
        user.social.profile.facebook = profile._json;
        user.email.value = user.email.value || profile._json.email;
        user.name = user.name || profile._json.name;
        user.avatarURL = user.avatarURL || profile._json.picture.data.url;
        done(null, user);
      }));
    }));
  }

  if (_server2.default.passportStrategy.linkedin) {
    _passport2.default.use(new _passportLinkedinOauth.Strategy(_extends({}, _server2.default.passportStrategy.linkedin.default, _server2.default.passportStrategy.linkedin[process.env.NODE_ENV]), function (req, accessToken, refreshToken, profile, done) {
      findOrCreateUser('linkedin', profile._json.emailAddress, (0, _handleError.handleDbError)(res)(function (user) {
        // map `linkedin-specific` profile fields to our custom profile fields
        user.social.profile.linkedin = profile._json;
        user.email.value = user.email.value || profile._json.emailAddress;
        user.name = user.name || profile._json.formattedName;
        user.avatarURL = user.avatarURL || profile._json.pictureUrl;
        done(null, user);
      }));
    }));
  }

  _passport2.default.initialize()(req, res, next);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pZGRsZXdhcmVzL3Bhc3Nwb3J0SW5pdC5qcyJdLCJuYW1lcyI6WyJjb29raWVFeHRyYWN0b3IiLCJyZXEiLCJzdG9yZSIsImdldFN0YXRlIiwiY29va2llcyIsInRva2VuIiwicmVzIiwibmV4dCIsImZpbmRPckNyZWF0ZVVzZXIiLCJzY2hlbWFQcm9maWxlS2V5IiwiZW1haWwiLCJjYiIsInB1c2hFcnJvciIsIkFVVEhPUklaQVRJT05fRkFJTCIsInJlcXVpcmVkRmllbGRzIiwiZGlzcGF0Y2giLCJmaW5kT25lIiwiZXJyIiwidXNlciIsImF2YXRhclVSTCIsInNvY2lhbCIsInByb2ZpbGUiLCJ1c2UiLCJqd3RGcm9tUmVxdWVzdCIsInNlY3JldE9yS2V5Iiwiand0IiwiYXV0aGVudGljYXRpb24iLCJzZWNyZXQiLCJqd3RQYXlsb2FkIiwiZG9uZSIsImZpbmRCeUlkIiwiX2lkIiwicGFzc3BvcnRTdHJhdGVneSIsImZhY2Vib29rIiwiZGVmYXVsdCIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsImFjY2Vzc1Rva2VuIiwicmVmcmVzaFRva2VuIiwiX2pzb24iLCJ2YWx1ZSIsIm5hbWUiLCJwaWN0dXJlIiwiZGF0YSIsInVybCIsImxpbmtlZGluIiwiZW1haWxBZGRyZXNzIiwiZm9ybWF0dGVkTmFtZSIsInBpY3R1cmVVcmwiLCJpbml0aWFsaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7QUFFQSxJQUFJQSxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNDLEdBQUQsRUFBUztBQUM3QixTQUFPQSxJQUFJQyxLQUFKLENBQVVDLFFBQVYsR0FBcUJDLE9BQXJCLENBQTZCQyxLQUFwQztBQUNELENBRkQ7O2tCQUllLFVBQUNKLEdBQUQsRUFBTUssR0FBTixFQUFXQyxJQUFYLEVBQW9CO0FBQ2pDLFdBQVNDLGdCQUFULENBQTBCQyxnQkFBMUIsRUFBNENDLEtBQTVDLEVBQW1EQyxFQUFuRCxFQUF1RDtBQUNyRCxRQUFJLENBQUNELEtBQUwsRUFBWTtBQUNWSixVQUFJTSxTQUFKLENBQWMsaUJBQU9DLGtCQUFyQixFQUF5QztBQUN2Q0Msd0JBQWdCLENBQUMsT0FBRDtBQUR1QixPQUF6QztBQUdBYixVQUFJQyxLQUFKLENBQVVhLFFBQVYsQ0FBbUIsNEJBQVMsYUFBVCxDQUFuQjtBQUNBLGFBQU9SLE1BQVA7QUFDRDtBQUNELG1CQUFLUyxPQUFMLENBQWEsRUFBRSxlQUFlTixLQUFqQixFQUFiLEVBQXVDLFVBQUNPLEdBQUQsRUFBTUMsSUFBTixFQUFlO0FBQ3BELFVBQUlELEdBQUosRUFBUztBQUNQLGVBQU9OLEdBQUdNLEdBQUgsQ0FBUDtBQUNEO0FBQ0QsVUFBSSxDQUFDQyxJQUFMLEVBQVc7QUFDVEEsZUFBTyxtQkFBUztBQUNkQyxxQkFBVyxFQURHLENBQ0M7QUFERCxTQUFULENBQVA7QUFHRDtBQUNELFVBQUksQ0FBQ0QsS0FBS0UsTUFBTCxDQUFZQyxPQUFaLENBQW9CWixnQkFBcEIsQ0FBTCxFQUE0QztBQUMxQ1MsYUFBS0UsTUFBTCxDQUFZQyxPQUFaLENBQW9CWixnQkFBcEIsSUFBd0MsRUFBeEM7QUFDRDtBQUNELGFBQU9FLEdBQUcsSUFBSCxFQUFTTyxJQUFULENBQVA7QUFDRCxLQWJEO0FBY0Q7O0FBRUQscUJBQVNJLEdBQVQsQ0FBYSwwQkFBZ0I7QUFDM0JDLG9CQUFnQnZCLGVBRFc7QUFFM0J3QixpQkFBYSxpQkFBUUMsR0FBUixDQUFZQyxjQUFaLENBQTJCQztBQUZiLEdBQWhCLEVBR1YsVUFBQ0MsVUFBRCxFQUFhQyxJQUFiLEVBQXNCO0FBQ3ZCO0FBQ0EsbUJBQUtDLFFBQUwsQ0FBY0YsV0FBV0csR0FBekIsRUFBOEIsZ0NBQWN6QixHQUFkLEVBQW1CLFVBQUNZLElBQUQsRUFBVTtBQUN6RFcsV0FBSyxJQUFMLEVBQVdYLElBQVg7QUFDRCxLQUY2QixDQUE5QjtBQUdELEdBUlksQ0FBYjs7QUFVQSxNQUFJLGlCQUFRYyxnQkFBUixDQUF5QkMsUUFBN0IsRUFBdUM7QUFDckMsdUJBQVNYLEdBQVQsQ0FBYSw0Q0FDUixpQkFBUVUsZ0JBQVIsQ0FBeUJDLFFBQXpCLENBQWtDQyxPQUQxQixFQUVSLGlCQUFRRixnQkFBUixDQUF5QkMsUUFBekIsQ0FBa0NFLFFBQVFDLEdBQVIsQ0FBWUMsUUFBOUMsQ0FGUSxHQUdWLFVBQUNwQyxHQUFELEVBQU1xQyxXQUFOLEVBQW1CQyxZQUFuQixFQUFpQ2xCLE9BQWpDLEVBQTBDUSxJQUExQyxFQUFtRDtBQUNwRHJCLHVCQUNFLFVBREYsRUFFRWEsUUFBUW1CLEtBQVIsQ0FBYzlCLEtBRmhCLEVBR0UsZ0NBQWNKLEdBQWQsRUFBbUIsVUFBQ1ksSUFBRCxFQUFVO0FBQzNCO0FBQ0FBLGFBQUtFLE1BQUwsQ0FBWUMsT0FBWixDQUFvQlksUUFBcEIsR0FBK0JaLFFBQVFtQixLQUF2QztBQUNBdEIsYUFBS1IsS0FBTCxDQUFXK0IsS0FBWCxHQUFtQnZCLEtBQUtSLEtBQUwsQ0FBVytCLEtBQVgsSUFBb0JwQixRQUFRbUIsS0FBUixDQUFjOUIsS0FBckQ7QUFDQVEsYUFBS3dCLElBQUwsR0FBWXhCLEtBQUt3QixJQUFMLElBQWFyQixRQUFRbUIsS0FBUixDQUFjRSxJQUF2QztBQUNBeEIsYUFBS0MsU0FBTCxHQUFpQkQsS0FBS0MsU0FBTCxJQUFrQkUsUUFBUW1CLEtBQVIsQ0FBY0csT0FBZCxDQUFzQkMsSUFBdEIsQ0FBMkJDLEdBQTlEO0FBQ0FoQixhQUFLLElBQUwsRUFBV1gsSUFBWDtBQUNELE9BUEQsQ0FIRjtBQVdELEtBZlksQ0FBYjtBQWdCRDs7QUFFRCxNQUFJLGlCQUFRYyxnQkFBUixDQUF5QmMsUUFBN0IsRUFBdUM7QUFDckMsdUJBQVN4QixHQUFULENBQWEsaURBQ1IsaUJBQVFVLGdCQUFSLENBQXlCYyxRQUF6QixDQUFrQ1osT0FEMUIsRUFFUixpQkFBUUYsZ0JBQVIsQ0FBeUJjLFFBQXpCLENBQWtDWCxRQUFRQyxHQUFSLENBQVlDLFFBQTlDLENBRlEsR0FHVixVQUFDcEMsR0FBRCxFQUFNcUMsV0FBTixFQUFtQkMsWUFBbkIsRUFBaUNsQixPQUFqQyxFQUEwQ1EsSUFBMUMsRUFBbUQ7QUFDcERyQix1QkFDRSxVQURGLEVBRUVhLFFBQVFtQixLQUFSLENBQWNPLFlBRmhCLEVBR0UsZ0NBQWN6QyxHQUFkLEVBQW1CLFVBQUNZLElBQUQsRUFBVTtBQUMzQjtBQUNBQSxhQUFLRSxNQUFMLENBQVlDLE9BQVosQ0FBb0J5QixRQUFwQixHQUErQnpCLFFBQVFtQixLQUF2QztBQUNBdEIsYUFBS1IsS0FBTCxDQUFXK0IsS0FBWCxHQUFtQnZCLEtBQUtSLEtBQUwsQ0FBVytCLEtBQVgsSUFBb0JwQixRQUFRbUIsS0FBUixDQUFjTyxZQUFyRDtBQUNBN0IsYUFBS3dCLElBQUwsR0FBWXhCLEtBQUt3QixJQUFMLElBQWFyQixRQUFRbUIsS0FBUixDQUFjUSxhQUF2QztBQUNBOUIsYUFBS0MsU0FBTCxHQUFpQkQsS0FBS0MsU0FBTCxJQUFrQkUsUUFBUW1CLEtBQVIsQ0FBY1MsVUFBakQ7QUFDQXBCLGFBQUssSUFBTCxFQUFXWCxJQUFYO0FBQ0QsT0FQRCxDQUhGO0FBWUQsS0FoQlksQ0FBYjtBQWlCRDs7QUFFRCxxQkFBU2dDLFVBQVQsR0FBc0JqRCxHQUF0QixFQUEyQkssR0FBM0IsRUFBZ0NDLElBQWhDO0FBQ0QsQyIsImZpbGUiOiJtaWRkbGV3YXJlcy9wYXNzcG9ydEluaXQuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
