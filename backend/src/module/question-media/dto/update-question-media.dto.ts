import { PartialType } from '@nestjs/mapped-types';
import { CreateQuestionMediaDto } from './create-question-media.dto';

export class UpdateQuestionMediaDto extends PartialType(
  CreateQuestionMediaDto,
) {}
