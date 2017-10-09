'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _paginate = require('./plugins/paginate');

var _paginate2 = _interopRequireDefault(_paginate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CategorySchema = new _mongoose2.default.Schema({
  name: String,
  subcategories: {
    name: String
  }
});

var TagSchema = new _mongoose2.default.Schema({
  name: String
});

var EventSchema = new _mongoose2.default.Schema({
  date: Date,
  location: String,
  description: String,
  tag: [TagSchema],
  organiser: String,
  category: [CategorySchema],
  price: Number,
  quota: Number,
  state: String,
  participants: [_mongoose2.default.Schema.Types.ObjectId],
  posterURL: {
    type: String,
    default: '/img/default-avatar.png'
  }
}, {
  versionKey: false,
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
});

EventSchema.plugin(_paginate2.default);

var Events = _mongoose2.default.model('Events', EventSchema);
exports.default = Events;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9FdmVudC5qcyJdLCJuYW1lcyI6WyJDYXRlZ29yeVNjaGVtYSIsIlNjaGVtYSIsIm5hbWUiLCJTdHJpbmciLCJzdWJjYXRlZ29yaWVzIiwiVGFnU2NoZW1hIiwiRXZlbnRTY2hlbWEiLCJkYXRlIiwiRGF0ZSIsImxvY2F0aW9uIiwiZGVzY3JpcHRpb24iLCJ0YWciLCJvcmdhbmlzZXIiLCJjYXRlZ29yeSIsInByaWNlIiwiTnVtYmVyIiwicXVvdGEiLCJzdGF0ZSIsInBhcnRpY2lwYW50cyIsIlR5cGVzIiwiT2JqZWN0SWQiLCJwb3N0ZXJVUkwiLCJ0eXBlIiwiZGVmYXVsdCIsInZlcnNpb25LZXkiLCJ0aW1lc3RhbXBzIiwiY3JlYXRlZEF0IiwidXBkYXRlZEF0IiwicGx1Z2luIiwiRXZlbnRzIiwibW9kZWwiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQUlBLGlCQUFpQixJQUFJLG1CQUFTQyxNQUFiLENBQW9CO0FBQ3ZDQyxRQUFNQyxNQURpQztBQUV2Q0MsaUJBQWU7QUFDYkYsVUFBTUM7QUFETztBQUZ3QixDQUFwQixDQUFyQjs7QUFPQSxJQUFJRSxZQUFZLElBQUksbUJBQVNKLE1BQWIsQ0FBb0I7QUFDbENDLFFBQU1DO0FBRDRCLENBQXBCLENBQWhCOztBQUlBLElBQUlHLGNBQWMsSUFBSSxtQkFBU0wsTUFBYixDQUFvQjtBQUNwQ00sUUFBTUMsSUFEOEI7QUFFcENDLFlBQVVOLE1BRjBCO0FBR3BDTyxlQUFhUCxNQUh1QjtBQUlwQ1EsT0FBSyxDQUFDTixTQUFELENBSitCO0FBS3BDTyxhQUFXVCxNQUx5QjtBQU1wQ1UsWUFBVSxDQUFDYixjQUFELENBTjBCO0FBT3BDYyxTQUFPQyxNQVA2QjtBQVFwQ0MsU0FBT0QsTUFSNkI7QUFTcENFLFNBQU9kLE1BVDZCO0FBVXBDZSxnQkFBYyxDQUFDLG1CQUFTakIsTUFBVCxDQUFnQmtCLEtBQWhCLENBQXNCQyxRQUF2QixDQVZzQjtBQVdwQ0MsYUFBVztBQUNUQyxVQUFNbkIsTUFERztBQUVUb0IsYUFBUztBQUZBO0FBWHlCLENBQXBCLEVBZWY7QUFDREMsY0FBWSxLQURYO0FBRURDLGNBQVk7QUFDVkMsZUFBVyxXQUREO0FBRVZDLGVBQVc7QUFGRDtBQUZYLENBZmUsQ0FBbEI7O0FBdUJBckIsWUFBWXNCLE1BQVo7O0FBRUEsSUFBSUMsU0FBUyxtQkFBU0MsS0FBVCxDQUFlLFFBQWYsRUFBeUJ4QixXQUF6QixDQUFiO2tCQUNldUIsTSIsImZpbGUiOiJtb2RlbHMvRXZlbnQuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
