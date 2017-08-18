'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _Head = require('../widgets/Head');

var _Head2 = _interopRequireDefault(_Head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SocialAuthButtonList = function SocialAuthButtonList(_ref) {
  var routing = _ref.routing;
  var next = routing.locationBeforeTransitions.query.next;

  var search = next ? '?next=' + next : '';

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Head2.default, {
      links: ['https://cdnjs.cloudflare.com/ajax/libs/bootstrap-social/5.0.0/bootstrap-social.min.css']
    }),
    _react2.default.createElement(
      'a',
      {
        href: '/auth/facebook' + search,
        className: 'btn btn-block btn-social btn-facebook'
      },
      _react2.default.createElement('span', { className: 'fa fa-facebook' }),
      'Login with Facebook'
    ),
    _react2.default.createElement(
      'a',
      {
        href: '/auth/linkedin' + search,
        className: 'btn btn-block btn-social btn-linkedin'
      },
      _react2.default.createElement('span', { className: 'fa fa-linkedin' }),
      'Login with LinkedIn'
    )
  );
};

exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    routing: state.routing
  };
})(SocialAuthButtonList);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdXRpbHMvU29jaWFsQXV0aEJ1dHRvbkxpc3QuanMiXSwibmFtZXMiOlsiU29jaWFsQXV0aEJ1dHRvbkxpc3QiLCJyb3V0aW5nIiwibmV4dCIsImxvY2F0aW9uQmVmb3JlVHJhbnNpdGlvbnMiLCJxdWVyeSIsInNlYXJjaCIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7Ozs7QUFFQSxJQUFJQSx1QkFBdUIsU0FBdkJBLG9CQUF1QixPQUFpQjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYztBQUFBLE1BQ3BDQyxJQURvQyxHQUMzQkQsUUFBUUUseUJBQVIsQ0FBa0NDLEtBRFAsQ0FDcENGLElBRG9DOztBQUUxQyxNQUFJRyxTQUFTSCxPQUFPLFdBQVdBLElBQWxCLEdBQXlCLEVBQXRDOztBQUVBLFNBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFDRSxhQUFPLENBQ0wsd0ZBREs7QUFEVCxNQURGO0FBTUU7QUFBQTtBQUFBO0FBQ0UsaUNBQXVCRyxNQUR6QjtBQUVFLG1CQUFVO0FBRlo7QUFJRSw4Q0FBTSxXQUFVLGdCQUFoQixHQUpGO0FBQUE7QUFBQSxLQU5GO0FBWUU7QUFBQTtBQUFBO0FBQ0UsaUNBQXVCQSxNQUR6QjtBQUVFLG1CQUFVO0FBRlo7QUFJRSw4Q0FBTSxXQUFVLGdCQUFoQixHQUpGO0FBQUE7QUFBQTtBQVpGLEdBREY7QUFxQkQsQ0F6QkQ7O2tCQTJCZSx5QkFBUTtBQUFBLFNBQVU7QUFDL0JKLGFBQVNLLE1BQU1MO0FBRGdCLEdBQVY7QUFBQSxDQUFSLEVBRVhELG9CQUZXLEMiLCJmaWxlIjoiY29tcG9uZW50cy91dGlscy9Tb2NpYWxBdXRoQnV0dG9uTGlzdC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
