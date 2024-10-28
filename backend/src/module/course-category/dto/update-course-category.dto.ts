import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseCategoryDto } from './create-course-category.dto';
import { AutoMap } from '@automapper/classes';
import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCourseCategoryDto extends PartialType(
  CreateCourseCategoryDto,
) {
  @AutoMap()
  @ApiProperty({
    description: 'The id of the course category',
    type: String,
    example: 'f2386f08-5a0b-4f17-9a20-f29e4455e700',
  })
  @IsString()
  id: string;
}
