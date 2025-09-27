import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './users.service';
import { PrismaService } from '../../core/prisma/prisma.service';

describe('UserService', () => {
  let service: UserService;

  const mockPrismaService = {
    user: {
      findUnique: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      count: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('findOrCreateUser', () => {
    it('should return existing user', async () => {
      const mockUser = {
        id: 'user1',
        firebaseUid: 'firebase123',
        ordinal: 1,
        nickname: 'テストユーザー',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      mockPrismaService.user.findUnique.mockResolvedValue(mockUser);

      const result = await service.findOrCreateUser('firebase123');

      expect(result).toEqual(mockUser);
      expect(mockPrismaService.user.findUnique).toHaveBeenCalledWith({
        where: { firebaseUid: 'firebase123' },
      });
      expect(mockPrismaService.user.create).not.toHaveBeenCalled();
    });

    it('should create new user if not exists', async () => {
      const mockNewUser = {
        id: 'user1',
        firebaseUid: 'firebase123',
        ordinal: 1,
        nickname: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      mockPrismaService.user.findUnique.mockResolvedValue(null);
      mockPrismaService.user.create.mockResolvedValue(mockNewUser);

      const result = await service.findOrCreateUser('firebase123');

      expect(result).toEqual(mockNewUser);
      expect(mockPrismaService.user.create).toHaveBeenCalledWith({
        data: {
          firebaseUid: 'firebase123',
          nickname: null,
        },
      });
    });
  });

  describe('updateNickname', () => {
    it('should update user nickname', async () => {
      const mockUpdatedUser = {
        id: 'user1',
        firebaseUid: 'firebase123',
        ordinal: 1,
        nickname: '新しいニックネーム',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      mockPrismaService.user.update.mockResolvedValue(mockUpdatedUser);

      const result = await service.updateNickname(
        'firebase123',
        '新しいニックネーム',
      );

      expect(result).toEqual(mockUpdatedUser);
      expect(mockPrismaService.user.update).toHaveBeenCalledWith({
        where: { firebaseUid: 'firebase123' },
        data: { nickname: '新しいニックネーム' },
      });
    });
  });

  describe('getUserByFirebaseUid', () => {
    it('should return user by firebase uid', async () => {
      const mockUser = {
        id: 'user1',
        firebaseUid: 'firebase123',
        ordinal: 1,
        nickname: 'テストユーザー',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      mockPrismaService.user.findUnique.mockResolvedValue(mockUser);

      const result = await service.getUserByFirebaseUid('firebase123');

      expect(result).toEqual(mockUser);
      expect(mockPrismaService.user.findUnique).toHaveBeenCalledWith({
        where: { firebaseUid: 'firebase123' },
      });
    });
  });
});
