import { setContext } from '@apollo/client/link/context';

export function authenticationLink(getToken?: () => string | null) {
  return setContext((_, { headers }) => {
    let token = getToken?.();

    if (!token && process.env.NODE_ENV === 'development') {
      token = 'dev-token';
    }

    return {
      headers: {
        ...headers,
        ...(token && { authorization: `Bearer ${token}` }),
      },
    };
  });
}
