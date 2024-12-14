import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsString, ValidateNested } from 'class-validator';

export class CreateStudentAnswerWritingDto {
  @IsArray()
  @ValidateNested({ each: true })
  @ApiProperty({
    description: 'Answers',
    type: () => [StudentAnswerWritingDto],
    isArray: true,
  })
  answers: StudentAnswerWritingDto[];
}

export class StudentAnswerWritingDto {
  @IsString()
  @IsNotEmpty()
  @AutoMap()
  @ApiProperty({
    description: 'Question ID',
    type: String,
  })
  questionId: string;
  @IsString()
  @IsNotEmpty()
  @AutoMap()
  @ApiProperty({
    description: 'Answer',
    type: String,
  })
  answer: string;
}
