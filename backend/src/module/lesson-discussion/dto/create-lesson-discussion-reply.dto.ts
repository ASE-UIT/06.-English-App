import { AutoMap } from "@automapper/classes";
import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateLessonDiscussionReplyDto {
  @AutoMap()
  @ApiProperty({
    type: String,
    description: 'Content of lesson discussion reply',
    example: 'I think the meaning of this vocabulary is ...',
  })
  @IsString()
  content: string;

  @AutoMap()
  @ApiProperty({
    type: String,
    description: 'Lesson Discussion Id',
    example: '95199545-f766-4ac6-a8d0-86a0a482bff9',
  })
  @IsString()
  lessonDiscussionId: string;

  @AutoMap()
  @ApiProperty({
    type: String,
    description: 'User Id - The user who created this lesson discussion reply',
    example: '77adbeb4-7e51-490c-b2f5-dd5c09e6ddcd',
  })
  @IsString()
  userId: string;
}