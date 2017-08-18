'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeCookie = exports.setCookies = exports.setCookie = undefined;

var _cookie = require('cookie');

var _cookie2 = _interopRequireDefault(_cookie);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _isString = require('lodash/isString');

var _isString2 = _interopRequireDefault(_isString);

var _isObject = require('lodash/isObject');

var _isObject2 = _interopRequireDefault(_isObject);

var _ActionTypes = require('../constants/ActionTypes');

var _ActionTypes2 = _interopRequireDefault(_ActionTypes);

var _deserializeCookieMap = require('../utils/deserializeCookieMap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setCookie = exports.setCookie = function setCookie(name, value, options) {
  var res = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  options = (0, _objectAssign2.default)({
    path: '/'
  }, options);
  var deserializedValue = (0, _deserializeCookieMap.deserializeCookie)(value);

  return function (dispatch, getState) {
    var serializedValue = void 0;

    if ((0, _isString2.default)(value)) {
      serializedValue = value;
    } else if ((0, _isObject2.default)(value)) {
      serializedValue = JSON.stringify(value);
    }

    if (process.env.BROWSER) {
      document.cookie = _cookie2.default.serialize(name, serializedValue, options);
    } else if (res) {
      res.cookie(name, serializedValue);
    }

    dispatch({
      type: _ActionTypes2.default.SET_COOKIE,
      cookie: {
        name: name,
        value: deserializedValue,
        options: options
      }
    });
  };
};

var setCookies = exports.setCookies = function setCookies(cookies) {
  var res = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  return function (dispatch) {
    Object.keys(cookies).forEach(function (name) {
      return dispatch(setCookie(name, cookies[name], {}, res));
    });
  };
};

var removeCookie = exports.removeCookie = function removeCookie(name) {
  return function (dispatch, getState) {
    if (process.env.BROWSER) {
      return dispatch(setCookie(name, '', {
        expires: new Date(1970, 1, 1, 0, 0, 1)
      }));
    }
    return Promise.resolve();
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbnMvY29va2llQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJzZXRDb29raWUiLCJuYW1lIiwidmFsdWUiLCJvcHRpb25zIiwicmVzIiwicGF0aCIsImRlc2VyaWFsaXplZFZhbHVlIiwiZGlzcGF0Y2giLCJnZXRTdGF0ZSIsInNlcmlhbGl6ZWRWYWx1ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwcm9jZXNzIiwiZW52IiwiQlJPV1NFUiIsImRvY3VtZW50IiwiY29va2llIiwic2VyaWFsaXplIiwidHlwZSIsIlNFVF9DT09LSUUiLCJzZXRDb29raWVzIiwiY29va2llcyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwicmVtb3ZlQ29va2llIiwiZXhwaXJlcyIsIkRhdGUiLCJQcm9taXNlIiwicmVzb2x2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVPLElBQU1BLGdDQUFZLFNBQVpBLFNBQVksQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWNDLE9BQWQsRUFBc0M7QUFBQSxNQUFmQyxHQUFlLHVFQUFULElBQVM7O0FBQzdERCxZQUFVLDRCQUFPO0FBQ2ZFLFVBQU07QUFEUyxHQUFQLEVBRVBGLE9BRk8sQ0FBVjtBQUdBLE1BQUlHLG9CQUFvQiw2Q0FBa0JKLEtBQWxCLENBQXhCOztBQUVBLFNBQU8sVUFBQ0ssUUFBRCxFQUFXQyxRQUFYLEVBQXdCO0FBQzdCLFFBQUlDLHdCQUFKOztBQUVBLFFBQUksd0JBQVNQLEtBQVQsQ0FBSixFQUFxQjtBQUNuQk8sd0JBQWtCUCxLQUFsQjtBQUNELEtBRkQsTUFFTyxJQUFJLHdCQUFTQSxLQUFULENBQUosRUFBcUI7QUFDMUJPLHdCQUFrQkMsS0FBS0MsU0FBTCxDQUFlVCxLQUFmLENBQWxCO0FBQ0Q7O0FBRUQsUUFBSVUsUUFBUUMsR0FBUixDQUFZQyxPQUFoQixFQUF5QjtBQUN2QkMsZUFBU0MsTUFBVCxHQUFrQixpQkFBT0MsU0FBUCxDQUNoQmhCLElBRGdCLEVBQ1ZRLGVBRFUsRUFDT04sT0FEUCxDQUFsQjtBQUVELEtBSEQsTUFHTyxJQUFJQyxHQUFKLEVBQVM7QUFDZEEsVUFBSVksTUFBSixDQUFXZixJQUFYLEVBQWlCUSxlQUFqQjtBQUNEOztBQUVERixhQUFTO0FBQ1BXLFlBQU0sc0JBQVlDLFVBRFg7QUFFUEgsY0FBUTtBQUNOZixrQkFETTtBQUVOQyxlQUFPSSxpQkFGRDtBQUdOSDtBQUhNO0FBRkQsS0FBVDtBQVFELEdBeEJEO0FBeUJELENBL0JNOztBQWlDQSxJQUFNaUIsa0NBQWEsU0FBYkEsVUFBYSxDQUFDQyxPQUFELEVBQXlCO0FBQUEsTUFBZmpCLEdBQWUsdUVBQVQsSUFBUzs7QUFDakQsU0FBTyxVQUFDRyxRQUFELEVBQWM7QUFDbkJlLFdBQ0dDLElBREgsQ0FDUUYsT0FEUixFQUVHRyxPQUZILENBRVcsVUFBQ3ZCLElBQUQ7QUFBQSxhQUFVTSxTQUFTUCxVQUFVQyxJQUFWLEVBQWdCb0IsUUFBUXBCLElBQVIsQ0FBaEIsRUFBK0IsRUFBL0IsRUFBbUNHLEdBQW5DLENBQVQsQ0FBVjtBQUFBLEtBRlg7QUFHRCxHQUpEO0FBS0QsQ0FOTTs7QUFRQSxJQUFNcUIsc0NBQWUsU0FBZkEsWUFBZSxDQUFDeEIsSUFBRCxFQUFVO0FBQ3BDLFNBQU8sVUFBQ00sUUFBRCxFQUFXQyxRQUFYLEVBQXdCO0FBQzdCLFFBQUlJLFFBQVFDLEdBQVIsQ0FBWUMsT0FBaEIsRUFBeUI7QUFDdkIsYUFBT1AsU0FBU1AsVUFBVUMsSUFBVixFQUFnQixFQUFoQixFQUFvQjtBQUNsQ3lCLGlCQUFTLElBQUlDLElBQUosQ0FBUyxJQUFULEVBQWUsQ0FBZixFQUFrQixDQUFsQixFQUFxQixDQUFyQixFQUF3QixDQUF4QixFQUEyQixDQUEzQjtBQUR5QixPQUFwQixDQUFULENBQVA7QUFHRDtBQUNELFdBQU9DLFFBQVFDLE9BQVIsRUFBUDtBQUNELEdBUEQ7QUFRRCxDQVRNIiwiZmlsZSI6ImFjdGlvbnMvY29va2llQWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
