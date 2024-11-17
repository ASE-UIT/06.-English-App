import { Column, Entity, ManyToOne } from 'typeorm';
import { Base } from '../../base/base.entity';
import { Student } from '../../user/entities/student.entity';
import { Course } from 'src/module/course/entities/course.entity';

@Entity()
export class CourseOwning extends Base {
  @Column()
  expiredDate: Date;
  @Column()
  active: boolean;
  @ManyToOne(() => Course, (course) => course.courseOwnings)
  course: Course;
  @ManyToOne(() => Student, (student) => student.courseOwnings)
  student: Student;
}
