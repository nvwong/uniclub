'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BsNavbar = function (_Component) {
  _inherits(BsNavbar, _Component);

  function BsNavbar() {
    _classCallCheck(this, BsNavbar);

    return _possibleConstructorReturn(this, (BsNavbar.__proto__ || Object.getPrototypeOf(BsNavbar)).apply(this, arguments));
  }

  _createClass(BsNavbar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (process.env.BROWSER && this.props.fixedTop) {
        document.body.style.marginTop = '50px';
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          fixedTop = _props.fixedTop,
          staticTop = _props.staticTop,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['fixedTop', 'staticTop', 'children']);

      var cx = (0, _classnames2.default)('navbar', 'navbar-default', {
        'navbar-fixed-top': fixedTop,
        'navbar-static-top': staticTop
      });
      return _react2.default.createElement(
        'nav',
        _extends({ className: cx }, rest),
        children
      );
    }
  }]);

  return BsNavbar;
}(_react.Component);

;

var Header = function Header(_ref) {
  var children = _ref.children,
      rest = _objectWithoutProperties(_ref, ['children']);

  return _react2.default.createElement(
    'div',
    _extends({ className: 'navbar-header' }, rest),
    _react2.default.createElement(
      'button',
      {
        type: 'button',
        className: 'navbar-toggle collapsed',
        'data-toggle': 'collapse',
        'data-target': '#navbar',
        'aria-expanded': 'false' },
      _react2.default.createElement(
        'span',
        { className: 'sr-only' },
        'Toggle navigation'
      ),
      _react2.default.createElement('span', { className: 'icon-bar' }),
      _react2.default.createElement('span', { className: 'icon-bar' }),
      _react2.default.createElement('span', { className: 'icon-bar' })
    ),
    children
  );
};

var Body = function Body(_ref2) {
  var children = _ref2.children,
      rest = _objectWithoutProperties(_ref2, ['children']);

  return _react2.default.createElement(
    'div',
    _extends({ className: 'collapse navbar-collapse', id: 'navbar' }, rest),
    children
  );
};

var Nav = function Nav(_ref3) {
  var right = _ref3.right,
      children = _ref3.children,
      rest = _objectWithoutProperties(_ref3, ['right', 'children']);

  var cx = (0, _classnames2.default)('nav', 'navbar-nav', {
    'navbar-right': right
  });
  return _react2.default.createElement(
    'ul',
    _extends({ className: cx }, rest),
    children
  );
};

var Dropdown = function Dropdown(_ref4) {
  var title = _ref4.title,
      children = _ref4.children;
  return _react2.default.createElement(
    'li',
    { className: 'dropdown' },
    _react2.default.createElement(
      'a',
      {
        href: '#',
        className: 'dropdown-toggle',
        'data-toggle': 'dropdown',
        role: 'button',
        'aria-haspopup': 'true',
        'aria-expanded': 'false'
      },
      title,
      _react2.default.createElement('span', { className: 'caret' })
    ),
    _react2.default.createElement(
      'ul',
      { className: 'dropdown-menu' },
      children
    )
  );
};

BsNavbar.propTypes = {
  fixedTop: _react.PropTypes.bool,
  staticTop: _react.PropTypes.bool
};

Nav.propTypes = {
  right: _react.PropTypes.bool
};

Dropdown.propTypes = {
  title: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element])
};

BsNavbar.Header = Header;
BsNavbar.Body = Body;
BsNavbar.Nav = Nav;
BsNavbar.Dropdown = Dropdown;

