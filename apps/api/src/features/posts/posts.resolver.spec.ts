import { Test, TestingModule } from '@nestjs/testing';
import { PostsResolver } from './posts.resolver';
import { PostsService } from './posts.service';
import { UserService } from '../users/users.service';

// Firebase Admin SDKのモック
jest.mock('firebase-admin', () => ({
  apps: [],
  initializeApp: jest.fn(),
  credential: {
    cert: jest.fn().mockReturnValue({}),
  },
  auth: jest.fn().mockReturnValue({
    verifyIdToken: jest.fn().mockResolvedValue({
      uid: 'test-user-id',
      email: 'test@example.com',
    }),
  }),
}));

// AuthGuardのモック
jest.mock('../../core/auth/auth.guard', () => ({
  AuthGuard: jest.fn().mockImplementation(() => ({
    canActivate: jest.fn().mockReturnValue(true),
  })),
}));

describe('PostsResolver', () => {
  let resolver: PostsResolver;
  let service: PostsService;

  const mockPostsService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    remove: jest.fn(),
    getFeed: jest.fn(),
    createPost: jest.fn(),
    getUserPosts: jest.fn(),
  };

  const mockUserService = {
    findOrCreateUser: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PostsResolver,
        {
          provide: PostsService,
          useValue: mockPostsService,
        },
        {
          provide: UserService,
          useValue: mockUserService,
        },
      ],
    }).compile();

    resolver = module.get<PostsResolver>(PostsResolver);
    service = module.get<PostsService>(PostsService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('正常に定義されること', () => {
    expect(resolver).toBeDefined();
  });

  describe('createPost', () => {
    it('認証されたユーザーで投稿を作成できること', async () => {
      const createPostInput = {
        whatPerson: '友達',
        emotions: ['happy' as const],
        thoughts: 'テスト投稿',
      };
      const mockUser = {
        id: 'user-123',
        firebaseUid: 'firebase-uid-123',
        ordinal: 1,
        nickname: 'testuser',
      };
      const expectedPost = {
        id: 'post-123',
        whatPerson: '友達',
        emotions: ['happy'],
        thoughts: 'テスト投稿',
        authorId: mockUser.id,
        createdAt: new Date(),
      };
      const mockContext = {
        req: {
          user: {
            firebaseUid: 'firebase-uid-123',
          },
        },
      };

      mockUserService.findOrCreateUser.mockResolvedValue(mockUser);
      mockPostsService.createPost.mockResolvedValue(expectedPost);

      const result = await resolver.createPost(createPostInput, mockContext);

      expect(mockUserService.findOrCreateUser).toHaveBeenCalledWith(
        'firebase-uid-123',
      );
      expect(mockPostsService.createPost).toHaveBeenCalledWith(
        mockUser.id,
        createPostInput,
      );
      expect(result).toEqual(expectedPost);
    });
  });

  describe('findAll', () => {
    it('投稿の配列が返されること', async () => {
      const expectedPosts = [
        {
          id: 'post-1',
          whatPerson: '友達',
          emotions: ['happy'],
          thoughts: 'テスト投稿1',
          authorId: 'user-1',
          createdAt: new Date(),
        },
        {
          id: 'post-2',
          whatPerson: '家族',
          emotions: ['fun'],
          thoughts: 'テスト投稿2',
          authorId: 'user-2',
          createdAt: new Date(),
        },
      ];

      mockPostsService.findAll.mockResolvedValue(expectedPosts);

      const result = await resolver.findAll();

      expect(service.findAll).toHaveBeenCalled();
      expect(result).toEqual(expectedPosts);
    });
  });

  describe('findOne', () => {
    it('IDで指定された単一の投稿が返されること', async () => {
      const postId = 'post-123';
      const expectedPost = {
        id: postId,
        whatPerson: '友達',
        emotions: ['happy'],
        thoughts: 'テスト投稿',
        authorId: 'user-123',
        createdAt: new Date(),
      };

      mockPostsService.findOne.mockResolvedValue(expectedPost);

      const result = await resolver.findOne(postId);

      expect(service.findOne).toHaveBeenCalledWith(postId);
      expect(result).toEqual(expectedPost);
    });
  });

  describe('removePost', () => {
    it('IDで指定された投稿を削除できること', async () => {
      const postId = 'post-123';
      const expectedPost = {
        id: postId,
        whatPerson: '友達',
        emotions: ['happy'],
        thoughts: 'テスト投稿',
        authorId: 'user-123',
        createdAt: new Date(),
      };

      mockPostsService.remove.mockResolvedValue(expectedPost);

      const result = await resolver.removePost(postId);

      expect(service.remove).toHaveBeenCalledWith(postId);
      expect(result).toEqual(expectedPost);
    });
  });
});
