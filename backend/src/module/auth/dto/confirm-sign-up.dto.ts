import { IsNotEmpty } from 'class-validator';
import { AutoMap } from '@automapper/classes';

export class ConfirmSignUpDto {
  @AutoMap()
  @IsNotEmpty()
  username: string;
  @AutoMap()
  @IsNotEmpty()
  code: string;
}
