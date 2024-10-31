import { Module } from '@nestjs/common';
import { SectionService } from './section.service';
import { SectionController } from './section.controller';
import { SectionProfile } from 'src/common/mappers/section.profile';
import { LessonService } from '../lesson/lesson.service';

@Module({
  controllers: [SectionController],
  providers: [SectionService, SectionProfile, LessonService],
})
export class SectionModule {}
