import { IsNotEmpty } from 'class-validator';
import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';

export class SignInCognitoDto {
  @AutoMap()
  @IsNotEmpty()
  @ApiProperty({ description: 'Username for signing in' })
  username: string;

  @AutoMap()
  @IsNotEmpty()
  @ApiProperty({ description: 'Password for signing in' })
  password: string;
}
