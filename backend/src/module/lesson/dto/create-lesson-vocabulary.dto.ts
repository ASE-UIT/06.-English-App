import { AutoMap } from '@automapper/classes';
import { IsString } from 'class-validator';

export class CreateLessonVocabularyDto {
  @AutoMap()
  @IsString()
  vocabulary: string;
  @AutoMap()
  @IsString()
  note: string;
}
