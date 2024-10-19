import { USER_ROLES } from 'src/util/constants';
import { Base } from '../../base/base.entity';
import { Column, Entity } from 'typeorm';
import { AutoMap } from '@automapper/classes';

@Entity()
export class User extends Base {
  @AutoMap()
  @Column({
    type: 'enum',
    enum: USER_ROLES,
  })
  role: USER_ROLES;
  @AutoMap()
  @Column()
  firstName: string;
  @AutoMap()
  @Column()
  lastName: string;
  @AutoMap()
  @Column()
  email: string;
  @AutoMap()
  @Column()
  phone: string;
  @AutoMap()
  @Column()
  birthDate: Date;
  @AutoMap()
  @Column()
  avatarURL: string;
  @AutoMap()
  @Column()
  awsCognitoId: string;
}
