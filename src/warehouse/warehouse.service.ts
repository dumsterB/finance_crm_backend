import {Injectable} from "@nestjs/common";
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WarehouseService {
    constructor(private prisma: PrismaService) {}
    getAllWarehouse(query:any){
        let where = {};
      return this.prisma.outcome.findMany({where})
    }
    async createWarehouse(warehouse:any): Promise<any> {
        return this.prisma.warehouse.create({
            data: {
                ...warehouse,
            },
        });
    }
}