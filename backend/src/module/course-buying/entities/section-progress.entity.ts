import { Base } from 'src/module/base/base.entity';
import { ManyToOne, JoinColumn, Column } from 'typeorm';
import { LessonProgressEntity } from './lesson-progress.entity';
import { SECTION_STATUS } from 'src/utils/constants';

export class SectionProgressEntity extends Base {
  @ManyToOne(
    () => LessonProgressEntity,
    (lessonProgress) => lessonProgress.sectionProgresses,
  )
  @JoinColumn()
  lessonProgress: LessonProgressEntity;
  @Column({
    enum: SECTION_STATUS,
    default: SECTION_STATUS.NOT_STARTED,
  })
  status: SECTION_STATUS;
  @Column()
  sectionId: string;
}
