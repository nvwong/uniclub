'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Text = require('../widgets/Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var style = {
  cursor: 'pointer',
  margin: 2
};

var handlePagerButtonClick = function handlePagerButtonClick(props) {
  var disabled = props.disabled,
      onClick = props.onClick;


  if (disabled) {
    return undefined;
  } else {
    return onClick;
  }
};

var PagerButton = function PagerButton(props) {
  /* eslint-disable */
  // consume prop `onClick`
  var disabled = props.disabled,
      onClick = props.onClick,
      children = props.children,
      rest = _objectWithoutProperties(props, ['disabled', 'onClick', 'children']);
  /* eslint-enable */

  return _react2.default.createElement(
    'li',
    _extends({
      className: (0, _classnames2.default)({ 'disabled': disabled }),
      style: style
    }, rest),
    _react2.default.createElement(
      'a',
      { onClick: handlePagerButtonClick(props) },
      children
    )
  );
};

var Pager = function (_Component) {
  _inherits(Pager, _Component);

  function Pager() {
    _classCallCheck(this, Pager);

    return _possibleConstructorReturn(this, (Pager.__proto__ || Object.getPrototypeOf(Pager)).apply(this, arguments));
  }

  _createClass(Pager, [{
    key: '_handlePageChange',
    value: function _handlePageChange(pageId) {
      var onPageChange = this.props.onPageChange;


      if (onPageChange) {
        onPageChange(pageId);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          simple = _props.simple,
          page = _props.page;

      var pageStatus = {
        isFirst: page.current === page.first,
        isLast: page.current === page.last
      };

      return _react2.default.createElement(
        'nav',
        null,
        _react2.default.createElement(
          'ul',
          { className: 'pager' },
          !simple && _react2.default.createElement(
            PagerButton,
            {
              disabled: pageStatus.isFirst,
              onClick: this._handlePageChange.bind(this, page.first)
            },
            _react2.default.createElement('i', { className: 'fa fa-angle-double-left', 'aria-hidden': 'true' }),
            ' ',
            _react2.default.createElement(_Text2.default, { id: 'page.first' })
          ),
          _react2.default.createElement(
            PagerButton,
            {
              disabled: pageStatus.isFirst,
              onClick: this._handlePageChange.bind(this, page.current - 1)
            },
            _react2.default.createElement('i', { className: 'fa fa-chevron-left', 'aria-hidden': 'true' }),
            ' ',
            _react2.default.createElement(_Text2.default, { id: 'page.prev' })
          ),
          _react2.default.createElement(
            PagerButton,
            {
              disabled: pageStatus.isLast,
              onClick: this._handlePageChange.bind(this, page.current + 1)
            },
            _react2.default.createElement(_Text2.default, { id: 'page.next' }),
            ' ',
            _react2.default.createElement('i', { className: 'fa fa-chevron-right', 'aria-hidden': 'true' })
          ),
          !simple && _react2.default.createElement(
            PagerButton,
            {
              disabled: pageStatus.isLast,
              onClick: this._handlePageChange.bind(this, page.last)
            },
            _react2.default.createElement(_Text2.default, { id: 'page.last' }),
            ' ',
            _react2.default.createElement('i', { className: 'fa fa-angle-double-right', 'aria-hidden': 'true' })
          )
        )
      );
    }
  }]);

  return Pager;
}(_react.Component);

Pager.propTypes = {
  simple: _react.PropTypes.bool,
  page: _react.PropTypes.object.isRequired,
  handlePageChange: _react.PropTypes.func
};

exports.default = (0, _reactRedux.connect)()(Pager);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdXRpbHMvQnNQYWdlci5qcyJdLCJuYW1lcyI6WyJzdHlsZSIsImN1cnNvciIsIm1hcmdpbiIsImhhbmRsZVBhZ2VyQnV0dG9uQ2xpY2siLCJwcm9wcyIsImRpc2FibGVkIiwib25DbGljayIsInVuZGVmaW5lZCIsIlBhZ2VyQnV0dG9uIiwiY2hpbGRyZW4iLCJyZXN0IiwiUGFnZXIiLCJwYWdlSWQiLCJvblBhZ2VDaGFuZ2UiLCJzaW1wbGUiLCJwYWdlIiwicGFnZVN0YXR1cyIsImlzRmlyc3QiLCJjdXJyZW50IiwiZmlyc3QiLCJpc0xhc3QiLCJsYXN0IiwiX2hhbmRsZVBhZ2VDaGFuZ2UiLCJiaW5kIiwicHJvcFR5cGVzIiwiYm9vbCIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJoYW5kbGVQYWdlQ2hhbmdlIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxRQUFRO0FBQ1ZDLFVBQVEsU0FERTtBQUVWQyxVQUFRO0FBRkUsQ0FBWjs7QUFLQSxJQUFJQyx5QkFBeUIsU0FBekJBLHNCQUF5QixDQUFDQyxLQUFELEVBQVc7QUFBQSxNQUNoQ0MsUUFEZ0MsR0FDVkQsS0FEVSxDQUNoQ0MsUUFEZ0M7QUFBQSxNQUN0QkMsT0FEc0IsR0FDVkYsS0FEVSxDQUN0QkUsT0FEc0I7OztBQUd0QyxNQUFJRCxRQUFKLEVBQWM7QUFDWixXQUFPRSxTQUFQO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsV0FBT0QsT0FBUDtBQUNEO0FBQ0YsQ0FSRDs7QUFVQSxJQUFJRSxjQUFjLFNBQWRBLFdBQWMsQ0FBQ0osS0FBRCxFQUFXO0FBQzNCO0FBQ0E7QUFGMkIsTUFHckJDLFFBSHFCLEdBR29CRCxLQUhwQixDQUdyQkMsUUFIcUI7QUFBQSxNQUdYQyxPQUhXLEdBR29CRixLQUhwQixDQUdYRSxPQUhXO0FBQUEsTUFHRkcsUUFIRSxHQUdvQkwsS0FIcEIsQ0FHRkssUUFI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
