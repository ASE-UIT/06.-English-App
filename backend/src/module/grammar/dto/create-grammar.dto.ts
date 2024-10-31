import { AutoMap } from '@automapper/classes';
import { IsString } from 'class-validator';

export class CreateGrammarDto {
  @AutoMap()
  @IsString()
  title: string;
  @AutoMap()
  @IsString()
  description: string;
  @AutoMap()
  @IsString()
  content: string;
}
