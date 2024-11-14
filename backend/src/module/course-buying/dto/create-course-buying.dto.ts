import { AutoMap } from '@automapper/classes';
import { IsEnum, IsString } from 'class-validator';
import { PAYMENT_METHOD } from 'src/utils/constants';

export class CreateCourseBuyingDto {
  @IsString()
  @AutoMap()
  courseId: string;
  @IsEnum(PAYMENT_METHOD)
  @AutoMap()
  paymentMethod: PAYMENT_METHOD;
}
