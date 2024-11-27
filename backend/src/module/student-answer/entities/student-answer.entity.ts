import { IsOptional } from 'class-validator';
import { Base } from 'src/module/base/base.entity';
import { Question } from 'src/module/question/entities/question.entity';
import { Student } from 'src/module/user/entities/student.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
@Entity()
export class StudentAnswer extends Base {
  @ManyToOne(() => Question, (question) => question.studentAnswers)
  question: Question;
  @ManyToOne(() => Student, (student) => student.studentAnswers)
  student: Student;
  @Column()
  answer: string;
  @Column()
  @IsOptional()
  isCorrect: boolean;
  @Column()
  @IsOptional()
  feedback: string;
}
