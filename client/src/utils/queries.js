import gql from 'graphql-tag';

export const QUERY_ITEMS = gql`
  query items($username: String) {
    items(username: $username) {
      _id
      description
      createdAt
      username
      commentCount
      comments {
        _id
        createdAt
        username
        commentText
      }
    }
  }
`;