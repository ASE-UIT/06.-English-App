import { Injectable } from '@nestjs/common';
import { CreateLessonDiscussionDto } from './dto/create-lesson-discussion.dto';
import { UpdateLessonDiscussionDto } from './dto/update-lesson-discussion.dto';

@Injectable()
export class LessonDiscussionService {
  create(createLessonDiscussionDto: CreateLessonDiscussionDto) {
    return 'This action adds a new lessonDiscussion';
  }

  findAll() {
    return `This action returns all lessonDiscussion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lessonDiscussion`;
  }

  update(id: number, updateLessonDiscussionDto: UpdateLessonDiscussionDto) {
    return `This action updates a #${id} lessonDiscussion`;
  }

  remove(id: number) {
    return `This action removes a #${id} lessonDiscussion`;
  }
}
