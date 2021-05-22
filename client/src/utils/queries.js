import gql from "graphql-tag";

export const QUERY_ITEMS = gql`
  query type Item {
    _id: ID
    title: String
    image: String
    user: String
    description: String
    comments: [Comment]
  }

  query Comment {
    _id: ID
    title: String
    tradeItem: String
    commentText: String
    acceptedFlag: Boolean
  }

  // type Query {
  //   items: [Item]
  //   item(title: String!): Item
  //   comments: [Comment]
  // }

  // type Mutation {
  //   addItem(
  //     title: String!
  //     user: String!
  //     description: String
  //     image: String
  //   ): Item
  // }
`;

module.exports = QUERY_ITEMS;
