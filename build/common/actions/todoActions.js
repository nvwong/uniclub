'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeTodo = exports.addTodo = exports.setTodos = undefined;

var _normalizr = require('normalizr');

var _schemas = require('../schemas');

var _Resources = require('../constants/Resources');

var _Resources2 = _interopRequireDefault(_Resources);

var _entityActions = require('./entityActions');

var _pageActions = require('./pageActions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setTodos = exports.setTodos = function setTodos(res) {
  return function (dispatch, getState) {
    var normalized = (0, _normalizr.normalize)(res.todos, (0, _normalizr.arrayOf)(_schemas.todoSchema));

    dispatch((0, _entityActions.setEntities)(normalized));
    dispatch((0, _pageActions.setPages)(_Resources2.default.TODO, res.page, normalized.result));
  };
};

var addTodo = exports.addTodo = function addTodo(todo) {
  return function (dispatch, getState) {
    var normalized = (0, _normalizr.normalize)([todo], (0, _normalizr.arrayOf)(_schemas.todoSchema));

    dispatch((0, _pageActions.prependEntitiesIntoPage)(_Resources2.default.TODO, normalized, 1));
  };
};

var removeTodo = exports.removeTodo = function removeTodo(id) {
  return (0, _entityActions.removeEntities)(_Resources2.default.TODO, [id]);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbnMvdG9kb0FjdGlvbnMuanMiXSwibmFtZXMiOlsic2V0VG9kb3MiLCJyZXMiLCJkaXNwYXRjaCIsImdldFN0YXRlIiwibm9ybWFsaXplZCIsInRvZG9zIiwiVE9ETyIsInBhZ2UiLCJyZXN1bHQiLCJhZGRUb2RvIiwidG9kbyIsInJlbW92ZVRvZG8iLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFFTyxJQUFNQSw4QkFBVyxTQUFYQSxRQUFXLENBQUNDLEdBQUQ7QUFBQSxTQUFTLFVBQUNDLFFBQUQsRUFBV0MsUUFBWCxFQUF3QjtBQUN2RCxRQUFJQyxhQUFhLDBCQUFVSCxJQUFJSSxLQUFkLEVBQXFCLDRDQUFyQixDQUFqQjs7QUFFQUgsYUFBUyxnQ0FBWUUsVUFBWixDQUFUO0FBQ0FGLGFBQVMsMkJBQVMsb0JBQVVJLElBQW5CLEVBQXlCTCxJQUFJTSxJQUE3QixFQUFtQ0gsV0FBV0ksTUFBOUMsQ0FBVDtBQUNELEdBTHVCO0FBQUEsQ0FBakI7O0FBT0EsSUFBTUMsNEJBQVUsU0FBVkEsT0FBVSxDQUFDQyxJQUFEO0FBQUEsU0FBVSxVQUFDUixRQUFELEVBQVdDLFFBQVgsRUFBd0I7QUFDdkQsUUFBSUMsYUFBYSwwQkFBVSxDQUFDTSxJQUFELENBQVYsRUFBa0IsNENBQWxCLENBQWpCOztBQUVBUixhQUFTLDBDQUNQLG9CQUFVSSxJQURILEVBRVBGLFVBRk8sRUFHUCxDQUhPLENBQVQ7QUFLRCxHQVJzQjtBQUFBLENBQWhCOztBQVVBLElBQU1PLGtDQUFhLFNBQWJBLFVBQWEsQ0FBQ0MsRUFBRDtBQUFBLFNBQVEsbUNBQWUsb0JBQVVOLElBQXpCLEVBQStCLENBQUNNLEVBQUQsQ0FBL0IsQ0FBUjtBQUFBLENBQW5CIiwiZmlsZSI6ImFjdGlvbnMvdG9kb0FjdGlvbnMuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
