import mongoose from 'mongoose';
import paginatePlugin from './plugins/paginate';

let CategorySchema = new mongoose.Schema({
  name: String,
  subcategories: {
    name: String,
  },
});

let TagSchema = new mongoose.Schema({
  name: String,
});

let EventSchema = new mongoose.Schema({
  date: Date,
  location: String,
  description: String,
  tag: [TagSchema],
  organiser: String,
  category: [CategorySchema],
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

export default mongoose.model('Events', EventSchema);
