import { ApolloClient, InMemoryCache } from '@apollo/client';
import { createApolloClient } from '../client';

jest.mock('@apollo/client', () => ({
  ...jest.requireActual('@apollo/client'),
  ApolloClient: jest.fn(),
}));

describe('@others/graphql-client', () => {
  describe('createApolloClient', () => {
    const MockedApolloClient = ApolloClient as jest.MockedClass<
      typeof ApolloClient
    >;

    beforeEach(() => {
      MockedApolloClient.mockClear();
    });

    it('基本的なクライアントが作成できること', () => {
      const options = {
        uri: 'http://localhost:4000/graphql',
      };

      createApolloClient(options);

      expect(MockedApolloClient).toHaveBeenCalledWith({
        link: expect.any(Object),
        cache: expect.any(InMemoryCache),
        defaultOptions: {
          watchQuery: {
            errorPolicy: 'all',
          },
          query: {
            errorPolicy: 'all',
          },
        },
      });
    });

    it('getToken関数付きでクライアントが作成できること', () => {
      const getToken = jest.fn().mockReturnValue('test-token');
      const options = {
        uri: 'http://localhost:4000/graphql',
        getToken,
      };

      createApolloClient(options);

      expect(MockedApolloClient).toHaveBeenCalled();
      expect(getToken).not.toHaveBeenCalled();
    });

    it('異なるURIでクライアントが作成できること', () => {
      const options = {
        uri: 'https://api.example.com/graphql',
      };

      createApolloClient(options);

      expect(MockedApolloClient).toHaveBeenCalled();
    });
  });
});
