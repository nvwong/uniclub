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

var _EditEventForm = require('../../forms/events/EditEventForm');

var _EditEventForm2 = _interopRequireDefault(_EditEventForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EditEventPage = function EditEventPage(props) {
  return _react2.default.createElement(
    _PageLayout2.default,
    null,
    _react2.default.createElement(
      _PageHeader2.default,
      null,
      'Edit Event'
    ),
    _react2.default.createElement(
      _Row2.default,
      null,
      _react2.default.createElement(
        _Col2.default,
        { md: 9 },
        _react2.default.createElement(_EditEventForm2.default, null)
      )
    )
  );
};

exports.default = EditEventPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZXMvZXZlbnRzL0VkaXRFdmVudFBhZ2UuanMiXSwibmFtZXMiOlsiRWRpdEV2ZW50UGFnZSIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGdCQUFnQixTQUFoQkEsYUFBZ0IsQ0FBQ0MsS0FBRDtBQUFBLFNBQ3BCO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERjtBQUVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxVQUFLLElBQUksQ0FBVDtBQUNFO0FBREY7QUFERjtBQUZGLEdBRG9CO0FBQUEsQ0FBdEI7O2tCQVdlRCxhIiwiZmlsZSI6ImNvbXBvbmVudHMvcGFnZXMvZXZlbnRzL0VkaXRFdmVudFBhZ2UuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
