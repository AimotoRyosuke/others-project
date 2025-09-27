import { setContext } from '@apollo/client/link/context';

export function authenticationLink(getToken?: () => string | null) {
  return setContext((_, { headers }) => {
    let token = getToken?.();

    // 開発環境でトークンが取得できない場合は、開発用トークンを使用
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
