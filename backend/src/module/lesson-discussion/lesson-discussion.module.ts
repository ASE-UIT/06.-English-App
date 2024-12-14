import { Module } from '@nestjs/common';
import { LessonDiscussionService } from './lesson-discussion.service';
import { LessonDiscussionController } from './lesson-discussion.controller';
import { LessonDiscussionProfile } from 'src/common/mappers/lesson-discussion.profile';

@Module({
  controllers: [LessonDiscussionController],
  providers: [LessonDiscussionService, LessonDiscussionProfile],
})
export class LessonDiscussionModule {}
