import { PartialType } from "@nestjs/mapped-types";
import { CreateLessonDiscussionReplyDto } from "./create-lesson-discussion-reply.dto";
import { AutoMap } from "@automapper/classes";
import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class UpdateLessonDiscussionReplyDto extends PartialType(CreateLessonDiscussionReplyDto) {
    @AutoMap()
    @ApiProperty({
      type: String,
      description: 'Content of lesson discussion reply',
      example: 'I think the meaning of this vocabulary is ...',
    })
    @IsString()
    content: string;
}