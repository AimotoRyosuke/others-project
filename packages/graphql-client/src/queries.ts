import { gql } from '@apollo/client';

// Feed query (認証不要)
export const FEED_QUERY = gql`
  query Feed($after: String, $first: Int, $emotionsAny: [String!]) {
    feed(after: $after, first: $first, emotionsAny: $emotionsAny) {
      edges {
        node {
          id
          whatPerson
          thoughts
          emotions
          createdAt
          updatedAt
          reactionCount
          hasUserReacted
        }
        cursor
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;

// Me query (認証必要)
export const ME_QUERY = gql`
  query Me {
    me {
      id
      nickname
      ordinal
      createdAt
    }
  }
`;

// My posts query (認証必要)
export const MY_POSTS_QUERY = gql`
  query MyPosts($after: String, $first: Int) {
    myPosts(after: $after, first: $first) {
      edges {
        node {
          id
          whatPerson
          thoughts
          emotions
          createdAt
          updatedAt
          reactionCount
          hasUserReacted
        }
        cursor
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;

// My reactions query (認証必要)
export const MY_REACTIONS_QUERY = gql`
  query MyReactions($after: String, $first: Int) {
    myReactions(after: $after, first: $first) {
      edges {
        node {
          id
          whatPerson
          thoughts
          emotions
          createdAt
          updatedAt
          reactionCount
          hasUserReacted
        }
        cursor
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;

// My notes query (認証必要)
export const MY_NOTES_QUERY = gql`
  query MyNotes {
    myNotes {
      id
      postId
      body
      createdAt
      post {
        id
        whatPerson
        thoughts
        emotions
        createdAt
        updatedAt
        reactionCount
        hasUserReacted
      }
    }
  }
`;
