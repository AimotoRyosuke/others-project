import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.post.findMany({
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
  }

  async findOne(id: string) {
    return this.prisma.post.findUnique({
      where: { id },
      include: {
        author: true,
        postEmotions: {
          include: {
            emotion: true,
          },
        },
      },
    });
  }

  async create(createPostDto: CreatePostDto, authorId: string) {
    // まず投稿を作成
    const post = await this.prisma.post.create({
      data: {
        whatPerson: createPostDto.whatPerson,
        thoughts: createPostDto.thoughts,
        authorId,
      },
    });

    // 感情を関連付け
    const emotions = await this.prisma.emotion.findMany({
      where: {
        code: {
          in: createPostDto.emotions,
        },
      },
    });

    await this.prisma.postEmotion.createMany({
      data: emotions.map((emotion) => ({
        postId: post.id,
        emotionId: emotion.id,
      })),
    });

    // 完成した投稿を取得して返す
    return this.findOne(post.id);
  }

  async remove(id: string) {
    return this.prisma.post.delete({
      where: { id },
    });
  }
}
