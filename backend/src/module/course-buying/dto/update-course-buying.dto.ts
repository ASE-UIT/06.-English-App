import { IsString, IsNotEmpty, IsEnum } from 'class-validator';
import { PAYMENT_METHOD } from 'src/utils/constants';

export class CreateCourseBuyingDto {
  @IsString()
  @IsNotEmpty()
  userId: string; 

  @IsString()
  @IsNotEmpty()
  courseId: string; 

  @IsEnum(PAYMENT_METHOD)
  paymentMethod: PAYMENT_METHOD; 

  @IsString()
  @IsNotEmpty()
  key: string; 
}
