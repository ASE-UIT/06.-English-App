import { AutoMap } from '@automapper/classes';
import { USER_ROLES } from '../../../utils/constants';

export class UserDto {
  @AutoMap()
  id: string;
  @AutoMap()
  role: USER_ROLES;
  @AutoMap()
  firstName: string;
  @AutoMap()
  lastName: string;
  @AutoMap()
  email: string;
  @AutoMap()
  phone: string;
  @AutoMap()
  birthDate: Date;
  @AutoMap()
  avatarURL: string;
  @AutoMap()
  createDate: Date;
  @AutoMap()
  updateDate: Date;
}
