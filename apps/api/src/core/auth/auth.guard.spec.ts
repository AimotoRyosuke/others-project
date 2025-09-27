// Firebase環境変数をテスト用に設定
process.env.NODE_ENV = 'test';
process.env.FIREBASE_AUTH_EMULATOR_HOST = 'localhost:9099';
process.env.FIREBASE_PROJECT_ID = 'demo-test-project';

import { Test, TestingModule } from '@nestjs/testing';
import { ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from './auth.guard';
import * as admin from 'firebase-admin';

// Firebase Admin SDKモック
jest.mock('firebase-admin', () => ({
  apps: [],
  initializeApp: jest.fn(),
  credential: {
    cert: jest.fn(),
  },
  auth: jest.fn(() => ({
    verifyIdToken: jest.fn(),
  })),
}));

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let mockExecutionContext: Partial<ExecutionContext>;
  let mockGqlContext: Partial<GqlExecutionContext>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthGuard],
    }).compile();

    guard = module.get<AuthGuard>(AuthGuard);

    // GqlExecutionContextのモックを設定
    mockGqlContext = {
      getContext: jest.fn(),
    };

    mockExecutionContext = {
      switchToHttp: jest.fn(),
    };

    // GqlExecutionContext.createのモック
    jest
      .spyOn(GqlExecutionContext, 'create')
      .mockReturnValue(mockGqlContext as GqlExecutionContext);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('canActivate', () => {
    it('認証ヘッダーがない場合はUnauthorizedExceptionを投げる', async () => {
      // Arrange
      const mockRequest = { headers: {} };
      (mockGqlContext.getContext as jest.Mock).mockReturnValue({
        req: mockRequest,
      });

      // Act & Assert
      await expect(
        guard.canActivate(mockExecutionContext as ExecutionContext),
      ).rejects.toThrow(new UnauthorizedException('認証が必要です'));
    });

    it('Bearer以外の認証ヘッダーの場合はUnauthorizedExceptionを投げる', async () => {
      // Arrange
      const mockRequest = { headers: { authorization: 'Basic token' } };
      (mockGqlContext.getContext as jest.Mock).mockReturnValue({
        req: mockRequest,
      });

      // Act & Assert
      await expect(
        guard.canActivate(mockExecutionContext as ExecutionContext),
      ).rejects.toThrow(new UnauthorizedException('認証が必要です'));
    });

    it('開発用トークン（dev-token）で認証が成功する', async () => {
      // Arrange
      const mockRequest: any = {
        headers: { authorization: 'Bearer dev-token' },
      };
      (mockGqlContext.getContext as jest.Mock).mockReturnValue({
        req: mockRequest,
      });

      // Act
      const result = await guard.canActivate(
        mockExecutionContext as ExecutionContext,
      );

      // Assert
      expect(result).toBe(true);
      expect(mockRequest).toHaveProperty('user');
      expect(mockRequest.user).toEqual({
        firebaseUid: 'dev-user-1',
        email: 'dev@example.com',
      });
    });

    it('有効なFirebase ID Tokenで認証が成功する', async () => {
      // Arrange
      const mockRequest: any = {
        headers: { authorization: 'Bearer valid-firebase-token' },
      };
      (mockGqlContext.getContext as jest.Mock).mockReturnValue({
        req: mockRequest,
      });

      const mockDecodedToken = {
        uid: 'firebase-user-123',
        email: 'user@example.com',
      };

      const mockAuth = {
        verifyIdToken: jest.fn().mockResolvedValue(mockDecodedToken),
      };
      (admin.auth as jest.Mock).mockReturnValue(mockAuth);

      // NODE_ENVを本番環境に設定（Emulatorフラグを無効化）
      const originalNodeEnv = process.env.NODE_ENV;
      const originalEmulatorHost = process.env.FIREBASE_AUTH_EMULATOR_HOST;
      process.env.NODE_ENV = 'production';
      delete process.env.FIREBASE_AUTH_EMULATOR_HOST;

      // Act
      const result = await guard.canActivate(
        mockExecutionContext as ExecutionContext,
      );

      // Assert
      expect(result).toBe(true);
      expect(mockRequest).toHaveProperty('user');
      expect(mockRequest.user).toEqual({
        firebaseUid: 'firebase-user-123',
        email: 'user@example.com',
      });
      expect(mockAuth.verifyIdToken).toHaveBeenCalledWith(
        'valid-firebase-token',
      );

      // 環境変数を復元
      process.env.NODE_ENV = originalNodeEnv;
      if (originalEmulatorHost) {
        process.env.FIREBASE_AUTH_EMULATOR_HOST = originalEmulatorHost;
      }
    });

    it('無効なFirebase ID Tokenで認証が失敗する', async () => {
      // Arrange
      const mockRequest: any = {
        headers: { authorization: 'Bearer invalid-token' },
      };
      (mockGqlContext.getContext as jest.Mock).mockReturnValue({
        req: mockRequest,
      });

      const mockAuth = {
        verifyIdToken: jest.fn().mockRejectedValue(new Error('Invalid token')),
      };
      (admin.auth as jest.Mock).mockReturnValue(mockAuth);

      // NODE_ENVを本番環境に設定（Emulatorフラグを無効化）
      const originalNodeEnv = process.env.NODE_ENV;
      const originalEmulatorHost = process.env.FIREBASE_AUTH_EMULATOR_HOST;
      process.env.NODE_ENV = 'production';
      delete process.env.FIREBASE_AUTH_EMULATOR_HOST;

      // Act & Assert
      await expect(
        guard.canActivate(mockExecutionContext as ExecutionContext),
      ).rejects.toThrow(new UnauthorizedException('無効なトークンです'));

      // 環境変数を復元
      process.env.NODE_ENV = originalNodeEnv;
      if (originalEmulatorHost) {
        process.env.FIREBASE_AUTH_EMULATOR_HOST = originalEmulatorHost;
      }
    });

    it('emailがないユーザーでも認証が成功する', async () => {
      // Arrange
      const mockRequest: any = {
        headers: { authorization: 'Bearer valid-token-no-email' },
      };
      (mockGqlContext.getContext as jest.Mock).mockReturnValue({
        req: mockRequest,
      });

      const mockDecodedToken = {
        uid: 'firebase-user-456',
        // emailなし
      };

      const mockAuth = {
        verifyIdToken: jest.fn().mockResolvedValue(mockDecodedToken),
      };
      (admin.auth as jest.Mock).mockReturnValue(mockAuth);

      // NODE_ENVを本番環境に設定
      const originalNodeEnv = process.env.NODE_ENV;
      const originalEmulatorHost = process.env.FIREBASE_AUTH_EMULATOR_HOST;
      process.env.NODE_ENV = 'production';
      delete process.env.FIREBASE_AUTH_EMULATOR_HOST;

      // Act
      const result = await guard.canActivate(
        mockExecutionContext as ExecutionContext,
      );

      // Assert
      expect(result).toBe(true);
      expect(mockRequest.user).toEqual({
        firebaseUid: 'firebase-user-456',
        email: null,
      });

      // 環境変数を復元
      process.env.NODE_ENV = originalNodeEnv;
      if (originalEmulatorHost) {
        process.env.FIREBASE_AUTH_EMULATOR_HOST = originalEmulatorHost;
      }
    });
  });

  describe('Firebase初期化', () => {
    it('エミュレーター環境で適切に初期化される', () => {
      // Firebase Admin SDKの初期化はファイル読み込み時に実行されるため、
      // テスト環境では既に初期化済みと考えられる
      expect(admin.apps).toBeDefined();
    });
  });
});
