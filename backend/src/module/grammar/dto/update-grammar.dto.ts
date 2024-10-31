import { PartialType } from '@nestjs/mapped-types';
import { CreateGrammarDto } from './create-grammar.dto';
import { AutoMap } from '@automapper/classes';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateGrammarDto extends PartialType(CreateGrammarDto) {
  @AutoMap()
  @IsString()
  @IsNotEmpty()
  id: string;
}
