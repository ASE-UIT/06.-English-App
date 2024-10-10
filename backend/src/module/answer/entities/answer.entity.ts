import { Entity } from 'typeorm';

@Entity()
export class Answer {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  questionID: string;
  @Column()
  text: string;
  @Column('boolean', { default: true })
  isCorrect: boolean;
}
