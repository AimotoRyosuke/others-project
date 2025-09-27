import { gql } from '@apollo/client';
import {
  POST_CONNECTION_FRAGMENT,
  USER_FRAGMENT,
  PRIVATE_NOTE_FRAGMENT,
} from './fragments';

// Feed query (認証不要)
export const FEED_QUERY = gql`
  query Feed($after: String, $first: Int, $emotionsAny: [String!]) {
    feed(after: $after, first: $first, emotionsAny: $emotionsAny) {
      ...PostConnectionFragment
    }
  }
  ${POST_CONNECTION_FRAGMENT}
`;

// Me query (認証必要)
export const ME_QUERY = gql`
  query Me {
    me {
      ...UserFragment
    }
  }
  ${USER_FRAGMENT}
`;

// My posts query (認証必要)
export const MY_POSTS_QUERY = gql`
  query MyPosts($after: String, $first: Int) {
    myPosts(after: $after, first: $first) {
      ...PostConnectionFragment
    }
  }
  ${POST_CONNECTION_FRAGMENT}
`;

// My reactions query (認証必要)
export const MY_REACTIONS_QUERY = gql`
  query MyReactions($after: String, $first: Int) {
    myReactions(after: $after, first: $first) {
      ...PostConnectionFragment
    }
  }
  ${POST_CONNECTION_FRAGMENT}
`;

// My notes query (認証必要)
export const MY_NOTES_QUERY = gql`
  query MyNotes {
    myNotes {
      ...PrivateNoteFragment
    }
  }
  ${PRIVATE_NOTE_FRAGMENT}
`;
