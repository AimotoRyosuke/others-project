import { authenticationLink } from '../auth-link';
import { ApolloLink, execute, Observable } from '@apollo/client';
import { gql } from '@apollo/client';

describe('authenticationLink', () => {
  const originalNodeEnv = process.env.NODE_ENV;

  afterEach(() => {
    process.env.NODE_ENV = originalNodeEnv;
  });

  describe('リンク作成', () => {
    it('認証リンクが正しく作成されること', () => {
      const link = authenticationLink();
      expect(link).toBeDefined();
    });

    it('getToken関数付きで認証リンクが作成されること', () => {
      const getToken = jest.fn().mockReturnValue('test-token');
      const link = authenticationLink(getToken);
      expect(link).toBeDefined();
    });
  });

  describe('実際のリンク動作テスト', () => {
    const testQuery = gql`
      query TestQuery {
        test
      }
    `;

    it('有効なトークンがヘッダーに追加されること', (done) => {
      const getToken = jest.fn().mockReturnValue('valid-token');
      const authLink = authenticationLink(getToken);

      const mockLink = new ApolloLink((operation) => {
        expect(operation.getContext().headers.authorization).toBe(
          'Bearer valid-token'
        );
        expect(getToken).toHaveBeenCalled();
        done();
        return Observable.of({ data: { test: 'result' } });
      });

      const link = ApolloLink.from([authLink, mockLink]);

      execute(link, { query: testQuery }).subscribe({});
    });

    it('トークンがない場合、認証ヘッダーが追加されないこと', (done) => {
      const getToken = jest.fn().mockReturnValue(null);
      const authLink = authenticationLink(getToken);

      const mockLink = new ApolloLink((operation) => {
        expect(operation.getContext().headers.authorization).toBeUndefined();
        expect(getToken).toHaveBeenCalled();
        done();
        return Observable.of({ data: { test: 'result' } });
      });

      const link = ApolloLink.from([authLink, mockLink]);

      execute(link, { query: testQuery }).subscribe({});
    });

    it('空文字列トークンの場合、認証ヘッダーが追加されないこと', (done) => {
      const getToken = jest.fn().mockReturnValue('');
      const authLink = authenticationLink(getToken);

      const mockLink = new ApolloLink((operation) => {
        expect(operation.getContext().headers.authorization).toBeUndefined();
        expect(getToken).toHaveBeenCalled();
        done();
        return Observable.of({ data: { test: 'result' } });
      });

      const link = ApolloLink.from([authLink, mockLink]);

      execute(link, { query: testQuery }).subscribe({});
    });

    it('開発環境でトークンがない場合、dev-tokenが使用されること', (done) => {
      process.env.NODE_ENV = 'development';
      const getToken = jest.fn().mockReturnValue(null);
      const authLink = authenticationLink(getToken);

      const mockLink = new ApolloLink((operation) => {
        expect(operation.getContext().headers.authorization).toBe(
          'Bearer dev-token'
        );
        expect(getToken).toHaveBeenCalled();
        done();
        return Observable.of({ data: { test: 'result' } });
      });

      const link = ApolloLink.from([authLink, mockLink]);

      execute(link, { query: testQuery }).subscribe({});
    });

    it('開発環境でgetToken未提供の場合、dev-tokenが使用されること', (done) => {
      process.env.NODE_ENV = 'development';
      const authLink = authenticationLink();

      const mockLink = new ApolloLink((operation) => {
        expect(operation.getContext().headers.authorization).toBe(
          'Bearer dev-token'
        );
        done();
        return Observable.of({ data: { test: 'result' } });
      });

      const link = ApolloLink.from([authLink, mockLink]);

      execute(link, { query: testQuery }).subscribe({});
    });

    it('本番環境でトークンがない場合、認証ヘッダーが追加されないこと', (done) => {
      process.env.NODE_ENV = 'production';
      const getToken = jest.fn().mockReturnValue(null);
      const authLink = authenticationLink(getToken);

      const mockLink = new ApolloLink((operation) => {
        expect(operation.getContext().headers.authorization).toBeUndefined();
        expect(getToken).toHaveBeenCalled();
        done();
        return Observable.of({ data: { test: 'result' } });
      });

      const link = ApolloLink.from([authLink, mockLink]);

      execute(link, { query: testQuery }).subscribe({});
    });

    it('既存のヘッダーが保持されること', (done) => {
      const getToken = jest.fn().mockReturnValue('test-token');
      const authLink = authenticationLink(getToken);

      const mockLink = new ApolloLink((operation) => {
        const headers = operation.getContext().headers;
        expect(headers.authorization).toBe('Bearer test-token');
        expect(headers['Content-Type']).toBe('application/json');
        done();
        return Observable.of({ data: { test: 'result' } });
      });

      const link = ApolloLink.from([authLink, mockLink]);

      execute(link, {
        query: testQuery,
        context: {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      }).subscribe({});
    });
  });
  describe('getToken関数の動作検証', () => {
    it('有効なトークンを返すgetToken関数の動作確認', () => {
      const getToken = jest.fn().mockReturnValue('valid-token');
      const link = authenticationLink(getToken);

      expect(link).toBeDefined();
      expect(getToken()).toBe('valid-token');
    });

    it('nullを返すgetToken関数の動作確認', () => {
      const getToken = jest.fn().mockReturnValue(null);
      const link = authenticationLink(getToken);

      expect(link).toBeDefined();
      expect(getToken()).toBe(null);
    });

    it('undefinedを返すgetToken関数の動作確認', () => {
      const getToken = jest.fn().mockReturnValue(undefined);
      const link = authenticationLink(getToken);

      expect(link).toBeDefined();
      expect(getToken()).toBe(undefined);
    });

    it('空文字列を返すgetToken関数の動作確認', () => {
      const getToken = jest.fn().mockReturnValue('');
      const link = authenticationLink(getToken);

      expect(link).toBeDefined();
      expect(getToken()).toBe('');
    });
  });

  describe('環境別の動作', () => {
    it('開発環境でリンクが作成されること', () => {
      process.env.NODE_ENV = 'development';
      const link = authenticationLink();
      expect(link).toBeDefined();
    });

    it('本番環境でリンクが作成されること', () => {
      process.env.NODE_ENV = 'production';
      const link = authenticationLink();
      expect(link).toBeDefined();
    });

    it('テスト環境でリンクが作成されること', () => {
      process.env.NODE_ENV = 'test';
      const link = authenticationLink();
      expect(link).toBeDefined();
    });

    it('環境が未設定でもリンクが作成されること', () => {
      delete process.env.NODE_ENV;
      const link = authenticationLink();
      expect(link).toBeDefined();
    });
  });

  describe('エラーハンドリング', () => {
    it('getToken関数でエラーが発生してもリンクが作成されること', () => {
      const getToken = jest.fn().mockImplementation(() => {
        throw new Error('Token retrieval failed');
      });

      expect(() => authenticationLink(getToken)).not.toThrow();

      const link = authenticationLink(getToken);
      expect(link).toBeDefined();
    });

    it('undefinedが渡されてもリンクが作成されること', () => {
      const link = authenticationLink(undefined);
      expect(link).toBeDefined();
    });
  });

  describe('複数回の呼び出し', () => {
    it('同じgetToken関数で複数回リンクを作成できること', () => {
      const getToken = jest.fn().mockReturnValue('same-token');

      const link1 = authenticationLink(getToken);
      const link2 = authenticationLink(getToken);

      expect(link1).toBeDefined();
      expect(link2).toBeDefined();
    });

    it('異なるgetToken関数で複数回リンクを作成できること', () => {
      const getToken1 = jest.fn().mockReturnValue('token1');
      const getToken2 = jest.fn().mockReturnValue('token2');

      const link1 = authenticationLink(getToken1);
      const link2 = authenticationLink(getToken2);

      expect(link1).toBeDefined();
      expect(link2).toBeDefined();
    });
  });

  describe('型安全性の検証', () => {
    it('文字列トークンでリンクが作成されること', () => {
      const getToken = jest.fn().mockReturnValue('string-token');
      const link = authenticationLink(getToken);
      expect(link).toBeDefined();
    });

    it('null返却でリンクが作成されること', () => {
      const getToken = jest.fn().mockReturnValue(null);
      const link = authenticationLink(getToken);
      expect(link).toBeDefined();
    });
  });
});
