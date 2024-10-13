import { Base } from 'src/module/base/base.entity';
import { Question } from 'src/module/question/entities/question.entity';
import { MEDIAS } from 'src/util/constants';
import { Column, Entity, ManyToOne } from 'typeorm';
@Entity()
export class QuestionMedia extends Base {
  @ManyToOne(() => Question, (question) => question.questionMedias)
  question: Question;
  @Column({
    type: 'enum',
    enum: MEDIAS,
  })
  mediaType: MEDIAS;
  @Column()
  url: string;
}
