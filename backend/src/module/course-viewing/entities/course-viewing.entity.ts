import { Course } from 'src/module/course/entities/course.entity';
import { Student } from 'src/module/user/entities/student.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CourseViewing {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @ManyToOne(() => Student, (student) => student.courseViewings)
  student: Student;
  @ManyToOne(() => Course, (course) => course.courseViewings)
  course: Course;
  @Column()
  content: string;
}
