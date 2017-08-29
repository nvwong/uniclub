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

var _todo = require('../../../api/todo2');

var _todo2 = _interopRequireDefault(_todo);

var _errorActions = require('../../../actions/errorActions');

var _pageActions = require('../../../actions/pageActions');

var _todo2Actions = require('../../../actions/todo2Actions');

var _PageLayout = require('../../layouts/PageLayout');

var _PageLayout2 = _interopRequireDefault(_PageLayout);

var _BsPager = require('../../utils/BsPager');

var _BsPager2 = _interopRequireDefault(_BsPager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Todo2Item = function (_Component) {
  _inherits(Todo2Item, _Component);

  function Todo2Item() {
    _classCallCheck(this, Todo2Item);

    var _this = _possibleConstructorReturn(this, (Todo2Item.__proto__ || Object.getPrototypeOf(Todo2Item)).call(this));

    _this.state = {
      isEditable: false,
      inputValue: ''
    };
    return _this;
  }

  _createClass(Todo2Item, [{
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

  return Todo2Item;
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
          todo2 = _props3.todo2;


      if (todo2.length === 0 && prevProps.page.current !== page.current) {
        this.fetchTodos(page.current);
      }
    }
  }, {
    key: '_handlePageChange',
    value: function _handlePageChange(pageId) {
      var dispatch = this.props.dispatch;


      dispatch((0, _pageActions.setCrrentPage)(_Resources2.default.TODO2, pageId));
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
        dispatch((0, _todo2Actions.setTodos)(json));
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
        dispatch((0, _todo2Actions.addTodo)(json.todo2));
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
        dispatch((0, _todo2Actions.removeTodo)(id));
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
          this.props.todo2.map(function (todo2) {
            return _react2.default.createElement(Todo2Item, {
              key: todo2._id,
              onRemoveClick: _this7.handleRemoveClick.bind(_this7, todo2._id),
              onSaveClick: _this7.handleSaveClick.bind(_this7, todo2._id),
              text: todo2.text });
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
  var page = pagination.todo2.page;

  var todo2Pages = pagination.todo2.pages[page.current] || { ids: [] };
  var todo2 = todo2Pages.ids.map(function (id) {
    return entity.todo2[id];
  });

  return {
    apiEngine: apiEngine,
    todo2: todo2,
    page: page
  };
})(ListPage);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZXMvdXNlcmxpc3QvTGlzdFBhZ2UuanMiXSwibmFtZXMiOlsiVG9kbzJJdGVtIiwic3RhdGUiLCJpc0VkaXRhYmxlIiwiaW5wdXRWYWx1ZSIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwicHJvcHMiLCJ0ZXh0Iiwib25TYXZlQ2xpY2siLCJ0aGVuIiwib25SZW1vdmVDbGljayIsInJlbmRlcklucHV0IiwicmVuZGVyQ29udHJvbEJ1dHRvbnMiLCJMaXN0UGFnZSIsImhhbmRsZVBhZ2VDaGFuZ2UiLCJfaGFuZGxlUGFnZUNoYW5nZSIsImJpbmQiLCJmZXRjaFRvZG9zIiwiX2ZldGNoVG9kb3MiLCJoYW5kbGVBZGRDbGljayIsIl9oYW5kbGVBZGRDbGljayIsImxvY2F0aW9uIiwicXVlcnkiLCJwYWdlIiwicHJldlByb3BzIiwidG9kbzIiLCJsZW5ndGgiLCJjdXJyZW50IiwicGFnZUlkIiwiZGlzcGF0Y2giLCJUT0RPMiIsImFwaUVuZ2luZSIsImxpc3QiLCJjYXRjaCIsImVyciIsImpzb24iLCJwYXRobmFtZSIsInJlZnMiLCJ0b2RvdGV4dCIsImNyZWF0ZSIsImlkIiwibmV3VGV4dCIsInVwZGF0ZSIsInJlbW92ZSIsInRvdGFsIiwibWFwIiwiX2lkIiwiaGFuZGxlUmVtb3ZlQ2xpY2siLCJoYW5kbGVTYXZlQ2xpY2siLCJwYWdpbmF0aW9uIiwiZW50aXR5IiwidG9kbzJQYWdlcyIsInBhZ2VzIiwiaWRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBS0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLFM7OztBQUNKLHVCQUFjO0FBQUE7O0FBQUE7O0FBRVosVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGtCQUFZLEtBREQ7QUFFWEMsa0JBQVk7QUFGRCxLQUFiO0FBRlk7QUFNYjs7OztrQ0FFYTtBQUFBOztBQUFB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
