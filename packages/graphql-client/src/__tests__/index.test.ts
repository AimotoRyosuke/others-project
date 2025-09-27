import { GRAPHQL_CLIENT_VERSION } from '../index';

describe('@others/graphql-client', () => {
  it('should export version constant', () => {
    expect(GRAPHQL_CLIENT_VERSION).toBe('0.1.0');
  });

  it('should be defined', () => {
    expect(GRAPHQL_CLIENT_VERSION).toBeDefined();
  });
});
