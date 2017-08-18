'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Head = function Head(_ref) {
  var title = _ref.title,
      metas = _ref.metas,
      links = _ref.links,
      scripts = _ref.scripts;
  return _react2.default.createElement(_reactHelmet2.default, {
    title: title,
    meta: metas,
    link: links.map(function (src) {
      return { href: src, rel: 'stylesheet' };
    }),
    script: scripts.map(function (src) {
      return { src: src, type: 'text/javascript' };
    }) });
};

Head.defaultProps = {
  metas: [],
  links: [],
  scripts: []
};

Head.propTypes = {
  title: _react.PropTypes.string,
  metas: _react.PropTypes.arrayOf(_react.PropTypes.object),
  links: _react.PropTypes.arrayOf(_react.PropTypes.string),
  scripts: _react.PropTypes.arrayOf(_react.PropTypes.string)
};

exports.default = Head;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvd2lkZ2V0cy9IZWFkLmpzIl0sIm5hbWVzIjpbIkhlYWQiLCJ0aXRsZSIsIm1ldGFzIiwibGlua3MiLCJzY3JpcHRzIiwibWFwIiwiaHJlZiIsInNyYyIsInJlbCIsInR5cGUiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJhcnJheU9mIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxPQUFPLFNBQVBBLElBQU87QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxNQUFpQkMsS0FBakIsUUFBaUJBLEtBQWpCO0FBQUEsTUFBd0JDLE9BQXhCLFFBQXdCQSxPQUF4QjtBQUFBLFNBQ1g7QUFDRSxXQUFPSCxLQURUO0FBRUUsVUFBTUMsS0FGUjtBQUdFLFVBQU1DLE1BQU1FLEdBQU4sQ0FBVTtBQUFBLGFBQ2IsRUFBRUMsTUFBTUMsR0FBUixFQUFhQyxLQUFLLFlBQWxCLEVBRGE7QUFBQSxLQUFWLENBSFI7QUFLRSxZQUFRSixRQUFRQyxHQUFSLENBQVk7QUFBQSxhQUNqQixFQUFFRSxLQUFLQSxHQUFQLEVBQVlFLE1BQU0saUJBQWxCLEVBRGlCO0FBQUEsS0FBWixDQUxWLEdBRFc7QUFBQSxDQUFiOztBQVVBVCxLQUFLVSxZQUFMLEdBQW9CO0FBQ2xCUixTQUFPLEVBRFc7QUFFbEJDLFNBQU8sRUFGVztBQUdsQkMsV0FBUztBQUhTLENBQXBCOztBQU1BSixLQUFLVyxTQUFMLEdBQWlCO0FBQ2ZWLFNBQU8saUJBQVVXLE1BREY7QUFFZlYsU0FBTyxpQkFBVVcsT0FBVixDQUFrQixpQkFBVUMsTUFBNUIsQ0FGUTtBQUdmWCxTQUFPLGlCQUFVVSxPQUFWLENBQWtCLGlCQUFVRCxNQUE1QixDQUhRO0FBSWZSLFdBQVMsaUJBQVVTLE9BQVYsQ0FBa0IsaUJBQVVELE1BQTVCO0FBSk0sQ0FBakI7O2tCQU9lWixJIiwiZmlsZSI6ImNvbXBvbmVudHMvd2lkZ2V0cy9IZWFkLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
