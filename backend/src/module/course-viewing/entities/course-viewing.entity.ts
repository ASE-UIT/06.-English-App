import { CourseOwning } from 'src/module/course-owning/entities/course-owning.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CourseViewing {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  studentId: string;
  @Column()
  courseId: string;
  @Column()
  content: string;
  @ManyToOne(() => CourseOwning, (courseOwning) => courseOwning.courseViewings)
  courseOwning: CourseOwning;
}
