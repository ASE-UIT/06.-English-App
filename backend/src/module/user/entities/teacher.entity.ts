import { Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { Base } from '../../base/base.entity';
import { User } from './user.entity';
import { Course } from 'src/module/course/entities/course.entity';

@Entity()
export class Teacher extends Base {
  @OneToOne(() => User)
  @JoinColumn()
  userInfo: User;

  @OneToMany(() => Course, (course) => course.teacher)
  courses: Course[];
}
