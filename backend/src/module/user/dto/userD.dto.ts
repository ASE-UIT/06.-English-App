import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { USER_ROLES } from '../../../utils/constants';
import { IsOptional } from 'class-validator';

export class UserDto {
  @AutoMap()
  @IsOptional()
  id: string;

  @AutoMap()
  @IsOptional()
  @ApiProperty({
    description: 'Role of the user',
    enum: USER_ROLES,
    example: 'TEACHER',
  })
  role: USER_ROLES;
  @AutoMap()
  @IsOptional()
  @ApiProperty({ description: 'First name of the user' })
  firstName: string;
  @AutoMap()
  @IsOptional()
  @ApiProperty({ description: 'Last name of the user' })
  lastName: string;
  @AutoMap()
  @IsOptional()
  @ApiProperty({ description: 'Email address of the user' })
  email: string;
  @AutoMap()
  @IsOptional()
  @ApiProperty({ description: 'Phone number of the user' })
  phone: string;

  @AutoMap()
  @IsOptional()
  @ApiProperty({ description: 'Date of birth of the user' })
  birthDate: Date;

  @AutoMap()
  @IsOptional()
  @ApiProperty({ description: 'Key to the avatar image of the user' })
  avatarKey: string;
}
