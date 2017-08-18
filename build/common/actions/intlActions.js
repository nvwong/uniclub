'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateLocale = undefined;

var _ActionTypes = require('../constants/ActionTypes');

var _ActionTypes2 = _interopRequireDefault(_ActionTypes);

var _locale = require('../api/locale');

var _locale2 = _interopRequireDefault(_locale);

var _cookieActions = require('./cookieActions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var updateLocale = exports.updateLocale = function updateLocale(targetLocale) {
  return function (dispatch, getState) {
    var currentLocale = getState().intl.locale;
    if (targetLocale === currentLocale) {
      return Promise.resolve();
    }
    return (0, _locale2.default)(getState().apiEngine).read(targetLocale).then(function (json) {
      dispatch((0, _cookieActions.setCookie)('locale', json.locale));
      dispatch({
        type: _ActionTypes2.default.UPDATE_LOCALE,
        locale: json.locale,
        messages: json.messages
      });
    }, function (err) {
      dispatch((0, _cookieActions.setCookie)('locale', currentLocale));
      return Promise.reject(err);
    });
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbnMvaW50bEFjdGlvbnMuanMiXSwibmFtZXMiOlsidXBkYXRlTG9jYWxlIiwidGFyZ2V0TG9jYWxlIiwiZGlzcGF0Y2giLCJnZXRTdGF0ZSIsImN1cnJlbnRMb2NhbGUiLCJpbnRsIiwibG9jYWxlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJhcGlFbmdpbmUiLCJyZWFkIiwidGhlbiIsImpzb24iLCJ0eXBlIiwiVVBEQVRFX0xPQ0FMRSIsIm1lc3NhZ2VzIiwiZXJyIiwicmVqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRU8sSUFBTUEsc0NBQWUsU0FBZkEsWUFBZSxDQUFDQyxZQUFELEVBQWtCO0FBQzVDLFNBQU8sVUFBQ0MsUUFBRCxFQUFXQyxRQUFYLEVBQXdCO0FBQzdCLFFBQU1DLGdCQUFnQkQsV0FBV0UsSUFBWCxDQUFnQkMsTUFBdEM7QUFDQSxRQUFJTCxpQkFBaUJHLGFBQXJCLEVBQW9DO0FBQ2xDLGFBQU9HLFFBQVFDLE9BQVIsRUFBUDtBQUNEO0FBQ0QsV0FBTyxzQkFBVUwsV0FBV00sU0FBckIsRUFDSkMsSUFESSxDQUNDVCxZQURELEVBRUpVLElBRkksQ0FFQyxVQUFDQyxJQUFELEVBQVU7QUFDZFYsZUFBUyw4QkFBVSxRQUFWLEVBQW9CVSxLQUFLTixNQUF6QixDQUFUO0FBQ0FKLGVBQVM7QUFDUFcsY0FBTSxzQkFBWUMsYUFEWDtBQUVQUixnQkFBUU0sS0FBS04sTUFGTjtBQUdQUyxrQkFBVUgsS0FBS0c7QUFIUixPQUFUO0FBS0QsS0FUSSxFQVNGLFVBQUNDLEdBQUQsRUFBUztBQUNWZCxlQUFTLDhCQUFVLFFBQVYsRUFBb0JFLGFBQXBCLENBQVQ7QUFDQSxhQUFPRyxRQUFRVSxNQUFSLENBQWVELEdBQWYsQ0FBUDtBQUNELEtBWkksQ0FBUDtBQWFELEdBbEJEO0FBbUJELENBcEJNIiwiZmlsZSI6ImFjdGlvbnMvaW50bEFjdGlvbnMuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
