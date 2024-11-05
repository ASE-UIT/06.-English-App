import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { S3Module } from './s3/s3.module';
import { CourseCategoryModule } from './course-category/course-category.module';
import { CourseModule } from './course/course.module';
import { LessonModule } from './lesson/lesson.module';
import { GrammarModule } from './grammar/grammar.module';
import { SectionModule } from './section/section.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    AuthModule,
    UserModule,
    S3Module,
    CourseCategoryModule,
    CourseModule,
    LessonModule,
    GrammarModule,
    SectionModule,
    HttpModule,
  ],
  exports: [
    AuthModule,
    UserModule,
    S3Module,
    CourseCategoryModule,
    CourseModule,
    LessonModule,
    GrammarModule,
    SectionModule,
    HttpModule,
  ],
})
export class SharedModule {}
