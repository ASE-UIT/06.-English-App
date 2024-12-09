import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateQuestionGroupDto {
  @AutoMap()
  @ApiProperty({ description: 'Question group name' })
  @IsString()
  text: string;

  @AutoMap()
  @IsString()
  @ApiProperty({ description: 'Section ID' })
  section: string;
}
