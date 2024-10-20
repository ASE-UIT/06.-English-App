import { Answer } from 'src/module/answer/entities/answer.entity';
import { Base } from 'src/module/base/base.entity';
import { QuestionGroup } from 'src/module/question-group/entities/question-group.entity';
import { QuestionMedia } from 'src/module/question-media/entities/question-media.entity';
import { Section } from 'src/module/section/entities/section.entity';
import { StudentAnswer } from 'src/module/student-answer/entities/student-answer.entity';
import { QUESTION_TYPE } from 'src/utils/constants';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Question extends Base {
  @ManyToOne(() => QuestionGroup, (questionGroup) => questionGroup.questions)
  questionGroup?: QuestionGroup;
  @ManyToOne(() => Section, (section) => section.questions)
  sectionID?: Section;
  @Column()
  text: string;
  @Column({
    type: 'enum',
    enum: QUESTION_TYPE,
    default: QUESTION_TYPE.COMBO_BOX,
  })
  type: QUESTION_TYPE;
  @OneToMany(() => StudentAnswer, (studentAnswer) => studentAnswer.question)
  studentAnswers: StudentAnswer;
  @OneToMany(() => Answer, (answer) => answer.question)
  answers: Answer[];
  @Column()
  order: number;
  @OneToMany(() => QuestionMedia, (questionMedia) => questionMedia.question)
  questionMedias: QuestionMedia[];
}
