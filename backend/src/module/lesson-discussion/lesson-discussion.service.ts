import { BadRequestException, HttpException, Injectable } from '@nestjs/common';
import { CreateLessonDiscussionDto } from './dto/create-lesson-discussion.dto';
import { UpdateLessonDiscussionDto } from './dto/update-lesson-discussion.dto';
import { LessonDiscussion } from './entities/lesson-discussion.entity';
import { DataSource } from 'typeorm';
import { Lesson } from '../lesson/entities/lesson.entity';
import { User } from '../user/entities/user.entity';
import { LessonDiscussionReply } from './entities/lesson-discussion-reply.entity';

@Injectable()
export class LessonDiscussionService {
  constructor (private readonly dataSource: DataSource) {}

  async findByCourse(courseId: string) {
    try {
      // find lesson discussion that have lession id belongs to courseId
      const lessonDiscussions = await this.dataSource.getRepository(LessonDiscussion)
        .createQueryBuilder('lessonDiscussion')
        .innerJoin('lessonDiscussion.lesson', 'lesson')
        .where('lesson.courseId = :courseId', { courseId })
        .getMany();
      
      return lessonDiscussions;
    } catch (error) {
      console.log(error);
      throw new HttpException(error.message, 500);
    }
  }

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

  async updateLessonDiscussion(updateLessonDiscussionDto: UpdateLessonDiscussionDto) {
    try {
      const updatedlessonDiscussion = await this.dataSource
        .getRepository(LessonDiscussion)
        .save(updateLessonDiscussionDto);
      
      return updatedlessonDiscussion;
    } catch (error) {
      console.log(error);
      throw new HttpException(error.message, 500);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} lessonDiscussion`;
  }

  async remove(id: string) {
    try {
      const lessonDiscussion = await this.dataSource
        .getRepository(LessonDiscussion)
        .findOne({ where: { id } });
      if (!lessonDiscussion) {
        throw new BadRequestException('Lesson Discussion not found');
      }
      const result = await this.dataSource.getRepository(LessonDiscussion).remove(lessonDiscussion);
      return result;
    } catch (error) {
      console.log(error);
      throw new HttpException(error.message, 500);
    }
  }

  async createReply(lessonDiscussionReply: LessonDiscussionReply, lessonDiscussionId: string, userId: string) {
    try {
      const [lessonDiscussion, user] = await Promise.all([
        this.dataSource.getRepository(LessonDiscussion).find({ where: { id: lessonDiscussionId } }),
        this.dataSource.getRepository(User).find({ where: { id: userId } })
      ]);
  
      if (!lessonDiscussion.length) {
        throw new BadRequestException('Lesson Discussion not found');
      }
      if (!user.length) {
        throw new BadRequestException('User not found');
      }
  
      lessonDiscussionReply.lessonDiscussion = lessonDiscussion[0];
      lessonDiscussionReply.user = user[0];
      const newLessonDiscussionReply = await this.dataSource.getRepository(LessonDiscussion).save(lessonDiscussionReply);
      return newLessonDiscussionReply;
    } catch (error) {
      console.log(error);
      throw new HttpException(error.message, 500);
    }
  }

  async findAllReply(lessonDiscussionId: string) {
    try {
      const lessonDiscussionReplies = await this.dataSource.getRepository(LessonDiscussionReply)
        .createQueryBuilder('lessonDiscussionReply')
        .innerJoin('lessonDiscussionReply.lessonDiscussion', 'lessonDiscussion')
        .where('lessonDiscussion.id = :lessonDiscussionId', { lessonDiscussionId })
        .getMany();
      
      return lessonDiscussionReplies;
    } catch (error) {
      console.log(error);
      throw new HttpException(error.message, 500);
    }
  }

  async updateReply(updateLessonDiscussionReply: LessonDiscussionReply) {
    try {
      const updatedLessonDiscussionReply = await this.dataSource
        .getRepository(LessonDiscussionReply)
        .save(updateLessonDiscussionReply);
      
      return updatedLessonDiscussionReply;
    } catch (error) {
      console.log(error);
      throw new HttpException(error.message, 500);
    }
  }

  async removeReply(replyId: string) {
    try {
      const lessonDiscussionReply = await this.dataSource
        .getRepository(LessonDiscussionReply)
        .findOne({ where: { id: replyId } });
      if (!lessonDiscussionReply) {
        throw new BadRequestException('Lesson Discussion Reply not found');
      }
      const result = await this.dataSource.getRepository(LessonDiscussionReply).remove(lessonDiscussionReply);
      return result;
    } catch (error) {
      console.log(error);
      throw new HttpException(error.message, 500);
    }
  }
}
