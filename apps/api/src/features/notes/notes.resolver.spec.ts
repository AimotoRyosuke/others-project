import { Test, TestingModule } from '@nestjs/testing';
import { NotesResolver } from './notes.resolver';
import { UserService } from '../users/users.service';
import { PostsService } from '../posts/posts.service';
import { PrismaService } from '../../core/prisma/prisma.service';
import { AuthGuard } from '../../core/auth/auth.guard';

describe('NotesResolver', () => {
  let resolver: NotesResolver;
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

  const mockPost = {
    id: 'post-1',
    whatPerson: '友達',
    summary: 'テスト投稿',
    createdAt: new Date('2024-01-01'),
    userId: 'user-1',
    updatedAt: new Date('2024-01-01'),
    postEmotions: [],
  };

  const mockNote = {
    id: 'note-1',
    postId: 'post-1',
    userId: 'user-1',
    body: 'テストメモ',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01'),
    post: mockPost,
  };

  const mockFormattedPost = {
    id: 'post-1',
    whatPerson: '友達',
    thoughts: 'テスト投稿',
    emotions: [],
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z',
    reactionCount: 0,
    hasUserReacted: false,
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
      formatPost: jest.fn(),
    };

    const mockPrismaService = {
      privateNote: {
        findMany: jest.fn(),
        create: jest.fn(),
        deleteMany: jest.fn(),
      },
    };

    const mockAuthGuard = {
      canActivate: jest.fn().mockResolvedValue(true),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        NotesResolver,
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

    resolver = module.get<NotesResolver>(NotesResolver);
    userService = module.get<UserService>(UserService);
    postsService = module.get<PostsService>(PostsService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('定義されていること', () => {
    expect(resolver).toBeDefined();
  });

  describe('myNotes', () => {
    it('自分のメモ一覧を取得できること', async () => {
      jest.spyOn(userService, 'findOrCreateUser').mockResolvedValue(mockUser);
      jest
        .spyOn(prismaService.privateNote, 'findMany')
        .mockResolvedValue([mockNote]);
      jest
        .spyOn(postsService, 'formatPost')
        .mockReturnValue(mockFormattedPost as any);

      const result = await resolver.myNotes(mockContext);

      expect(result).toEqual([
        {
          id: 'note-1',
          postId: 'post-1',
          body: 'テストメモ',
          createdAt: '2024-01-01T00:00:00.000Z',
          post: mockFormattedPost,
        },
      ]);
      expect(userService.findOrCreateUser).toHaveBeenCalledWith(
        'firebase-uid-1',
      );
      expect(prismaService.privateNote.findMany).toHaveBeenCalledWith({
        where: { userId: 'user-1' },
        include: {
          post: {
            include: { postEmotions: { include: { emotion: true } } },
          },
        },
        orderBy: { createdAt: 'desc' },
      });
    });

    it('メモがない場合は空の配列を返すこと', async () => {
      jest.spyOn(userService, 'findOrCreateUser').mockResolvedValue(mockUser);
      jest.spyOn(prismaService.privateNote, 'findMany').mockResolvedValue([]);

      const result = await resolver.myNotes(mockContext);

      expect(result).toEqual([]);
    });
  });

  describe('addNote', () => {
    it('メモを追加できること', async () => {
      const input = { postId: 'post-1', body: 'テストメモ' };
      jest.spyOn(userService, 'findOrCreateUser').mockResolvedValue(mockUser);
      jest
        .spyOn(prismaService.privateNote, 'create')
        .mockResolvedValue(mockNote);
      jest
        .spyOn(postsService, 'formatPost')
        .mockReturnValue(mockFormattedPost as any);

      const result = await resolver.addNote(input, mockContext);

      expect(result).toEqual({
        id: 'note-1',
        postId: 'post-1',
        body: 'テストメモ',
        createdAt: '2024-01-01T00:00:00.000Z',
        post: mockFormattedPost,
      });
      expect(prismaService.privateNote.create).toHaveBeenCalledWith({
        data: {
          postId: 'post-1',
          userId: 'user-1',
          body: 'テストメモ',
        },
        include: {
          post: {
            include: { postEmotions: { include: { emotion: true } } },
          },
        },
      });
    });
  });

  describe('deleteNote', () => {
    it('メモを削除できること', async () => {
      jest.spyOn(userService, 'findOrCreateUser').mockResolvedValue(mockUser);
      jest
        .spyOn(prismaService.privateNote, 'deleteMany')
        .mockResolvedValue({ count: 1 });

      const result = await resolver.deleteNote('note-1', mockContext);

      expect(result).toBe(true);
      expect(prismaService.privateNote.deleteMany).toHaveBeenCalledWith({
        where: {
          id: 'note-1',
          userId: 'user-1',
        },
      });
    });
  });
});
