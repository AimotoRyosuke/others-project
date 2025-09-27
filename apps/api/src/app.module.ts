import { Module } from '@nestjs/common';
import { GraphQLConfig } from './config/graphql.config';
import { PrismaModule } from './core/prisma/prisma.module';
import { PostsModule } from './features/posts/posts.module';
import { UsersModule } from './features/users/users.module';
import { AuthModule } from './core/auth/auth.module';
import { NotesModule } from './features/notes/notes.module';

@Module({
  imports: [
    GraphQLConfig,
    PrismaModule,
    PostsModule,
    UsersModule,
    AuthModule,
    NotesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
