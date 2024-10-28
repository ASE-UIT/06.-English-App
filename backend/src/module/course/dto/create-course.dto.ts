import { AutoMap } from '@automapper/classes';
import { IsEnum, IsNumber, IsString } from 'class-validator';
import { STATE } from 'src/utils/constants';

export class CreateCourseDto {
  @AutoMap()
  @IsString()
  description: string;

  @AutoMap()
  @IsString()
  name: string;

  @AutoMap()
  @IsEnum(STATE)
  state: STATE;

  @AutoMap()
  @IsString()
  categoryId: string;

  @AutoMap()
  @IsNumber()
  price: number;
}
