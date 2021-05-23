const { Item, User, Comment } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args) => {
      if (AudioContext.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('items');

        return userData;
      }
      throw new AuthenticationError('Not logged in');
    },
    items: async () => {
      return Item.find();
    },
    item: async (parent, { title }) => {
      return Item.findOne({ title });
    },
    users: async () => {
      return User.find()
        .select('__v -password')
        .populate('items');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('__v -password')
        .populate('items');
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    addItem: async (parent, args, context) => {
      if (context.user) {
        const item = await Item.create({ ...args, username: context.user.username });
        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { items: item._id } },
          { new: true }
        );
        return item;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    addComment: async (parent, { itemId, commentText }, context) => {
      if (context.user) {
        const updatedItem = await Item.findOneAndUpdate(
          { _id: itemId },
          { $push: { comments: { commentText, username: context.user.username } } },
          { new: true, runValidators: true }
        );
        return updatedItem;
      }
      throw new AuthenticationError('You need to be logged in!');
    }
  }
};

module.exports = resolvers;