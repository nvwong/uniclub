'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterRedux = require('react-router-redux');

var _isString = require('lodash/isString');

var _isString2 = _interopRequireDefault(_isString);

var _reactRedux = require('react-redux');

var _Grid = require('react-bootstrap/lib/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _Alert = require('react-bootstrap/lib/Alert');

var _Alert2 = _interopRequireDefault(_Alert);

var _Table = require('react-bootstrap/lib/Table');

var _Table2 = _interopRequireDefault(_Table);

var _errorActions = require('../../actions/errorActions');

var _ErrorCodes = require('../../constants/ErrorCodes');

var _ErrorCodes2 = _interopRequireDefault(_ErrorCodes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderMetaContent(metaContent) {
  if ((0, _isString2.default)(metaContent)) {
    return metaContent;
  }

  return _react2.default.createElement(
    'pre',
    null,
    JSON.stringify(metaContent, null, 2)
  );
}

function renderMeta(meta) {
  if ((0, _isString2.default)(meta)) {
    return _react2.default.createElement(
      'p',
      null,
      meta
    );
  }

  return _react2.default.createElement(
    _Table2.default,
    {
      condensed: true,
      responsive: true,
      style: {
        marginBottom: 0,
        background: 'white'
      }
    },
    _react2.default.createElement(
      'tbody',
      null,
      Object.keys(meta).map(function (key) {
        return _react2.default.createElement(
          'tr',
          { key: key },
          _react2.default.createElement(
            'td',
            null,
            key
          ),
          _react2.default.createElement(
            'td',
            null,
            renderMetaContent(meta[key])
          )
        );
      })
    )
  );
}

var ErrorList = function ErrorList(_ref) {
  var errors = _ref.errors,
      dispatch = _ref.dispatch;
  return _react2.default.createElement(
    _Grid2.default,
    null,
    errors.map(function (error) {
      if ([_ErrorCodes2.default.TOKEN_EXPIRATION, _ErrorCodes2.default.BAD_TOKEN].indexOf(error.code) >= 0) {
        dispatch((0, _errorActions.removeError)(error.id));
        dispatch((0, _reactRouterRedux.push)('/user/login'));
      }
      if ([_ErrorCodes2.default.USER_UNAUTHORIZED, _ErrorCodes2.default.PERMISSION_DENIED].indexOf(error.code) >= 0) {
        dispatch((0, _errorActions.removeError)(error.id));
        dispatch((0, _reactRouterRedux.push)('/'));
      }

      return _react2.default.createElement(
        _Alert2.default,
        {
          key: error.id,
          bsStyle: 'danger',
          onDismiss: function onDismiss() {
            return dispatch((0, _errorActions.removeError)(error.id));
          }
        },
        _react2.default.createElement(
          'h4',
          null,
          error.title
        ),
        ' ' + error.detail,
        error.meta && renderMeta(error.meta)
      );
    })
  );
};

exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    errors: state.errors
  };
})(ErrorList);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdXRpbHMvRXJyb3JMaXN0LmpzIl0sIm5hbWVzIjpbInJlbmRlck1ldGFDb250ZW50IiwibWV0YUNvbnRlbnQiLCJKU09OIiwic3RyaW5naWZ5IiwicmVuZGVyTWV0YSIsIm1ldGEiLCJtYXJnaW5Cb3R0b20iLCJiYWNrZ3JvdW5kIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsIkVycm9yTGlzdCIsImVycm9ycyIsImRpc3BhdGNoIiwiZXJyb3IiLCJUT0tFTl9FWFBJUkFUSU9OIiwiQkFEX1RPS0VOIiwiaW5kZXhPZiIsImNvZGUiLCJpZCIsIlVTRVJfVU5BVVRIT1JJWkVEIiwiUEVSTUlTU0lPTl9ERU5JRUQiLCJ0aXRsZSIsImRldGFpbCIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLFNBQVNBLGlCQUFULENBQTJCQyxXQUEzQixFQUF3QztBQUN0QyxNQUFJLHdCQUFTQSxXQUFULENBQUosRUFBMkI7QUFDekIsV0FBT0EsV0FBUDtBQUNEOztBQUVELFNBQ0U7QUFBQTtBQUFBO0FBQ0dDLFNBQUtDLFNBQUwsQ0FBZUYsV0FBZixFQUE0QixJQUE1QixFQUFrQyxDQUFsQztBQURILEdBREY7QUFLRDs7QUFFRCxTQUFTRyxVQUFULENBQW9CQyxJQUFwQixFQUEwQjtBQUN4QixNQUFJLHdCQUFTQSxJQUFULENBQUosRUFBb0I7QUFDbEIsV0FDRTtBQUFBO0FBQUE7QUFDR0E7QUFESCxLQURGO0FBS0Q7O0FBRUQsU0FDRTtBQUFBO0FBQUE7QUFDRSxxQkFERjtBQUVFLHNCQUZGO0FBR0UsYUFBTztBQUNMQyxzQkFBYyxDQURUO0FBRUxDLG9CQUFZO0FBRlA7QUFIVDtBQVFFO0FBQUE7QUFBQTtBQUNHQyxhQUFPQyxJQUFQLENBQVlKLElBQVosRUFBa0JLLEdBQWxCLENBQXNCLFVBQUNDLEdBQUQ7QUFBQSxlQUNyQjtBQUFBO0FBQUEsWUFBSSxLQUFLQSxHQUFUO0FBQ0U7QUFBQTtBQUFBO0FBQUtBO0FBQUwsV0FERjtBQUVFO0FBQUE7QUFBQTtBQUNHWCw4QkFBa0JLLEtBQUtNLEdBQUwsQ0FBbEI7QUFESDtBQUZGLFNBRHFCO0FBQUEsT0FBdEI7QUFESDtBQVJGLEdBREY7QUFxQkQ7O0FBRUQsSUFBSUMsWUFBWSxTQUFaQSxTQUFZO0FBQUEsTUFBR0MsTUFBSCxRQUFHQSxNQUFIO0FBQUEsTUFBV0MsUUFBWCxRQUFXQSxRQUFYO0FBQUEsU0FDZDtBQUFBO0FBQUE7QUFDR0QsV0FBT0gsR0FBUCxDQUFXLFVBQUNLLEtBQUQsRUFBVztBQUNyQixVQUFJLENBQ0YscUJBQVdDLGdCQURULEVBRUYscUJBQVdDLFNBRlQsRUFHRkMsT0FIRSxDQUdNSCxNQUFNSSxJQUhaLEtBR3FCLENBSHpCLEVBRzRCO0FBQzFCTCxpQkFBUywrQkFBWUMsTUFBTUssRUFBbEIsQ0FBVDtBQUNBTixpQkFBUyw0QkFBSyxhQUFMLENBQVQ7QUFDRDtBQUNELFVBQUksQ0FDRixxQkFBV08saUJBRFQsRUFFRixxQkFBV0MsaUJBRlQsRUFHRkosT0FIRSxDQUdNSCxNQUFNSSxJQUhaLEtBR3FCLENBSHpCLEVBRzRCO0FBQzFCTCxpQkFBUywrQkFBWUMsTUFBTUssRUFBbEIsQ0FBVDtBQUNBTixpQkFBUyw0QkFBSyxHQUFMLENBQVQ7QUFDRDs7QUFFRCxhQUNFO0FBQUE7QUFBQTtBQUNFLGVBQUtDLE1BQU1LLEVBRGI7QUFFRSxtQkFBUSxRQUZWO0FBR0UscUJBQVc7QUFBQSxtQkFBTU4sU0FBUywrQkFBWUMsTUFBTUssRUFBbEIsQ0FBVCxDQUFOO0FBQUE7QUFIYjtBQUtFO0FBQUE7QUFBQTtBQUFLTCxnQkFBTVE7QUFBWCxTQUxGO0FBTUcsY0FBTVIsTUFBTVMsTUFOZjtBQU9HVCxjQUFNVixJQUFOLElBQWNELFdBQVdXLE1BQU1WLElBQWpCO0FBUGpCLE9BREY7QUFXRCxLQTNCQTtBQURILEdBRGM7QUFBQSxDQUFoQjs7a0JBaUNlLHlCQUFRO0FBQUEsU0FBVTtBQUMvQlEsWUFBUVksTUFBTVo7QUFEaUIsR0FBVjtBQUFBLENBQVIsRUFFWEQsU0FGVyxDIiwiZmlsZSI6ImNvbXBvbmVudHMvdXRpbHMvRXJyb3JMaXN0LmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
