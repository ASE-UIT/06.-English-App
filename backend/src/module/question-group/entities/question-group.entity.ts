import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class QuestionMedia {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  sectionID: string;
  @Column()
  text: string;
  @Column()
  field: string;
}
