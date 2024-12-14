import { AutoMap } from "@automapper/classes";
import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";


export class CreateLessonDiscussionDto {
  @AutoMap()
  @ApiProperty({
    type: String,
    description: 'Title of lesson discussion',
    example: 'What is the meaning of this vocabulary?',
  })
  @IsString()
  title: string;

  @AutoMap()
  @ApiProperty({
    type: String,
    description: 'Content of lesson discussion',
    example: 'I want to know the meaning of this vocabulary',
  })
  @IsString()
  content: string;

  @AutoMap()
  @ApiProperty({
    type: String,
    description: 'Lesson Id',
    example: '03315cdb-732a-4e63-ac8b-8bed5a40b374',
  })
  @IsString()
  lessonId: string;

  @AutoMap()
  @ApiProperty({
    type: String,
    description: 'User Id - The user who created this lesson discussion',
    example: '77adbeb4-7e51-490c-b2f5-dd5c09e6ddcd',
  })
  @IsString()
  userId: string;
}
