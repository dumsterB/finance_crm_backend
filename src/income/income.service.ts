import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class IncomeService {
  constructor(private prisma: PrismaService) {}
  getAllIncome(query: any) {
    let where = {};
    return this.prisma.income.findMany({ where });
  }
  async createIncome(income: any): Promise<any> {
    return this.prisma.income.create({
      data: {
        ...income,
      },
    });
  }
}
