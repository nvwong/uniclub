'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (apiEngine) {
  return {
    readToken: function readToken() {
      return apiEngine.get('/api/users/me/firebase/token');
    }
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9maXJlYmFzZS5qcyJdLCJuYW1lcyI6WyJhcGlFbmdpbmUiLCJyZWFkVG9rZW4iLCJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7OztrQkFBZSxVQUFDQSxTQUFEO0FBQUEsU0FBZ0I7QUFDN0JDLGVBQVc7QUFBQSxhQUFNRCxVQUFVRSxHQUFWLENBQWMsOEJBQWQsQ0FBTjtBQUFBO0FBRGtCLEdBQWhCO0FBQUEsQyIsImZpbGUiOiJhcGkvZmlyZWJhc2UuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
