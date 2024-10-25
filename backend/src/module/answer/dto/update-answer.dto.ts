import { PartialType } from '@nestjs/mapped-types';
import { CreateAnswerDto } from './create-answer.dto';
import { IsString } from 'class-validator';
import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateAnswerDto extends PartialType(CreateAnswerDto) {
  @AutoMap()
  @ApiProperty({ description: 'Answer ID' })
  @IsString()
  id: string;
}
