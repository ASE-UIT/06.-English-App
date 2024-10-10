import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity
export class StudentAnswer {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column('uuid')
  studentID: string;
  @Column()
  questionID: string;
  @Column()
  answer: string;
}
