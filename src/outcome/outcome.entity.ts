import { Outcome as OutcomeModel } from '@prisma/client';

export class Outcome implements OutcomeModel {
    id: string;
    name: string;
    price: string;
}
