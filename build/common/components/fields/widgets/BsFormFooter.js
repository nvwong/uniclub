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

var _ControlLabel = require('react-bootstrap/lib/ControlLabel');

var _ControlLabel2 = _interopRequireDefault(_ControlLabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BsFormFooter = function BsFormFooter(_ref, _ref2) {
  var horizontal = _ref.horizontal,
      labelDimensions = _ref.labelDimensions,
      fieldDimensions = _ref.fieldDimensions,
      showLabel = _ref.showLabel,
      label = _ref.label,
      children = _ref.children;
  var defaultHorizontal = _ref2.defaultHorizontal,
      defaultLabelDimensions = _ref2.defaultLabelDimensions,
      defaultFieldDimensions = _ref2.defaultFieldDimensions;

  horizontal = horizontal === undefined ? defaultHorizontal : horizontal;
  labelDimensions = (0, _objectAssign2.default)({}, defaultLabelDimensions, labelDimensions || {});
  fieldDimensions = (0, _objectAssign2.default)({}, defaultFieldDimensions, fieldDimensions || {});

  return horizontal ? _react2.default.createElement(
    _FormGroup2.default,
    null,
    showLabel && _react2.default.createElement(
      _Col2.default,
      _extends({ componentClass: _ControlLabel2.default }, labelDimensions),
      label
    ),
    _react2.default.createElement(
      _Col2.default,
      fieldDimensions,
      children
    )
  ) : _react2.default.createElement(
    _FormGroup2.default,
    null,
    children
  );
};

BsFormFooter.propTypes = {
  horizontal: _react.PropTypes.bool,
  labelDimensions: _react.PropTypes.object,
  fieldDimensions: _react.PropTypes.object,
  showLabel: _react.PropTypes.bool,
  label: _react.PropTypes.string
};

BsFormFooter.contextTypes = {
  defaultLabelDimensions: _react.PropTypes.object,
  defaultFieldDimensions: _react.PropTypes.object,
  defaultHorizontal: _react.PropTypes.bool
};

BsFormFooter.defaultProps = {
  showLabel: true,
  label: ''
};

exports.default = BsFormFooter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZmllbGRzL3dpZGdldHMvQnNGb3JtRm9vdGVyLmpzIl0sIm5hbWVzIjpbIkJzRm9ybUZvb3RlciIsImhvcml6b250YWwiLCJsYWJlbERpbWVuc2lvbnMiLCJmaWVsZERpbWVuc2lvbnMiLCJzaG93TGFiZWwiLCJsYWJlbCIsImNoaWxkcmVuIiwiZGVmYXVsdEhvcml6b250YWwiLCJkZWZhdWx0TGFiZWxEaW1lbnNpb25zIiwiZGVmYXVsdEZpZWxkRGltZW5zaW9ucyIsInVuZGVmaW5lZCIsInByb3BUeXBlcyIsImJvb2wiLCJvYmplY3QiLCJzdHJpbmciLCJjb250ZXh0VHlwZXMiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBSUEsZUFBZSxTQUFmQSxZQUFlLGNBSWI7QUFBQSxNQUhKQyxVQUdJLFFBSEpBLFVBR0k7QUFBQSxNQUhRQyxlQUdSLFFBSFFBLGVBR1I7QUFBQSxNQUh5QkMsZUFHekIsUUFIeUJBLGVBR3pCO0FBQUEsTUFIMENDLFNBRzFDLFFBSDBDQSxTQUcxQztBQUFBLE1BSHFEQyxLQUdyRCxRQUhxREEsS0FHckQ7QUFBQSxNQUg0REMsUUFHNUQsUUFINERBLFFBRzVEO0FBQUEsTUFESkMsaUJBQ0ksU0FESkEsaUJBQ0k7QUFBQSxNQURlQyxzQkFDZixTQURlQSxzQkFDZjtBQUFBLE1BRHVDQyxzQkFDdkMsU0FEdUNBLHNCQUN2Qzs7QUFDSlIsZUFBY0EsZUFBZVMsU0FBaEIsR0FBNkJILGlCQUE3QixHQUFpRE4sVUFBOUQ7QUFDQUMsb0JBQWtCLDRCQUFPLEVBQVAsRUFBV00sc0JBQVgsRUFBbUNOLG1CQUFtQixFQUF0RCxDQUFsQjtBQUNBQyxvQkFBa0IsNEJBQU8sRUFBUCxFQUFXTSxzQkFBWCxFQUFtQ04sbUJBQW1CLEVBQXRELENBQWxCOztBQUVBLFNBQU9GLGFBQ0w7QUFBQTtBQUFBO0FBQ0dHLGlCQUNDO0FBQUE7QUFBQSxpQkFBSyxzQ0FBTCxJQUF1Q0YsZUFBdkM7QUFDR0c7QUFESCxLQUZKO0FBTUU7QUFBQTtBQUFTRixxQkFBVDtBQUNHRztBQURIO0FBTkYsR0FESyxHQVlMO0FBQUE7QUFBQTtBQUNHQTtBQURILEdBWkY7QUFnQkQsQ0F6QkQ7O0FBMkJBTixhQUFhVyxTQUFiLEdBQXlCO0FBQ3ZCVixjQUFZLGlCQUFVVyxJQURDO0FBRXZCVixtQkFBaUIsaUJBQVVXLE1BRko7QUFHdkJWLG1CQUFpQixpQkFBVVUsTUFISjtBQUl2QlQsYUFBVyxpQkFBVVEsSUFKRTtBQUt2QlAsU0FBTyxpQkFBVVM7QUFMTSxDQUF6Qjs7QUFRQWQsYUFBYWUsWUFBYixHQUE0QjtBQUMxQlAsMEJBQXdCLGlCQUFVSyxNQURSO0FBRTFCSiwwQkFBd0IsaUJBQVVJLE1BRlI7QUFHMUJOLHFCQUFtQixpQkFBVUs7QUFISCxDQUE1Qjs7QUFNQVosYUFBYWdCLFlBQWIsR0FBNEI7QUFDMUJaLGFBQVcsSUFEZTtBQUUxQkMsU0FBTztBQUZtQixDQUE1Qjs7a0JBS2VMLFkiLCJmaWxlIjoiY29tcG9uZW50cy9maWVsZHMvd2lkZ2V0cy9Cc0Zvcm1Gb290ZXIuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
