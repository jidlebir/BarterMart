const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');

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
  comments: [commentSchema]
});

const Item = model('Item', itemSchema);

module.exports = Item;