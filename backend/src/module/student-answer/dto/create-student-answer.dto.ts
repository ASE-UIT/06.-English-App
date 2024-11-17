import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateStudentAnswerDto {
  @ApiProperty({
    description: 'Question ID',
    example: 'bdcd1638-f161-4caf-8722-f7aa47ebbe79',
  })
  @IsString()
  @IsNotEmpty()
  questionId: number;
  @IsString()
  @IsNotEmpty()
  answer: string;
}
