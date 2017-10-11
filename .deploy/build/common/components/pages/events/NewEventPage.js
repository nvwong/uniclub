'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PageHeader = require('react-bootstrap/lib/PageHeader');

var _PageHeader2 = _interopRequireDefault(_PageHeader);

var _Row = require('react-bootstrap/lib/Row');

var _Row2 = _interopRequireDefault(_Row);

var _Col = require('react-bootstrap/lib/Col');

var _Col2 = _interopRequireDefault(_Col);

var _PageLayout = require('../../layouts/PageLayout');

var _PageLayout2 = _interopRequireDefault(_PageLayout);

var _NewEventForm = require('../../forms/events/NewEventForm');

var _NewEventForm2 = _interopRequireDefault(_NewEventForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NewEventPage = function NewEventPage(props) {
  return _react2.default.createElement(
    _PageLayout2.default,
    null,
    _react2.default.createElement(
      _PageHeader2.default,
      null,
      'New Event'
    ),
    _react2.default.createElement(
      _Row2.default,
      null,
      _react2.default.createElement(
        _Col2.default,
        { md: 9 },
        _react2.default.createElement(_NewEventForm2.default, null)
      )
    )
  );
};

exports.default = NewEventPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZXMvZXZlbnRzL05ld0V2ZW50UGFnZS5qcyJdLCJuYW1lcyI6WyJOZXdFdmVudFBhZ2UiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxlQUFlLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRDtBQUFBLFNBQ25CO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERjtBQUVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxVQUFLLElBQUksQ0FBVDtBQUNFO0FBREY7QUFERjtBQUZGLEdBRG1CO0FBQUEsQ0FBckI7O2tCQVdlRCxZIiwiZmlsZSI6ImNvbXBvbmVudHMvcGFnZXMvZXZlbnRzL05ld0V2ZW50UGFnZS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
