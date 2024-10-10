import { QUESTION_TYPE } from 'src/util/constants';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CourseBuying {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  questionGroupID: string;
  @Column()
  sectionID: string;
  @Column()
  text: string;
  @Column({
    type: 'enum',
    enum: QUESTION_TYPE,
    default: QUESTION_TYPE.COMBO_BOX,
  })
  type: QUESTION_TYPE;
  @Column()
  order: number;
}
