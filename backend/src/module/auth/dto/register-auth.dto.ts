import { IsEmail, IsEnum, IsNotEmpty } from 'class-validator';
import { IsPasswordStrong } from '../../../common/validators/is-strong-password.validator';
import { IsValidDOB } from '../../../common/validators/is-valid-dob.validator';
import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterAuthDto {
  @AutoMap()
  @IsNotEmpty()
  @ApiProperty({ description: 'Unique username for the user' })
  username: string;

  @AutoMap()
  @IsEmail()
  @ApiProperty({ description: 'Valid email address' })
  email: string;

  @AutoMap()
  @IsPasswordStrong()
  @ApiProperty({ description: 'Password for the account', minLength: 8 })
  password: string;

  @AutoMap()
  @IsEnum(['TEACHER', 'STUDENT'], {
    message: 'Role must be either TEACHER or STUDENT',
  })
  @ApiProperty({
    enum: ['TEACHER', 'STUDENT'],
    description: 'Role of the user',
  })
  role: string;

  @AutoMap()
  @ApiProperty({ description: 'First name of the user' })
  firstName: string;

  @AutoMap()
  @ApiProperty({ description: 'Last name of the user' })
  lastName: string;

  @AutoMap()
  @ApiProperty({ description: 'Phone number of the user' })
  phone: string;

  @AutoMap()
  @IsValidDOB()
  @ApiProperty({ description: 'Date of birth' })
  birthDate: Date;
}
