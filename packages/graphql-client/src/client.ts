import {
  ApolloClient,
  InMemoryCache,
  from,
  createHttpLink,
} from '@apollo/client';
import { authenticationLink } from './auth-link';
import { cacheConfig } from './cache';

export interface CreateApolloClientOptions {
  uri: string;
  getToken?: () => string | null;
}

export function createApolloClient({
  uri,
  getToken,
}: CreateApolloClientOptions) {
  const httpLink = createHttpLink({
    uri,
  });

  const authLink = authenticationLink(getToken);

  return new ApolloClient({
    link: from([authLink, httpLink]),
    cache: new InMemoryCache(cacheConfig),
    defaultOptions: {
      watchQuery: {
        errorPolicy: 'all',
      },
      query: {
        errorPolicy: 'all',
      },
    },
  });
}
