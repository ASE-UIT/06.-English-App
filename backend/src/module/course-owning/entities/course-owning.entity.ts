import { Column, Entity, ManyToOne } from 'typeorm';
import { Base } from '../../base/base.entity';
import { Student } from '../../user/entities/student.entity';
import { Course } from 'src/module/course/entities/course.entity';
import { AutoMap } from '@automapper/classes';

@Entity()
export class CourseOwning extends Base {
  @Column()
  @AutoMap()
  expiredDate: Date;
  @Column()
  @AutoMap()
  active: boolean;
  @ManyToOne(() => Course, (course) => course.courseOwnings)
  course: Course;
  @ManyToOne(() => Student, (student) => student.courseOwnings)
  student: Student;
}
