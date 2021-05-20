import gql from "graphql-tag";

export const QUERY_ITEMS = gql`
  query items {
    item {
      _id
      title
      author
      pages
    }
  }
`;
