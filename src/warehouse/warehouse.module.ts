import { Module } from '@nestjs/common';
import { WarehouseController } from './warehouse.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { WarehouseService } from './warehouse.service';

@Module({
  imports: [PrismaModule],
  providers: [WarehouseService],
  exports: [WarehouseService],
  controllers: [WarehouseController],
})
export class WarehouseModule {}
