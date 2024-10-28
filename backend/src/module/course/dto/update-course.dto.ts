import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseDto } from './create-course.dto';
import { AutoMap } from '@automapper/classes';
import { IsString } from 'class-validator';

export class UpdateCourseDto extends PartialType(CreateCourseDto) {
  @AutoMap()
  @IsString()
  id: string;
}
