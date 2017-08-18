'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PageLayout = require('../../layouts/PageLayout');

var _PageLayout2 = _interopRequireDefault(_PageLayout);

var _PageHeader = require('react-bootstrap/lib/PageHeader');

var _PageHeader2 = _interopRequireDefault(_PageHeader);

require('./styles.scss');

require('./styles.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HomePage = function HomePage(props) {
  return _react2.default.createElement(
    _PageLayout2.default,
    { className: 'rwd-background' },
    _react2.default.createElement(
      _PageHeader2.default,
      null,
      'Express-React-HMR-Boilerplate'
    ),
    _react2.default.createElement(
      'p',
      { className: 'red-border' },
      'This is the demo site for project',
      ' ',
      _react2.default.createElement(
        'a',
        { href: 'https://github.com/gocreating/express-react-hmr-boilerplate' },
        'express-react-hmr-boilerplate'
      )
    )
  );
};

exports.default = HomePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZXMvSG9tZVBhZ2UvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxXQUFXLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRDtBQUFBLFNBQ2Y7QUFBQTtBQUFBLE1BQVksV0FBVSxnQkFBdEI7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREY7QUFFRTtBQUFBO0FBQUEsUUFBRyxXQUFVLFlBQWI7QUFBQTtBQUNvQyxTQURwQztBQUVFO0FBQUE7QUFBQSxVQUFHLE1BQUssNkRBQVI7QUFBQTtBQUFBO0FBRkY7QUFGRixHQURlO0FBQUEsQ0FBakI7O2tCQVllRCxRIiwiZmlsZSI6ImNvbXBvbmVudHMvcGFnZXMvSG9tZVBhZ2UvaW5kZXguanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
