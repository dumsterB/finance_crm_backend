import { Company as CompanyModel } from '@prisma/client';

export class Company implements CompanyModel {
    id: number;
    name: string;
    login:string;
    password: string;
    branch_ids: string[];
}
