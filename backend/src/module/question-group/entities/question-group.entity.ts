import { Base } from 'src/module/base/base.entity';
import { Question } from 'src/module/question/entities/question.entity';
import { Section } from 'src/module/section/entities/section.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class QuestionGroup extends Base {
  @ManyToOne(() => Section, (section) => section.questionGroups)
  section: Section;
  @Column()
  text: string;
  @OneToMany(() => Question, (question) => question.questionGroup)
  questions: Question[];
}
