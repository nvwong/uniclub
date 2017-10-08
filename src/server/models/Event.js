import mongoose from 'mongoose';
import paginatePlugin from './plugins/paginate';

/* let CategorySchema = new mongoose.Schema({
  name: String,
  subcategories: {
    name: String,
  },
});

let TagSchema = new mongoose.Schema({
  name: String,
}); */

let EventSchema = new mongoose.Schema({
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
  participants: [mongoose.Schema.Types.ObjectId],
  posterURL: {
    type: String,
    default: '/img/default-avatar.png',
  },
}, {
  versionKey: false,
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  },
});

EventSchema.plugin(paginatePlugin);

let Events = mongoose.model('Events', EventSchema);
export default Events;
