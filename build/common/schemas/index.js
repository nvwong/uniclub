'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchSchema = exports.eventSchema = exports.userSchema = exports.todo2Schema = exports.todoSchema = undefined;

var _normalizr = require('normalizr');

var todoSchema = exports.todoSchema = new _normalizr.Schema('todos', {
  idAttribute: '_id'
});

var todo2Schema = exports.todo2Schema = new _normalizr.Schema('todo2', {
  idAttribute: '_id'
});

var userSchema = exports.userSchema = new _normalizr.Schema('users', {
  idAttribute: '_id'
});

var eventSchema = exports.eventSchema = new _normalizr.Schema('events', {
  idAttribute: '_id'
});

var searchSchema = exports.searchSchema = new _normalizr.Schema('search', {
  idAttribute: '_id'
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaGVtYXMvaW5kZXguanMiXSwibmFtZXMiOlsidG9kb1NjaGVtYSIsImlkQXR0cmlidXRlIiwidG9kbzJTY2hlbWEiLCJ1c2VyU2NoZW1hIiwiZXZlbnRTY2hlbWEiLCJzZWFyY2hTY2hlbWEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFTyxJQUFJQSxrQ0FBYSxzQkFBVyxPQUFYLEVBQW9CO0FBQzFDQyxlQUFhO0FBRDZCLENBQXBCLENBQWpCOztBQUlBLElBQUlDLG9DQUFjLHNCQUFXLE9BQVgsRUFBb0I7QUFDM0NELGVBQWE7QUFEOEIsQ0FBcEIsQ0FBbEI7O0FBSUEsSUFBSUUsa0NBQWEsc0JBQVcsT0FBWCxFQUFvQjtBQUMxQ0YsZUFBYTtBQUQ2QixDQUFwQixDQUFqQjs7QUFJQSxJQUFJRyxvQ0FBYyxzQkFBVyxRQUFYLEVBQXFCO0FBQzVDSCxlQUFhO0FBRCtCLENBQXJCLENBQWxCOztBQUlBLElBQUlJLHNDQUFlLHNCQUFXLFFBQVgsRUFBcUI7QUFDN0NKLGVBQWE7QUFEZ0MsQ0FBckIsQ0FBbkIiLCJmaWxlIjoic2NoZW1hcy9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
