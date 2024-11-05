import { HttpException, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Course } from './entities/course.entity';
import { Teacher } from '../user/entities/teacher.entity';
import { User } from '../user/entities/user.entity';
import { GetAllCourseQuery } from './dto/get-all-course.dto';

@Injectable()
export class CourseService {
  constructor(private readonly dataSource: DataSource) {}
  async create(awsId: string, course: Course) {
    try {
      const newCourse = await this.dataSource
        .getRepository(Course)
        .insert(course);
      return newCourse;
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findAllCourses(query: GetAllCourseQuery) {
    try {
      const [courses, count] = await this.dataSource
        .getRepository(Course)
        .findAndCount({
          where: {
            ...(query.search && {
              name: { contains: query.search, mode: 'insensitive' },
            }),
            ...(query.categoryId && { category: { id: query.categoryId } }),
          },
          skip: query.skip,
          take: query.take,
        });
      return { courses, count };
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findAllRecommendationCourses() {
    try {
      const courses = await this.dataSource.getRepository(Course).find();
      return courses;
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
  async findAll(awsId: string) {
    try {
      const teacher = await this.findTeacherByAwsId(awsId);
      const courses = await this.dataSource
        .getRepository(Course)
        .createQueryBuilder('course')
        .leftJoin('course.category', 'category')
        .leftJoin('course.teacher', 'teacher')
        .select(['course', 'category.name'])
        .where('teacher.id = :teacherId', { teacherId: teacher.id })
        .getMany();
      return courses;
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findOne(id: string) {
    try {
      const existingCourse = await this.dataSource
        .getRepository(Course)
        .createQueryBuilder('course')
        .leftJoin('course.category', 'category')
        .leftJoin('course.teacher', 'teacher')
        .leftJoin('teacher.userInfo', 'userInfo')
        .select(['course', 'category.name', 'teacher', 'userInfo'])
        .where('course.id = :courseId', { courseId: id })
        .getOne();
      return existingCourse;
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }
  update(course: Course) {
    try {
      const updatedCourse = this.dataSource.getRepository(Course).save(course);
      return updatedCourse;
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  remove(id: string) {
    return `This action removes a #${id} course`;
  }
  public async findTeacherByAwsId(awsId: string) {
    const user = await this.dataSource.getRepository(User).findOneOrFail({
      where: { awsCognitoId: awsId },
    });

    const teacher = await this.dataSource
      .getRepository(Teacher)
      .createQueryBuilder('teacher')
      .leftJoinAndSelect('teacher.userInfo', 'userInfo')
      .where('userInfo.id = :userId', { userId: user.id })
      .getOne();
    return teacher;
  }
}
