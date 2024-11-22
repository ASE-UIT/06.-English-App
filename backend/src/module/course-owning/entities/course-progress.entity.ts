import { Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { CourseOwning } from './course-owning.entity';
import { Course } from 'src/module/course/entities/course.entity';
import { LessonProgress } from './lesson-progress.entity';
import { Base } from 'src/module/base/base.entity';

@Entity()
export class CourseProgress extends Base {
  @OneToOne(() => CourseOwning)
  @JoinColumn()
  courseOwning: CourseOwning;
  @ManyToOne(() => Course, (course) => course.courseProgresses)
  course: Course;
  @OneToMany(
    () => LessonProgress,
    (lessonProgress) => lessonProgress.courseProgress,
  )
  lessonProgresses: LessonProgress[];
}
