import { Module } from '@nestjs/common';
import { OutcomeController } from './outcome.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { OutcomeService } from './outcome.service';

@Module({
  imports: [PrismaModule],
  providers: [OutcomeService],
  exports: [OutcomeService],
  controllers: [OutcomeController],
})
export class OutcomeModule {}
