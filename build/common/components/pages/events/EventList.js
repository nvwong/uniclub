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

var _Table = require('react-bootstrap/lib/Table');

var _Table2 = _interopRequireDefault(_Table);

var _Resources = require('../../../constants/Resources');

var _Resources2 = _interopRequireDefault(_Resources);

var _event = require('../../../api/event');

var _event2 = _interopRequireDefault(_event);

var _errorActions = require('../../../actions/errorActions');

var _pageActions = require('../../../actions/pageActions');

var _eventsActions = require('../../../actions/eventsActions');

var _PageLayout = require('../../layouts/PageLayout');

var _PageLayout2 = _interopRequireDefault(_PageLayout);

var _BsPager = require('../../utils/BsPager');

var _BsPager2 = _interopRequireDefault(_BsPager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EventList = function (_Component) {
  _inherits(EventList, _Component);

  function EventList() {
    _classCallCheck(this, EventList);

    var _this = _possibleConstructorReturn(this, (EventList.__proto__ || Object.getPrototypeOf(EventList)).call(this));

    _this.handlePageChange = _this._handlePageChange.bind(_this);
    _this.fetchEvents = _this._fetchEvents.bind(_this);
    return _this;
  }

  _createClass(EventList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var location = this.props.location;


      this.fetchEvents(location.query.page || 1);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props = this.props,
          page = _props.page,
          events = _props.events;


      if (events.length === 0 && prevProps.page.current !== page.current) {
        this.fetchEvents(page.current);
      }
    }
  }, {
    key: '_handlePageChange',
    value: function _handlePageChange(pageId) {
      var dispatch = this.props.dispatch;


      dispatch((0, _pageActions.setCrrentPage)(_Resources2.default.EVENTS, pageId));
    }
  }, {
    key: '_fetchEvents',
    value: function _fetchEvents(page) {
      var _props2 = this.props,
          dispatch = _props2.dispatch,
          apiEngine = _props2.apiEngine,
          location = _props2.location;


      (0, _event2.default)(apiEngine).list({ page: page }).catch(function (err) {
        dispatch((0, _errorActions.pushErrors)(err));
        throw err;
      }).then(function (json) {
        dispatch((0, _eventsActions.setEvents)(json));
        dispatch((0, _reactRouterRedux.push)({
          pathname: location.pathname,
          query: { page: json.page.current }
        }));
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          events = _props3.events,
          page = _props3.page;


      return _react2.default.createElement(
        _PageLayout2.default,
        null,
        _react2.default.createElement(
          _PageHeader2.default,
          null,
          'Events List (',
          page.current + ' / ' + page.total,
          ')'
        ),
        _react2.default.createElement(
          _Table2.default,
          { striped: true, bordered: true },
          _react2.default.createElement(
            'thead',
            null,
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                'Date'
              ),
              _react2.default.createElement(
                'th',
                null,
                'Location'
              ),
              _react2.default.createElement(
                'th',
                null,
                'Description'
              ),
              _react2.default.createElement(
                'th',
                null,
                'Tag'
              ),
              _react2.default.createElement(
                'th',
                null,
                'Organiser'
              ),
              _react2.default.createElement(
                'th',
                null,
                'Category'
              ),
              _react2.default.createElement(
                'th',
                null,
                'Price'
              ),
              _react2.default.createElement(
                'th',
                null,
                'Quota'
              ),
              _react2.default.createElement(
                'th',
                null,
                'State'
              ),
              _react2.default.createElement(
                'th',
                null,
                'Participants'
              )
            )
          ),
          _react2.default.createElement(
            'tbody',
            null,
            events.map(function (oneEvent) {
              return _react2.default.createElement(
                'tr',
                { key: oneEvent._id },
                _react2.default.createElement(
                  'td',
                  null,
                  oneEvent.date
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  oneEvent.location
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  oneEvent.description
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  oneEvent.tag
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  oneEvent.organiser
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  oneEvent.category
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  oneEvent.price
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  oneEvent.quota
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  oneEvent.state
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  oneEvent.participants
                )
              );
            })
          )
        ),
        _react2.default.createElement(_BsPager2.default, {
          page: page,
          onPageChange: this.handlePageChange
        })
      );
    }
  }]);

  return EventList;
}(_react.Component);

;

