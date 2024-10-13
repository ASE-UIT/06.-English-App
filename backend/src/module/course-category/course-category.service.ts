import { Injectable } from '@nestjs/common';
import { CreateCourseCategoryDto } from './dto/create-course-category.dto';
import { UpdateCourseCategoryDto } from './dto/update-course-category.dto';

@Injectable()
export class CourseCategoryService {
  create(createCourseCategoryDto: CreateCourseCategoryDto) {
    return 'This action adds a new courseCategory';
  }

  findAll() {
    return `This action returns all courseCategory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} courseCategory`;
  }

  update(id: number, updateCourseCategoryDto: UpdateCourseCategoryDto) {
    return `This action updates a #${id} courseCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} courseCategory`;
  }
}
