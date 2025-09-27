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
    it('ページネーション付きの投稿一覧を返すべき', async () => {
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

    it('カーソルを使用したページネーションを処理できるべき', async () => {
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
    it('投稿を作成できるべき', async () => {
      const mockPost = {
        id: 'post1',
        whatPerson: '友達',
        thoughts: 'テスト',
        authorId: 'user1',
        createdAt: new Date(),
        updatedAt: new Date(),
        author: { nickname: 'テストユーザー' },
        postEmotions: [],
      };

      const mockEmotions = [{ id: 'emotion1', code: 'happy' }];

      mockPrismaService.emotion.findMany.mockResolvedValue(mockEmotions);
      mockPrismaService.post.create.mockResolvedValue(mockPost);
      mockPrismaService.postEmotion.createMany.mockResolvedValue({ count: 1 });

      await service.create(
        {
          whatPerson: '友達',
          thoughts: 'テスト',
          emotions: ['happy'],
        },
        'user1',
      );

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
    it('全ての投稿を返すべき', async () => {
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
        },
        orderBy: {
          createdAt: 'desc',
        },
      });
    });
  });

  describe('findOne', () => {
    it('単一の投稿を返すべき', async () => {
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
        },
      });
    });
  });

  describe('remove', () => {
    it('投稿を削除できるべき', async () => {
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

    it('投稿が見つからない場合はエラーを投げるべき', async () => {
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
});
