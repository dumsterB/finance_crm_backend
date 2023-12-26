import { Module } from '@nestjs/common';
import { CompanyController } from './company.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { CompanyService } from './company.service';
import { HashService } from './hash.service';

@Module({
    imports: [PrismaModule],
    providers: [CompanyService,HashService],
    exports: [CompanyService,HashService],
    controllers: [CompanyController],
})
export class CompanyModule {}
