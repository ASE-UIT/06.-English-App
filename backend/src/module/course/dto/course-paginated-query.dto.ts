import { Type } from 'class-transformer';
import { IsOptional, IsNumber, Min, IsString, IsIn } from 'class-validator';

export class CoursePaginatedQuery {
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Type(() => Number)
  page: number = 1;

  @IsOptional()
  @IsNumber()
  @Min(1)
  @Type(() => Number)
  limit: number = 10;

  @IsOptional()
  @IsString()
  @IsIn(['asc', 'desc'])
  sort: 'asc' | 'desc' = 'asc';

  @IsOptional()
  @IsString()
  sortBy: string = 'createdAt';

  @IsOptional()
  @IsString()
  search: string = '';
}
