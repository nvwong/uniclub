'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

// refer to https://github.com/reactjs/react-router/blob/master/examples%2Fauth-flow%2Fapp.js
exports.default = function (store) {
  return function (nextState, replace) {
    var token = store.getState().cookies.token;

    if (!token) {
      replace({
        pathname: '/user/login',
        query: {
          next: nextState.location.pathname
        }
      });
    }
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL2F1dGhSZXF1aXJlZC5qcyJdLCJuYW1lcyI6WyJzdG9yZSIsIm5leHRTdGF0ZSIsInJlcGxhY2UiLCJ0b2tlbiIsImdldFN0YXRlIiwiY29va2llcyIsInBhdGhuYW1lIiwicXVlcnkiLCJuZXh0IiwibG9jYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO2tCQUNlLFVBQUNBLEtBQUQ7QUFBQSxTQUFXLFVBQUNDLFNBQUQsRUFBWUMsT0FBWixFQUF3QjtBQUFBLFFBQ3hDQyxLQUR3QyxHQUM5QkgsTUFBTUksUUFBTixHQUFpQkMsT0FEYSxDQUN4Q0YsS0FEd0M7O0FBRWhELFFBQUksQ0FBQ0EsS0FBTCxFQUFZO0FBQ1ZELGNBQVE7QUFDTkksa0JBQVUsYUFESjtBQUVOQyxlQUFPO0FBQ0xDLGdCQUFNUCxVQUFVUSxRQUFWLENBQW1CSDtBQURwQjtBQUZELE9BQVI7QUFNRDtBQUNGLEdBVmM7QUFBQSxDIiwiZmlsZSI6InV0aWxzL2F1dGhSZXF1aXJlZC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
