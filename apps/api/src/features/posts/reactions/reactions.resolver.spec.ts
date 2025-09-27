import { Test, TestingModule } from '@nestjs/testing';
import { ReactionsResolver } from './reactions.resolver';
import { UserService } from '../../users/users.service';
import { PostsService } from '../posts.service';
import { PrismaService } from '../../../core/prisma/prisma.service';
import { AuthGuard } from '../../../core/auth/auth.guard';

describe('ReactionsResolver', () => {
  let resolver: ReactionsResolver;
  let userService: UserService;
  let postsService: PostsService;
  let prismaService: PrismaService;

  const mockUser = {
    id: 'user-1',
    ordinal: 1,
    nickname: 'テストユーザー',
    createdAt: new Date('2024-01-01'),
    firebaseUid: 'firebase-uid-1',
    updatedAt: new Date('2024-01-01'),
  };

  const mockReaction = {
    id: 'reaction-1',
    postId: 'post-1',
    userId: 'user-1',
    type: 'HEART',
    createdAt: new Date('2024-01-01'),
  };

  const mockPostConnection = {
    edges: [],
    pageInfo: {
      hasNextPage: false,
      hasPreviousPage: false,
      startCursor: undefined,
      endCursor: undefined,
    },
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
    };

    const mockPostsService = {
      getUserReactions: jest.fn(),
    };

    const mockPrismaService = {
      reaction: {
        upsert: jest.fn(),
        deleteMany: jest.fn(),
      },
    };

    const mockAuthGuard = {
      canActivate: jest.fn().mockResolvedValue(true),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ReactionsResolver,
        {
          provide: UserService,
          useValue: mockUserService,
        },
        {
          provide: PostsService,
          useValue: mockPostsService,
        },
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    })
      .overrideGuard(AuthGuard)
      .useValue(mockAuthGuard)
      .compile();

    resolver = module.get<ReactionsResolver>(ReactionsResolver);
    userService = module.get<UserService>(UserService);
    postsService = module.get<PostsService>(PostsService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('定義されていること', () => {
    expect(resolver).toBeDefined();
  });

  describe('react', () => {
    it('リアクションを追加できること', async () => {
      const input = { postId: 'post-1', type: 'HEART' as const };
      jest.spyOn(userService, 'findOrCreateUser').mockResolvedValue(mockUser);
      jest
        .spyOn(prismaService.reaction, 'upsert')
        .mockResolvedValue(mockReaction);

      const result = await resolver.react(input, mockContext);

      expect(result).toEqual({
        id: 'reaction-1',
        postId: 'post-1',
        type: 'HEART',
        createdAt: '2024-01-01T00:00:00.000Z',
      });
      expect(prismaService.reaction.upsert).toHaveBeenCalledWith({
        where: {
          postId_userId_type: {
            postId: 'post-1',
            userId: 'user-1',
            type: 'HEART',
          },
        },
        update: {},
        create: {
          postId: 'post-1',
          userId: 'user-1',
          type: 'HEART',
        },
      });
    });
  });

  describe('unreact', () => {
    it('リアクションを削除できること', async () => {
      const input = { postId: 'post-1', type: 'HEART' as const };
      jest.spyOn(userService, 'findOrCreateUser').mockResolvedValue(mockUser);
      jest
        .spyOn(prismaService.reaction, 'deleteMany')
        .mockResolvedValue({ count: 1 });

      const result = await resolver.unreact(input, mockContext);

      expect(result).toBe(true);
      expect(prismaService.reaction.deleteMany).toHaveBeenCalledWith({
        where: {
          postId: 'post-1',
          userId: 'user-1',
          type: 'HEART',
        },
      });
    });
  });

  describe('myReactions', () => {
    it('自分がリアクションした投稿一覧を取得できること', async () => {
      const args = { first: 10 };
      jest.spyOn(userService, 'findOrCreateUser').mockResolvedValue(mockUser);
      jest
        .spyOn(postsService, 'getUserReactions')
        .mockResolvedValue(mockPostConnection);

      const result = await resolver.myReactions(args, mockContext);

      expect(result).toEqual(mockPostConnection);
      expect(postsService.getUserReactions).toHaveBeenCalledWith(
        'user-1',
        args,
      );
    });
  });
});
