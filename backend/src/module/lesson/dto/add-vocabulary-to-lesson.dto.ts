import { Type } from 'class-transformer';
import { IsArray, ValidateNested } from 'class-validator';
import { CreateLessonVocabularyDto } from './create-lesson-vocabulary.dto';
import { ApiProperty } from '@nestjs/swagger';
import { AutoMap } from '@automapper/classes';

export class AddVocabularyToLessonDto {
  @IsArray()
  @ValidateNested({ each: true })
  @AutoMap()
  @Type(() => CreateLessonVocabularyDto)
  @ApiProperty({
    type: [CreateLessonVocabularyDto],
    description: 'List of vocabularies',
    example: [
      {
        vocabulary: 'Hello',
        note: 'This is a note',
      },
      {
        vocabulary: 'Goodbye',
        note: 'This is a note',
      },
    ],
  })
  vocabularies: CreateLessonVocabularyDto[];
}
