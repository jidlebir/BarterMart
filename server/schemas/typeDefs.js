const { gql } = require("apollo-server-express");

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
    users: [User]
    user(username: String): User
    items: [Item]
    item(title: String!): Item
    comments: [Comment]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
<<<<<<< HEAD
    addItem(
      title: String!
      user: String!
      description: String
      image: String
    ): Item
=======
    login(email: String!, password: String!): Auth
    addItem(title: String!, user: String!, description: String, image: String): Item
    addUser(username: String!, email: String!, password: String!): User
    addComment(commentText: String!): Comment
>>>>>>> de4f76b3dbc3b3c68590306c56e94c0cf690a2a7
  }
`;

module.exports = typeDefs;
