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
    example: '1',
  })
  @IsString()
  lessonDiscussionId: string;

  @AutoMap()
  @ApiProperty({
    type: String,
    description: 'User Id - The user who created this lesson discussion reply',
    example: '1',
  })
  @IsString()
  userId: string;
}