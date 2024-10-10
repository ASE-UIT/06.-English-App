import { PartialType } from '@nestjs/mapped-types';
import { CreateQuestionGroupDto } from './create-question-group.dto';

export class UpdateQuestionGroupDto extends PartialType(CreateQuestionGroupDto) {}
