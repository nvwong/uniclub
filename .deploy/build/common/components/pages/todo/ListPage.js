'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouterRedux = require('react-router-redux');

var _PageHeader = require('react-bootstrap/lib/PageHeader');

var _PageHeader2 = _interopRequireDefault(_PageHeader);

var _Resources = require('../../../constants/Resources');

var _Resources2 = _interopRequireDefault(_Resources);

var _todo = require('../../../api/todo');

var _todo2 = _interopRequireDefault(_todo);

var _errorActions = require('../../../actions/errorActions');

var _pageActions = require('../../../actions/pageActions');

var _todoActions = require('../../../actions/todoActions');

var _PageLayout = require('../../layouts/PageLayout');

var _PageLayout2 = _interopRequireDefault(_PageLayout);

var _BsPager = require('../../utils/BsPager');

var _BsPager2 = _interopRequireDefault(_BsPager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoItem = function (_Component) {
  _inherits(TodoItem, _Component);

  function TodoItem() {
    _classCallCheck(this, TodoItem);

    var _this = _possibleConstructorReturn(this, (TodoItem.__proto__ || Object.getPrototypeOf(TodoItem)).call(this));

    _this.state = {
      isEditable: false,
      inputValue: ''
    };
    return _this;
  }

  _createClass(TodoItem, [{
    key: 'renderInput',
    value: function renderInput() {
      var _this2 = this;

      var inputValue = this.state.inputValue;


      return _react2.default.createElement('input', {
        type: 'text',
        value: inputValue,
        onChange: function onChange(e) {
          return _this2.setState({
            inputValue: e.target.value
          });
        }
      });
    }
  }, {
    key: 'renderControlButtons',
    value: function renderControlButtons() {
      var _this3 = this;

      var _props = this.props,
          text = _props.text,
          onSaveClick = _props.onSaveClick;
      var _state = this.state,
          isEditable = _state.isEditable,
          inputValue = _state.inputValue;


      return isEditable ? _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement(
          'button',
          {
            onClick: function onClick() {
              return onSaveClick(inputValue).then(function () {
                return _this3.setState({ isEditable: false });
              });
            }
          },
          'Save'
        ),
        _react2.default.createElement(
          'button',
          { onClick: function onClick() {
              return _this3.setState({ isEditable: false });
            } },
          'Cancel'
        )
      ) : _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement(
          'button',
          {
            onClick: function onClick() {
              return _this3.setState({ isEditable: true, inputValue: text });
            }
          },
          'Edit'
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          onRemoveClick = _props2.onRemoveClick,
          text = _props2.text;
      var isEditable = this.state.isEditable;


      return _react2.default.createElement(
        'li',
        null,
        text,
        isEditable && this.renderInput(),
        this.renderControlButtons(),
        _react2.default.createElement(
          'button',
          { onClick: onRemoveClick },
          'x'
        )
      );
    }
  }]);

  return TodoItem;
}(_react.Component);

var ListPage = function (_Component2) {
  _inherits(ListPage, _Component2);

  function ListPage() {
    _classCallCheck(this, ListPage);

    var _this4 = _possibleConstructorReturn(this, (ListPage.__proto__ || Object.getPrototypeOf(ListPage)).call(this));

    _this4.handlePageChange = _this4._handlePageChange.bind(_this4);
    _this4.fetchTodos = _this4._fetchTodos.bind(_this4);
    _this4.handleAddClick = _this4._handleAddClick.bind(_this4);
    return _this4;
  }

  _createClass(ListPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var location = this.props.location;


      this.fetchTodos(location.query.page || 1);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props3 = this.props,
          page = _props3.page,
          todos = _props3.todos;


      if (todos.length === 0 && prevProps.page.current !== page.current) {
        this.fetchTodos(page.current);
      }
    }
  }, {
    key: '_handlePageChange',
    value: function _handlePageChange(pageId) {
      var dispatch = this.props.dispatch;


      dispatch((0, _pageActions.setCrrentPage)(_Resources2.default.TODO, pageId));
    }
  }, {
    key: '_fetchTodos',
    value: function _fetchTodos(page) {
      var _props4 = this.props,
          dispatch = _props4.dispatch,
          apiEngine = _props4.apiEngine,
          location = _props4.location;

      (0, _todo2.default)(apiEngine).list({ page: page }).catch(function (err) {
        dispatch((0, _errorActions.pushErrors)(err));
        throw err;
      }).then(function (json) {
        dispatch((0, _todoActions.setTodos)(json));
        dispatch((0, _reactRouterRedux.push)({
          pathname: location.pathname,
          query: { page: json.page.current }
        }));
      });
    }
  }, {
    key: '_handleAddClick',
    value: function _handleAddClick() {
      var _this5 = this;

      var _props5 = this.props,
          dispatch = _props5.dispatch,
          apiEngine = _props5.apiEngine;

      var text = this.refs.todotext.value;
      (0, _todo2.default)(apiEngine).create({ text: text }).catch(function (err) {
        dispatch((0, _errorActions.pushErrors)(err));
        throw err;
      }).then(function (json) {
        dispatch((0, _todoActions.addTodo)(json.todo));
        _this5.refs.todotext.value = '';
      });
    }
  }, {
    key: 'handleSaveClick',
    value: function handleSaveClick(id, newText) {
      var _this6 = this;

      var _props6 = this.props,
          dispatch = _props6.dispatch,
          apiEngine = _props6.apiEngine;


      return (0, _todo2.default)(apiEngine).update(id, { text: newText }).catch(function (err) {
        dispatch((0, _errorActions.pushErrors)(err));
        throw err;
      }).then(function (json) {
        _this6.fetchTodos();
      });
    }
  }, {
    key: 'handleRemoveClick',
    value: function handleRemoveClick(id) {
      var _props7 = this.props,
          dispatch = _props7.dispatch,
          apiEngine = _props7.apiEngine;

      (0, _todo2.default)(apiEngine).remove(id).catch(function (err) {
        dispatch((0, _errorActions.pushErrors)(err));
        throw err;
      }).then(function (json) {
        dispatch((0, _todoActions.removeTodo)(id));
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this7 = this;

      var page = this.props.page;

      return _react2.default.createElement(
        _PageLayout2.default,
        null,
        _react2.default.createElement(
          _PageHeader2.default,
          null,
          'Todo List (',
          page.current + ' / ' + page.total,
          ')'
        ),
        _react2.default.createElement('input', {
          disabled: page.current !== 1,
          type: 'text',
          ref: 'todotext'
        }),
        _react2.default.createElement(
          'button',
          {
            disabled: page.current !== 1,
            onClick: this.handleAddClick
          },
          'Add Todo'
        ),
        page.current !== 1 && _react2.default.createElement(
          'div',
          null,
          'The input box is only available for page 1'
        ),
        _react2.default.createElement(
          'ul',
          null,
          this.props.todos.map(function (todo) {
            return _react2.default.createElement(TodoItem, {
              key: todo._id,
              onRemoveClick: _this7.handleRemoveClick.bind(_this7, todo._id),
              onSaveClick: _this7.handleSaveClick.bind(_this7, todo._id),
              text: todo.text });
          })
        ),
        _react2.default.createElement(_BsPager2.default, {
          page: page,
          onPageChange: this.handlePageChange
        })
      );
    }
  }]);

  return ListPage;
}(_react.Component);

