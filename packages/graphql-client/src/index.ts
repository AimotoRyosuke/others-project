// GraphQL Client Configuration
// Apollo Client共通設定とクライアントユーティリティ

export const GRAPHQL_CLIENT_VERSION = '0.1.0';

export { createApolloClient } from './client';
export { authenticationLink } from './auth-link';
export { cacheConfig } from './cache';
export * from './queries';
export * from './mutations';
export * from './types';
