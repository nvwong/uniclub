'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

var _PageHeader = require('react-bootstrap/lib/PageHeader');

var _PageHeader2 = _interopRequireDefault(_PageHeader);

var _Modal = require('react-bootstrap/lib/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _Row = require('react-bootstrap/lib/Row');

var _Row2 = _interopRequireDefault(_Row);

var _Col = require('react-bootstrap/lib/Col');

var _Col2 = _interopRequireDefault(_Col);

var _Button = require('react-bootstrap/lib/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Image = require('react-bootstrap/lib/Image');

var _Image2 = _interopRequireDefault(_Image);

var _user = require('../../../api/user');

var _user2 = _interopRequireDefault(_user);

var _errorActions = require('../../../actions/errorActions');

var _PageLayout = require('../../layouts/PageLayout');

var _PageLayout2 = _interopRequireDefault(_PageLayout);

var _Time = require('../../widgets/Time');

var _Time2 = _interopRequireDefault(_Time);

var _VerifyEmailForm = require('../../forms/user/VerifyEmailForm');

var _VerifyEmailForm2 = _interopRequireDefault(_VerifyEmailForm);

var _toRefreshURL = require('../../../utils/toRefreshURL');

var _toRefreshURL2 = _interopRequireDefault(_toRefreshURL);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShowSelfPage = function (_Component) {
  _inherits(ShowSelfPage, _Component);

  function ShowSelfPage(props) {
    _classCallCheck(this, ShowSelfPage);

    var _this = _possibleConstructorReturn(this, (ShowSelfPage.__proto__ || Object.getPrototypeOf(ShowSelfPage)).call(this, props));

    _this.state = {
      user: props.initialUser,
      isShowVerifyEmailModal: false
    };
    _this.openModal = _this._openModal.bind(_this);
    _this.closeModal = _this._closeModal.bind(_this);
    return _this;
  }

  _createClass(ShowSelfPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var _props = this.props,
          dispatch = _props.dispatch,
          apiEngine = _props.apiEngine;


      (0, _user2.default)(apiEngine).readSelf().catch(function (err) {
        dispatch((0, _errorActions.pushErrors)(err));
        throw err;
      }).then(function (json) {
        json.user.avatarURL = (0, _toRefreshURL2.default)(json.user.avatarURL);
        _this2.setState({
          user: json.user
        });
      });
    }
  }, {
    key: '_openModal',
    value: function _openModal() {
      this.setState({ isShowVerifyEmailModal: true });
    }
  }, {
    key: '_closeModal',
    value: function _closeModal() {
      this.setState({ isShowVerifyEmailModal: false });
    }
  }, {
    key: 'renderModal',
    value: function renderModal() {
      var _state = this.state,
          isShowVerifyEmailModal = _state.isShowVerifyEmailModal,
          user = _state.user;


      return _react2.default.createElement(
        _Modal2.default,
        {
          show: isShowVerifyEmailModal,
          onHide: this.closeModal
        },
        _react2.default.createElement(
          _Modal2.default.Header,
          { closeButton: true },
          _react2.default.createElement(
            _Modal2.default.Title,
            null,
            'Send Verification Mail'
          )
        ),
        _react2.default.createElement(
          _Modal2.default.Body,
          null,
          _react2.default.createElement(_VerifyEmailForm2.default, {
            email: user.email && user.email.value,
            onCancel: this.closeModal
          })
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var user = this.state.user;

      return _react2.default.createElement(
        _PageLayout2.default,
        null,
        this.renderModal(),
        _react2.default.createElement(
          _Row2.default,
          null,
          _react2.default.createElement(
            _Col2.default,
            { md: 12 },
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/user/me/edit' },
              _react2.default.createElement(
                _Button2.default,
                { bsStyle: 'primary' },
                'Edit My Profile'
              )
            )
          )
        ),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(
          _PageHeader2.default,
          null,
          'My Profile'
        ),
        _react2.default.createElement(
          'dl',
          { className: 'dl-horizontal' },
          _react2.default.createElement(
            'dt',
            null,
            '_id'
          ),
          _react2.default.createElement(
            'dd',
            null,
            user._id
          ),
          _react2.default.createElement(
            'dt',
            null,
            'avatar'
          ),
          _react2.default.createElement(
            'dd',
            null,
            user.avatarURL && _react2.default.createElement(_Image2.default, { thumbnail: true, src: user.avatarURL })
          ),
          _react2.default.createElement(
            'dt',
            null,
            'name'
          ),
          _react2.default.createElement(
            'dd',
            null,
            user.name
          ),
          _react2.default.createElement(
            'dt',
            null,
            'email'
          ),
          _react2.default.createElement(
            'dd',
            null,
            user.email && user.email.value,
            user.email && !user.email.isVerified && _react2.default.createElement(
              _Button2.default,
              { onClick: this.openModal },
              'Verify Now'
            )
          ),
          _react2.default.createElement(
            'dt',
            null,
            'updatedAt'
          ),
          _react2.default.createElement(
            'dd',
            null,
            _react2.default.createElement(_Time2.default, { value: user.updatedAt, format: 'YYYY-MM-DD' }),
            ' ',
            '(',
            _react2.default.createElement(_Time2.default, { value: user.updatedAt, relative: true }),
            ')'
          ),
          _react2.default.createElement(
            'dt',
            null,
            'createdAt'
          ),
          _react2.default.createElement(
            'dd',
            null,
            _react2.default.createElement(_Time2.default, { value: user.createdAt, format: 'YYYY-MM-DD' }),
            ' ',
            '(',
            _react2.default.createElement(_Time2.default, { value: user.createdAt, relative: true }),
            ')'
          ),
          _react2.default.createElement(
            'dt',
            null,
            'raw'
          ),
          _react2.default.createElement(
            'dd',
            null,
            _react2.default.createElement(
              'pre',
              null,
              JSON.stringify(user, null, 2)
            )
          )
        )
      );
    }
  }]);

  return ShowSelfPage;
}(_react.Component);

