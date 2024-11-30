import { PartialType } from '@nestjs/mapped-types';
import { CreateLessonDiscussionDto } from './create-lesson-discussion.dto';
import { AutoMap } from '@automapper/classes';
import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateLessonDiscussionDto extends PartialType(CreateLessonDiscussionDto) {
  @AutoMap()
  @ApiProperty({
    type: String,
    description: 'Id of lesson discussion',
    example: '1',
  })
  @IsString()
  id: string;
}
