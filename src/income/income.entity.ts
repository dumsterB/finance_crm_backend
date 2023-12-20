import { Income as IncomeModel } from '@prisma/client';

export class Income implements IncomeModel {
    id: string;
    name: string;
    price: string;
}
