import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseCategoryDto } from './create-course-category.dto';
import { AutoMap } from '@automapper/classes';
import { IsString } from 'class-validator';

export class UpdateCourseCategoryDto extends PartialType(
  CreateCourseCategoryDto,
) {
  @AutoMap()
  @IsString()
  id: string;
}
