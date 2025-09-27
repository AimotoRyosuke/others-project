import { Resolver, Mutation, Args, Context, Query } from '@nestjs/graphql';
import { UseGuards, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '../../../core/auth/auth.guard';
import { UserService } from '../../users/users.service';
import { PostsService } from '../posts.service';
import { PrismaService } from '../../../core/prisma/prisma.service';
import { Reaction, PostConnection } from '../../../core/graphql/entities';
import { ReactInput, MyReactionsArgs } from '../../../core/graphql/inputs';

@Resolver(() => Reaction)
export class ReactionsResolver {
  constructor(
    private readonly userService: UserService,
    private readonly postsService: PostsService,
    private readonly prisma: PrismaService,
  ) {}

  // 認証必要 - リアクション追加
  @Mutation(() => Reaction, { name: 'react' })
  @UseGuards(AuthGuard)
  async react(
    @Args('input', { type: () => ReactInput }, new ValidationPipe())
    input: ReactInput,
    @Context() ctx: any,
  ): Promise<Reaction> {
    const user = await this.userService.findOrCreateUser(
      ctx.req.user.firebaseUid,
    );

    const reaction = await this.prisma.reaction.upsert({
      where: {
        postId_userId_type: {
          postId: input.postId,
          userId: user.id,
          type: input.type,
        },
      },
      update: {},
      create: {
        postId: input.postId,
        userId: user.id,
        type: input.type,
      },
    });

    return {
      id: reaction.id,
      postId: reaction.postId,
      type: reaction.type,
      createdAt: reaction.createdAt.toISOString(),
    };
  }

  // 認証必要 - リアクション削除
  @Mutation(() => Boolean, { name: 'unreact' })
  @UseGuards(AuthGuard)
  async unreact(
    @Args('input', { type: () => ReactInput }, new ValidationPipe())
    input: ReactInput,
    @Context() ctx: any,
  ): Promise<boolean> {
    const user = await this.userService.findOrCreateUser(
      ctx.req.user.firebaseUid,
    );

    await this.prisma.reaction.deleteMany({
      where: {
        postId: input.postId,
        userId: user.id,
        type: input.type,
      },
    });

    return true;
  }

  // 認証必要 - 自分がリアクションした投稿一覧
  @Query(() => PostConnection, { name: 'myReactions' })
  @UseGuards(AuthGuard)
  async myReactions(
    @Args() args: MyReactionsArgs,
    @Context() ctx: any,
  ): Promise<PostConnection> {
    const user = await this.userService.findOrCreateUser(
      ctx.req.user.firebaseUid,
    );
    return this.postsService.getUserReactions(user.id, args);
  }
}
