import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';
import { CourseProfile } from 'src/common/mappers/course.profile';
import { CourseCategoryService } from '../course-category/course-category.service';
import { RecombeeService } from '../recombee/recombee.service';

@Module({
  controllers: [CourseController],
  providers: [
    CourseService,
    CourseProfile,
    CourseCategoryService,
    RecombeeService,
  ],
})
export class CourseModule {}
