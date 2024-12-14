import { Injectable } from '@nestjs/common';
import { CreateCourseReviewingDto } from './dto/create-course-reviewing.dto';
import { UpdateCourseReviewingDto } from './dto/update-course-reviewing.dto';
import { CourseReviewing } from './entities/course-reviewing.entity';
import { DataSource } from 'typeorm';

@Injectable()
export class CourseReviewingService {
  constructor(private readonly dataSource: DataSource) {}
  async create(newCourseReviewing: CourseReviewing) {
    try {
      const courseReviewing = await this.dataSource.getRepository(CourseReviewing).insert(newCourseReviewing);
      return courseReviewing;
    } catch (error) {
      console.log(error);
      throw new Error('Error while creating courseReviewing');
    }
  }

  async findAll(courseId: string) {
    try {
      return await this.dataSource.getRepository(CourseReviewing).find({
        where: { 
          course: {
            id: courseId
          }
         },
      });
    } catch (error) {
      console.log(error);
      throw new Error('Error while getting courseReviewing list');
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} courseReviewing`;
  }

  async update(courseReviewing: CourseReviewing) {
    try {
      const updatedCourseReviewing = await this.dataSource.getRepository(CourseReviewing).save(courseReviewing);
      return updatedCourseReviewing;
    } catch (error) {
      console.log(error);
      throw new Error('Error while updating courseReviewing');
    }
  }

  async remove(id: string) {
    try {
      const courseReviewing = await this.dataSource
        .getRepository(CourseReviewing)
        .findOne({
          where: { id },
        });
      const deletedCourseReviewing = await this.dataSource.getRepository(CourseReviewing).remove(courseReviewing);
      return deletedCourseReviewing;
    } catch (error) {
      console.log(error);
      throw new Error('Error while deleting courseReviewing');
    }
  }
}
