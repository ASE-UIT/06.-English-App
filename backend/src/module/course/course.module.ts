import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';
import { CourseProfile } from 'src/common/mappers/course.profile';

@Module({
  controllers: [CourseController],
  providers: [CourseService, CourseProfile],
})
export class CourseModule {}
