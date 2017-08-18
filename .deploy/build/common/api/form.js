"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (apiEngine) {
  return {
    form: function form(formName) {
      return {
        field: function field(fieldName, value) {
          return {
            validate: function validate() {
              return apiEngine.post("/api/forms/" + formName + "/fields/" + fieldName + "/validation", {
                data: { value: value }
              });
            }
          };
        }
      };
    }
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9mb3JtLmpzIl0sIm5hbWVzIjpbImFwaUVuZ2luZSIsImZvcm0iLCJmb3JtTmFtZSIsImZpZWxkIiwiZmllbGROYW1lIiwidmFsdWUiLCJ2YWxpZGF0ZSIsInBvc3QiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7a0JBQWUsVUFBQ0EsU0FBRDtBQUFBLFNBQWdCO0FBQzdCQyxVQUFNLGNBQUNDLFFBQUQ7QUFBQSxhQUFlO0FBQ25CQyxlQUFPLGVBQUNDLFNBQUQsRUFBWUMsS0FBWjtBQUFBLGlCQUF1QjtBQUM1QkMsc0JBQVU7QUFBQSxxQkFBTU4sVUFBVU8sSUFBVixpQkFDQUwsUUFEQSxnQkFDbUJFLFNBRG5CLGtCQUMyQztBQUN2REksc0JBQU0sRUFBRUgsWUFBRjtBQURpRCxlQUQzQyxDQUFOO0FBQUE7QUFEa0IsV0FBdkI7QUFBQTtBQURZLE9BQWY7QUFBQTtBQUR1QixHQUFoQjtBQUFBLEMiLCJmaWxlIjoiYXBpL2Zvcm0uanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
