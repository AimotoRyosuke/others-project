import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../core/prisma/prisma.service';
import { Post, PostConnection, PostEdge } from 'src/core/graphql/entities';
import {
  CreatePostInput,
  FeedArgs,
  MyPostsArgs,
  MyReactionsArgs,
} from 'src/core/graphql/inputs';

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

  async create(createPostInput: CreatePostInput, authorId: string) {
    // まず投稿を作成
    const post = await this.prisma.post.create({
      data: {
        whatPerson: createPostInput.whatPerson,
        thoughts: createPostInput.thoughts,
        authorId,
      },
    });

    // 感情を関連付け
    const emotions = await this.prisma.emotion.findMany({
      where: {
        code: {
          in: createPostInput.emotions,
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

  async remove(id: string): Promise<Post> {
    const post = await this.prisma.post.findUnique({
      where: { id },
      include: {
        postEmotions: {
          include: {
            emotion: true,
          },
        },
        reactions: true,
      },
    });

    if (!post) {
      throw new Error(`Post with ID ${id} not found`);
    }

    await this.prisma.post.delete({
      where: { id },
    });

    return this.formatPost(post, null);
  }

  // GraphQL用のメソッド

  async getFeed(args: FeedArgs): Promise<PostConnection> {
    const limit = Math.min(args.first || 20, 100);

    const whereClause: any = {};

    // 感情フィルター
    if (args.emotionsAny && args.emotionsAny.length > 0) {
      whereClause.postEmotions = {
        some: {
          emotion: {
            code: {
              in: args.emotionsAny,
            },
          },
        },
      };
    }

    // カーソルベースページネーション
    if (args.after) {
      whereClause.createdAt = {
        lt: new Date(Buffer.from(args.after, 'base64').toString()),
      };
    }

    const posts = await this.prisma.post.findMany({
      where: whereClause,
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
      take: limit + 1,
    });

    const hasNextPage = posts.length > limit;
    const edges: PostEdge[] = posts.slice(0, limit).map((post) => ({
      node: this.formatPost(post, null), // Feed画面では認証情報なし
      cursor: Buffer.from(post.createdAt.toISOString()).toString('base64'),
    }));

    return {
      edges,
      pageInfo: {
        endCursor:
          edges.length > 0 ? edges[edges.length - 1].cursor : undefined,
        hasNextPage,
      },
    };
  }

  async getUserPosts(
    userId: string,
    args: MyPostsArgs,
  ): Promise<PostConnection> {
    const limit = Math.min(args.first || 20, 100);

    const whereClause: any = {
      authorId: userId,
    };

    if (args.after) {
      whereClause.createdAt = {
        lt: new Date(Buffer.from(args.after, 'base64').toString()),
      };
    }

    const posts = await this.prisma.post.findMany({
      where: whereClause,
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
      take: limit + 1,
    });

    const hasNextPage = posts.length > limit;
    const edges: PostEdge[] = posts.slice(0, limit).map((post) => ({
      node: this.formatPost(post, userId),
      cursor: Buffer.from(post.createdAt.toISOString()).toString('base64'),
    }));

    return {
      edges,
      pageInfo: {
        endCursor:
          edges.length > 0 ? edges[edges.length - 1].cursor : undefined,
        hasNextPage,
      },
    };
  }

  async getUserReactions(
    userId: string,
    args: MyReactionsArgs,
  ): Promise<PostConnection> {
    const limit = Math.min(args.first || 20, 100);

    // まずユーザーのリアクションを取得
    const reactions = await this.prisma.reaction.findMany({
      where: {
        userId: userId,
        ...(args.after && {
          createdAt: {
            lt: new Date(Buffer.from(args.after, 'base64').toString()),
          },
        }),
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
      take: limit + 1,
    });

    const hasNextPage = reactions.length > limit;
    const edges: PostEdge[] = reactions.slice(0, limit).map((reaction) => ({
      node: this.formatPost(reaction.post, userId),
      cursor: Buffer.from(reaction.createdAt.toISOString()).toString('base64'),
    }));

    return {
      edges,
      pageInfo: {
        endCursor:
          edges.length > 0 ? edges[edges.length - 1].cursor : undefined,
        hasNextPage,
      },
    };
  }

  async createPost(authorId: string, input: CreatePostInput): Promise<Post> {
    // まず投稿を作成
    const post = await this.prisma.post.create({
      data: {
        whatPerson: input.whatPerson,
        thoughts: input.thoughts,
        authorId,
      },
    });

    // 感情を関連付け
    const emotions = await this.prisma.emotion.findMany({
      where: {
        code: {
          in: input.emotions,
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
    const fullPost = await this.prisma.post.findUnique({
      where: { id: post.id },
      include: {
        postEmotions: {
          include: {
            emotion: true,
          },
        },
        reactions: true,
      },
    });

    return this.formatPost(fullPost!, authorId);
  }

  formatPost(post: any, currentUserId: string | null): Post {
    const emotions = post.postEmotions.map((pe: any) => pe.emotion.code);
    const reactionCount = post.reactions.length;
    const hasUserReacted = currentUserId
      ? post.reactions.some(
          (reaction: any) => reaction.userId === currentUserId,
        )
      : false;

    return {
      id: post.id,
      whatPerson: post.whatPerson,
      thoughts: post.thoughts,
      emotions,
      createdAt: post.createdAt.toISOString(),
      updatedAt: post.updatedAt.toISOString(),
      reactionCount,
      hasUserReacted,
    };
  }
}
