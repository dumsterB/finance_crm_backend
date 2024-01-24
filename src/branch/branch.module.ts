import { Module } from '@nestjs/common';
import { BranchController } from './branch.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { BranchService } from './branch.service';

@Module({
    imports: [PrismaModule],
    providers: [BranchService],
    exports: [BranchService],
    controllers: [BranchController],
})
export class BranchModule {}
