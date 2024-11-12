import { AutoMap } from '@automapper/classes';
import { Base } from 'src/module/base/base.entity';
import { Lesson } from 'src/module/lesson/entities/lesson.entity';
import { QuestionGroup } from 'src/module/question-group/entities/question-group.entity';
import { Question } from 'src/module/question/entities/question.entity';
import { SECTION_TYPE } from 'src/utils/constants';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Section extends Base {
  @Column()
  @AutoMap()
  title: string;
  @Column()
  @AutoMap()
  content: string;
  @Column()
  @Column({
    type: 'enum',
    enum: SECTION_TYPE,
    default: SECTION_TYPE.ROOT,
  })
  @AutoMap()
  type: SECTION_TYPE;
  @Column({
    nullable: true,
  })
  @AutoMap()
  sectionMedia?: string;
  @ManyToOne(() => Lesson, (lesson) => lesson.sections)
  lesson: Lesson;
  @OneToMany(() => QuestionGroup, (questionGroup) => questionGroup.section)
  questionGroups: QuestionGroup[];
  @OneToMany(() => Question, (question) => question.section)
  questions: Question[];
}