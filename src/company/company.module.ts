import { Module } from '@nestjs/common';
import { CompanyController } from './company.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { CompanyService } from './company.service';

@Module({
    imports: [PrismaModule],
    providers: [CompanyService],
    exports: [CompanyService],
    controllers: [CompanyController],
})
export class CompanyModule {}
