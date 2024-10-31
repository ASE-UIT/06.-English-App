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
      const newSection = await this.dataSource
        .getRepository(Section)
        .save(section);
      return newSection;
    } catch (error) {
      console.log(error);
      throw new HttpException(
        'Internal Server Error',
        HttpStatusCode.INTERNAL_SERVER_ERROR,
      );
    }
  }

  findAll() {
    return `This action returns all section`;
  }

  findOne(id: number) {
    return `This action returns a #${id} section`;
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
