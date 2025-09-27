import { Module } from '@nestjs/common';
import { UserService } from './users.service';
import { UsersResolver } from './users.resolver';
import { PrismaModule } from '../../core/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [UserService, UsersResolver],
  exports: [UserService],
})
export class UsersModule {}
