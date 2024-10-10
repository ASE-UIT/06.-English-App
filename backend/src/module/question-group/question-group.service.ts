import { Injectable } from '@nestjs/common';
import { CreateQuestionGroupDto } from './dto/create-question-group.dto';
import { UpdateQuestionGroupDto } from './dto/update-question-group.dto';

@Injectable()
export class QuestionGroupService {
  create(createQuestionGroupDto: CreateQuestionGroupDto) {
    return 'This action adds a new questionGroup';
  }

  findAll() {
    return `This action returns all questionGroup`;
  }

  findOne(id: number) {
    return `This action returns a #${id} questionGroup`;
  }

  update(id: number, updateQuestionGroupDto: UpdateQuestionGroupDto) {
    return `This action updates a #${id} questionGroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} questionGroup`;
  }
}
