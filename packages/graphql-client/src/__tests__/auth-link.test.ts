import { authenticationLink } from '../auth-link';

describe('authenticationLink', () => {
  const originalNodeEnv = process.env.NODE_ENV;

  afterEach(() => {
    process.env.NODE_ENV = originalNodeEnv;
  });

  it('認証リンクが正しく作成されること', () => {
    const link = authenticationLink();
    expect(link).toBeDefined();
  });

  it('getToken関数付きで認証リンクが作成されること', () => {
    const getToken = jest.fn().mockReturnValue('test-token');
    const link = authenticationLink(getToken);
    expect(link).toBeDefined();
  });

  it('開発環境で認証リンクが作成されること', () => {
    process.env.NODE_ENV = 'development';
    const link = authenticationLink();
    expect(link).toBeDefined();
  });

  it('本番環境で認証リンクが作成されること', () => {
    process.env.NODE_ENV = 'production';
    const link = authenticationLink();
    expect(link).toBeDefined();
  });

  it('nullトークンでも認証リンクが作成されること', () => {
    const getToken = jest.fn().mockReturnValue(null);
    const link = authenticationLink(getToken);
    expect(link).toBeDefined();
  });

  it('undefinedトークンでも認証リンクが作成されること', () => {
    const getToken = jest.fn().mockReturnValue(undefined);
    const link = authenticationLink(getToken);
    expect(link).toBeDefined();
  });

  it('空文字列トークンでも認証リンクが作成されること', () => {
    const getToken = jest.fn().mockReturnValue('');
    const link = authenticationLink(getToken);
    expect(link).toBeDefined();
  });

  it('関数が未提供でも認証リンクが作成されること', () => {
    const link = authenticationLink(undefined);
    expect(link).toBeDefined();
  });
});
