import { AutoMap } from '@automapper/classes';
import { IsEnum, IsNumber, IsString } from 'class-validator';
import { STATE } from 'src/utils/constants';

export class CreateCourseDto {
  @AutoMap()
  @IsString()
  description: string;

  @AutoMap()
  @IsString()
  title: string;

  @AutoMap()
  @IsEnum(STATE)
  state: STATE = STATE.DRAFT;

  @AutoMap()
  @IsString()
  categoryId: string;

  @AutoMap()
  @IsNumber()
  price: number;
}
