import { IsArray, IsNotEmpty, IsString } from 'class-validator';
import { CreateStudentAnswerDto } from './create-student-answer.dto';

export class StudentAnswerSubmit {
  @IsArray()
  @IsNotEmpty()
  studentAnswers: CreateStudentAnswerDto[];
  @IsString()
  @IsNotEmpty()
  sectionId: string;
}
