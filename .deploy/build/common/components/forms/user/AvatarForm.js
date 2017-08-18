'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reduxForm = require('redux-form');

var _Button = require('react-bootstrap/lib/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Image = require('react-bootstrap/lib/Image');

var _Image2 = _interopRequireDefault(_Image);

var _FormNames = require('../../../constants/FormNames');

var _FormNames2 = _interopRequireDefault(_FormNames);

var _client = require('../../../../../configs/project/client');

var _client2 = _interopRequireDefault(_client);

var _firebase = require('../../../api/firebase');

var _firebase2 = _interopRequireDefault(_firebase);

var _user = require('../../../api/user');

var _user2 = _interopRequireDefault(_user);

var _errorActions = require('../../../actions/errorActions');

var _cookieActions = require('../../../actions/cookieActions');

var _adapters = require('../../fields/adapters');

var _widgets = require('../../fields/widgets');

var _Head = require('../../widgets/Head');

var _Head2 = _interopRequireDefault(_Head);

var _toRefreshURL = require('../../../utils/toRefreshURL');

var _toRefreshURL2 = _interopRequireDefault(_toRefreshURL);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var initialValues = {
  storage: 'local'
};

/**
 * Test server side validation with Postman:
 * 1. Setup the method and url `POST http://localhost:3000/api/users/me/avatar`
 * 2. Select `Body` tab
 * 3. Select `form-data` type
 * 4. Add new key `avatar` and select some invalid file on purpose
 * 5. Send
 */
var validate = exports.validate = function validate(values) {
  var errors = {};

  if (!values.avatar || values.avatar.length !== 1) {
    errors.avatar = 'Required';
  } else {
    var _values$avatar$ = values.avatar[0],
        size = _values$avatar$.size,
        type = _values$avatar$.type,
        mimetype = _values$avatar$.mimetype;
    var _configs$fileUpload$a = _client2.default.fileUpload.avatar,
        maxSize = _configs$fileUpload$a.maxSize,
        validMIMETypes = _configs$fileUpload$a.validMIMETypes;


    if (size > maxSize) {
      errors.avatar = 'Your file(' + Math.floor(size / 1024) + ' Kb) ' + ('exceeds the limit size(' + Math.floor(maxSize / 1024) + ' Kb).');
    }
    // we check the key `type` for client side and `mimetype` for server side
    if (validMIMETypes.indexOf(type || mimetype) < 0) {
      errors.avatar = 'Invalid type. Please upload .jpg, .png or .gif file.';
    }
  }

  return errors;
};

var AvatarForm = function (_Component) {
  _inherits(AvatarForm, _Component);

  function AvatarForm() {
    _classCallCheck(this, AvatarForm);

    var _this2 = _possibleConstructorReturn(this, (AvatarForm.__proto__ || Object.getPrototypeOf(AvatarForm)).call(this));

    _this2.uploadToLocal = _this2._uploadToLocal.bind(_this2);
    _this2.uploadToFirebase = _this2._uploadToFirebase.bind(_this2);
    _this2.signInFirebase = _this2._signInFirebase.bind(_this2);
    _this2.clearFileField = _this2._clearFileField.bind(_this2);
    _this2.handleSubmit = _this2._handleSubmit.bind(_this2);
    _this2.state = {
      isFirebaseInitialized: false,
      avatarURL: null
    };
    return _this2;
  }

  _createClass(AvatarForm, [{
    key: '_uploadToLocal',
    value: function _uploadToLocal(formData) {
      var apiEngine = this.props.apiEngine;


      return (0, _user2.default)(apiEngine).uploadAvatar(formData.avatar[0]).catch(function (err) {
        return Promise.reject(err);
      }).then(function (json) {
        return Promise.resolve(json.downloadURL);
      });
    }
  }, {
    key: '_signInFirebase',
    value: function _signInFirebase() {
      var _this3 = this;

      var _props = this.props,
          dispatch = _props.dispatch,
          apiEngine = _props.apiEngine;


      return (0, _firebase2.default)(apiEngine).readToken().catch(function (err) {
        dispatch((0, _errorActions.pushErrors)([{
          title: 'Fail To Read Token',
          detail: 'Read firebase token fail.'
        }]));
        throw err;
      }).then(function (json) {
        // Initialize firebase
        if (!_this3.state.isFirebaseInitialized) {
          firebase.initializeApp(_client2.default.firebase);
          _this3.setState({
            isFirebaseInitialized: true
          });
        }

        // SignIn firebase
        return firebase.auth().signInWithCustomToken(json.token).catch(function (err) {
          dispatch((0, _errorActions.pushErrors)([{
            title: 'Fail To Signin Firebase',
            detail: 'Signin firebase fail.'
          }]));
          throw err;
        });
      });
    }
  }, {
    key: '_uploadToFirebase',
    value: function _uploadToFirebase(formData) {
      var _this = this;
      var user = this.props.user;


      return new Promise(function (resolve, reject) {
        _this.signInFirebase().then(function () {
          // ref: <https://firebase.google.com/docs/storage/web/upload-files#upload_files>
          var storageRef = firebase.storage().ref();
          var avatarRef = storageRef.child(process.env.NODE_ENV + '/' + user._id + '/avatar.jpg');
          var uploadTask = avatarRef.put(formData.avatar[0]);

          uploadTask.on('state_changed', function (snapshot) {
            // Observe state change events such as progress, pause, and resume
            // See below for more detail
          }, function (err) {
            // Handle unsuccessful uploads
            return reject(err);
          }, function complete() {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            var downloadURL = uploadTask.snapshot.downloadURL;
            return resolve(downloadURL);
          });
        });
      });
    }
  }, {
    key: '_clearFileField',
    value: function _clearFileField() {
      var _props2 = this.props,
          change = _props2.change,
          untouch = _props2.untouch;

      change('avatar', '');
      untouch('avatar');
    }
  }, {
    key: '_handleSubmit',
    value: function _handleSubmit(formData) {
      var _this4 = this;

      var _props3 = this.props,
          dispatch = _props3.dispatch,
          apiEngine = _props3.apiEngine;

      var uploadProcedure = void 0;
      if (formData.storage === 'firebase') {
        uploadProcedure = this.uploadToFirebase(formData);
      } else if (formData.storage === 'local') {
        uploadProcedure = this.uploadToLocal(formData);
      }

      return uploadProcedure.catch(function (err) {
        dispatch((0, _errorActions.pushErrors)([{
          title: 'Fail To Upload Avatar',
          detail: 'Upload avatar fail.',
          meta: err
        }]));
        throw err;
      }).then(function (downloadURL) {
        return (0, _user2.default)(apiEngine).updateAvatarURL({
          avatarURL: downloadURL
        }).catch(function (err) {
          dispatch((0, _errorActions.pushErrors)([{
            title: 'Fail To Update Avatar URL',
            detail: 'Update user avatar URL fail.',
            meta: err
          }]));
          throw err;
        }).then(function (json) {
          var newAvatarURL = (0, _toRefreshURL2.default)(downloadURL);
          json.user.avatarURL = newAvatarURL;
          dispatch((0, _cookieActions.setCookies)({
            user: json.user
          }));
          _this4.clearFileField();
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props4 = this.props,
          avatarURL = _props4.user.avatarURL,
          handleSubmit = _props4.handleSubmit,
          pristine = _props4.pristine,
          submitting = _props4.submitting,
          invalid = _props4.invalid;


      return _react2.default.createElement(
        _widgets.BsForm,
        {
          defaultHorizontal: false,
          defaultFieldDimensions: { sm: 12 },
          onSubmit: handleSubmit(this.handleSubmit)
        },
        _react2.default.createElement(_Head2.default, {
          scripts: ['https://www.gstatic.com/firebasejs/live/3.0/firebase.js']
        }),
        avatarURL && _react2.default.createElement(_Image2.default, { thumbnail: true, src: avatarURL }),
        _react2.default.createElement(_reduxForm.Field, {
          name: 'avatar',
          component: _widgets.BsField,
          adapter: _adapters.BsInput,
          type: 'file'
        }),
        _react2.default.createElement(_reduxForm.Field, {
          name: 'storage',
          component: _widgets.BsField,
          labelDimensions: { sm: 6 },
          label: 'Store avatar into',
          adapter: _adapters.BsRadio,
          options: [{
            label: 'Firebase',
            value: 'firebase',
            disabled: !!_client2.default.firebase === false
          }, {
            label: 'Local',
            value: 'local'
          }]
        }),
        _react2.default.createElement(
          _widgets.BsFormFooter,
          null,
          _react2.default.createElement(
            _Button2.default,
            { type: 'submit', disabled: pristine || submitting || invalid },
            'Upload'
          )
        )
      );
    }
  }]);

  return AvatarForm;
}(_react.Component);

;

exports.default = (0, _reduxForm.reduxForm)({
  form: _FormNames2.default.USER_AVATAR,
  initialValues: initialValues,
  validate: validate
})((0, _reactRedux.connect)(function (_ref) {
  var apiEngine = _ref.apiEngine,
      user = _ref.cookies.user;
  return {
    apiEngine: apiEngine,
    user: user || {}
  };
})(AvatarForm));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9ybXMvdXNlci9BdmF0YXJGb3JtLmpzIl0sIm5hbWVzIjpbImluaXRpYWxWYWx1ZXMiLCJzdG9yYWdlIiwidmFsaWRhdGUiLCJ2YWx1ZXMiLCJlcnJvcnMiLCJhdmF0YXIiLCJsZW5ndGgiLCJzaXplIiwidHlwZSIsIm1pbWV0eXBlIiwiZmlsZVVwbG9hZCIsIm1heFNpemUiLCJ2YWxpZE1JTUVUeXBlcyIsIk1hdGgiLCJmbG9vciIsImluZGV4T2YiLCJBdmF0YXJGb3JtIiwidXBsb2FkVG9Mb2NhbCIsIl91cGxvYWRUb0xvY2FsIiwiYmluZCIsInVwbG9hZFRvRmlyZWJhc2UiLCJfdXBsb2FkVG9GaXJlYmFzZSIsInNpZ25JbkZpcmViYXNlIiwiX3NpZ25JbkZpcmViYXNlIiwiY2xlYXJGaWxlRmllbGQiLCJfY2xlYXJGaWxlRmllbGQiLCJoYW5kbGVTdWJtaXQiLCJfaGFuZGxlU3VibWl0Iiwic3RhdGUiLCJpc0ZpcmViYXNlSW5pdGlhbGl6ZWQiLCJhdmF0YXJVUkwiLCJmb3JtRGF0YSIsImFwaUVuZ2luZSIsInByb3BzIiwidXBsb2FkQXZhdGFyIiwiY2F0Y2giLCJlcnIiLCJQcm9taXNlIiwicmVqZWN0IiwidGhlbiIsImpzb24iLCJyZXNvbHZlIiwiZG93bmxvYWRVUkwiLCJkaXNwYXRjaCIsInJlYWRUb2tlbiIsInRpdGxlIiwiZGV0YWlsIiwiZmlyZWJhc2UiLCJpbml0aWFsaXplQXBwIiwic2V0U3RhdGUiLCJhdXRoIiwic2lnbkluV2l0aEN1c3RvbVRva2VuIiwidG9rZW4iLCJfdGhpcyIsInVzZXIiLCJzdG9yYWdlUmVmIiwicmVmIiwiYXZhdGFyUmVmIiwiY2hpbGQiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJfaWQiLCJ1cGxvYWRUYXNrIiwicHV0Iiwib24iLCJzbmFwc2hvdCIsImNvbXBsZXRlIiwiY2hhbmdlIiwidW50b3VjaCIsInVwbG9hZFByb2NlZHVyZSIsIm1ldGEiLCJ1cGRhdGVBdmF0YXJVUkwiLCJuZXdBdmF0YXJVUkwiLCJwcmlzdGluZSIsInN1Ym1pdHRpbmciLCJpbnZhbGlkIiwic20iLCJsYWJlbCIsInZhbHVlIiwiZGlzYWJsZWQiLCJmb3JtIiwiVVNFUl9BVkFUQVIiLCJjb29raWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUlBOztBQUtBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGdCQUFnQjtBQUNwQkMsV0FBUztBQURXLENBQXRCOztBQUlBOzs7Ozs7OztBQVFPLElBQUlDLDhCQUFXLFNBQVhBLFFBQVcsQ0FBQ0MsTUFBRCxFQUFZO0FBQ2hDLE1BQU1DLFNBQVMsRUFBZjs7QUFFQSxNQUFJLENBQUNELE9BQU9FLE1BQVIsSUFBa0JGLE9BQU9FLE1BQVAsQ0FBY0MsTUFBZCxLQUF5QixDQUEvQyxFQUFrRDtBQUNoREYsV0FBT0MsTUFBUCxHQUFnQixVQUFoQjtBQUNELEdBRkQsTUFFTztBQUFBLDBCQUMwQkYsT0FBT0UsTUFBUCxDQUFjLENBQWQsQ0FEMUI7QUFBQSxRQUNDRSxJQURELG1CQUNDQSxJQUREO0FBQUEsUUFDT0MsSUFEUCxtQkFDT0EsSUFEUDtBQUFBLFFBQ2FDLFFBRGIsbUJBQ2FBLFFBRGI7QUFBQSxnQ0FFNkIsaUJBQVFDLFVBQVIsQ0FBbUJMLE1BRmhEO0FBQUEsUUFFQ00sT0FGRCx5QkFFQ0EsT0FGRDtBQUFBLFFBRVVDLGNBRlYseUJBRVVBLGNBRlY7OztBQUlMLFFBQUlMLE9BQU9JLE9BQVgsRUFBb0I7QUFDbEJQLGFBQU9DLE1BQVAsR0FDRSxlQUFhUSxLQUFLQyxLQUFMLENBQVdQLE9BQU8sSUFBbEIsQ0FBYiwwQ0FDMEJNLEtBQUtDLEtBQUwsQ0FBV0gsVUFBVSxJQUFyQixDQUQxQixXQURGO0FBSUQ7QUFDRDtBQUNBLFFBQUlDLGVBQWVHLE9BQWYsQ0FBdUJQLFFBQVFDLFFBQS9CLElB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O0FBRUUscUNBRkY7QUFHRSxvQ0FIRjtBQUlFLGdCQUFLO0FBSlAsVUFYRjtBQWlCRTtBQUNFLGdCQUFLLFNBRFA7QUFFRSxxQ0FGRjtBQUdFLDJCQUFpQixFQUFFK0MsSUFBSSxDQUFOLEVBSG5CO0FBSUUsaUJBQU0sbUJBSlI7QUFLRSxvQ0FMRjtBQU1FLG1CQUFTLENBQUM7QUFDUkMsbUJBQU8sVUFEQztBQUVSQyxtQkFBTyxVQUZDO0FBR1JDLHNCQUFVLENBQUMsQ0FBQyxpQkFBUWpDLFFBQVYsS0FBdUI7QUFIekIsV0FBRCxFQUlOO0FBQ0QrQixtQkFBTyxPQUROO0FBRURDLG1CQUFPO0FBRk4sV0FKTTtBQU5YLFVBakJGO0FBZ0NFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxjQUFRLE1BQUssUUFBYixFQUFzQixVQUFVTCxZQUFZQyxVQUFaLElBQTBCQyxPQUExRDtBQUFBO0FBQUE7QUFERjtBQWhDRixPQURGO0FBd0NEOzs7Ozs7QUFDRjs7a0JBRWMsMEJBQVU7QUFDdkJLLFFBQU0sb0JBQVVDLFdBRE87QUFFdkJsRiw4QkFGdUI7QUFHdkJFO0FBSHVCLENBQVYsRUFJWix5QkFBUTtBQUFBLE1BQUc4QixTQUFILFFBQUdBLFNBQUg7QUFBQSxNQUF5QnNCLElBQXpCLFFBQWM2QixPQUFkLENBQXlCN0IsSUFBekI7QUFBQSxTQUF1QztBQUNoRHRCLGVBQVdBLFNBRHFDO0FBRWhEc0IsVUFBTUEsUUFBUTtBQUZrQyxHQUF2QztBQUFBLENBQVIsRUFHQ3RDLFVBSEQsQ0FKWSxDIiwiZmlsZSI6ImNvbXBvbmVudHMvZm9ybXMvdXNlci9BdmF0YXJGb3JtLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
