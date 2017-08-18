"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (apiEngine) {
  return {
    read: function read(locale) {
      return apiEngine.get("/api/locales/" + locale);
    }
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9sb2NhbGUuanMiXSwibmFtZXMiOlsiYXBpRW5naW5lIiwicmVhZCIsImxvY2FsZSIsImdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2tCQUFlLFVBQUNBLFNBQUQ7QUFBQSxTQUFnQjtBQUM3QkMsVUFBTSxjQUFDQyxNQUFEO0FBQUEsYUFBWUYsVUFBVUcsR0FBVixtQkFBOEJELE1BQTlCLENBQVo7QUFBQTtBQUR1QixHQUFoQjtBQUFBLEMiLCJmaWxlIjoiYXBpL2xvY2FsZS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
