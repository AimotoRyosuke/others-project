import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsResolver } from './posts.resolver';
import { ReactionsResolver } from './reactions/reactions.resolver';
import { PrismaModule } from '../../core/prisma/prisma.module';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [PrismaModule, UsersModule],
  providers: [PostsService, PostsResolver, ReactionsResolver],
  exports: [PostsService],
})
export class PostsModule {}
