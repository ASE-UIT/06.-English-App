import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateStudentAnswerSpeakingDto {
  @AutoMap()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'Student answer id',
  })
  studentAnswerId: string;

  @AutoMap()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'Student answer',
  })
  answer: string;
}
