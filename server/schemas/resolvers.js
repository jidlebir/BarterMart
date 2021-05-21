const { Item, User, Comment } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    items: async () => {
      return Item.find();
    },
    item: async (parent, { title }) => {
      return Item.findOne({ title });
    },
    users: async () => {
      return User.find();
    },
    user: async (parent, { username }) => {
      return User.findOne({ username });
    },
    // comments: async () => {
    //   return Comment.find();
    // },
    // comment: async (parent, { commentText }) => {
    //   return Comment.findOne({ commentText });
    // },
  },
  Mutation: {
    addItem: async (parent, args) => {
      const item = await Item.create(args);
      return item;
    },
    addUser: async (parent, args) => {
      const user = await User.create(args);
      return user;
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('That user does not exist');
      }

      if (password !== user.password) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const token = signToken(user);
      return { token, user };
    },
    addComment: async (parent, args) => {
      const comment = await Comment.create(args);
      return comment;
    },
  }
};

module.exports = resolvers;