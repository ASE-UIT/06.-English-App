import { Injectable } from '@nestjs/common';
import { CreateQuestionMediaDto } from './dto/create-question-media.dto';
import { UpdateQuestionMediaDto } from './dto/update-question-media.dto';

@Injectable()
export class QuestionMediaService {
  create(createQuestionMediaDto: CreateQuestionMediaDto) {
    return 'This action adds a new questionMedia';
  }

  findAll() {
    return `This action returns all questionMedia`;
  }

  findOne(id: number) {
    return `This action returns a #${id} questionMedia`;
  }

  update(id: number, updateQuestionMediaDto: UpdateQuestionMediaDto) {
    return `This action updates a #${id} questionMedia`;
  }

  remove(id: number) {
    return `This action removes a #${id} questionMedia`;
  }
}
