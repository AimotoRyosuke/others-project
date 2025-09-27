import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../core/prisma/prisma.service';
import { Post, PostConnection, PostEdge } from 'src/core/graphql/entities';
import {
  CreatePostInput,
  FeedArgs,
  MyPostsArgs,
  MyReactionsArgs,
} from 'src/core/graphql/inputs';
import { NotFoundError } from '../../core/common/exceptions';
import { assertTextPolicy } from '@others/validation';

@Injectable()
export class PostsService {
  private readonly postInclude = {
    postEmotions: {
      include: {
        emotion: true,
      },
    },
    reactions: true,
  };

  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.post.findMany({
      include: {
        author: true,
        ...this.postInclude,
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
        ...this.postInclude,
      },
    });
  }

  async create(createPostInput: CreatePostInput, authorId: string) {
    return this.createPost(authorId, createPostInput);
  }

  async remove(id: string): Promise<Post> {
    const post = await this.prisma.post.findUnique({
      where: { id },
      include: this.postInclude,
    });

    if (!post) {
      throw new NotFoundError('Post', id);
    }

    await this.prisma.post.delete({
      where: { id },
    });

    return this.formatPost(post, null);
  }

  async getFeed(args: FeedArgs): Promise<PostConnection> {
    const limit = Math.min(args.first || 20, 100);

    const whereClause: any = {};

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
      node: this.formatPost(post, null),
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

    Object.assign(whereClause, this.buildPaginationWhereClause(args.after));

    const posts = await this.prisma.post.findMany({
      where: whereClause,
      include: this.postInclude,
      orderBy: {
        createdAt: 'desc',
      },
      take: limit + 1,
    });

    return this.buildPostConnection(posts, limit, userId);
  }

  async getUserReactions(
    userId: string,
    args: MyReactionsArgs,
  ): Promise<PostConnection> {
    const limit = Math.min(args.first || 20, 100);

    const reactionWhere = {
      userId: userId,
      ...this.buildPaginationWhereClause(args.after),
    };

    const reactions = await this.prisma.reaction.findMany({
      where: reactionWhere,
      include: {
        post: {
          include: this.postInclude,
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
    assertTextPolicy(input.whatPerson);
    assertTextPolicy(input.thoughts);

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

    const fullPost = await this.prisma.post.findUnique({
      where: { id: post.id },
      include: this.postInclude,
    });

    return this.formatPost(fullPost!, authorId);
  }

  private buildPostConnection(
    posts: any[],
    limit: number,
    currentUserId: string | null,
  ): PostConnection {
    const hasNextPage = posts.length > limit;
    const edges: PostEdge[] = posts.slice(0, limit).map((post) => ({
      node: this.formatPost(post, currentUserId),
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

  private buildPaginationWhereClause(after?: string) {
    return after
      ? {
          createdAt: {
            lt: new Date(Buffer.from(after, 'base64').toString()),
          },
        }
      : {};
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
