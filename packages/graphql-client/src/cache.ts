import { InMemoryCacheConfig } from '@apollo/client';

export const cacheConfig: InMemoryCacheConfig = {
  typePolicies: {
    Query: {
      fields: {
        feed: {
          keyArgs: ['emotionsAny'],
          merge(existing, incoming) {
            if (!existing) {
              return incoming;
            }
            return {
              ...incoming,
              edges: [...existing.edges, ...incoming.edges],
            };
          },
        },
        myPosts: {
          keyArgs: [],
          merge(existing, incoming) {
            if (!existing) {
              return incoming;
            }
            return {
              ...incoming,
              edges: [...existing.edges, ...incoming.edges],
            };
          },
        },
        myReactions: {
          keyArgs: [],
          merge(existing, incoming) {
            if (!existing) {
              return incoming;
            }
            return {
              ...incoming,
              edges: [...existing.edges, ...incoming.edges],
            };
          },
        },
      },
    },
  },
};
