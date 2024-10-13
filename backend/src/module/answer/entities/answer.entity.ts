import { Column, Entity, ManyToOne } from 'typeorm';
import { Base } from '../../base/base.entity';
import { Question } from 'src/module/question/entities/question.entity';

@Entity()
export class Answer extends Base {
  @ManyToOne(() => Question, (question) => question.answers)
  question: Question;
  @Column()
  text: string;
  @Column('boolean', { default: true })
  isCorrect: boolean;
}
