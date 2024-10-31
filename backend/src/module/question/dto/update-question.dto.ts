import { PartialType } from '@nestjs/mapped-types';
import { CreateQuestionDto } from './create-question.dto';
import { IsArray, IsNumber, IsString, ValidateNested } from 'class-validator';
import { AutoMap } from '@automapper/classes';
import { ApiProperty, OmitType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { UpdateAnswerDto } from 'src/module/answer/dto/update-answer.dto';
import { UpdateQuestionMediaDto } from 'src/module/question-media/dto/update-question-media.dto';

export class UpdateQuestionDto extends PartialType(
  OmitType(CreateQuestionDto, ['answers'] as const),) {
  @AutoMap()
  @ApiProperty({ description: 'Question ID' })
  @IsString()
  id: string;

  
  @ApiProperty({ description: 'Answers of the question' })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UpdateAnswerDto)
  answers: UpdateAnswerDto[];

}
