import { AutoMap } from '@automapper/classes';
import { IsString } from 'class-validator';

export class CreateCourseCategoryDto {
  @AutoMap()
  @IsString()
  name: string;
}
