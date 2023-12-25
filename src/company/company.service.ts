import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { HashService } from './hash.service';
@Injectable()
export class CompanyService {
    constructor(
        private hashService: HashService,
        private prisma: PrismaService,
    ) {}
    getAllCompanies(query: any) {
        let where = {};
        return this.prisma.company.findMany({ where });
    }
    async createCompany(company: any): Promise<any> {
        return this.prisma.company.create({
            data: {
                ...company,
                password: await this.hashService.hash(company.password),
            },
        });
    }
}