;

exports.default = (0, _reactRedux.connect)(function (_ref) {
  var apiEngine = _ref.apiEngine,
      user = _ref.cookies.user;
  return {
    apiEngine: apiEngine,
    initialUser: user || {}
  };
})(ShowSelfPage);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZXMvdXNlci9TaG93U2VsZlBhZ2UuanMiXSwibmFtZXMiOlsiU2hvd1NlbGZQYWdlIiwicHJvcHMiLCJzdGF0ZSIsInVzZXIiLCJpbml0aWFsVXNlciIsImlzU2hvd1ZlcmlmeUVtYWlsTW9kYWwiLCJvcGVuTW9kYWwiLCJfb3Blbk1vZGFsIiwiYmluZCIsImNsb3NlTW9kYWwiLCJfY2xvc2VNb2RhbCIsImRpc3BhdGNoIiwiYXBpRW5naW5lIiwicmVhZFNlbGYiLCJjYXRjaCIsImVyciIsInRoZW4iLCJqc29uIiwiYXZhdGFyVVJMIiwic2V0U3RhdGUiLCJlbWFpbCIsInZhbHVlIiwicmVuZGVyTW9kYWwiLCJfaWQiLCJuYW1lIiwiaXNWZXJpZmllZCIsInVwZGF0ZWRBdCIsImNyZWF0ZWRBdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb29raWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLFk7OztBQUNKLHdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNEhBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxZQUFNRixNQUFNRyxXQUREO0FBRVhDLDhCQUF3QjtBQUZiLEtBQWI7QUFJQSxVQUFLQyxTQUFMLEdBQWlCLE1BQUtDLFVBQUwsQ0FBZ0JDLElBQWhCLE9BQWpCO0FBQ0EsVUFBS0MsVUFBTCxHQUFrQixNQUFLQyxXQUFMLENBQWlCRixJQUFqQixPQUFsQjtBQVBpQjtBQVFsQjs7Ozt3Q0FFbUI7QUFBQTs7QUFBQSxtQkFDWSxLQUFLUCxLQURqQjtBQUFBLFVBQ1pVLFFBRFksVUFDWkEsUUFEWTtBQUFBLFVBQ0ZDLFNBREUsVUFDRkEsU0FERTs7O0FBR2xCLDBCQUFRQSxTQUFS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QUFFRyxlQUZIO0FBQUE7QUFFUSw0REFBTSxPQUFPeEIsS0FBS3dCLFNBQWxCLEVBQTZCLGNBQTdCLEdBRlI7QUFBQTtBQUFBLFdBeEJGO0FBNEJFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0E1QkY7QUE2QkU7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBO0FBQU1DLG1CQUFLQyxTQUFMLENBQWUxQixJQUFmLEVBQXFCLElBQXJCLEVBQTJCLENBQTNCO0FBQU47QUFBSjtBQTdCRjtBQVhGLE9BREY7QUE2Q0Q7Ozs7OztBQUNGOztrQkFFYyx5QkFBUTtBQUFBLE1BQUdTLFNBQUgsUUFBR0EsU0FBSDtBQUFBLE1BQXlCVCxJQUF6QixRQUFjMkIsT0FBZCxDQUF5QjNCLElBQXpCO0FBQUEsU0FBdUM7QUFDNURTLGVBQVdBLFNBRGlEO0FBRTVEUixpQkFBYUQsUUFBUTtBQUZ1QyxHQUF2QztBQUFBLENBQVIsRUFHWEgsWUFIVyxDIiwiZmlsZSI6ImNvbXBvbmVudHMvcGFnZXMvdXNlci9TaG93U2VsZlBhZ2UuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
