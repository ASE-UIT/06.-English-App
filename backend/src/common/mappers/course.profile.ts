import { createMap, Mapper } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from 'src/module/course/dto/create-course.dto';
import { UpdateCourseDto } from 'src/module/course/dto/update-course.dto';
import { Course } from 'src/module/course/entities/course.entity';

@Injectable()
export class CourseProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }
  override get profile() {
    return (mapper: Mapper) => {
      createMap(mapper, Course, CreateCourseDto);
      createMap(mapper, CreateCourseDto, Course);
      createMap(mapper, UpdateCourseDto, Course);
    };
  }
}
