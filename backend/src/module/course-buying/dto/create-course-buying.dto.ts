import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString } from 'class-validator';
import { PAYMENT_METHOD } from 'src/utils/constants';

export class CreateCourseBuyingDto {
  @IsString()
  @AutoMap()
  @ApiProperty({
    description: 'Course id',
    type: String,
    example: '449dd3c4-1eee-4ee7-a4d3-18fa1c8d64fb',
  })
  courseId: string;
  @IsEnum(PAYMENT_METHOD)
  @AutoMap()
  @ApiProperty({
    description: 'Payment method',
    enum: PAYMENT_METHOD,
    example: PAYMENT_METHOD.QR_CODE,
  })
  paymentMethod: PAYMENT_METHOD;
}
