import { BadRequestException, HttpException, Injectable } from '@nestjs/common';
import { CreateLessonDiscussionDto } from './dto/create-lesson-discussion.dto';
import { UpdateLessonDiscussionDto } from './dto/update-lesson-discussion.dto';
import { LessonDiscussion } from './entities/lesson-discussion.entity';
import { DataSource } from 'typeorm';
import { Lesson } from '../lesson/entities/lesson.entity';
import { User } from '../user/entities/user.entity';

@Injectable()
export class LessonDiscussionService {
  constructor (private readonly dataSource: DataSource) {}

  async create(lessonDiscussion: LessonDiscussion, lessonId: string, userId: string) {
    try {
      const [lesson, user] = await Promise.all([
        this.dataSource.getRepository(Lesson).find({ where: { id: lessonId } }),
        this.dataSource.getRepository(User).find({ where: { id: userId } })
      ]);
  
      if (!lesson.length) {
        throw new BadRequestException('Lesson not found');
      }
      if (!user.length) {
        throw new BadRequestException('User not found');
      }
  
      lessonDiscussion.lesson = lesson[0];
      lessonDiscussion.user = user[0];
      const newLessonDiscussion = await this.dataSource.getRepository(LessonDiscussion).save(lessonDiscussion);
      return newLessonDiscussion;
    } catch (error) {
      console.log(error);
      throw new HttpException(error.message, 500);
    }
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
