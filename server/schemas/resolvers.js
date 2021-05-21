const { Item } = require('../models');

const resolvers = {
  Query: {
    items: async () => {
      return Item.find();
    },
    item: async (parent, { title }) => {
      return Item.findOne({ title });
    }
  },
  Mutation: {
    addItem: async (parent, args) => {
      const item = await Item.create(args);
      return item;
    },
    addUser: async (parent, args) => {
      const user = await User.create(args);
      return user;
    }
  }
};

module.exports = resolvers;
