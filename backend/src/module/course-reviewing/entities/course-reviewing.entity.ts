import { Base } from "src/module/base/base.entity";
import { Course } from "src/module/course/entities/course.entity";
import { Student } from "src/module/user/entities/student.entity";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";

@Entity()
export class CourseReviewing extends Base {
  @Column()
  content: string;

  @Column('float')
  rating: number;

  @Column('float')
  current_progress: number;

  @ManyToOne(() => Course, (course) => course.course_reviewing)
  course: Course;

  @ManyToOne(() => Student, (student) => student.courseReviewings)
  student: Student;

  
}
