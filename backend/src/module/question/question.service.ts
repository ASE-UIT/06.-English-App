import { HttpException, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Question } from './entities/question.entity';
import { Section } from '../section/entities/section.entity';
import { QuestionGroup } from '../question-group/entities/question-group.entity';

@Injectable()
export class QuestionService {
  constructor(private readonly dataSource: DataSource) {}
  async create(question: Question) {
    try {
      const questionGroupId = question.questionGroup.id ?? null;
      const sectionId = question.section.id ?? null;
      if (!questionGroupId && !sectionId) {
        throw new HttpException('Question group or section not found', 404);
      }
      const questionGroup = await this.dataSource
        .getRepository(QuestionGroup)
        .findOne({ where: { id: questionGroupId } });
      const section = await this.dataSource.getRepository(Section).findOne({
        where: { id: sectionId },
      });
      question.questionGroup = questionGroup;
      question.section = section;
      const newQuestion = await this.dataSource
        .getRepository(Question)
        .save(question);

      return newQuestion;
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findBySection(sectionId: string) {
    try {
      const questions = await this.dataSource
        .getRepository(Question)
        .find({ where: { section: { id: sectionId } } });

      return questions;
    } catch (error) {
      console.error(error);
      throw new HttpException(error.message, 500);
    }
  }

  async createMany(
    questions: Question[],
    sectionId?: string,
    questionGroupId?: string,
  ) {
    try {
      const questionResult = await Promise.all(
        questions.map(async (question) => {
          console.log(question);
          if (questionGroupId) {
            await this.dataSource
              .getRepository(Question)
              .delete({ questionGroup: { id: questionGroupId } });
            const questionGroup = await this.dataSource
              .getRepository(QuestionGroup)
              .findOne({ where: { id: questionGroupId } });
            question.questionGroup = questionGroup;
          }
          if (sectionId) {
            await this.dataSource
              .getRepository(Question)
              .delete({ section: { id: sectionId } });
            const section = await this.dataSource
              .getRepository(Section)
              .findOne({ where: { id: sectionId } });
            question.section = section;
          }
          return await this.dataSource.getRepository(Question).save(question);
        }),
      );
      return questionResult;
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} question`;
  }

  update(question: Question) {
    try {
      // update a question
      const updatedQuestion = this.dataSource
        .getRepository(Question)
        .save(question);

      return updatedQuestion;
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async remove(id: string) {
    try {
      // delete a question
      const deletedQuestion = await this.dataSource
        .getRepository(Question)
        .delete(id);

      return deletedQuestion;
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }
}
