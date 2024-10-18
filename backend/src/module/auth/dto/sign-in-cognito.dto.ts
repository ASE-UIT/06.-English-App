import { IsNotEmpty } from 'class-validator';
import { AutoMap } from '@automapper/classes';

export class SignInCognitoDto {
  @AutoMap()
  @IsNotEmpty()
  username: string;
  @AutoMap()
  @IsNotEmpty()
  password: string;
}
