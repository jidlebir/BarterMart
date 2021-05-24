import gql from 'graphql-tag';

export const QUERY_ITEMS = gql`
  query items {
    items {
      _id
      title
      image
      user
      description
      commentcount
      comments
    }
  }
`;
