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
    example: '1',
  })
  @IsString()
  lessonId: string;

  @AutoMap()
  @ApiProperty({
    type: String,
    description: 'User Id - The user who created this lesson discussion',
    example: '1',
  })
  @IsString()
  userId: string;
}
