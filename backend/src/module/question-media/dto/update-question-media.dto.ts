import { PartialType } from '@nestjs/mapped-types';
import { CreateQuestionMediaDto } from './create-question-media.dto';
import { IsString } from 'class-validator';
import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateQuestionMediaDto extends PartialType(
  CreateQuestionMediaDto,
) {
  @AutoMap()
  @ApiProperty({description: 'Question media ID'})
  @IsString()
  id: string;
}
