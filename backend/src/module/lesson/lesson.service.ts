import { BadRequestException, HttpException, Injectable } from '@nestjs/common';
import { Lesson } from './entities/lesson.entity';
import { DataSource } from 'typeorm';
import { CourseService } from '../course/course.service';
import { GrammarService } from '../grammar/grammar.service';

@Injectable()
export class LessonService {
  constructor(
    private readonly dataSource: DataSource,
    private readonly courseService: CourseService,
    private readonly grammarService: GrammarService,
  ) {}
  async create(lesson: Lesson, courseId: string) {
    try {
      const course = await this.courseService.findOne(courseId);
      if (!course) {
        throw new BadRequestException('Course not found');
      }
      lesson.course = course;
      const newLesson = await this.dataSource
        .getRepository(Lesson)
        .save(lesson);
      return newLesson;
    } catch (error) {
      console.log(error);
      throw new HttpException(error.message, 500);
    }
  }
  async getAllLessonOfCourse(courseId: string) {
    try {
      const lessons = await this.dataSource
        .getRepository(Lesson)
        .createQueryBuilder('lesson')
        .leftJoin('lesson.course', 'course')
        .where('course.id = :courseId', { courseId })
        .getMany();
      return lessons;
    } catch (error) {
      console.log(error);
      throw new HttpException(error.message, 500);
    }
  }
  async addGrammarToLesson(lessonId: string, grammarIds: string[]) {
    try {
      const lesson = await this.dataSource
        .getRepository(Lesson)
        .findOne({ where: { id: lessonId } });
      const grammars = await Promise.all(
        grammarIds.map(async (grammarId) => {
          const grammar = await this.grammarService.findOne(grammarId);
          return grammar;
        }),
      );
      lesson.grammars = grammars;
      return lesson;
    } catch (error) {
      console.log(error);
      throw new HttpException(error.message, 500);
    }
  }

  async addVocabularyToLesson(lesson: Lesson) {
    try {
      const updatedLesson = await this.dataSource
        .getRepository(Lesson)
        .save(lesson);
      return updatedLesson;
    } catch (error) {
      console.log(error);
      throw new HttpException(error.message, 500);
    }
  }

  async findOne(id: string) {
    try {
      const lesson = await this.dataSource
        .getRepository(Lesson)
        .findOne({ where: { id } });
      return lesson;
    } catch (error) {
      console.log(error);
      throw new HttpException(error.message, 500);
    }
  }

  async update(lesson: Lesson) {
    try {
      const updatedLesson = await this.dataSource
        .getRepository(Lesson)
        .save(lesson);
      return updatedLesson;
    } catch (error) {
      console.log(error);
      throw new HttpException(error.message, 500);
    }
  }

  async remove(id: string) {
    try {
      const result = await this.dataSource.getRepository(Lesson).delete(id);
      return result;
    } catch (error) {
      console.log(error);
      throw new HttpException(error.message, 500);
    }
  }
}
