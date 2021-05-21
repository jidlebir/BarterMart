const { Schema, Types } = require('mongoose');
const CommentSchema = new Schema({
  commentId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  tradeItem: {
    type: String,
    required: true
  },
  acceptedFlag: {
    type: Boolean,
    required: true,
    default: false
  },
  commentText: {
    type: String,
    required: true,
  },
});

const Comment = model('Comment', CommentSchema);

module.exports = Comment;