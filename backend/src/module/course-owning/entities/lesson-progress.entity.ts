import { Lesson } from 'src/module/lesson/entities/lesson.entity';
import { Entity, ManyToOne, OneToMany } from 'typeorm';
import { CourseProgress } from './course-progress.entity';
import { SectionProgress } from './section-progress.entity';
import { Base } from 'src/module/base/base.entity';

@Entity()
export class LessonProgress extends Base {
  @ManyToOne(() => Lesson, (lesson) => lesson.lessonProgresses)
  lesson: Lesson;
  @ManyToOne(
    () => CourseProgress,
    (courseProgress) => courseProgress.lessonProgresses,
  )
  courseProgress: CourseProgress;
  @OneToMany(
    () => SectionProgress,
    (sectionProgress) => sectionProgress.lessonProgress,
  )
  sectionProgresses: SectionProgress[];
}
