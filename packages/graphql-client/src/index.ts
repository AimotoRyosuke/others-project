export const GRAPHQL_CLIENT_VERSION = '0.1.0';

export { createApolloClient } from './client';
export { authenticationLink } from './auth-link';
export { cacheConfig } from './cache';
export * from './queries';
export * from './mutations';
export * from './fragments';

// Re-export types from @others/types for convenience
export type {
  EmotionCode,
  GraphQLPost as Post,
  GraphQLPrivateNote as PrivateNote,
  PostConnection,
  PostEdge,
  PageInfo,
  Me,
  CreatePostInput,
  SetNicknameInput,
  AddNoteInput,
  ReactInput,
  FeedArgs,
  MyPostsArgs,
  MyReactionsArgs,
} from '@others/types';
