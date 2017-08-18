'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _Errors = require('../../common/constants/Errors');

var _Errors2 = _interopRequireDefault(_Errors);

var _nodemailer = require('../api/nodemailer');

var _nodemailer2 = _interopRequireDefault(_nodemailer);

var _VerifyEmailMail = require('../components/VerifyEmailMail');

var _VerifyEmailMail2 = _interopRequireDefault(_VerifyEmailMail);

var _ResetPasswordMail = require('../components/ResetPasswordMail');

var _ResetPasswordMail2 = _interopRequireDefault(_ResetPasswordMail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  sendVerification: function sendVerification(req, res) {
    var user = req.user;

    var token = user.toVerifyEmailToken();

    (0, _nodemailer2.default)().sendMail(_extends({}, process.env.NODE_ENV === 'production' ? { to: user.email.value } : {}, {
      subject: 'Email Verification',
      html: (0, _server.renderToString)(_react2.default.createElement(_VerifyEmailMail2.default, { token: token }))
    })).catch(function (err) {
      res.errors([_Errors2.default.SEND_EMAIL_FAIL]);
      throw err;
    }).then(function (info) {
      res.json({
        user: user,
        email: info && info.envelope
      });
    });
  },
  sendResetPasswordLink: function sendResetPasswordLink(req, res) {
    var user = req.user;

    var token = user.toResetPasswordToken();

    (0, _nodemailer2.default)().sendMail(_extends({}, process.env.NODE_ENV === 'production' ? { to: user.email.value } : {}, {
      subject: 'Reset Password Request',
      html: (0, _server.renderToString)(_react2.default.createElement(_ResetPasswordMail2.default, {
        requestedAt: new Date(),
        token: token
      }))
    })).catch(function (err) {
      res.errors([_Errors2.default.SEND_EMAIL_FAIL]);
      throw err;
    }).then(function (info) {
      res.json({
        email: info.envelope
      });
    });
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL21haWwuanMiXSwibmFtZXMiOlsic2VuZFZlcmlmaWNhdGlvbiIsInJlcSIsInJlcyIsInVzZXIiLCJ0b2tlbiIsInRvVmVyaWZ5RW1haWxUb2tlbiIsInNlbmRNYWlsIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwidG8iLCJlbWFpbCIsInZhbHVlIiwic3ViamVjdCIsImh0bWwiLCJjYXRjaCIsImVyciIsImVycm9ycyIsIlNFTkRfRU1BSUxfRkFJTCIsInRoZW4iLCJpbmZvIiwianNvbiIsImVudmVsb3BlIiwic2VuZFJlc2V0UGFzc3dvcmRMaW5rIiwidG9SZXNldFBhc3N3b3JkVG9rZW4iLCJEYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztrQkFFZTtBQUNiQSxrQkFEYSw0QkFDSUMsR0FESixFQUNTQyxHQURULEVBQ2M7QUFBQSxRQUNuQkMsSUFEbUIsR0FDVkYsR0FEVSxDQUNuQkUsSUFEbUI7O0FBRXpCLFFBQUlDLFFBQVFELEtBQUtFLGtCQUFMLEVBQVo7O0FBRUEsZ0NBQ0dDLFFBREgsY0FHTUMsUUFBUUMsR0FBUixDQUFZQyxRQUFaLEtBQXlCLFlBQXpCLEdBQ0EsRUFBRUMsSUFBSVAsS0FBS1EsS0FBTCxDQUFXQyxLQUFqQixFQURBLEdBRUEsRUFMTjtBQU9JQyxlQUFTLG9CQVBiO0FBUUlDLFlBQU0sNEJBQ0osMkRBQWlCLE9BQU9WLEtBQXhCLEdBREk7QUFSVixRQVlHVyxLQVpILENBWVMsVUFBQ0MsR0FBRCxFQUFTO0FBQ2RkLFVBQUllLE1BQUosQ0FBVyxDQUFDLGlCQUFPQyxlQUFSLENBQVg7QUFDQSxZQUFNRixHQUFOO0FBQ0QsS0FmSCxFQWdCR0csSUFoQkgsQ0FnQlEsVUFBQ0MsSUFBRCxFQUFVO0FBQ2RsQixVQUFJbUIsSUFBSixDQUFTO0FBQ1BsQixjQUFNQSxJQURDO0FBRVBRLGVBQU9TLFFBQVFBLEtBQUtFO0FBRmIsT0FBVDtBQUlELEtBckJIO0FBc0JELEdBM0JZO0FBNkJiQyx1QkE3QmEsaUNBNkJTdEIsR0E3QlQsRUE2QmNDLEdBN0JkLEVBNkJtQjtBQUFBLFFBQ3hCQyxJQUR3QixHQUNmRixHQURlLENBQ3hCRSxJQUR3Qjs7QUFFOUIsUUFBSUMsUUFBUUQsS0FBS3FCLG9CQUFMLEVBQVo7O0FBRUEsZ0NBQ0dsQixRQURILGNBR01DLFFBQVFDLEdBQVIsQ0FBWUMsUUFBWixLQUF5QixZQUF6QixHQUNBLEVBQUVDLElBQUlQLEtBQUtRLEtBQUwsQ0FBV0MsS0FBakIsRUFEQSxHQUVBLEVBTE47QUFPSUMsZUFBUyx3QkFQYjtBQVFJQyxZQUFNLDRCQUNKO0FBQ0UscUJBQWEsSUFBSVcsSUFBSixFQURmO0FBRUUsZUFBT3JCO0FBRlQsUUFESTtBQVJWLFFBZUdXLEtBZkgsQ0FlUyxVQUFDQyxHQUFELEVBQVM7QUFDZGQsVUFBSWUsTUFBSixDQUFXLENBQUMsaUJBQU9DLGVBQVIsQ0FBWDtBQUNBLFlBQU1GLEdBQU47QUFDRCxLQWxCSCxFQW1CR0csSUFuQkgsQ0FtQlEsVUFBQ0MsSUFBRCxFQUFVO0FBQ2RsQixVQUFJbUIsSUFBSixDQUFTO0FBQ1BWLGVBQU9TLEtBQUtFO0FBREwsT0FBVDtBQUdELEtBdkJIO0FBd0JEO0FBekRZLEMiLCJmaWxlIjoiY29udHJvbGxlcnMvbWFpbC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
