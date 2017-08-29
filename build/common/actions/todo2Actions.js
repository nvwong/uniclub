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
    var normalized = (0, _normalizr.normalize)(res.todo2, (0, _normalizr.arrayOf)(_schemas.todo2Schema));

    dispatch((0, _entityActions.setEntities)(normalized));
    dispatch((0, _pageActions.setPages)(_Resources2.default.TODO2, res.page, normalized.result));
  };
};

var addTodo = exports.addTodo = function addTodo(todo2) {
  return function (dispatch, getState) {
    var normalized = (0, _normalizr.normalize)([todo2], (0, _normalizr.arrayOf)(_schemas.todo2Schema));

    dispatch((0, _pageActions.prependEntitiesIntoPage)(_Resources2.default.TODO2, normalized, 1));
  };
};

var removeTodo = exports.removeTodo = function removeTodo(id) {
  return (0, _entityActions.removeEntities)(_Resources2.default.TODO2, [id]);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbnMvdG9kbzJBY3Rpb25zLmpzIl0sIm5hbWVzIjpbInNldFRvZG9zIiwicmVzIiwiZGlzcGF0Y2giLCJnZXRTdGF0ZSIsIm5vcm1hbGl6ZWQiLCJ0b2RvMiIsIlRPRE8yIiwicGFnZSIsInJlc3VsdCIsImFkZFRvZG8iLCJyZW1vdmVUb2RvIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBRU8sSUFBTUEsOEJBQVcsU0FBWEEsUUFBVyxDQUFDQyxHQUFEO0FBQUEsU0FBUyxVQUFDQyxRQUFELEVBQVdDLFFBQVgsRUFBd0I7QUFDdkQsUUFBSUMsYUFBYSwwQkFBVUgsSUFBSUksS0FBZCxFQUFxQiw2Q0FBckIsQ0FBakI7O0FBRUFILGFBQVMsZ0NBQVlFLFVBQVosQ0FBVDtBQUNBRixhQUFTLDJCQUFTLG9CQUFVSSxLQUFuQixFQUEwQkwsSUFBSU0sSUFBOUIsRUFBb0NILFdBQVdJLE1BQS9DLENBQVQ7QUFDRCxHQUx1QjtBQUFBLENBQWpCOztBQU9BLElBQU1DLDRCQUFVLFNBQVZBLE9BQVUsQ0FBQ0osS0FBRDtBQUFBLFNBQVcsVUFBQ0gsUUFBRCxFQUFXQyxRQUFYLEVBQXdCO0FBQ3hELFFBQUlDLGFBQWEsMEJBQVUsQ0FBQ0MsS0FBRCxDQUFWLEVBQW1CLDZDQUFuQixDQUFqQjs7QUFFQUgsYUFBUywwQ0FDUCxvQkFBVUksS0FESCxFQUVQRixVQUZPLEVBR1AsQ0FITyxDQUFUO0FBS0QsR0FSc0I7QUFBQSxDQUFoQjs7QUFVQSxJQUFNTSxrQ0FBYSxTQUFiQSxVQUFhLENBQUNDLEVBQUQ7QUFBQSxTQUFRLG1DQUFlLG9CQUFVTCxLQUF6QixFQUFnQyxDQUFDSyxFQUFELENBQWhDLENBQVI7QUFBQSxDQUFuQiIsImZpbGUiOiJhY3Rpb25zL3RvZG8yQWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
