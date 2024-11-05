import { createMap, Mapper } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { CreateSectionDto } from 'src/module/section/dto/create-section.dto';
import { UpdateSectionDto } from 'src/module/section/dto/update-section.dto';
import { Section } from 'src/module/section/entities/section.entity';

@Injectable()
export class SectionProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }
  override get profile() {
    return (mapper: Mapper) => {
      createMap(mapper, CreateSectionDto, Section);
      createMap(mapper, UpdateSectionDto, Section);
    };
  }
}
