import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentAnswerDto } from './student-answer-submit.dto';

export class UpdateStudentAnswerDto extends PartialType(
  CreateStudentAnswerDto,
) {}
