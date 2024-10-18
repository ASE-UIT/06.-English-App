import { AutoMap } from '@automapper/classes';

export class RegisterCognitoDto {
  @AutoMap()
  username: string;
  @AutoMap()
  email: string;
  @AutoMap()
  password: string;
  @AutoMap()
  name: string;
}
