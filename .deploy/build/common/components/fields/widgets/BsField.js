'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FormGroup = require('react-bootstrap/lib/FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _Col = require('react-bootstrap/lib/Col');

var _Col2 = _interopRequireDefault(_Col);

var _Row = require('react-bootstrap/lib/Row');

var _Row2 = _interopRequireDefault(_Row);

var _ControlLabel = require('react-bootstrap/lib/ControlLabel');

var _ControlLabel2 = _interopRequireDefault(_ControlLabel);

var _HelpBlock = require('react-bootstrap/lib/HelpBlock');

var _HelpBlock2 = _interopRequireDefault(_HelpBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var BsField = function BsField(_ref, _ref2) {
  var horizontal = _ref.horizontal,
      labelDimensions = _ref.labelDimensions,
      fieldDimensions = _ref.fieldDimensions,
      showLabel = _ref.showLabel,
      label = _ref.label,
      adapter = _ref.adapter,
      meta = _ref.meta,
      rest = _objectWithoutProperties(_ref, ['horizontal', 'labelDimensions', 'fieldDimensions', 'showLabel', 'label', 'adapter', 'meta']);

  var defaultHorizontal = _ref2.defaultHorizontal,
      defaultLabelDimensions = _ref2.defaultLabelDimensions,
      defaultFieldDimensions = _ref2.defaultFieldDimensions;

  var isShowError = meta && meta.touched && meta.error;
  var Adapter = adapter;
  var renderedFormControl = _react2.default.createElement(Adapter, rest);

  horizontal = horizontal === undefined ? defaultHorizontal : horizontal;
  labelDimensions = (0, _objectAssign2.default)({}, defaultLabelDimensions, labelDimensions || {});
  fieldDimensions = (0, _objectAssign2.default)({}, defaultFieldDimensions, fieldDimensions || {});

  return horizontal ? _react2.default.createElement(
    _FormGroup2.default,
    { validationState: isShowError ? 'error' : undefined },
    showLabel && _react2.default.createElement(
      _Col2.default,
      _extends({ componentClass: _ControlLabel2.default }, labelDimensions),
      label
    ),
    _react2.default.createElement(
      _Col2.default,
      fieldDimensions,
      renderedFormControl,
      isShowError && _react2.default.createElement(
        _HelpBlock2.default,
        null,
        meta.error
      )
    )
  ) : _react2.default.createElement(
    _FormGroup2.default,
    { validationState: isShowError ? 'error' : undefined },
    showLabel && _react2.default.createElement(
      _Row2.default,
      null,
      _react2.default.createElement(
        _Col2.default,
        _extends({ componentClass: _ControlLabel2.default }, labelDimensions),
        _react2.default.createElement(
          _ControlLabel2.default,
          null,
          label
        )
      )
    ),
    _react2.default.createElement(
      _Row2.default,
      null,
      _react2.default.createElement(
        _Col2.default,
        fieldDimensions,
        renderedFormControl,
        isShowError && _react2.default.createElement(
          _HelpBlock2.default,
          null,
          meta.error
        )
      )
    )
  );
};

BsField.propTypes = {
  horizontal: _react.PropTypes.bool,
  labelDimensions: _react.PropTypes.object,
  fieldDimensions: _react.PropTypes.object,
  showLabel: _react.PropTypes.bool,
  label: _react.PropTypes.string
};

BsField.contextTypes = {
  defaultHorizontal: _react.PropTypes.bool,
  defaultLabelDimensions: _react.PropTypes.object,
  defaultFieldDimensions: _react.PropTypes.object
};

BsField.defaultProps = {
  showLabel: true,
  label: ''
};

exports.default = BsField;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZmllbGRzL3dpZGdldHMvQnNGaWVsZC5qcyJdLCJuYW1lcyI6WyJCc0ZpZWxkIiwiaG9yaXpvbnRhbCIsImxhYmVsRGltZW5zaW9ucyIsImZpZWxkRGltZW5zaW9ucyIsInNob3dMYWJlbCIsImxhYmVsIiwiYWRhcHRlciIsIm1ldGEiLCJyZXN0IiwiZGVmYXVsdEhvcml6b250YWwiLCJkZWZhdWx0TGFiZWxEaW1lbnNpb25zIiwiZGVmYXVsdEZpZWxkRGltZW5zaW9ucyIsImlzU2hvd0Vycm9yIiwidG91Y2hlZCIsImVycm9yIiwiQWRhcHRlciIsInJlbmRlcmVkRm9ybUNvbnRyb2wiLCJ1bmRlZmluZWQiLCJwcm9wVHlwZXMiLCJib29sIiwib2JqZWN0Iiwic3RyaW5nIiwiY29udGV4dFR5cGVzIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBLElBQUlBLFVBQVUsU0FBVkEsT0FBVSxjQUtSO0FBQUEsTUFKSkMsVUFJSSxRQUpKQSxVQUlJO0FBQUEsTUFKUUMsZUFJUixRQUpRQSxlQUlSO0FBQUEsTUFKeUJDLGVBSXpCLFFBSnlCQSxlQUl6QjtBQUFBLE1BSjBDQyxTQUkxQyxRQUowQ0EsU0FJMUM7QUFBQSxNQUpxREMsS0FJckQsUUFKcURBLEtBSXJEO0FBQUEsTUFKNERDLE9BSTVELFFBSjREQSxPQUk1RDtBQUFBLE1BSEpDLElBR0ksUUFISkEsSUFHSTtBQUFBLE1BSEtDLElBR0w7O0FBQUEsTUFESkMsaUJBQ0ksU0FESkEsaUJBQ0k7QUFBQSxNQURlQyxzQkFDZixTQURlQSxzQkFDZjtBQUFBLE1BRHVDQyxzQkFDdkMsU0FEdUNBLHNCQUN2Qzs7QUFDSixNQUFJQyxjQUFjTCxRQUFRQSxLQUFLTSxPQUFiLElBQXdCTixLQUFLTyxLQUEvQztBQUNBLE1BQUlDLFVBQVVULE9BQWQ7QUFDQSxNQUFJVSxzQkFDRiw4QkFBQyxPQUFELEVBQWFSLElBQWIsQ0FERjs7QUFJQVAsZUFBY0EsZUFBZWdCLFNBQWhCLEdBQTZCUixpQkFBN0IsR0FBaURSLFVBQTlEO0FBQ0FDLG9CQUFrQiw0QkFBTyxFQUFQLEVBQVdRLHNCQUFYLEVBQW1DUixtQkFBbUIsRUFBdEQsQ0FBbEI7QUFDQUMsb0JBQWtCLDRCQUFPLEVBQVAsRUFBV1Esc0JBQVgsRUFBbUNSLG1CQUFtQixFQUF0RCxDQUFsQjs7QUFFQSxTQUFPRixhQUNMO0FBQUE7QUFBQSxNQUFhLGlCQUFpQlcsY0FBYyxPQUFkLEdBQXdCSyxTQUF0RDtBQUNHYixpQkFDQztBQUFBO0FBQUEsaUJBQUssc0NBQUwsSUFBdUNGLGVBQXZDO0FBQ0dHO0FBREgsS0FGSjtBQU1FO0FBQUE7QUFBU0YscUJBQVQ7QUFDR2EseUJBREg7QUFFR0oscUJBQ0M7QUFBQTtBQUFBO0FBQVlMLGFBQUtPO0FBQWpCO0FBSEo7QUFORixHQURLLEdBZUw7QUFBQTtBQUFBLE1BQWEsaUJBQWlCRixjQUFjLE9BQWQsR0FBd0JLLFNBQXREO0FBQ0diLGlCQUNDO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxtQkFBSyxzQ0FBTCxJQUF1Q0YsZUFBdkM7QUFDRTtBQUFBO0FBQUE7QUFBZUc7QUFBZjtBQURGO0FBREYsS0FGSjtBQVFFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBU0YsdUJBQVQ7QUFDR2EsMkJBREg7QUFFR0osdUJBQ0M7QUFBQTtBQUFBO0FBQVlMLGVBQUtPO0FBQWpCO0FBSEo7QUFERjtBQVJGLEdBZkY7QUFpQ0QsQ0FqREQ7O0FBbURBZCxRQUFRa0IsU0FBUixHQUFvQjtBQUNsQmpCLGNBQVksaUJBQVVrQixJQURKO0FBRWxCakIsbUJBQWlCLGlCQUFVa0IsTUFGVDtBQUdsQmpCLG1CQUFpQixpQkFBVWlCLE1BSFQ7QUFJbEJoQixhQUFXLGlCQUFVZSxJQUpIO0FBS2xCZCxTQUFPLGlCQUFVZ0I7QUFMQyxDQUFwQjs7QUFRQXJCLFFBQVFzQixZQUFSLEdBQXVCO0FBQ3JCYixxQkFBbUIsaUJBQVVVLElBRFI7QUFFckJULDBCQUF3QixpQkFBVVUsTUFGYjtBQUdyQlQsMEJBQXdCLGlCQUFVUztBQUhiLENBQXZCOztBQU1BcEIsUUFBUXVCLFlBQVIsR0FBdUI7QUFDckJuQixhQUFXLElBRFU7QUFFckJDLFNBQU87QUFGYyxDQUF2Qjs7a0JBS2VMLE8iLCJmaWxlIjoiY29tcG9uZW50cy9maWVsZHMvd2lkZ2V0cy9Cc0ZpZWxkLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
