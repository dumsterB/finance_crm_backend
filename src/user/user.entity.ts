import { User as UserModel } from '@prisma/client';

export class User implements UserModel {
  id: string;
  fullName: string;
  password: string;
}
