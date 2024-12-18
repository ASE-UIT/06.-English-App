import {
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateQuestionDto } from './create-question.dto';
import { ApiProperty } from '@nestjs/swagger';

export class CreateManyQuestionDto {
  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'section id',
    required: false,
  })
  sectionId: string;

  @ApiProperty({
    description: 'question group id',
    required: false,
  })
  @IsString()
  @IsOptional()
  questionGroupId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @IsNotEmpty()
  @ApiProperty({
    type: () => [CreateQuestionDto],
  })
  questions: CreateQuestionDto[];
}
