import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { UseGuards, ValidationPipe } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { PrivateNote } from 'src/core/graphql/entities';
import { AuthGuard } from 'src/core/auth/auth.guard';
import { AddNoteInput } from 'src/core/graphql/inputs';
import { PostsService } from 'src/features/posts/posts.service';
import { UserService } from 'src/features/users/users.service';

@Resolver(() => PrivateNote)
export class NotesResolver {
  constructor(
    private readonly userService: UserService,
    private readonly postsService: PostsService,
    private readonly prisma: PrismaService,
  ) {}

  // 認証必要 - 自分のメモ一覧
  @Query(() => [PrivateNote], { name: 'myNotes' })
  @UseGuards(AuthGuard)
  async myNotes(@Context() ctx: any): Promise<PrivateNote[]> {
    const user = await this.userService.findOrCreateUser(
      ctx.req.user.firebaseUid,
    );
    const notes = await this.prisma.privateNote.findMany({
      where: { userId: user.id },
      include: {
        post: {
          include: { postEmotions: { include: { emotion: true } } },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    return notes.map((note) => ({
      id: note.id,
      postId: note.postId,
      body: note.body,
      createdAt: note.createdAt.toISOString(),
      post: this.postsService.formatPost(note.post, user.id),
    }));
  }

  // 認証必要 - メモ追加
  @Mutation(() => PrivateNote, { name: 'addNote' })
  @UseGuards(AuthGuard)
  async addNote(
    @Args('input', { type: () => AddNoteInput }, new ValidationPipe())
    input: AddNoteInput,
    @Context() ctx: any,
  ): Promise<PrivateNote> {
    const user = await this.userService.findOrCreateUser(
      ctx.req.user.firebaseUid,
    );

    const note = await this.prisma.privateNote.create({
      data: {
        postId: input.postId,
        userId: user.id,
        body: input.body,
      },
      include: {
        post: {
          include: { postEmotions: { include: { emotion: true } } },
        },
      },
    });

    return {
      id: note.id,
      postId: note.postId,
      body: note.body,
      createdAt: note.createdAt.toISOString(),
      post: this.postsService.formatPost(note.post, user.id),
    };
  }

  // 認証必要 - メモ削除
  @Mutation(() => Boolean, { name: 'deleteNote' })
  @UseGuards(AuthGuard)
  async deleteNote(
    @Args('noteId') noteId: string,
    @Context() ctx: any,
  ): Promise<boolean> {
    const user = await this.userService.findOrCreateUser(
      ctx.req.user.firebaseUid,
    );

    await this.prisma.privateNote.deleteMany({
      where: {
        id: noteId,
        userId: user.id, // 自分のメモのみ削除可能
      },
    });

    return true;
  }
}
