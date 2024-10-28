import { HttpException, Injectable } from '@nestjs/common';
import { UpdateCourseCategoryDto } from './dto/update-course-category.dto';
import { CourseCategory } from './entities/course-category.entity';
import { DataSource } from 'typeorm';

@Injectable()
export class CourseCategoryService {
  constructor(private readonly dataSource: DataSource) {}
  async create(category: CourseCategory) {
    try {
      const newCategory = await this.dataSource
        .getRepository(CourseCategory)
        .insert(category);
      return newCategory;
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
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
