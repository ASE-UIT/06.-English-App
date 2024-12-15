import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  ValidateIf,
} from 'class-validator';
import { IsPasswordStrong } from '../../../common/validators/is-strong-password.validator';
import { IsValidDOB } from '../../../common/validators/is-valid-dob.validator';
import { AutoMap } from '@automapper/classes';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class RegisterAuthDto {
  @AutoMap()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Unique username for the user',
    default: 'guest_user',
  })
  username: string;

  @AutoMap()
  @IsEmail()
  @ApiProperty({ description: 'Valid email address' })
  email: string;

  @AutoMap()
  @IsPasswordStrong()
  @ApiProperty({
    description: 'Password for the account',
    minLength: 8,
    default: '*^0x,S.-89;b!O^r',
  })
  password: string;

  @AutoMap()
  @IsEnum(['TEACHER', 'STUDENT'], {
    message: 'Role must be either TEACHER or STUDENT',
  })
  @ApiProperty({
    enum: ['TEACHER', 'STUDENT'],
    description: 'Role of the user',
  })
  role: 'TEACHER' | 'STUDENT';
}
