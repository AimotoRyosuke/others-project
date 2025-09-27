import { Test, TestingModule } from '@nestjs/testing';
import { PostsService } from './posts.service';
import { PrismaService } from '../../core/prisma/prisma.service';

describe('PostsService', () => {
  let service: PostsService;

  const mockPrismaService = {
    post: {
      findMany: jest.fn(),
      count: jest.fn(),
      create: jest.fn(),
      findUnique: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
    postEmotion: {
      createMany: jest.fn(),
      deleteMany: jest.fn(),
    },
    emotion: {
      findMany: jest.fn(),
    },
    user: {
      findUnique: jest.fn(),
    },
    reaction: {
      findMany: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PostsService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    service = module.get<PostsService>(PostsService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getFeed', () => {
    it('ページネーション付きの投稿一覧を返すこと', async () => {
      const mockPosts = [
        {
          id: '1',
          whatPerson: '友達',
          thoughts: 'テスト投稿',
          createdAt: new Date(),
          updatedAt: new Date(),
          author: { nickname: 'テストユーザー' },
          postEmotions: [{ emotion: { code: 'happy' } }],
          reactions: [], // reactionsフィールドを追加
        },
      ];

      mockPrismaService.post.findMany.mockResolvedValue(mockPosts);

      const result = await service.getFeed({ first: 10 });

      expect(result.edges).toHaveLength(1);
      expect(result.edges[0].node.whatPerson).toBe('友達');
      expect(result.edges[0].node.emotions).toContain('happy');
      expect(result.edges[0].node.reactionCount).toBe(0);
    });

    it('カーソルを使用したページネーションを処理できること', async () => {
      mockPrismaService.post.findMany.mockResolvedValue([]);

      await service.getFeed({ first: 10, after: 'cursor123' });

      expect(mockPrismaService.post.findMany).toHaveBeenCalledWith(
        expect.objectContaining({
          where: expect.objectContaining({
            createdAt: expect.objectContaining({
              lt: expect.any(Date),
            }),
          }),
        }),
      );
    });
  });

  describe('create', () => {
    it('投稿を作成できること', async () => {
      const mockPost = {
        id: 'post1',
        whatPerson: '友達',
        thoughts: 'テスト',
        authorId: 'user1',
        createdAt: new Date(),
        updatedAt: new Date(),
        author: { nickname: 'テストユーザー' },
        postEmotions: [
          {
            emotion: { code: 'happy' },
          },
        ],
        reactions: [],
      };

      const mockEmotions = [{ id: 'emotion1', code: 'happy' }];

      mockPrismaService.emotion.findMany.mockResolvedValue(mockEmotions);
      mockPrismaService.post.create.mockResolvedValue({
        id: 'post1',
        whatPerson: '友達',
        thoughts: 'テスト',
        authorId: 'user1',
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      mockPrismaService.postEmotion.createMany.mockResolvedValue({ count: 1 });
      mockPrismaService.post.findUnique.mockResolvedValue(mockPost);

      const result = await service.create(
        {
          whatPerson: '友達',
          thoughts: 'テスト',
          emotions: ['happy'],
        },
        'user1',
      );

      expect(result).toBeDefined();
      expect(result.whatPerson).toBe('友達');
      expect(result.emotions).toContain('happy');

      expect(mockPrismaService.post.create).toHaveBeenCalledWith({
        data: {
          whatPerson: '友達',
          thoughts: 'テスト',
          authorId: 'user1',
        },
      });
      expect(mockPrismaService.postEmotion.createMany).toHaveBeenCalled();
    });
  });

  describe('findAll', () => {
    it('全ての投稿を返すこと', async () => {
      const mockPosts = [
        {
          id: '1',
          whatPerson: '家族',
          thoughts: '投稿内容',
          createdAt: new Date(),
          updatedAt: new Date(),
          author: { nickname: 'テストユーザー' },
          postEmotions: [],
        },
      ];

      mockPrismaService.post.findMany.mockResolvedValue(mockPosts);

      const result = await service.findAll();

      expect(result).toEqual(mockPosts);
      expect(mockPrismaService.post.findMany).toHaveBeenCalledWith({
        include: {
          author: true,
          postEmotions: {
            include: {
              emotion: true,
            },
          },
          reactions: true,
        },
        orderBy: {
          createdAt: 'desc',
        },
      });
    });
  });

  describe('findOne', () => {
    it('単一の投稿を返すこと', async () => {
      const mockPost = {
        id: '1',
        whatPerson: '友達',
        thoughts: 'テスト投稿',
        createdAt: new Date(),
        updatedAt: new Date(),
        author: { nickname: 'テストユーザー' },
        postEmotions: [],
      };

      mockPrismaService.post.findUnique.mockResolvedValue(mockPost);

      const result = await service.findOne('1');

      expect(result).toEqual(mockPost);
      expect(mockPrismaService.post.findUnique).toHaveBeenCalledWith({
        where: { id: '1' },
        include: {
          author: true,
          postEmotions: {
            include: {
              emotion: true,
            },
          },
          reactions: true,
        },
      });
    });
  });

  describe('remove', () => {
    it('投稿を削除できること', async () => {
      const postId = 'post-123';
      const mockPost = {
        id: postId,
        whatPerson: '友達',
        thoughts: 'テスト投稿',
        createdAt: new Date(),
        updatedAt: new Date(),
        authorId: 'user-123',
        postEmotions: [
          {
            emotion: { code: 'happy' },
          },
        ],
        reactions: [],
      };

      mockPrismaService.post.findUnique.mockResolvedValue(mockPost);
      mockPrismaService.post.delete.mockResolvedValue(mockPost);

      const result = await service.remove(postId);

      expect(mockPrismaService.post.findUnique).toHaveBeenCalledWith({
        where: { id: postId },
        include: {
          postEmotions: {
            include: {
              emotion: true,
            },
          },
          reactions: true,
        },
      });
      expect(mockPrismaService.post.delete).toHaveBeenCalledWith({
        where: { id: postId },
      });
      expect(result.id).toBe(postId);
    });

    it('投稿が見つからない場合はエラーが投げられること', async () => {
      const postId = 'non-existent-post';

      mockPrismaService.post.findUnique.mockResolvedValue(null);

      await expect(service.remove(postId)).rejects.toThrow(
        `Post with ID ${postId} not found`,
      );
    });
  });

  describe('getUserPosts', () => {
    it('ユーザーの投稿一覧を取得できること', async () => {
      const userId = 'user-123';
      const args = { first: 10 };
      const mockPosts = [
        {
          id: '1',
          whatPerson: '友達',
          thoughts: 'ユーザー投稿1',
          createdAt: new Date(),
          updatedAt: new Date(),
          author: { nickname: 'テストユーザー' },
          postEmotions: [{ emotion: { code: 'happy' } }],
          reactions: [],
        },
      ];

      mockPrismaService.post.findMany.mockResolvedValue(mockPosts);

      const result = await service.getUserPosts(userId, args);

      expect(result.edges).toHaveLength(1);
      expect(result.edges[0].node.whatPerson).toBe('友達');
      expect(mockPrismaService.post.findMany).toHaveBeenCalledWith({
        where: { authorId: userId },
        include: {
          postEmotions: {
            include: {
              emotion: true,
            },
          },
          reactions: true,
        },
        orderBy: {
          createdAt: 'desc',
        },
        take: 11,
      });
    });

    it('ページネーション付きでユーザーの投稿一覧を取得できること', async () => {
      const userId = 'user-123';
      const cursor = Buffer.from(new Date().toISOString()).toString('base64');
      const args = { first: 5, after: cursor };

      mockPrismaService.post.findMany.mockResolvedValue([]);

      await service.getUserPosts(userId, args);

      expect(mockPrismaService.post.findMany).toHaveBeenCalledWith({
        where: {
          authorId: userId,
          createdAt: {
            lt: expect.any(Date),
          },
        },
        include: {
          postEmotions: {
            include: {
              emotion: true,
            },
          },
          reactions: true,
        },
        orderBy: {
          createdAt: 'desc',
        },
        take: 6,
      });
    });
  });

  describe('getUserReactions', () => {
    it('ユーザーがリアクションした投稿一覧を取得できること', async () => {
      const userId = 'user-123';
      const args = { first: 10 };
      const mockReactions = [
        {
          id: 'reaction-1',
          userId: userId,
          type: 'HEART',
          createdAt: new Date(),
          post: {
            id: 'post-1',
            whatPerson: '友達',
            thoughts: 'リアクションした投稿',
            createdAt: new Date(),
            updatedAt: new Date(),
            postEmotions: [{ emotion: { code: 'happy' } }],
            reactions: [{ userId: userId, type: 'HEART' }],
          },
        },
      ];

      mockPrismaService.reaction = {
        findMany: jest.fn().mockResolvedValue(mockReactions),
      };

      const result = await service.getUserReactions(userId, args);

      expect(result.edges).toHaveLength(1);
      expect(result.edges[0].node.whatPerson).toBe('友達');
      expect(result.edges[0].node.hasUserReacted).toBe(true);
      expect(result.edges[0].node.reactionCount).toBe(1);
    });

    it('カーソル付きページネーションでユーザーリアクションを取得できること', async () => {
      const userId = 'user-123';
      const cursor = Buffer.from(new Date().toISOString()).toString('base64');
      const args = { first: 5, after: cursor };

      mockPrismaService.reaction = {
        findMany: jest.fn().mockResolvedValue([]),
      };

      await service.getUserReactions(userId, args);

      expect(mockPrismaService.reaction.findMany).toHaveBeenCalledWith({
        where: {
          userId: userId,
          createdAt: {
            lt: expect.any(Date),
          },
        },
        include: {
          post: {
            include: {
              postEmotions: {
                include: {
                  emotion: true,
                },
              },
              reactions: true,
            },
          },
        },
        orderBy: {
          createdAt: 'desc',
        },
        take: 6,
      });
    });

    it('次のページがある場合のhasNextPageが正しく設定されること', async () => {
      const userId = 'user-123';
      const args = { first: 2 };
      const mockReactions = [
        {
          id: 'reaction-1',
          createdAt: new Date(),
          post: {
            id: 'post-1',
            whatPerson: '友達',
            thoughts: '投稿1',
            createdAt: new Date(),
            updatedAt: new Date(),
            postEmotions: [],
            reactions: [],
          },
        },
        {
          id: 'reaction-2',
          createdAt: new Date(),
          post: {
            id: 'post-2',
            whatPerson: '家族',
            thoughts: '投稿2',
            createdAt: new Date(),
            updatedAt: new Date(),
            postEmotions: [],
            reactions: [],
          },
        },
        {
          id: 'reaction-3',
          createdAt: new Date(),
          post: {
            id: 'post-3',
            whatPerson: '同僚',
            thoughts: '投稿3',
            createdAt: new Date(),
            updatedAt: new Date(),
            postEmotions: [],
            reactions: [],
          },
        },
      ];

      mockPrismaService.reaction = {
        findMany: jest.fn().mockResolvedValue(mockReactions),
      };

      const result = await service.getUserReactions(userId, args);

      expect(result.edges).toHaveLength(2);
      expect(result.pageInfo.hasNextPage).toBe(true);
    });
  });

  describe('createPost', () => {
    it('新しい投稿を作成できること', async () => {
      const authorId = 'user-123';
      const input = {
        whatPerson: '友達',
        thoughts: '新しい投稿',
        emotions: ['happy', 'excited'],
      };

      const mockCreatedPost = {
        id: 'post-123',
        whatPerson: input.whatPerson,
        thoughts: input.thoughts,
        authorId: authorId,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const mockEmotions = [
        { id: 'emotion-1', code: 'happy' },
        { id: 'emotion-2', code: 'excited' },
      ];

      const mockFullPost = {
        ...mockCreatedPost,
        postEmotions: [
          { emotion: { code: 'happy' } },
          { emotion: { code: 'excited' } },
        ],
        reactions: [],
      };

      mockPrismaService.post.create.mockResolvedValue(mockCreatedPost);
      mockPrismaService.emotion.findMany.mockResolvedValue(mockEmotions);
      mockPrismaService.postEmotion.createMany.mockResolvedValue({ count: 2 });
      mockPrismaService.post.findUnique.mockResolvedValue(mockFullPost);

      const result = await service.createPost(authorId, input);

      expect(mockPrismaService.post.create).toHaveBeenCalledWith({
        data: {
          whatPerson: input.whatPerson,
          thoughts: input.thoughts,
          authorId: authorId,
        },
      });

      expect(mockPrismaService.emotion.findMany).toHaveBeenCalledWith({
        where: {
          code: {
            in: input.emotions,
          },
        },
      });

      expect(mockPrismaService.postEmotion.createMany).toHaveBeenCalledWith({
        data: [
          { postId: 'post-123', emotionId: 'emotion-1' },
          { postId: 'post-123', emotionId: 'emotion-2' },
        ],
      });

      expect(result.id).toBe('post-123');
      expect(result.emotions).toEqual(['happy', 'excited']);
    });
  });

  describe('getFeed with emotion filters', () => {
    it('感情フィルター付きで投稿を取得できること', async () => {
      const args = {
        first: 10,
        emotionsAny: ['happy', 'excited'],
      };

      const mockPosts = [
        {
          id: 'post-1',
          whatPerson: '友達',
          thoughts: '幸せな投稿',
          createdAt: new Date(),
          updatedAt: new Date(),
          postEmotions: [{ emotion: { code: 'happy' } }],
          reactions: [],
        },
      ];

      mockPrismaService.post.findMany.mockResolvedValue(mockPosts);

      await service.getFeed(args);

      expect(mockPrismaService.post.findMany).toHaveBeenCalledWith({
        where: {
          postEmotions: {
            some: {
              emotion: {
                code: {
                  in: ['happy', 'excited'],
                },
              },
            },
          },
        },
        include: {
          postEmotions: {
            include: {
              emotion: true,
            },
          },
          reactions: true,
        },
        orderBy: {
          createdAt: 'desc',
        },
        take: 11,
      });
    });

    it('感情フィルターとカーソルを同時に使用できること', async () => {
      const cursor = Buffer.from(new Date().toISOString()).toString('base64');
      const args = {
        first: 5,
        after: cursor,
        emotionsAny: ['sad'],
      };

      mockPrismaService.post.findMany.mockResolvedValue([]);

      await service.getFeed(args);

      expect(mockPrismaService.post.findMany).toHaveBeenCalledWith({
        where: {
          postEmotions: {
            some: {
              emotion: {
                code: {
                  in: ['sad'],
                },
              },
            },
          },
          createdAt: {
            lt: expect.any(Date),
          },
        },
        include: {
          postEmotions: {
            include: {
              emotion: true,
            },
          },
          reactions: true,
        },
        orderBy: {
          createdAt: 'desc',
        },
        take: 6,
      });
    });
  });

  describe('formatPost', () => {
    it('投稿を正しくフォーマットできること', async () => {
      const mockPost = {
        id: 'post-123',
        whatPerson: '友達',
        thoughts: 'テスト投稿',
        createdAt: new Date('2024-01-01T00:00:00Z'),
        updatedAt: new Date('2024-01-01T00:00:00Z'),
        postEmotions: [
          { emotion: { code: 'happy' } },
          { emotion: { code: 'excited' } },
        ],
        reactions: [
          { userId: 'user-1', type: 'HEART' },
          { userId: 'user-2', type: 'THANKS' },
        ],
      };

      const result = service.formatPost(mockPost, 'user-1');

      expect(result).toEqual({
        id: 'post-123',
        whatPerson: '友達',
        thoughts: 'テスト投稿',
        emotions: ['happy', 'excited'],
        createdAt: '2024-01-01T00:00:00.000Z',
        updatedAt: '2024-01-01T00:00:00.000Z',
        reactionCount: 2,
        hasUserReacted: true,
      });
    });

    it('現在のユーザーIDがnullの場合hasUserReactedがfalseになること', async () => {
      const mockPost = {
        id: 'post-123',
        whatPerson: '友達',
        thoughts: 'テスト投稿',
        createdAt: new Date('2024-01-01T00:00:00Z'),
        updatedAt: new Date('2024-01-01T00:00:00Z'),
        postEmotions: [],
        reactions: [{ userId: 'user-1', type: 'HEART' }],
      };

      const result = service.formatPost(mockPost, null);

      expect(result.hasUserReacted).toBe(false);
      expect(result.reactionCount).toBe(1);
    });

    it('ユーザーがリアクションしていない場合hasUserReactedがfalseになること', async () => {
      const mockPost = {
        id: 'post-123',
        whatPerson: '友達',
        thoughts: 'テスト投稿',
        createdAt: new Date('2024-01-01T00:00:00Z'),
        updatedAt: new Date('2024-01-01T00:00:00Z'),
        postEmotions: [],
        reactions: [{ userId: 'other-user', type: 'HEART' }],
      };

      const result = service.formatPost(mockPost, 'current-user');

      expect(result.hasUserReacted).toBe(false);
    });
  });
});
