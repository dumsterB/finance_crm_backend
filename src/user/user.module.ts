import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { UserService } from './user.service';
import { HashService } from './hash.service';

@Module({
  imports: [PrismaModule],
  providers: [UserService, HashService],
  exports: [UserService, HashService],
  controllers: [UserController],
})
export class UsersModule {}
