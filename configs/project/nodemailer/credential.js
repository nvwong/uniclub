module.exports = {
  // ref:
  //   - <https://github.com/nodemailer/nodemailer#using-well-known-services>
  //   - <https://github.com/nodemailer/nodemailer-wellknown#supported-services>
  development: {
    service: 'gmail',
    auth: {
      user: 'nvwongtesting@gmail.com',
      pass: 'dqwcopskzwmiidcq',
    },
  },
  test: {
    service: 'gmail',
    auth: {
      user: 'nvwongtesting@gmail.com',
      pass: 'dqwcopskzwmiidcq',
    },
  },
  production: {
    service: 'gmail',
    auth: {
      user: 'nvwongtesting@gmail.com',
      pass: 'dqwcopskzwmiidcq',
    },
  },
};
