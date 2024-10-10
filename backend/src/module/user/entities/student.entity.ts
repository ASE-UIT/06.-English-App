import { Base } from '../../base/base.entity';
import { Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { User } from './user.entity';
import { CourseOwning } from '../../course-owning/entities/course-owning.entity';
import { CourseBuying } from '../../course-buying/entities/course-buying.entity';

@Entity()
export class Student extends Base {
  @OneToOne(() => User)
  @JoinColumn()
  userInfo: User;
  @OneToMany(() => CourseOwning, (courseOwning) => courseOwning.student)
  courseOwnings: CourseOwning[];
  @OneToMany(() => CourseBuying, (courseBuying) => courseBuying.student)
  courseBuyings: CourseBuying[];
}
