import { cacheConfig } from '../cache';

describe('cacheConfig', () => {
  it('キャッシュ設定が正しく定義されていること', () => {
    expect(cacheConfig).toBeDefined();
    expect(cacheConfig.typePolicies).toBeDefined();
  });

  it('Queryタイプのポリシーが設定されていること', () => {
    expect(cacheConfig.typePolicies?.Query).toBeDefined();
    expect(cacheConfig.typePolicies?.Query?.fields).toBeDefined();
  });

  it('feedフィールドのポリシーが設定されていること', () => {
    const feedPolicy = cacheConfig.typePolicies?.Query?.fields?.feed;
    expect(feedPolicy).toBeDefined();
  });

  it('myPostsフィールドのポリシーが設定されていること', () => {
    const myPostsPolicy = cacheConfig.typePolicies?.Query?.fields?.myPosts;
    expect(myPostsPolicy).toBeDefined();
  });

  it('myReactionsフィールドのポリシーが設定されていること', () => {
    const myReactionsPolicy =
      cacheConfig.typePolicies?.Query?.fields?.myReactions;
    expect(myReactionsPolicy).toBeDefined();
  });

  it('キャッシュ設定のプロパティが期待値と一致すること', () => {
    const { typePolicies } = cacheConfig;

    // 基本構造の確認
    expect(typePolicies?.Query?.fields?.feed).toHaveProperty('keyArgs');
    expect(typePolicies?.Query?.fields?.feed).toHaveProperty('merge');
    expect(typePolicies?.Query?.fields?.myPosts).toHaveProperty('keyArgs');
    expect(typePolicies?.Query?.fields?.myPosts).toHaveProperty('merge');
    expect(typePolicies?.Query?.fields?.myReactions).toHaveProperty('keyArgs');
    expect(typePolicies?.Query?.fields?.myReactions).toHaveProperty('merge');
  });
});
