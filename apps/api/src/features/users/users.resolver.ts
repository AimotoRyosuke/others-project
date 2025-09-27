import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { UseGuards, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '../../core/auth/auth.guard';
import { UserService } from './users.service';
import { Me } from '../../core/graphql/entities';
import { SetNicknameInput } from '../../core/graphql/inputs';

@Resolver(() => Me)
export class UsersResolver {
  constructor(private readonly userService: UserService) {}

  // 認証必要 - 自分の情報
  @Query(() => Me, { name: 'me' })
  @UseGuards(AuthGuard)
  async me(@Context() ctx: any): Promise<Me> {
    const user = await this.userService.findOrCreateUser(
      ctx.req.user.firebaseUid,
    );

    return {
      id: user.id,
      ordinal: user.ordinal,
      nickname: user.nickname ?? undefined,
      createdAt: user.createdAt.toISOString(),
    };
  }

  // 認証必要 - ニックネーム設定
  @Mutation(() => Me, { name: 'setNickname' })
  @UseGuards(AuthGuard)
  async setNickname(
    @Args('input', { type: () => SetNicknameInput }, new ValidationPipe())
    input: SetNicknameInput,
    @Context() ctx: any,
  ): Promise<Me> {
    const user = await this.userService.updateNickname(
      ctx.req.user.firebaseUid,
      input.nickname,
    );

    return {
      id: user.id,
      ordinal: user.ordinal,
      nickname: user.nickname ?? undefined,
      createdAt: user.createdAt.toISOString(),
    };
  }
}
