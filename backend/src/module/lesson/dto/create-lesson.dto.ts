import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { TYPES } from 'src/utils/constants';
import { CreateLessonVocabularyDto } from './create-lesson-vocabulary.dto';
import { Type } from 'class-transformer';

export class CreateLessonDto {
  @AutoMap()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'Id of courses',
  })
  courseId: string;
  @AutoMap()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'name of lesson',
  })
  name: string;

  @AutoMap()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'description of lesson',
  })
  description: string;

  @AutoMap()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'content of lesson',
  })
  content: string;

  @AutoMap()
  @IsEnum(TYPES)
  @IsNotEmpty()
  @ApiProperty({
    enum: TYPES,
    description: 'type of lesson',
  })
  type: TYPES;
  @AutoMap()
  @ValidateNested({ each: true })
  @ApiProperty({
    type: Object,
    description: 'vocabulary of lesson',
  })
  @Type(() => CreateLessonVocabularyDto)
  @IsOptional()
  vocabularies: CreateLessonVocabularyDto[] = [];
  @AutoMap()
  @ApiProperty({
    type: Object,
    description: 'grammar of lesson',
  })
  @IsOptional()
  grammarIds: string[];
}
