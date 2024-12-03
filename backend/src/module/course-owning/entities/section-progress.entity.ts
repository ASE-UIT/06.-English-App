import { Section } from 'src/module/section/entities/section.entity';
import { Entity, ManyToOne } from 'typeorm';
import { LessonProgress } from './lesson-progress.entity';
import { Base } from 'src/module/base/base.entity';

@Entity()
export class SectionProgress extends Base {
  @ManyToOne(() => Section, (section) => section.sectionProgresses)
  section: Section;
  @ManyToOne(
    () => LessonProgress,
    (lessonProgress) => lessonProgress.sectionProgresses,
  )
  lessonProgress: LessonProgress;
}
