import { Base } from 'src/module/base/base.entity';
import { Column, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { CourseBuying } from './course-buying.entity';
import { LessonProgressEntity } from './lesson-progress.entity';

export class CourseProgressEntity extends Base {
  @Column()
  progress: number;
  @OneToOne(() => CourseBuying)
  @JoinColumn()
  courseBuying: CourseBuying;
  @OneToMany(
    () => LessonProgressEntity,
    (lessonProgress) => lessonProgress.courseProgress,
  )
  lessonProgresses: LessonProgressEntity[];
  @Column()
  courseId: string;
}
