import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from './prisma.service';

describe('PrismaService', () => {
  let service: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService],
    }).compile();

    service = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should extend PrismaClient', () => {
    expect(service).toHaveProperty('$connect');
    expect(service).toHaveProperty('$disconnect');
    expect(service).toHaveProperty('user');
    expect(service).toHaveProperty('post');
    expect(service).toHaveProperty('emotion');
    expect(service).toHaveProperty('postEmotion');
    expect(service).toHaveProperty('reaction');
    expect(service).toHaveProperty('privateNote');
  });

  it('should have database models available', () => {
    expect(typeof service.user).toBe('object');
    expect(typeof service.post).toBe('object');
    expect(typeof service.emotion).toBe('object');
    expect(typeof service.postEmotion).toBe('object');
    expect(typeof service.reaction).toBe('object');
    expect(typeof service.privateNote).toBe('object');
  });
});
