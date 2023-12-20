import {Injectable} from "@nestjs/common";
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OutcomeService {
    constructor(private prisma: PrismaService) {}
    getAllOutcome(query:any){
        let where = {};
      return this.prisma.outcome.findMany({where})
    }
}