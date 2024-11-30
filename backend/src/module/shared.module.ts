import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { S3Module } from './s3/s3.module';
import { CourseCategoryModule } from './course-category/course-category.module';
import { CourseModule } from './course/course.module';
import { LessonModule } from './lesson/lesson.module';
import { GrammarModule } from './grammar/grammar.module';
import { QuestionModule } from './question/question.module';
import { QuestionGroupModule } from './question-group/question-group.module';
import { SectionModule } from './section/section.module';
import { HttpModule } from '@nestjs/axios';
import { CourseBuyingModule } from './course-buying/course-buying.module';
import { StudentAnswerModule } from './student-answer/student-answer.module';
import { DiscountModule } from './discount/discount.module';
import { CourseReviewingModule } from './course-reviewing/course-reviewing.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    S3Module,
    CourseCategoryModule,
    CourseModule,
    CourseReviewingModule,
    LessonModule,
    GrammarModule,
    QuestionModule,
    QuestionGroupModule,
    SectionModule,
    HttpModule,
    CourseBuyingModule,
    StudentAnswerModule,
    DiscountModule,
  ],
  exports: [
    AuthModule,
    UserModule,
    S3Module,
    CourseCategoryModule,
    CourseReviewingModule,
    CourseModule,
    LessonModule,
    DiscountModule,
    GrammarModule,
    QuestionModule,
    QuestionGroupModule,
    SectionModule,
    HttpModule,
    CourseBuyingModule,
    StudentAnswerModule,
  ],
})
export class SharedModule {}
