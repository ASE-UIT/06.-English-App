import { AutoMap } from "@automapper/classes";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsArray, IsEnum, IsNumber, IsOptional, IsString, ValidateNested, ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { CreateAnswerDto } from "src/module/answer/dto/create-answer.dto";
import { QUESTION_TYPE } from "src/utils/constants";



export class CreateQuestionDto {
  @AutoMap()
  @ApiProperty({ description: 'Question group ID', nullable: true })
  @IsOptional()
  @IsString()
  questionGroup?: string | null;

  @AutoMap()
  @ApiProperty({ description: 'Section ID' })
  @IsString()
  section?: string;

  @AutoMap()
  @ApiProperty({ 
    description: 'Text of the question',
    type: String
  })
  @IsString()
  text: string;

  @AutoMap()
  @ApiProperty({ 
    description: 'Type of the question',
    enum: QUESTION_TYPE
  })
  @IsEnum(QUESTION_TYPE)
  type: QUESTION_TYPE;

  @AutoMap()
  @ApiProperty({ 
    description: 'Order of the question',
    type: Number
  })
  @IsNumber()
  order: number;

  @ApiProperty({ 
    description: 'Answers of the question',
    type: [CreateAnswerDto]
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateAnswerDto)
  answers: CreateAnswerDto[];
}
