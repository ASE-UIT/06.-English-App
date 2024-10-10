import { QUESTION_TYPE, SECTION_TYPE } from 'src/util/constants';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CourseBuying {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  type: string;
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
  @Column()
  lessonID: number;
}
