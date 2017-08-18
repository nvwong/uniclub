'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _cookie = require('cookie');

var _cookie2 = _interopRequireDefault(_cookie);

var _ActionTypes = require('../constants/ActionTypes');

var _ActionTypes2 = _interopRequireDefault(_ActionTypes);

var _deserializeCookieMap = require('../utils/deserializeCookieMap');

var _deserializeCookieMap2 = _interopRequireDefault(_deserializeCookieMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initCookies = {};

if (process.env.BROWSER) {
  initCookies = (0, _deserializeCookieMap2.default)(_cookie2.default.parse(document.cookie));
} else {
  initCookies = {};
}

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initCookies;
  var action = arguments[1];

  switch (action.type) {
    case _ActionTypes2.default.SET_COOKIE:
      {
        return _extends({}, state, _defineProperty({}, action.cookie.name, action.cookie.value));
      }
    default:
      {
        return state;
      }
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXJzL2Nvb2tpZVJlZHVjZXIuanMiXSwibmFtZXMiOlsiaW5pdENvb2tpZXMiLCJwcm9jZXNzIiwiZW52IiwiQlJPV1NFUiIsInBhcnNlIiwiZG9jdW1lbnQiLCJjb29raWUiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJTRVRfQ09PS0lFIiwibmFtZSIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFJQSxjQUFjLEVBQWxCOztBQUVBLElBQUlDLFFBQVFDLEdBQVIsQ0FBWUMsT0FBaEIsRUFBeUI7QUFDdkJILGdCQUFjLG9DQUFxQixpQkFBT0ksS0FBUCxDQUFhQyxTQUFTQyxNQUF0QixDQUFyQixDQUFkO0FBQ0QsQ0FGRCxNQUVPO0FBQ0xOLGdCQUFjLEVBQWQ7QUFDRDs7a0JBRWMsWUFBaUM7QUFBQSxNQUFoQ08sS0FBZ0MsdUVBQXhCUCxXQUF3QjtBQUFBLE1BQVhRLE1BQVc7O0FBQzlDLFVBQVFBLE9BQU9DLElBQWY7QUFDRSxTQUFLLHNCQUFZQyxVQUFqQjtBQUE2QjtBQUMzQiw0QkFDS0gsS0FETCxzQkFFR0MsT0FBT0YsTUFBUCxDQUFjSyxJQUZqQixFQUV3QkgsT0FBT0YsTUFBUCxDQUFjTSxLQUZ0QztBQUlEO0FBQ0Q7QUFBUztBQUNQLGVBQU9MLEtBQVA7QUFDRDtBQVRIO0FBV0QsQyIsImZpbGUiOiJyZWR1Y2Vycy9jb29raWVSZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