exports.default = BsNavbar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdXRpbHMvQnNOYXZiYXIuanMiXSwibmFtZXMiOlsiQnNOYXZiYXIiLCJwcm9jZXNzIiwiZW52IiwiQlJPV1NFUiIsInByb3BzIiwiZml4ZWRUb3AiLCJkb2N1bWVudCIsImJvZHkiLCJzdHlsZSIsIm1hcmdpblRvcCIsInN0YXRpY1RvcCIsImNoaWxkcmVuIiwicmVzdCIsImN4IiwiSGVhZGVyIiwiQm9keSIsIk5hdiIsInJpZ2h0IiwiRHJvcGRvd24iLCJ0aXRsZSIsInByb3BUeXBlcyIsImJvb2wiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJlbGVtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsUTs7Ozs7Ozs7Ozs7d0NBQ2dCO0FBQ2xCLFVBQUlDLFFBQVFDLEdBQVIsQ0FBWUMsT0FBWixJQUF1QixLQUFLQyxLQUFMLENBQVdDLFFBQXRDLEVBQWdEO0FBQzlDQyxpQkFBU0MsSUFBVCxDQUFjQyxLQUFkLENBQW9CQyxTQUFwQixHQUFnQyxNQUFoQztBQUNEO0FBQ0Y7Ozs2QkFFUTtBQUFBLG1CQU1ILEtBQUtMLEtBTkY7QUFBQSxVQUVMQyxRQUZLLFVBRUxBLFFBRks7QUFBQSxVQUdMSyxTQUhLLFVBR0xBLFNBSEs7QUFBQSxVQUlMQyxRQUpLLFVBSUxBLFFBSks7QUFBQSxVQUtGQyxJQUxFOztBQU9QLFVBQU1DLEtBQUssMEJBQ1QsUUFEUyxFQUVULGdCQUZTLEVBR1Q7QUFDRSw0QkFBb0JSLFFBRHRCO0FBRUUsNkJBQXFCSztBQUZ2QixPQUhTLENBQVg7QUFRQSxhQUNFO0FBQUE7QUFBQSxtQkFBSyxXQUFXRyxFQUFoQixJQUF3QkQsSUFBeEI7QUFDR0Q7QUFESCxPQURGO0FBS0Q7Ozs7OztBQUNGOztBQUVELElBQU1HLFNBQVMsU0FBVEEsTUFBUztBQUFBLE1BQUdILFFBQUgsUUFBR0EsUUFBSDtBQUFBLE1BQWdCQyxJQUFoQjs7QUFBQSxTQUNiO0FBQUE7QUFBQSxlQUFLLFdBQVUsZUFBZixJQUFtQ0EsSUFBbkM7QUFDRTtBQUFBO0FBQUE7QUFDRSxjQUFLLFFBRFA7QUFFRSxtQkFBVSx5QkFGWjtBQUdFLHVCQUFZLFVBSGQ7QUFJRSx1QkFBWSxTQUpkO0FBS0UseUJBQWMsT0FMaEI7QUFNRTtBQUFBO0FBQUEsVUFBTSxXQUFVLFNBQWhCO0FBQUE7QUFBQSxPQU5GO0FBT0UsOENBQU0sV0FBVSxVQUFoQixHQVBGO0FBUUUsOENBQU0sV0FBVSxVQUFoQixHQVJGO0FBU0UsOENBQU0sV0FBVSxVQUFoQjtBQVRGLEtBREY7QUFZR0Q7QUFaSCxHQURhO0FBQUEsQ0FBZjs7QUFpQkEsSUFBTUksT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFBR0osUUFBSCxTQUFHQSxRQUFIO0FBQUEsTUFBZ0JDLElBQWhCOztBQUFBLFNBQ1g7QUFBQTtBQUFBLGVBQUssV0FBVSwwQkFBZixFQUEwQyxJQUFHLFFBQTdDLElBQTBEQSxJQUExRDtBQUNHRDtBQURILEdBRFc7QUFBQSxDQUFiOztBQU1BLElBQU1LLE1BQU0sU0FBTkEsR0FBTSxRQUFrQztBQUFBLE1BQS9CQyxLQUErQixTQUEvQkEsS0FBK0I7QUFBQSxNQUF4Qk4sUUFBd0IsU0FBeEJBLFFBQXdCO0FBQUEsTUFBWEMsSUFBVzs7QUFDNUMsTUFBTUMsS0FBSywwQkFDVCxLQURTLEVBRVQsWUFGUyxFQUdUO0FBQ0Usb0JBQWdCSTtBQURsQixHQUhTLENBQVg7QUFPQSxTQUNFO0FBQUE7QUFBQSxlQUFJLFdBQVdKLEVBQWYsSUFBdUJELElBQXZCO0FBQ0dEO0FBREgsR0FERjtBQUtELENBYkQ7O0FBZUEsSUFBTU8sV0FBVyxTQUFYQSxRQUFXO0FBQUEsTUFBR0MsS0FBSCxTQUFHQSxLQUFIO0FBQUEsTUFBVVIsUUFBVixTQUFVQSxRQUFWO0FBQUEsU0FDZjtBQUFBO0FBQUEsTUFBSSxXQUFVLFVBQWQ7QUFDRTtBQUFBO0FBQUE7QUFDRSxjQUFLLEdBRFA7QUFFRSxtQkFBVSxpQkFGWjtBQUdFLHVCQUFZLFVBSGQ7QUFJRSxjQUFLLFFBSlA7QUFLRSx5QkFBYyxNQUxoQjtBQU1FLHlCQUFjO0FBTmhCO0FBUUdRLFdBUkg7QUFTRSw4Q0FBTSxXQUFVLE9BQWhCO0FBVEYsS0FERjtBQVlFO0FBQUE7QUFBQSxRQUFJLFdBQVUsZUFBZDtBQUNHUjtBQURIO0FBWkYsR0FEZTtBQUFBLENBQWpCOztBQW1CQVgsU0FBU29CLFNBQVQsR0FBcUI7QUFDbkJmLFlBQVUsaUJBQVVnQixJQUREO0FBRW5CWCxhQUFXLGlCQUFVVztBQUZGLENBQXJCOztBQUtBTCxJQUFJSSxTQUFKLEdBQWdCO0FBQ2RILFNBQU8saUJBQVVJO0FBREgsQ0FBaEI7O0FBSUFILFNBQVNFLFNBQVQsR0FBcUI7QUFDbkJELFNBQU8saUJBQVVHLFNBQVYsQ0FBb0IsQ0FDekIsaUJBQVVDLE1BRGUsRUFFekIsaUJBQVVDLE9BRmUsQ0FBcEI7QUFEWSxDQUFyQjs7QUFPQXhCLFNBQVNjLE1BQVQsR0FBa0JBLE1BQWxCO0FBQ0FkLFNBQVNlLElBQVQsR0FBZ0JBLElBQWhCO0FBQ0FmLFNBQVNnQixHQUFULEdBQWVBLEdBQWY7QUFDQWhCLFNBQVNrQixRQUFULEdBQW9CQSxRQUFwQjs7a0JBRWVsQixRIiwiZmlsZSI6ImNvbXBvbmVudHMvdXRpbHMvQnNOYXZiYXIuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
