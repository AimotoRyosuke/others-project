import {
  FEED_QUERY,
  ME_QUERY,
  MY_POSTS_QUERY,
  MY_REACTIONS_QUERY,
  MY_NOTES_QUERY,
} from '../queries';

describe('GraphQL Queries', () => {
  it('FEED_QUERYが正しく定義されていること', () => {
    expect(FEED_QUERY).toBeDefined();
    expect(FEED_QUERY.kind).toBe('Document');
  });

  it('ME_QUERYが正しく定義されていること', () => {
    expect(ME_QUERY).toBeDefined();
    expect(ME_QUERY.kind).toBe('Document');
  });

  it('MY_POSTS_QUERYが正しく定義されていること', () => {
    expect(MY_POSTS_QUERY).toBeDefined();
    expect(MY_POSTS_QUERY.kind).toBe('Document');
  });

  it('MY_REACTIONS_QUERYが正しく定義されていること', () => {
    expect(MY_REACTIONS_QUERY).toBeDefined();
    expect(MY_REACTIONS_QUERY.kind).toBe('Document');
  });

  it('MY_NOTES_QUERYが正しく定義されていること', () => {
    expect(MY_NOTES_QUERY).toBeDefined();
    expect(MY_NOTES_QUERY.kind).toBe('Document');
  });

  it('全てのクエリがGraphQL DocumentNodeであること', () => {
    const queries = [
      FEED_QUERY,
      ME_QUERY,
      MY_POSTS_QUERY,
      MY_REACTIONS_QUERY,
      MY_NOTES_QUERY,
    ];

    queries.forEach((query) => {
      expect(query.kind).toBe('Document');
      expect(query.definitions).toBeDefined();
      expect(query.definitions.length).toBeGreaterThan(0);
    });
  });
});
