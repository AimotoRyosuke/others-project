import { Resolver, Query, Mutation, Args, ID, Context } from '@nestjs/graphql';
import { UseGuards, ValidationPipe } from '@nestjs/common';
import { PostsService } from './posts.service';
import { UserService } from '../users/users.service';
import { assertTextPolicy } from '@others/validation';
import { Post, PostConnection } from '../../core/graphql/entities';
import { AuthGuard } from '../../core/auth/auth.guard';
import {
  FeedArgs,
  MyPostsArgs,
  CreatePostInput,
} from '../../core/graphql/inputs';

@Resolver(() => Post)
export class PostsResolver {
  constructor(
    private readonly postsService: PostsService,
    private readonly userService: UserService,
  ) {}

  @Query(() => [Post], { name: 'posts' })
  findAll() {
    return this.postsService.findAll();
  }

  @Query(() => Post, { name: 'post' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.postsService.findOne(id);
  }

  @Mutation(() => Post)
  removePost(@Args('id', { type: () => ID }) id: string) {
    return this.postsService.remove(id);
  }

  // 認証不要 - 他人タブのフィード
  @Query(() => PostConnection, { name: 'feed' })
  async feed(@Args() args: FeedArgs): Promise<PostConnection> {
    return this.postsService.getFeed(args);
  }

  // 認証必要 - 投稿作成
  @Mutation(() => Post, { name: 'createPost' })
  @UseGuards(AuthGuard)
  async createPost(
    @Args('input', { type: () => CreatePostInput }, new ValidationPipe())
    input: CreatePostInput,
    @Context() ctx: any,
  ): Promise<Post> {
    // ポリシーチェック
    assertTextPolicy(input.whatPerson);
    assertTextPolicy(input.thoughts);

    const user = await this.userService.findOrCreateUser(
      ctx.req.user.firebaseUid,
    );
    return this.postsService.createPost(user.id, input);
  }

  // 認証必要 - 自分の投稿一覧
  @Query(() => PostConnection, { name: 'myPosts' })
  @UseGuards(AuthGuard)
  async myPosts(
    @Args() args: MyPostsArgs,
    @Context() ctx: any,
  ): Promise<PostConnection> {
    const user = await this.userService.findOrCreateUser(
      ctx.req.user.firebaseUid,
    );
    return this.postsService.getUserPosts(user.id, args);
  }
}
