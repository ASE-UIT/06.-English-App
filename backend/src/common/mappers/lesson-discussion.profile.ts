import { createMap, Mapper } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { CreateLessonDiscussionReplyDto } from 'src/module/lesson-discussion/dto/create-lesson-discussion-reply.dto';
import { CreateLessonDiscussionDto } from 'src/module/lesson-discussion/dto/create-lesson-discussion.dto';
import { UpdateLessonDiscussionDto } from 'src/module/lesson-discussion/dto/update-lesson-discussion.dto';
import { LessonDiscussionReply } from 'src/module/lesson-discussion/entities/lesson-discussion-reply.entity';
import { LessonDiscussion } from 'src/module/lesson-discussion/entities/lesson-discussion.entity';

@Injectable()
export class LessonDiscussionProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }
  override get profile() {
    return (mapper: Mapper) => {
      createMap(mapper, CreateLessonDiscussionDto, LessonDiscussion);
      createMap(mapper, UpdateLessonDiscussionDto, LessonDiscussion);
      createMap(mapper, CreateLessonDiscussionReplyDto, LessonDiscussionReply);
    };
  }
}
