import { PartialType } from '@nestjs/mapped-types';
import { CreateQuestionGroupDto } from './create-question-group.dto';
import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateQuestionGroupDto extends PartialType(
  CreateQuestionGroupDto,
) {
  @AutoMap()
  @ApiProperty({ description: 'Question group ID' })
  @IsString()
  id: string;
}
