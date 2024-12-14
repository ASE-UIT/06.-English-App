import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseReviewingDto } from './create-course-reviewing.dto';
import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCourseReviewingDto extends PartialType(
  CreateCourseReviewingDto,
) {}
