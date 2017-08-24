import mongoose from 'mongoose';
import paginatePlugin from './plugins/paginate';

let Todo2 = new mongoose.Schema({
  text: String,
}, {
  versionKey: false,
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  },
});

Todo2.plugin(paginatePlugin);

export default mongoose.model('Todo2', Todo2);