;

exports.default = (0, _reactRedux.connect)(function (_ref) {
  var apiEngine = _ref.apiEngine,
      pagination = _ref.pagination,
      entity = _ref.entity;
  var page = pagination.todos.page;

  var todoPages = pagination.todos.pages[page.current] || { ids: [] };
  var todos = todoPages.ids.map(function (id) {
    return entity.todos[id];
  });

  return {
    apiEngine: apiEngine,
    todos: todos,
    page: page
  };
})(ListPage);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZXMvdG9kby9MaXN0UGFnZS5qcyJdLCJuYW1lcyI6WyJUb2RvSXRlbSIsInN0YXRlIiwiaXNFZGl0YWJsZSIsImlucHV0VmFsdWUiLCJlIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInByb3BzIiwidGV4dCIsIm9uU2F2ZUNsaWNrIiwidGhlbiIsIm9uUmVtb3ZlQ2xpY2siLCJyZW5kZXJJbnB1dCIsInJlbmRlckNvbnRyb2xCdXR0b25zIiwiTGlzdFBhZ2UiLCJoYW5kbGVQYWdlQ2hhbmdlIiwiX2hhbmRsZVBhZ2VDaGFuZ2UiLCJiaW5kIiwiZmV0Y2hUb2RvcyIsIl9mZXRjaFRvZG9zIiwiaGFuZGxlQWRkQ2xpY2siLCJfaGFuZGxlQWRkQ2xpY2siLCJsb2NhdGlvbiIsInF1ZXJ5IiwicGFnZSIsInByZXZQcm9wcyIsInRvZG9zIiwibGVuZ3RoIiwiY3VycmVudCIsInBhZ2VJZCIsImRpc3BhdGNoIiwiVE9ETyIsImFwaUVuZ2luZSIsImxpc3QiLCJjYXRjaCIsImVyciIsImpzb24iLCJwYXRobmFtZSIsInJlZnMiLCJ0b2RvdGV4dCIsImNyZWF0ZSIsInRvZG8iLCJpZCIsIm5ld1RleHQiLCJ1cGRhdGUiLCJyZW1vdmUiLCJ0b3RhbCIsIm1hcCIsIl9pZCIsImhhbmRsZVJlbW92ZUNsaWNrIiwiaGFuZGxlU2F2ZUNsaWNrIiwicGFnaW5hdGlvbiIsImVudGl0eSIsInRvZG9QYWdlcyIsInBhZ2VzIiwiaWRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBS0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLFE7OztBQUNKLHNCQUFjO0FBQUE7O0FBQUE7O0FBRVosVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGtCQUFZLEtBREQ7QUFFWEMsa0JBQVk7QUFGRCxLQUFiO0FBRlk7QUFNYjs7OztrQ0FFYTtBQUFBOztBQUFB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
