import {Injectable} from "@nestjs/common";
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WarehouseService {
    constructor(private prisma: PrismaService) {}
    getAllWarehouse(query:any){
        let where = {};
      return this.prisma.outcome.findMany({where})
    }
    async createWarehouse(warehouse:any) {
        return this.prisma.warehouse.create({
            data: {
                ...warehouse,
            },
        });
    }
    async updateWarehouse(id:string,warehouse:any) {
        return this.prisma.warehouse.update({
            where: { id },
            data: {
                ...warehouse,
            },
        });
    }
}