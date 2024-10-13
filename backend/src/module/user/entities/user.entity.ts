import { USER_ROLES } from 'src/util/constants';
import { Base } from '../../base/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class User extends Base {
  @Column({
    type: 'enum',
    enum: USER_ROLES,
  })
  role: USER_ROLES;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  email: string;
  @Column()
  phone: string;
  @Column()
  birthDate: Date;
  @Column()
  awsCognitoId: string;
}
