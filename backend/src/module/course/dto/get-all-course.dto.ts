import { IsOptional, IsString } from 'class-validator';
import { CoursePaginatedQuery } from './course-paginated-query.dto';
import { ApiProperty } from '@nestjs/swagger';
export class GetAllCourseQuery extends CoursePaginatedQuery {
  @ApiProperty({
    required: false,
    description: 'Category id',
  })
  @IsOptional()
  @IsString()
  categoryId?: string;
}
