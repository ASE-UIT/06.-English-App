import { PartialType } from '@nestjs/mapped-types';
import { CreateLessonDiscussionDto } from './create-lesson-discussion.dto';

export class UpdateLessonDiscussionDto extends PartialType(CreateLessonDiscussionDto) {}
