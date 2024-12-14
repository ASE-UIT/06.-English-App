import { Module } from '@nestjs/common';
import { LessonDiscussionService } from './lesson-discussion.service';
import { LessonDiscussionController } from './lesson-discussion.controller';

@Module({
  controllers: [LessonDiscussionController],
  providers: [LessonDiscussionService],
})
export class LessonDiscussionModule {}
