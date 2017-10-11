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
        dispatch((0, _eventsActions.addParticipant)(json));
        dispatch((0, _reactRouterRedux.push)({
          pathname: location.pathname,
          query: { page: json.page.current }
        }));
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props4 = this.props,
          events = _props4.events,
          page = _props4.page;


      var registerOnClick = this.register;
      console.log(events);
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
                  oneEvent.tag.map(function (tag) {
                    return _react2.default.createElement(
                      'div',
                      { key: tag.name },
                      tag.name
                    );
                  })
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  oneEvent.organiser
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  oneEvent.category.map(function (category) {
                    return _react2.default.createElement(
                      'div',
                      { key: category.name },
                      category.name
                    );
                  })
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
                  oneEvent.participants.map(function (participant) {
                    return _react2.default.createElement(
                      'div',
                      { key: participant },
                      participant
                    );
                  })
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(
                    'button',
                    { onClick: registerOnClick.bind(_this2, oneEvent._id) },
                    'Register'
                  )
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZXMvZXZlbnRzL0V2ZW50TGlzdC5qcyJdLCJuYW1lcyI6WyJFdmVudExpc3QiLCJoYW5kbGVQYWdlQ2hhbmdlIiwiX2hhbmRsZVBhZ2VDaGFuZ2UiLCJiaW5kIiwiZmV0Y2hFdmVudHMiLCJfZmV0Y2hFdmVudHMiLCJsb2NhdGlvbiIsInByb3BzIiwicXVlcnkiLCJwYWdlIiwicHJldlByb3BzIiwiZXZlbnRzIiwibGVuZ3RoIiwiY3VycmVudCIsInBhZ2VJZCIsImRpc3BhdGNoIiwiRVZFTlRTIiwiYXBpRW5naW5lIiwibGlzdCIsImNhdGNoIiwiZXJyIiwidGhlbiIsImpzb24iLCJwYXRobmFtZSIsImV2ZW50SWQiLCJjb25zb2xlIiwibG9nIiwiYWRkUGFydGljaXBhbnQiLCJyZWdpc3Rlck9uQ2xpY2siLCJyZWdpc3RlciIsInRvdGFsIiwibWFwIiwib25lRXZlbnQiLCJfaWQiLCJkYXRlIiwiZGVzY3JpcHRpb24iLCJ0YWciLCJuYW1lIiwib3JnYW5pc2VyIiwiY2F0ZWdvcnkiLCJwcmljZSIsInF1b3RhIiwic3RhdGUiLCJwYXJ0aWNpcGFudHMiLCJwYXJ0aWNpcGFudCIsInBhZ2luYXRpb24iLCJlbnRpdHkiLCJldmVudFBhZ2VzIiwicGFnZXMiLCJpZHMiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLFM7OztBQUNKLHVCQUFjO0FBQUE7O0FBQUE7O0FBRVosVUFBS0MsZ0JBQUwsR0FBd0IsTUFBS0MsaUJBQUwsQ0FBdUJDLElBQXZCLE9BQXhCO0FBQ0EsVUFBS0MsV0FBTCxHQUFtQixNQUFLQyxZQUFMLENBQWtCRixJQUFsQixPQUFuQjtBQUhZO0FBSWI7Ozs7d0NBRW1CO0FBQUEsVUFDWkcsUUFEWSxHQUNDLEtBQUtDLEtBRE4sQ0FDWkQs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
