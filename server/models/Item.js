const { Schema, model } = require('mongoose');
const CommentSchema = require('./Comment');

const ItemSchema = new Schema({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  comments: [CommentSchema]
});

const Item = model('Item', ItemSchema);

module.exports = Item;