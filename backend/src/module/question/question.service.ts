import { HttpException, Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { DataSource } from 'typeorm';
import { Question } from './entities/question.entity';

@Injectable()
export class QuestionService {
  constructor(private readonly dataSource: DataSource) {}
  async create(question: Question) {

    try {
      // insert a new question

      const newQuestion = await this.dataSource
      .getRepository(Question)
      .insert(question);
    
      return newQuestion;
    } catch (error) {
      throw new HttpException(error.message, 500);
    }

  }

  async findBySection(sectionId: string) {
    try {
      // find all questions by sectionId
      const questions = await this.dataSource
      .getRepository(Question)
      .find({ where: { section: { id: sectionId } } });
    
      return questions;
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
    }
    catch (error) {
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
