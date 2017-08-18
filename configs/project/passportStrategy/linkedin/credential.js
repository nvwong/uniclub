module.exports = {
  default: {
    scope: ['r_basicprofile', 'r_emailaddress'],
    passReqToCallback: true,
  },
  development: {
    clientID: '819xll0ukavtnj',
    clientSecret: 'BjuhFbSRtxjV9QyZ',
    callbackURL: 'http://localhost:3000/auth/linkedin/callback',
  },
  test: {
    clientID: '819xll0ukavtnj',
    clientSecret: 'BjuhFbSRtxjV9QyZ',
    callbackURL: 'http://localhost:5566/auth/linkedin/callback',
  },
  production: {
    clientID: '819xll0ukavtnj',
    clientSecret: 'BjuhFbSRtxjV9QyZ',
    callbackURL: 'https://express-react-hmr-boilerplate.herokuapp.com/auth/linkedin/callback',
  },
};
