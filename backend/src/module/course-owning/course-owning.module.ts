import { Module } from '@nestjs/common';
import { CourseOwningService } from './course-owning.service';
import { CourseOwningController } from './course-owning.controller';

@Module({
  controllers: [CourseOwningController],
  providers: [CourseOwningService],
})
export class CourseOwningModule {}
