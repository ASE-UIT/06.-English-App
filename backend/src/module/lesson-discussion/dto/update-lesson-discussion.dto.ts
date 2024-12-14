import { PartialType } from '@nestjs/mapped-types';
import { CreateLessonDiscussionDto } from './create-lesson-discussion.dto';
import { AutoMap } from '@automapper/classes';
import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateLessonDiscussionDto {
  @AutoMap()
  @ApiProperty({
    type: String,
    description: 'Title of lesson discussion',
    example: 'UPDATED - What is the meaning of this vocabulary?',
  })
  @IsString()
  @IsOptional()
  title: string;

  @AutoMap()
  @ApiProperty({
    type: String,
    description: 'Content of lesson discussion',
    example: 'UPDATED - I want to know the meaning of this vocabulary',
  })
  @IsString()
  @IsOptional()
  content: string;
}
