import { IsEnum, IsString } from 'class-validator';
import { PAYMENT_METHOD } from 'src/utils/constants';

export class CreateCourseBuyingDto {
  @IsEnum(PAYMENT_METHOD)
  paymentMethod: PAYMENT_METHOD;

  @IsString()
  key: string;

  @IsString()
  active: boolean; // Nếu active không cần truyền từ client, có thể bỏ qua
}