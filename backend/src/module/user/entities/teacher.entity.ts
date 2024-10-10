import { Entity, JoinColumn, OneToOne } from 'typeorm';
import { Base } from '../../base/base.entity';
import { User } from './user.entity';

@Entity()
export class Teacher extends Base {
  @OneToOne(() => User)
  @JoinColumn()
  userInfo: User;
}
