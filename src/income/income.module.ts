import { Module } from '@nestjs/common';
import { IncomeController } from './income.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { IncomeService } from './income.service';

@Module({
  imports: [PrismaModule],
  providers: [IncomeService],
  exports: [IncomeService],
  controllers: [IncomeController],
})
export class IncomeModule {}
