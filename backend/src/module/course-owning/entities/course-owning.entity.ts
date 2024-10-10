import { CourseViewing } from 'src/module/course-viewing/entities/course-viewing.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { Base } from '../../base/base.entity';
import { Student } from '../../user/entities/student.entity';

@Entity()
export class CourseOwning extends Base {
  @ManyToOne(() => Student, (student) => student.courseOwnings)
  @Column()
  expiredDate: Date;
  @Column()
  active: boolean;
  @OneToMany(() => CourseViewing, (courseViewing) => courseViewing.courseOwning)
  courseViewings: CourseViewing[];
  @ManyToOne(() => Student, (student) => student.courseOwnings)
  student: Student;
}