exports.default = (0, _reactRedux.connect)(function (_ref) {
  var apiEngine = _ref.apiEngine,
      pagination = _ref.pagination,
      entity = _ref.entity;
  var page = pagination.events.page;

  var eventPages = pagination.events.pages[page.current] || { ids: [] };
  var events = eventPages.ids.map(function (id) {
    return entity.events[id];
  });

  return {
    apiEngine: apiEngine,
    events: events,
    page: page
  };
})(EventList);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZXMvZXZlbnRzL0V2ZW50TGlzdC5qcyJdLCJuYW1lcyI6WyJFdmVudExpc3QiLCJoYW5kbGVQYWdlQ2hhbmdlIiwiX2hhbmRsZVBhZ2VDaGFuZ2UiLCJiaW5kIiwiZmV0Y2hFdmVudHMiLCJfZmV0Y2hFdmVudHMiLCJsb2NhdGlvbiIsInByb3BzIiwicXVlcnkiLCJwYWdlIiwicHJldlByb3BzIiwiZXZlbnRzIiwibGVuZ3RoIiwiY3VycmVudCIsInBhZ2VJZCIsImRpc3BhdGNoIiwiRVZFTlRTIiwiYXBpRW5naW5lIiwibGlzdCIsImNhdGNoIiwiZXJyIiwidGhlbiIsImpzb24iLCJwYXRobmFtZSIsInRvdGFsIiwibWFwIiwib25lRXZlbnQiLCJfaWQiLCJkYXRlIiwiZGVzY3JpcHRpb24iLCJ0YWciLCJvcmdhbmlzZXIiLCJjYXRlZ29yeSIsInByaWNlIiwicXVvdGEiLCJzdGF0ZSIsInBhcnRpY2lwYW50cyIsInBhZ2luYXRpb24iLCJlbnRpdHkiLCJldmVudFBhZ2VzIiwicGFnZXMiLCJpZHMiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLFM7OztBQUNKLHVCQUFjO0FBQUE7O0FBQUE7O0FBRVosVUFBS0MsZ0JBQUwsR0FBd0IsTUFBS0MsaUJBQUwsQ0FBdUJDLElBQXZCLE9BQXhCO0FBQ0EsVUFBS0MsV0FBTCxHQUFtQixNQUFLQyxZQUFMLENBQWtCRixJQUFsQixPQUFuQjtBQUhZO0FBSWI7Ozs7d0NBRW1CO0FBQUEsVUFDWkcsUUFEWSxHQUNDLEtBQUtDLEtBRE4sQ0FDWkQsUUFEWTs7O0FBR2xCLFdBQUtGLFdBQUwsQ0FBaUJFLFNBQVNFLEtBQVQsQ0FBZUMsSUFBZixJQUF1QixDQUF4QztBQUNEOzs7dUNBRWtCQyxTLEVBQVc7QUFBQSxt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LDJCQUFTVTtBQUFkO0FBVkYsZUFEVTtBQUFBLGFBQVg7QUFESDtBQWZGLFNBSEY7QUFtQ0U7QUFDRSxnQkFBTzNCLElBRFQ7QUFFRSx3QkFBYyxLQUFLUjtBQUZyQjtBQW5DRixPQURGO0FBMENEOzs7Ozs7QUFDRjs7a0JBRWMseUJBQVEsZ0JBQXVDO0FBQUEsTUFBcENnQixTQUFvQyxRQUFwQ0EsU0FBb0M7QUFBQSxNQUF6Qm9CLFVBQXlCLFFBQXpCQSxVQUF5QjtBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTtBQUFBLE1BQ3REN0IsSUFEc0QsR0FDN0M0QixXQUFXMUIsTUFEa0MsQ0FDdERGLElBRHNEOztBQUU1RCxNQUFJOEIsYUFBYUYsV0FBVzFCLE1BQVgsQ0FBa0I2QixLQUFsQixDQUF3Qi9CLEtBQUtJLE9BQTdCLEtBQXlDLEVBQUU0QixLQUFLLEVBQVAsRUFBMUQ7QUFDQSxNQUFJOUIsU0FBUzRCLFdBQVdFLEdBQVgsQ0FBZWhCLEdBQWYsQ0FBbUI7QUFBQSxXQUFNYSxPQUFPM0IsTUFBUCxDQUFjK0IsRUFBZCxDQUFOO0FBQUEsR0FBbkIsQ0FBYjs7QUFFQSxTQUFPO0FBQ0x6Qix3QkFESztBQUVMTixrQkFGSztBQUdMRjtBQUhLLEdBQVA7QUFLRCxDQVZjLEVBVVpULFNBVlksQyIsImZpbGUiOiJjb21wb25lbnRzL3BhZ2VzL2V2ZW50cy9FdmVudExpc3QuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
