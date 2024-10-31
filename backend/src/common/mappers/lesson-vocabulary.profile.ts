import { createMap, Mapper } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { CreateLessonVocabularyDto } from 'src/module/lesson/dto/create-lesson-vocabulary.dto';
import { UpdateLessonVocabularyDto } from 'src/module/lesson/dto/update-lesson-vocabulary.dto';
import { LessonVocabulary } from 'src/module/lesson/entities/lesson-vocabulary.entity';

@Injectable()
export class LessonVocabularyProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }
  override get profile() {
    return (mapper: Mapper) => {
      createMap(mapper, CreateLessonVocabularyDto, LessonVocabulary);
      createMap(mapper, UpdateLessonVocabularyDto, LessonVocabulary);
    };
  }
}
