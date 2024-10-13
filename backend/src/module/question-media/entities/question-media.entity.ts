import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class QuestionMedia {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  questionID: string;
  @Column()
  mediaType: string;
  @Column()
  url: string;
}
