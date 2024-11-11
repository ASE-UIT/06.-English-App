import { AutoMap } from '@automapper/classes';
import { Base } from 'src/module/base/base.entity';
import { Column, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { CourseProgressEntity } from './course-progress.entity';
import { SectionProgressEntity } from './section-progress.entity';

export class LessonProgressEntity extends Base {
  @AutoMap()
  @Column()
  progress: number;
  @ManyToOne(
    () => CourseProgressEntity,
    (courseProgress) => courseProgress.lessonProgresses,
  )
  @JoinColumn()
  courseProgress: CourseProgressEntity;
  @OneToMany(
    () => SectionProgressEntity,
    (sectionProgress) => sectionProgress.lessonProgress,
  )
  sectionProgresses: SectionProgressEntity[];
  @Column()
  lessonId: string;
}
