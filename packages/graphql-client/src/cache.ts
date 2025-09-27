import { InMemoryCacheConfig, FieldPolicy } from '@apollo/client';

interface Connection {
  edges: Array<{ node: unknown; cursor: string }>;
  pageInfo: {
    endCursor?: string;
    hasNextPage: boolean;
  };
}

/**
 * ページネーション対応の共通マージ関数を生成
 * @param keyArgs - キャッシュキーに使用する引数のリスト
 * @returns フィールドポリシー
 */
function createConnectionMergeFunction(keyArgs: string[] = []): FieldPolicy {
  return {
    keyArgs,
    merge(existing: Connection | undefined, incoming: Connection) {
      if (!existing) {
        return incoming;
      }
      return {
        ...incoming,
        edges: [...existing.edges, ...incoming.edges],
      };
    },
  };
}

export const cacheConfig: InMemoryCacheConfig = {
  typePolicies: {
    Query: {
      fields: {
        feed: createConnectionMergeFunction(['emotionsAny']),
        myPosts: createConnectionMergeFunction(),
        myReactions: createConnectionMergeFunction(),
      },
    },
  },
};
