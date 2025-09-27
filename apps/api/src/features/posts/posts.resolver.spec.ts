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

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('createPost', () => {
    it('should call postsService.create with correct parameters', async () => {
      const createPostInput = {
        whatPerson: '友達',
        emotions: ['happy' as const],
        thoughts: 'テスト投稿',
      };
      const authorId = 'user-123';
      const expectedPost = {
        id: 'post-123',
        whatPerson: '友達',
        emotions: ['happy'],
        thoughts: 'テスト投稿',
        authorId,
        createdAt: new Date(),
      };

      mockPostsService.create.mockResolvedValue(expectedPost);

      const result = await resolver.createPost(createPostInput, authorId);

      expect(service.create).toHaveBeenCalledWith(createPostInput, authorId);
      expect(result).toEqual(expectedPost);
    });
  });

  describe('findAll', () => {
    it('should return array of posts', async () => {
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
    it('should return single post by id', async () => {
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
    it('should remove post by id', async () => {
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
