'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _paginate = require('./plugins/paginate');

var _paginate2 = _interopRequireDefault(_paginate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* let CategorySchema = new mongoose.Schema({
  name: String,
  subcategories: {
    name: String,
  },
});

let TagSchema = new mongoose.Schema({
  name: String,
}); */

var EventSchema = new _mongoose2.default.Schema({
  name: String,
  date: Date,
  location: String,
  description: String,
  tag: [String],
  organiser: String,
  category: [String],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9FdmVudC5qcyJdLCJuYW1lcyI6WyJFdmVudFNjaGVtYSIsIlNjaGVtYSIsIm5hbWUiLCJTdHJpbmciLCJkYXRlIiwiRGF0ZSIsImxvY2F0aW9uIiwiZGVzY3JpcHRpb24iLCJ0YWciLCJvcmdhbmlzZXIiLCJjYXRlZ29yeSIsInByaWNlIiwiTnVtYmVyIiwicXVvdGEiLCJzdGF0ZSIsInBhcnRpY2lwYW50cyIsIlR5cGVzIiwiT2JqZWN0SWQiLCJwb3N0ZXJVUkwiLCJ0eXBlIiwiZGVmYXVsdCIsInZlcnNpb25LZXkiLCJ0aW1lc3RhbXBzIiwiY3JlYXRlZEF0IiwidXBkYXRlZEF0IiwicGx1Z2luIiwiRXZlbnRzIiwibW9kZWwiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBOzs7Ozs7Ozs7OztBQVdBLElBQUlBLGNBQWMsSUFBSSxtQkFBU0MsTUFBYixDQUFvQjtBQUNwQ0MsUUFBTUMsTUFEOEI7QUFFcENDLFFBQU1DLElBRjhCO0FBR3BDQyxZQUFVSCxNQUgwQjtBQUlwQ0ksZUFBYUosTUFKdUI7QUFLcENLLE9BQUssQ0FBQ0wsTUFBRCxDQUwrQjtBQU1wQ00sYUFBV04sTUFOeUI7QUFPcENPLFlBQVUsQ0FBQ1AsTUFBRCxDQVAwQjtBQVFwQ1EsU0FBT0MsTUFSNkI7QUFTcENDLFNBQU9ELE1BVDZCO0FBVXBDRSxTQUFPWCxNQVY2QjtBQVdwQ1ksZ0JBQWMsQ0FBQyxtQkFBU2QsTUFBVCxDQUFnQmUsS0FBaEIsQ0FBc0JDLFFBQXZCLENBWHNCO0FBWXBDQyxhQUFXO0FBQ1RDLFVBQU1oQixNQURHO0FBRVRpQixhQUFTO0FBRkE7QUFaeUIsQ0FBcEIsRUFnQmY7QUFDREMsY0FBWSxLQURYO0FBRURDLGNBQVk7QUFDVkMsZUFBVyxXQUREO0FBRVZDLGVBQVc7QUFGRDtBQUZYLENBaEJlLENBQWxCOztBQXdCQXhCLFlBQVl5QixNQUFaOztBQUVBLElBQUlDLFNBQVMsbUJBQVNDLEtBQVQsQ0FBZSxRQUFmLEVBQXlCM0IsV0FBekIsQ0FBYjtrQkFDZTBCLE0iLCJmaWxlIjoibW9kZWxzL0V2ZW50LmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
