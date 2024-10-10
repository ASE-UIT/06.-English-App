import { Base } from '../../base/base.entity';
import { Column, Entity } from 'typeorm';
import { UserRoles } from '../../base/util';

@Entity()
export class User extends Base {
  @Column({
    type: 'enum',
    enum: UserRoles,
  })
  role: UserRoles;
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
