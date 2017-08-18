module.exports = {
  default: {
    // ref: <https://developers.facebook.com/docs/graph-api/reference/user>
    profileFields: ['id', 'displayName', 'email', 'picture'],
  },
  development: {
    clientID: '277006926119026',
    clientSecret: '1213a1ae6ec5b651216da8342b689eb7',
    callbackURL: 'http://localhost:3000/auth/facebook/callback',
  },
  test: {
    clientID: '277006926119026',
    clientSecret: '1213a1ae6ec5b651216da8342b689eb7',
    callbackURL: 'http://localhost:5566/auth/facebook/callback',
  },
  production: {
    clientID: '277006926119026',
    clientSecret: '1213a1ae6ec5b651216da8342b689eb7',
    callbackURL: 'https://uniclub123.herokuapp.com/auth/facebook/callback',
  },
};
