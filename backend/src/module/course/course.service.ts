import { HttpException, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Course } from './entities/course.entity';

@Injectable()
export class CourseService {
  constructor(private readonly dataSource: DataSource) {}
  async create(course: Course) {
    try {
      const newCourse = await this.dataSource
        .getRepository(Course)
        .insert(course);

      return newCourse;
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }
  async findByCategory(categoryId: string) {
    try {
      const courses = await this.dataSource
        .getRepository(Course)
        .find({ where: { category: { id: categoryId } } });
      return courses;
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }
  findAll() {
    try {
    } catch (error) {}
  }

  findOne(id: number) {
    return `This action returns a #${id} course`;
  }
  update(course: Course) {
    try {
      const updatedCourse = this.dataSource.getRepository(Course).save(course);
      return updatedCourse;
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  remove(id: number) {
    return `This action removes a #${id} course`;
  }
}
