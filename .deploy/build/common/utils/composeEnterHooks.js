"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// ref:
//  - <https://github.com/ReactTraining/react-router/issues/3103>
//  - <https://github.com/baronswindle/react-router-compose-hooks/blob/master/index.js>

exports.default = {
  parallel: function parallel() {
    for (var _len = arguments.length, hooks = Array(_len), _key = 0; _key < _len; _key++) {
      hooks[_key] = arguments[_key];
    }

    var callbacksRequired = hooks.reduce(function (totalCallbacks, hook) {
      if (hook.length >= 3) {
        totalCallbacks++;
      }
      return totalCallbacks;
    }, 0);

    return function onEnter(nextState, replace, executeTransition) {
      var _this = this;

      var callbacksInvoked = 0;
      hooks.forEach(function (hook) {
        hook.call(_this, nextState, replace, function () {
          if (++callbacksInvoked === callbacksRequired) {
            executeTransition();
          }
        });
      });
      if (!callbacksRequired) {
        executeTransition();
      }
    };
  },
  series: function series() {
    for (var _len2 = arguments.length, hooks = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      hooks[_key2] = arguments[_key2];
    }

    return function onEnter(nextState, replace, executeTransition) {
      (function executeHooksSynchronously(remainingHooks) {
        if (!remainingHooks.length) {
          return executeTransition();
        }
        var nextHook = remainingHooks[0];
        if (nextHook.length >= 3) {
          nextHook.call(this, nextState, replace, function () {
            executeHooksSynchronously(remainingHooks.slice(1));
          });
        } else {
          nextHook.call(this, nextState, replace);
          executeHooksSynchronously(remainingHooks.slice(1));
        }
      })(hooks);
    };
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL2NvbXBvc2VFbnRlckhvb2tzLmpzIl0sIm5hbWVzIjpbInBhcmFsbGVsIiwiaG9va3MiLCJjYWxsYmFja3NSZXF1aXJlZCIsInJlZHVjZSIsInRvdGFsQ2FsbGJhY2tzIiwiaG9vayIsImxlbmd0aCIsIm9uRW50ZXIiLCJuZXh0U3RhdGUiLCJyZXBsYWNlIiwiZXhlY3V0ZVRyYW5zaXRpb24iLCJjYWxsYmFja3NJbnZva2VkIiwiZm9yRWFjaCIsImNhbGwiLCJzZXJpZXMiLCJleGVjdXRlSG9va3NTeW5jaHJvbm91c2x5IiwicmVtYWluaW5nSG9va3MiLCJuZXh0SG9vayIsInNsaWNlIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTs7a0JBRWU7QUFDYkEsVUFEYSxzQkFDTTtBQUFBLHNDQUFQQyxLQUFPO0FBQVBBLFdBQU87QUFBQTs7QUFDakIsUUFBSUMsb0JBQW9CRCxNQUFNRSxNQUFOLENBQWEsVUFBQ0MsY0FBRCxFQUFpQkMsSUFBakIsRUFBMEI7QUFDN0QsVUFBSUEsS0FBS0MsTUFBTCxJQUFlLENBQW5CLEVBQXNCO0FBQ3BCRjtBQUNEO0FBQ0QsYUFBT0EsY0FBUDtBQUNELEtBTHVCLEVBS3JCLENBTHFCLENBQXhCOztBQU9BLFdBQU8sU0FBU0csT0FBVCxDQUFpQkMsU0FBakIsRUFBNEJDLE9BQTVCLEVBQXFDQyxpQkFBckMsRUFBd0Q7QUFBQTs7QUFDN0QsVUFBSUMsbUJBQW1CLENBQXZCO0FBQ0FWLFlBQU1XLE9BQU4sQ0FBYyxVQUFDUCxJQUFELEVBQVU7QUFDdEJBLGFBQUtRLElBQUwsUUFBZ0JMLFNBQWhCLEVBQTJCQyxPQUEzQixFQUFvQyxZQUFNO0FBQ3hDLGNBQUksRUFBRUUsZ0JBQUYsS0FBdUJULGlCQUEzQixFQUE4QztBQUM1Q1E7QUFDRDtBQUNGLFNBSkQ7QUFLRCxPQU5EO0FBT0EsVUFBSSxDQUFDUixpQkFBTCxFQUF3QjtBQUN0QlE7QUFDRDtBQUNGLEtBWkQ7QUFhRCxHQXRCWTtBQXdCYkksUUF4QmEsb0JBd0JJO0FBQUEsdUNBQVBiLEtBQU87QUFBUEEsV0FBTztBQUFBOztBQUNmLFdBQU8sU0FBU00sT0FBVCxDQUFpQkMsU0FBakIsRUFBNEJDLE9BQTVCLEVBQXFDQyxpQkFBckMsRUFBd0Q7QUFDN0QsT0FBQyxTQUFTSyx5QkFBVCxDQUFtQ0MsY0FBbkMsRUFBbUQ7QUFDbEQsWUFBSSxDQUFDQSxlQUFlVixNQUFwQixFQUE0QjtBQUMxQixpQkFBT0ksbUJBQVA7QUFDRDtBQUNELFlBQUlPLFdBQVdELGVBQWUsQ0FBZixDQUFmO0FBQ0EsWUFBSUMsU0FBU1gsTUFBVCxJQUFtQixDQUF2QixFQUEwQjtBQUN4QlcsbUJBQVNKLElBQVQsQ0FBYyxJQUFkLEVBQW9CTCxTQUFwQixFQUErQkMsT0FBL0IsRUFBd0MsWUFBTTtBQUM1Q00sc0NBQTBCQyxlQUFlRSxLQUFmLENBQXFCLENBQXJCLENBQTFCO0FBQ0QsV0FGRDtBQUdELFNBSkQsTUFJTztBQUNMRCxtQkFBU0osSUFBVCxDQUFjLElBQWQsRUFBb0JMLFNBQXBCLEVBQStCQyxPQUEvQjtBQUNBTSxvQ0FBMEJDLGVBQWVFLEtBQWYsQ0FBcUIsQ0FBckIsQ0FBMUI7QUFDRDtBQUNGLE9BYkQsRUFhR2pCLEtBYkg7QUFjRCxLQWZEO0FBZ0JEO0FBekNZLEMiLCJmaWxlIjoidXRpbHMvY29tcG9zZUVudGVySG9va3MuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
