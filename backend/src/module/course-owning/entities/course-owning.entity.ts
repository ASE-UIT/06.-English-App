import { CourseViewing } from 'src/module/course-viewing/entities/course-viewing.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CourseOwning {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  courseId: string;
  @Column()
  studentId: string;
  @Column()
  expiredDate: Date;
  @Column()
  active: boolean;
  @OneToMany(() => CourseViewing, (courseViewing) => courseViewing.courseOwning)
  courseViewings: CourseViewing[];
}
