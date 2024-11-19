import { Injectable, NotFoundException } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { CourseOwning } from './entities/course-owning.entity';
import { Student } from '../user/entities/student.entity';
import { Course } from '../course/entities/course.entity';

@Injectable()
export class CourseOwningService {
  constructor(private readonly dataSource: DataSource) {}
  async active(courseOwning: CourseOwning, userAwsId: string) {
    try {
      const student = await this.dataSource.getRepository(Student).findOne({
        where: { id: userAwsId },
      });
      if (!student) {
        throw new NotFoundException('Student not found');
      }
      const course = await this.dataSource.getRepository(Course).findOne({
        where: { id: courseOwning.course.id },
      });
      if (!course) {
        throw new NotFoundException('Course not found');
      }
      courseOwning.course = course;
      courseOwning.student = student;
      const newCourseOwning = await this.dataSource
        .getRepository(CourseOwning)
        .save(courseOwning);
      return newCourseOwning;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  findAll() {
    return `This action returns all courseOwning`;
  }

  findOne(id: number) {
    return `This action returns a #${id} courseOwning`;
  }

  remove(id: number) {
    return `This action removes a #${id} courseOwning`;
  }
}
