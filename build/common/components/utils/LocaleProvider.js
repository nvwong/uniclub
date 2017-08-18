'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactIntl = require('react-intl');

var _intlActions = require('../../actions/intlActions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LocaleProvider = function (_Component) {
  _inherits(LocaleProvider, _Component);

  function LocaleProvider() {
    _classCallCheck(this, LocaleProvider);

    return _possibleConstructorReturn(this, (LocaleProvider.__proto__ || Object.getPrototypeOf(LocaleProvider)).apply(this, arguments));
  }

  _createClass(LocaleProvider, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          dispatch = _props.dispatch,
          intl = _props.intl;

      var lang = intl.locale || navigator.language;

      dispatch((0, _intlActions.updateLocale)(lang)).then(function () {
        console.log('load locale (automatically) ok');
      }, function (err) {
        alert('load locale (automatically) fail', err);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          intl = _props2.intl,
          children = _props2.children;


      return _react2.default.createElement(
        _reactIntl.IntlProvider,
        { locale: intl.locale, messages: intl.messages },
        children
      );
    }
  }]);

  return LocaleProvider;
}(_react.Component);

;

exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    intl: state.intl
  };
})(LocaleProvider);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdXRpbHMvTG9jYWxlUHJvdmlkZXIuanMiXSwibmFtZXMiOlsiTG9jYWxlUHJvdmlkZXIiLCJwcm9wcyIsImRpc3BhdGNoIiwiaW50bCIsImxhbmciLCJsb2NhbGUiLCJuYXZpZ2F0b3IiLCJsYW5ndWFnZSIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwiZXJyIiwiYWxlcnQiLCJjaGlsZHJlbiIsIm1lc3NhZ2VzIiwic3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztJQUVNQSxjOzs7Ozs7Ozs7Ozt3Q0FDZ0I7QUFBQSxtQkFDTyxLQUFLQyxLQURaO0FBQUEsVUFDWkMsUUFEWSxVQUNaQSxRQURZO0FBQUEsVUFDRkMsSUFERSxVQUNGQSxJQURFOztBQUVsQixVQUFJQyxPQUFPRCxLQUFLRSxNQUFMLElBQWVDLFVBQVVDLFFBQXBDOztBQUVBTCxlQUFTLCtCQUFhRSxJQUFiLENBQVQsRUFDR0ksSUFESCxDQUNRLFlBQU07QUFDVkMsZ0JBQVFDLEdBQVIsQ0FBWSxnQ0FBWjtBQUNELE9BSEgsRUFHSyxVQUFDQyxHQUFELEVBQVM7QUFDVkMsY0FBTSxrQ0FBTixFQUEwQ0QsR0FBMUM7QUFDRCxPQUxIO0FBTUQ7Ozs2QkFFUTtBQUFBLG9CQUNvQixLQUFLVixLQUR6QjtBQUFBLFVBQ0NFLElBREQsV0FDQ0EsSUFERDtBQUFBLFVBQ09VLFFBRFAsV0FDT0EsUUFEUDs7O0FBR1AsYUFDRTtBQUFBO0FBQUEsVUFBYyxRQUFRVixLQUFLRSxNQUEzQixFQUFtQyxVQUFVRixLQUFLVyxRQUFsRDtBQUNHRDtBQURILE9BREY7QUFLRDs7Ozs7O0FBQ0Y7O2tCQUVjLHlCQUFRLFVBQUNFLEtBQUQ7QUFBQSxTQUFZO0FBQ2pDWixVQUFNWSxNQUFNWjtBQURxQixHQUFaO0FBQUEsQ0FBUixFQUVYSCxjQUZXLEMiLCJmaWxlIjoiY29tcG9uZW50cy91dGlscy9Mb2NhbGVQcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
