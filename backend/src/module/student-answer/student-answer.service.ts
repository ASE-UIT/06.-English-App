import { Injectable } from '@nestjs/common';
import { CreateStudentAnswerDto } from './dto/create-student-answer.dto';
import { UpdateStudentAnswerDto } from './dto/update-student-answer.dto';

@Injectable()
export class StudentAnswerService {
  create(createStudentAnswerDto: CreateStudentAnswerDto) {
    return 'This action adds a new studentAnswer';
  }

  findAll() {
    return `This action returns all studentAnswer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} studentAnswer`;
  }

  update(id: number, updateStudentAnswerDto: UpdateStudentAnswerDto) {
    return `This action updates a #${id} studentAnswer`;
  }

  remove(id: number) {
    return `This action removes a #${id} studentAnswer`;
  }
}
