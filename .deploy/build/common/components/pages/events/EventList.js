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
    key: 'register',
    value: function register(eventId) {
      var _props3 = this.props,
          dispatch = _props3.dispatch,
          apiEngine = _props3.apiEngine,
          location = _props3.location;

      console.log(this.props);
      (0, _event2.default)(apiEngine).addParticipant(eventId).catch(function (err) {
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
      var _props4 = this.props,
          events = _props4.events,
          page = _props4.page;


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
                'Name'
              ),
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
              ),
              _react2.default.createElement(
                'th',
                null,
                'Register'
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
                  oneEvent.name
                ),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZXMvZXZlbnRzL0V2ZW50TGlzdC5qcyJdLCJuYW1lcyI6WyJFdmVudExpc3QiLCJoYW5kbGVQYWdlQ2hhbmdlIiwiX2hhbmRsZVBhZ2VDaGFuZ2UiLCJiaW5kIiwiZmV0Y2hFdmVudHMiLCJfZmV0Y2hFdmVudHMiLCJsb2NhdGlvbiIsInByb3BzIiwicXVlcnkiLCJwYWdlIiwicHJldlByb3BzIiwiZXZlbnRzIiwibGVuZ3RoIiwiY3VycmVudCIsInBhZ2VJZCIsImRpc3BhdGNoIiwiRVZFTlRTIiwiYXBpRW5naW5lIiwibGlzdCIsImNhdGNoIiwiZXJyIiwidGhlbiIsImpzb24iLCJwYXRobmFtZSIsImV2ZW50SWQiLCJjb25zb2xlIiwibG9nIiwiYWRkUGFydGljaXBhbnQiLCJ0b3RhbCIsIm1hcCIsIm9uZUV2ZW50IiwiX2lkIiwibmFtZSIsImRhdGUiLCJkZXNjcmlwdGlvbiIsInRhZyIsIm9yZ2FuaXNlciIsImNhdGVnb3J5IiwicHJpY2UiLCJxdW90YSIsInN0YXRlIiwicGFydGljaXBhbnRzIiwicGFnaW5hdGlvbiIsImVudGl0eSIsImV2ZW50UGFnZXMiLCJwYWdlcyIsImlkcyIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsUzs7O0FBQ0osdUJBQWM7QUFBQTs7QUFBQTs7QUFFWixVQUFLQyxnQkFBTCxHQUF3QixNQUFLQyxpQkFBTCxDQUF1QkMsSUFBdkIsT0FBeEI7QUFDQSxVQUFLQyxXQUFMLEdBQW1CLE1BQUtDLFlBQUwsQ0FBa0JGLElBQWxCLE9BQW5CO0FBSFk7QUFJYjs7Ozt3Q0FFbUI7QUFBQSxVQUNaRyxRQURZLEdBQ0MsS0FBS0MsS0FETixDQUNaRCxRQURZOzs7QUFHbEIsV0FBS0YsV0FBTCxDQUFpQkUsU0FBU0UsS0FBVCxD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QUFBO0FBQUEsZUFURjtBQVVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFWRjtBQVdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYRjtBQVlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFaRjtBQURGLFdBREY7QUFpQkU7QUFBQTtBQUFBO0FBQ0dqQixtQkFBT2tCLEdBQVAsQ0FBVyxVQUFDQyxRQUFEO0FBQUEscUJBQ1Y7QUFBQTtBQUFBLGtCQUFJLEtBQUtBLFNBQVNDLEdBQWxCO0FBQ0U7QUFBQTtBQUFBO0FBQUtELDJCQUFTRTtBQUFkLGlCQURGO0FBRUU7QUFBQTtBQUFBO0FBQUtGLDJCQUFTRztBQUFkLGlCQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUtILDJCQUFTeEI7QUFBZCxpQkFIRjtBQUlFO0FBQUE7QUFBQTtBQUFLd0IsMkJBQVNJO0FBQWQsaUJBSkY7QUFLRTtBQUFBO0FBQUE7QUFBS0osMkJBQVNLO0FBQWQsaUJBTEY7QUFNRTtBQUFBO0FBQUE7QUFBS0wsMkJBQVNNO0FBQWQsaUJBTkY7QUFPRTtBQUFBO0FBQUE7QUFBS04sMkJBQVNPO0FBQWQsaUJBUEY7QUFRRTtBQUFBO0FBQUE7QUFBS1AsMkJBQVNRO0FBQWQsaUJBUkY7QUFTRTtBQUFBO0FBQUE7QUFBS1IsMkJBQVNTO0FBQWQsaUJBVEY7QUFVRTtBQUFBO0FBQUE7QUFBS1QsMkJBQVNVO0FBQWQsaUJBVkY7QUFXRTtBQUFBO0FBQUE7QUFBS1YsMkJBQVNXO0FBQWQ7QUFYRixlQURVO0FBQUEsYUFBWDtBQURIO0FBakJGLFNBSEY7QUEyQ0U7QUFDRSxnQkFBT2hDLElBRFQ7QUFFRSx3QkFBYyxLQUFLUjtBQUZyQjtBQTNDRixPQURGO0FBa0REOzs7Ozs7QUFDRjs7a0JBRWMseUJBQVEsZ0JBQXVDO0FBQUEsTUFBcENnQixTQUFvQyxRQUFwQ0EsU0FBb0M7QUFBQSxNQUF6QnlCLFVBQXlCLFFBQXpCQSxVQUF5QjtBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTtBQUFBLE1BQ3REbEMsSUFEc0QsR0FDN0NpQyxXQUFXL0IsTUFEa0MsQ0FDdERGLElBRHNEOztBQUU1RCxNQUFJbUMsYUFBYUYsV0FBVy9CLE1BQVgsQ0FBa0JrQyxLQUFsQixDQUF3QnBDLEtBQUtJLE9BQTdCLEtBQXlDLEVBQUVpQyxLQUFLLEVBQVAsRUFBMUQ7QUFDQSxNQUFJbkMsU0FBU2lDLFdBQVdFLEdBQVgsQ0FBZWpCLEdBQWYsQ0FBbUI7QUFBQSxXQUFNYyxPQUFPaEMsTUFBUCxDQUFjb0MsRUFBZCxDQUFOO0FBQUEsR0FBbkIsQ0FBYjs7QUFFQSxTQUFPO0FBQ0w5Qix3QkFESztBQUVMTixrQkFGSztBQUdMRjtBQUhLLEdBQVA7QUFLRCxDQVZjLEVBVVpULFNBVlksQyIsImZpbGUiOiJjb21wb25lbnRzL3BhZ2VzL2V2ZW50cy9FdmVudExpc3QuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
