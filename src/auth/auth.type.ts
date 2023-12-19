import { User } from 'src/user/user.entity';

export interface ReqData {
  user: {
    id: User['id'];
    fullName: User['fullName'];
  };
}
