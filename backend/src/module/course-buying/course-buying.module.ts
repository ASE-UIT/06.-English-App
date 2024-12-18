import { Module } from '@nestjs/common';
import { CourseBuyingService } from './course-buying.service';
import { CourseBuyingController } from './course-buying.controller';
import { CourseBuyingProfile } from 'src/common/mappers/course-buying.profile';
import { RecombeeService } from '../recombee/recombee.service';

@Module({
  controllers: [CourseBuyingController],
  providers: [CourseBuyingService, CourseBuyingProfile, RecombeeService],
})
export class CourseBuyingModule {}
