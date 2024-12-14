import { HttpException, Injectable } from '@nestjs/common';
import { QuestionGroup } from './entities/question-group.entity';
import { DataSource } from 'typeorm';
import { Section } from '../section/entities/section.entity';

@Injectable()
export class QuestionGroupService {
  constructor(private readonly dataSource: DataSource) {}

  async create(questionGroup: QuestionGroup, sectionId: string) {
    try {
      const section = await this.dataSource
        .getRepository(Section)
        .findOneOrFail({
          where: { id: sectionId },
        });
      questionGroup.section = section;
      const newQuestionGroup = await this.dataSource
        .getRepository(QuestionGroup)
        .save(questionGroup);
      return newQuestionGroup;
    } catch (err) {
      throw new HttpException(err.message, 500);
    }
  }

  findAll() {
    return `This action returns all questionGroup`;
  }

  findOne(id: number) {
    return `This action returns a #${id} questionGroup`;
  }

  update(questionGroup: QuestionGroup) {
    try {
      const updatedQuestionGroup = this.dataSource
        .getRepository(QuestionGroup)
        .save(questionGroup);
      return updatedQuestionGroup;
    } catch (err) {
      throw new HttpException(err.message, 500);
    }
  }

  remove(id: string) {
    try {
      const deleteResult = this.dataSource
        .getRepository(QuestionGroup)
        .delete(id);
      return deleteResult;
    } catch (err) {
      throw new HttpException(err.message, 500);
    }
  }
}
