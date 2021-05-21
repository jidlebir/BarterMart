const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
  _id: ID
  username: String
  email: String
  }

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
    users: [User]
    user(username: String): User
    comments: [Comment]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    addItem(title: String!, user: String!, description: String, image: String): Item
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): User
    addComment(commentText: String!): Comment
  }
`;

module.exports = typeDefs;
