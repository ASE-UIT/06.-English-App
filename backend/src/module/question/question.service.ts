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

  findAll() {
    return `This action returns all question`;
  }

  findOne(id: number) {
    return `This action returns a #${id} question`;
  }

  update(id: number, updateQuestionDto: UpdateQuestionDto) {
    return `This action updates a #${id} question`;
  }

  remove(id: number) {
    return `This action removes a #${id} question`;
  }
}
