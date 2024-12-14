import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateStudentAnswerSpeakingDto {
  @IsString()
  @IsNotEmpty()
  @AutoMap()
  @ApiProperty({
    description: 'question ID',
    type: String,
    example: 'questionId',
  })
  questionId: string;
  @IsString()
  @IsNotEmpty()
  @AutoMap()
  @ApiProperty({
    description: "Student's answer for speaking question",
    type: String,
    example: 'key of aws',
  })
  answer: string;
}
