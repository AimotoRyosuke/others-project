import { Module } from '@nestjs/common';
import { NotesResolver } from './notes.resolver';
import { PrismaModule } from '../../core/prisma/prisma.module';
import { UsersModule } from '../users/users.module';
import { PostsModule } from '../posts/posts.module';

@Module({
  imports: [PrismaModule, UsersModule, PostsModule],
  providers: [NotesResolver],
})
export class NotesModule {}
