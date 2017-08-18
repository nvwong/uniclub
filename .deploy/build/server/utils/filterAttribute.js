"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (obj, allowedAttributes) {
  var resultObj = {};
  Object.keys(obj).filter(function (attribute) {
    return allowedAttributes.indexOf(attribute) >= 0;
  }).forEach(function (attribute) {
    resultObj[attribute] = obj[attribute];
  });
  return resultObj;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL2ZpbHRlckF0dHJpYnV0ZS5qcyJdLCJuYW1lcyI6WyJvYmoiLCJhbGxvd2VkQXR0cmlidXRlcyIsInJlc3VsdE9iaiIsIk9iamVjdCIsImtleXMiLCJmaWx0ZXIiLCJhdHRyaWJ1dGUiLCJpbmRleE9mIiwiZm9yRWFjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2tCQUFlLFVBQUNBLEdBQUQsRUFBTUMsaUJBQU4sRUFBNEI7QUFDekMsTUFBSUMsWUFBWSxFQUFoQjtBQUNBQyxTQUNHQyxJQURILENBQ1FKLEdBRFIsRUFFR0ssTUFGSCxDQUVVLFVBQUNDLFNBQUQ7QUFBQSxXQUFlTCxrQkFBa0JNLE9BQWxCLENBQTBCRCxTQUExQixLQUF3QyxDQUF2RDtBQUFBLEdBRlYsRUFHR0UsT0FISCxDQUdXLFVBQUNGLFNBQUQsRUFBZTtBQUN0QkosY0FBVUksU0FBVixJQUF1Qk4sSUFBSU0sU0FBSixDQUF2QjtBQUNELEdBTEg7QUFNQSxTQUFPSixTQUFQO0FBQ0QsQyIsImZpbGUiOiJ1dGlscy9maWx0ZXJBdHRyaWJ1dGUuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
