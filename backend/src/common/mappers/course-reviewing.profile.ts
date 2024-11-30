import { createMap, Mapper } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { CreateCourseReviewingDto } from 'src/module/course-reviewing/dto/create-course-reviewing.dto';
import { UpdateCourseReviewingDto } from 'src/module/course-reviewing/dto/update-course-reviewing.dto';
import { CourseReviewing } from 'src/module/course-reviewing/entities/course-reviewing.entity';

@Injectable()
export class CourseReviewingProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }
  override get profile() {
    return (mapper: Mapper) => {
      createMap(mapper, CreateCourseReviewingDto, CourseReviewing);
      createMap(mapper, UpdateCourseReviewingDto, CourseReviewing);
    };
  }
}
