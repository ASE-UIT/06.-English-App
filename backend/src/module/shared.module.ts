import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { S3Module } from './s3/s3.module';
import { CourseCategoryModule } from './course-category/course-category.module';
import { CourseModule } from './course/course.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    S3Module,
    CourseCategoryModule,
    CourseModule,
  ],
  exports: [
    AuthModule,
    UserModule,
    S3Module,
    CourseCategoryModule,
    CourseModule,
  ],
})
export class SharedModule {}
