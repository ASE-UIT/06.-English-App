import { createMap, Mapper } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { CreateLessonDiscussionDto } from 'src/module/lesson-discussion/dto/create-lesson-discussion.dto';
import { UpdateLessonDiscussionDto } from 'src/module/lesson-discussion/dto/update-lesson-discussion.dto';
import { LessonDiscussion } from 'src/module/lesson-discussion/entities/lesson-discussion.entity';
import { CreateLessonDto } from 'src/module/lesson/dto/create-lesson.dto';
import { UpdateLessonDto } from 'src/module/lesson/dto/update-lesson.dto';
import { Lesson } from 'src/module/lesson/entities/lesson.entity';

@Injectable()
export class LessonProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }
  override get profile() {
    return (mapper: Mapper) => {
      createMap(mapper, CreateLessonDiscussionDto, LessonDiscussion);
      createMap(mapper, UpdateLessonDiscussionDto, LessonDiscussion);
    };
  }
}
