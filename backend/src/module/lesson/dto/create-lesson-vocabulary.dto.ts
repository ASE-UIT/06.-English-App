import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateLessonVocabularyDto {
  @AutoMap()
  @ApiProperty({
    type: String,
    description: 'Lesson vocabulary',
    example: 'Hello',
  })
  @IsString()
  vocabulary: string;
  @AutoMap()
  @ApiProperty({
    type: String,
    description: 'Note of vocabulary',
    example: 'This is a note',
  })
  @IsString()
  note: string;
}
