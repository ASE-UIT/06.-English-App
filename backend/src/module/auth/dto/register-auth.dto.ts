import { IsEmail, IsEnum, IsNotEmpty } from 'class-validator';
import { IsPasswordStrong } from '../../../common/validators/is-strong-password.validator';
import { IsValidDOB } from '../../../common/validators/is-valid-dob.validator';
import { AutoMap } from '@automapper/classes';

export class RegisterAuthDto {
  @AutoMap()
  @IsNotEmpty()
  username: string;
  @AutoMap()
  @IsEmail()
  email: string;
  @AutoMap()
  @IsPasswordStrong()
  password: string;
  @AutoMap()
  @IsEnum(['TEACHER', 'STUDENT'], {
    message: 'Role must be either TEACHER or STUDENT',
  })
  role: string;
  @AutoMap()
  firstName: string;
  @AutoMap()
  lastName: string;
  @AutoMap()
  phone: string;
  @AutoMap()
  @IsValidDOB()
  birthDate: Date;
}
