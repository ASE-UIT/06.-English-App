import { Base } from 'src/module/base/base.entity';
import { Lesson } from 'src/module/lesson/entities/lesson.entity';
import { QuestionGroup } from 'src/module/question-group/entities/question-group.entity';
import { Question } from 'src/module/question/entities/question.entity';
import { SectionMedia } from 'src/module/section-media/entities/section-media.entity';
import { SECTION_TYPE } from 'src/utils/constants';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Section extends Base {
  @Column()
  title: string;
  @Column()
  content: string;
  @Column({
    type: 'enum',
    enum: SECTION_TYPE,
    default: SECTION_TYPE.ROOT,
  })
  type: SECTION_TYPE;
  @ManyToOne(() => Lesson, (lesson) => lesson.sections)
  lesson: Lesson;
  @OneToMany(() => QuestionGroup, (questionGroup) => questionGroup.section)
  questionGroups: QuestionGroup[];
  @OneToMany(() => Question, (question) => question.sectionID)
  questions: Question[];
  @OneToMany(() => SectionMedia, (sectionMedia) => sectionMedia.section)
  media: SectionMedia[];
}
