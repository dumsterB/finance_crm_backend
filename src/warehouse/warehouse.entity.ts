import { Warehouse as WarehouseModel } from '@prisma/client';

export class Warehouse implements WarehouseModel {
    id: string;
    name: string;
    price: string;
}
