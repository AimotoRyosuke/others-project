import { Test, TestingModule } from '@nestjs/testing';
import { UsersResolver } from './users.resolver';
import { UserService } from './users.service';
import { AuthGuard } from '../../core/auth/auth.guard';

describe('UsersResolver', () => {
  let resolver: UsersResolver;
  let userService: UserService;
  let mockAuthGuard: jest.Mocked<AuthGuard>;

  const mockUser = {
    id: 'user-1',
    ordinal: 1,
    nickname: 'テストユーザー',
    createdAt: new Date('2024-01-01'),
    firebaseUid: 'firebase-uid-1',
    updatedAt: new Date('2024-01-01'),
  };

  const mockContext = {
    req: {
      user: {
        firebaseUid: 'firebase-uid-1',
      },
    },
  };

  beforeEach(async () => {
    const mockUserService = {
      findOrCreateUser: jest.fn(),
      updateNickname: jest.fn(),
    };

    mockAuthGuard = {
      canActivate: jest.fn().mockResolvedValue(true),
    } as any;

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersResolver,
        {
          provide: UserService,
          useValue: mockUserService,
        },
      ],
    })
      .overrideGuard(AuthGuard)
      .useValue(mockAuthGuard)
      .compile();

    resolver = module.get<UsersResolver>(UsersResolver);
    userService = module.get<UserService>(UserService);
  });

  it('定義されていること', () => {
    expect(resolver).toBeDefined();
  });

  describe('me', () => {
    it('認証されたユーザーの情報を取得できること', async () => {
      jest.spyOn(userService, 'findOrCreateUser').mockResolvedValue(mockUser);

      const result = await resolver.me(mockContext);

      expect(result).toEqual({
        id: 'user-1',
        ordinal: 1,
        nickname: 'テストユーザー',
        createdAt: '2024-01-01T00:00:00.000Z',
      });
      expect(userService.findOrCreateUser).toHaveBeenCalledWith(
        'firebase-uid-1',
      );
    });

    it('ニックネームがnullの場合はundefinedになること', async () => {
      const userWithoutNickname = { ...mockUser, nickname: null };
      jest
        .spyOn(userService, 'findOrCreateUser')
        .mockResolvedValue(userWithoutNickname);

      const result = await resolver.me(mockContext);

      expect(result.nickname).toBeUndefined();
    });
  });

  describe('setNickname', () => {
    it('ニックネームを設定できること', async () => {
      const updatedUser = { ...mockUser, nickname: '新しいニックネーム' };
      jest.spyOn(userService, 'updateNickname').mockResolvedValue(updatedUser);

      const input = { nickname: '新しいニックネーム' };
      const result = await resolver.setNickname(input, mockContext);

      expect(result).toEqual({
        id: 'user-1',
        ordinal: 1,
        nickname: '新しいニックネーム',
        createdAt: '2024-01-01T00:00:00.000Z',
      });
      expect(userService.updateNickname).toHaveBeenCalledWith(
        'firebase-uid-1',
        '新しいニックネーム',
      );
    });

    it('ニックネームを空文字に設定した場合の動作確認', async () => {
      const updatedUser = { ...mockUser, nickname: null };
      jest.spyOn(userService, 'updateNickname').mockResolvedValue(updatedUser);

      const input = { nickname: '' };
      const result = await resolver.setNickname(input, mockContext);

      expect(result.nickname).toBeUndefined();
      expect(userService.updateNickname).toHaveBeenCalledWith(
        'firebase-uid-1',
        '',
      );
    });
  });
});
