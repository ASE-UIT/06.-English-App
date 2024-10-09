import { Injectable } from '@nestjs/common';
import { CreateCourseOwningDto } from './dto/create-course-owning.dto';
import { UpdateCourseOwningDto } from './dto/update-course-owning.dto';

@Injectable()
export class CourseOwningService {
  create(createCourseOwningDto: CreateCourseOwningDto) {
    return 'This action adds a new courseOwning';
  }

  findAll() {
    return `This action returns all courseOwning`;
  }

  findOne(id: number) {
    return `This action returns a #${id} courseOwning`;
  }

  update(id: number, updateCourseOwningDto: UpdateCourseOwningDto) {
    return `This action updates a #${id} courseOwning`;
  }

  remove(id: number) {
    return `This action removes a #${id} courseOwning`;
  }
}
