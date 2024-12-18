import { HttpException, Injectable } from '@nestjs/common';
import { Section } from './entities/section.entity';
import { DataSource } from 'typeorm';
import HttpStatusCode from 'src/utils/HttpStatusCode';
import { Lesson } from '../lesson/entities/lesson.entity';

@Injectable()
export class SectionService {
  constructor(private readonly dataSource: DataSource) {}

  async create(lessonId: string, section: Section) {
    try {
      const lesson = await this.dataSource
        .getRepository(Lesson)
        .findOne({ where: { id: lessonId } });
      if (!lesson) {
        throw new HttpException('Lesson not found', HttpStatusCode.NOT_FOUND);
      }
      section.lesson = lesson;
      return await this.dataSource.getRepository(Section).save(section);
    } catch (error) {
      console.log(error);
      throw new HttpException(
        'Internal Server Error',
        HttpStatusCode.INTERNAL_SERVER_ERROR,
      );
    }
  }
  async findAllByLesson(lessonId: string) {
    try {
      const sections = await this.dataSource
        .getRepository(Section)
        .createQueryBuilder('section')
        .leftJoin('section.lesson', 'lesson')
        .leftJoin('section.questions', 'questions')
        .leftJoin('questions.answers', 'answers')
        .leftJoin('section.questionGroups', 'questionGroups')
        .leftJoin('questionGroups.questions', 'questionGroupQuestions')
        .leftJoin('questionGroupQuestions.answers', 'questionGroupAnswers')
        .select([
          'section',
          'lesson',
          'questions',
          'answers',
          'questionGroups',
          'questionGroupQuestions',
          'questionGroupAnswers',
        ])
        .where('lesson.id = :id', { id: lessonId })
        .getMany();
      return sections;
    } catch (error) {
      throw new HttpException(
        'Internal Server Error',
        HttpStatusCode.INTERNAL_SERVER_ERROR,
      );
    }
  }
  async findOne(id: string) {
    try {
      const section = await this.dataSource
        .getRepository(Section)
        .createQueryBuilder('section')
        .leftJoin('section.questionGroups', 'questionGroups')
        .leftJoin('section.questions', 'sectionQuestions')
        .leftJoin('questionGroups.questions', 'questions')
        .leftJoin('questions.answers', 'answers')
        .select([
          'section',
          'questionGroups',
          'questions',
          'sectionQuestions',
          'answers',
        ])
        .where('section.id = :id', { id })
        .getOne();
      return section;
    } catch (error) {
      console.log(error);
      throw new HttpException(
        error.message,
        HttpStatusCode.INTERNAL_SERVER_ERROR,
      );
    }
  }
  async update(section: Section, lessionId?: string) {
    try {
      if (lessionId) {
        const lesson = await this.dataSource
          .getRepository(Lesson)
          .findOne({ where: { id: lessionId } });
        if (!lesson) {
          throw new HttpException('Lesson not found', HttpStatusCode.NOT_FOUND);
        }
        section.lesson = lesson;
      }
      const updatedSection = await this.dataSource
        .getRepository(Section)
        .save(section);
      return updatedSection;
    } catch (error) {
      console.log(error);
      throw new HttpException(
        'Internal Server Error',
        HttpStatusCode.INTERNAL_SERVER_ERROR,
      );
    }
  }
  remove(id: number) {
    return `This action removes a #${id} section`;
  }
}
