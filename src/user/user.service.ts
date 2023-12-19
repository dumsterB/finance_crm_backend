import { Injectable } from '@nestjs/common';
import { HashService } from './hash.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(
    private hashService: HashService,
    private prisma: PrismaService,
  ) {}
  getUsers(query: any) {
    let where = {};
    return this.prisma.user.findMany({
      where,
    });
  }
  async createUser(user: any): Promise<any> {
    return this.prisma.user.create({
      data: {
        ...user,
        password: await this.hashService.hash(user.password),
      },
    });
  }
}
