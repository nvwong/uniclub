'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateForm = undefined;

var _form = require('../api/form');

var _form2 = _interopRequireDefault(_form);

var _errorActions = require('../actions/errorActions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validateForm = exports.validateForm = function validateForm(formName, fieldName, value) {
  return function (dispatch, getState) {
    return (0, _form2.default)(getState().apiEngine).form(formName).field(fieldName, value).validate().catch(function (err) {
      var validationError = {};
      dispatch((0, _errorActions.pushErrors)(err));
      validationError[fieldName] = 'Unable to validate';
      throw validationError;
    });
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbnMvZm9ybUFjdGlvbnMuanMiXSwibmFtZXMiOlsidmFsaWRhdGVGb3JtIiwiZm9ybU5hbWUiLCJmaWVsZE5hbWUiLCJ2YWx1ZSIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJhcGlFbmdpbmUiLCJmb3JtIiwiZmllbGQiLCJ2YWxpZGF0ZSIsImNhdGNoIiwiZXJyIiwidmFsaWRhdGlvbkVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVPLElBQU1BLHNDQUFlLFNBQWZBLFlBQWUsQ0FBQ0MsUUFBRCxFQUFXQyxTQUFYLEVBQXNCQyxLQUF0QixFQUFnQztBQUMxRCxTQUFPLFVBQUNDLFFBQUQsRUFBV0MsUUFBWCxFQUF3QjtBQUM3QixXQUFPLG9CQUFRQSxXQUFXQyxTQUFuQixFQUNKQyxJQURJLENBQ0NOLFFBREQsRUFFSk8sS0FGSSxDQUVFTixTQUZGLEVBRWFDLEtBRmIsRUFHSk0sUUFISSxHQUlKQyxLQUpJLENBSUUsVUFBQ0MsR0FBRCxFQUFTO0FBQ2QsVUFBSUMsa0JBQWtCLEVBQXRCO0FBQ0FSLGVBQVMsOEJBQVdPLEdBQVgsQ0FBVDtBQUNBQyxzQkFBZ0JWLFNBQWhCLElBQTZCLG9CQUE3QjtBQUNBLFlBQU1VLGVBQU47QUFDRCxLQVRJLENBQVA7QUFVRCxHQVhEO0FBWUQsQ0FiTSIsImZpbGUiOiJhY3Rpb25zL2Zvcm1BY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
