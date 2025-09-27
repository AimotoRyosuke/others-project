import { gql } from '@apollo/client';

/**
 * Post型の共通フィールドフラグメント
 */
export const POST_FRAGMENT = gql`
  fragment PostFragment on Post {
    id
    whatPerson
    thoughts
    emotions
    createdAt
    updatedAt
    reactionCount
    hasUserReacted
  }
`;

/**
 * PostConnection型の共通フィールドフラグメント
 */
export const POST_CONNECTION_FRAGMENT = gql`
  fragment PostConnectionFragment on PostConnection {
    edges {
      node {
        ...PostFragment
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
  ${POST_FRAGMENT}
`;

/**
 * ユーザー情報の共通フィールドフラグメント
 */
export const USER_FRAGMENT = gql`
  fragment UserFragment on User {
    id
    nickname
    ordinal
    createdAt
  }
`;

/**
 * PrivateNote型の共通フィールドフラグメント
 */
export const PRIVATE_NOTE_FRAGMENT = gql`
  fragment PrivateNoteFragment on PrivateNote {
    id
    postId
    body
    createdAt
    post {
      ...PostFragment
    }
  }
  ${POST_FRAGMENT}
`;

/**
 * Reaction型の共通フィールドフラグメント
 */
export const REACTION_FRAGMENT = gql`
  fragment ReactionFragment on Reaction {
    id
    postId
    type
    createdAt
  }
`;
