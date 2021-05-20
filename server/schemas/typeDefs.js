const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Item {
    _id: ID
    title: String
    image: String
    user: String
    description: String
    comments: [Comment]
  }

  type Comment {
    _id: ID
    tradeItem: String
    commentText: String
    acceptedFlag: Boolean
  }

  type Query {
    items: [Item]
    item(title: String!): Item
    comments: [Comment]
  }

  type Mutation {
    addItem(
      title: String!
      user: String!
      description: String
      image: String
    ): Item
  }
`;

module.exports = typeDefs;
