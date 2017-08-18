'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ActionTypes = require('../constants/ActionTypes');

var _ActionTypes2 = _interopRequireDefault(_ActionTypes);

var _enUs = require('../i18n/en-us');

var _enUs2 = _interopRequireDefault(_enUs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initLocale = {
  locale: 'en-us',
  messages: _enUs2.default
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initLocale;
  var action = arguments[1];

  switch (action.type) {
    case _ActionTypes2.default.UPDATE_LOCALE:
      {
        return {
          locale: action.locale,
          messages: action.messages
        };
      }
    default:
      {
        return state;
      }
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXJzL2ludGxSZWR1Y2VyLmpzIl0sIm5hbWVzIjpbImluaXRMb2NhbGUiLCJsb2NhbGUiLCJtZXNzYWdlcyIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIlVQREFURV9MT0NBTEUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGFBQWE7QUFDakJDLFVBQVEsT0FEUztBQUVqQkM7QUFGaUIsQ0FBbkI7O2tCQUtlLFlBQWdDO0FBQUEsTUFBL0JDLEtBQStCLHVFQUF2QkgsVUFBdUI7QUFBQSxNQUFYSSxNQUFXOztBQUM3QyxVQUFRQSxPQUFPQyxJQUFmO0FBQ0UsU0FBSyxzQkFBWUMsYUFBakI7QUFBZ0M7QUFDOUIsZUFBTztBQUNMTCxrQkFBUUcsT0FBT0gsTUFEVjtBQUVMQyxvQkFBVUUsT0FBT0Y7QUFGWixTQUFQO0FBSUQ7QUFDRDtBQUFTO0FBQ1AsZUFBT0MsS0FBUDtBQUNEO0FBVEg7QUFXRCxDIiwiZmlsZSI6InJlZHVjZXJzL2ludGxSZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
