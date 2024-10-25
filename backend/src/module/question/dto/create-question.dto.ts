import { AutoMap } from "@automapper/classes";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsArray, IsEnum, IsNumber, IsString, ValidateNested } from "class-validator";
import { CreateAnswerDto } from "src/module/answer/dto/create-answer.dto";
import { CreateQuestionMediaDto } from "src/module/question-media/dto/create-question-media.dto";
import { QUESTION_TYPE } from "src/utils/constants";


export class CreateQuestionDto {
  @AutoMap()
  @ApiProperty({ description: 'Question group ID' })
  @IsString()
  questionGroup?: string;

  @AutoMap()
  @ApiProperty({ description: 'Section ID' })
  @IsString()
  section?: string;

  @AutoMap()
  @ApiProperty({ description: 'Text of the question' })
  @IsString()
  text: string;

  @AutoMap()
  @ApiProperty({ description: 'Type of the question' })
  @IsEnum(QUESTION_TYPE)
  type: QUESTION_TYPE;

  @AutoMap()
  @ApiProperty({ description: 'Order of the question' })
  @IsNumber()
  order: number;

  @ApiProperty({ description: 'Answers of the question' })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateAnswerDto)
  answers: CreateAnswerDto[];

  @ApiProperty({ description: ' Medias of the question' })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateQuestionMediaDto)
  questionMedias: CreateQuestionMediaDto[];
}
