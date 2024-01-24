import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class BranchService {
    constructor(
        private prisma: PrismaService,
    ) {}
    getAllBranches(query: any) {
        let where = {};
        return this.prisma.branch.findMany({ where });
    }
    async createBranch(branch: any): Promise<any> {
        return this.prisma.branch.create({
            data: {
                ...branch,
            },
        });
    }
}
