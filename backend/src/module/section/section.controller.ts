import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SectionService } from './section.service';
import { CreateSectionDto } from './dto/create-section.dto';
import { UpdateSectionDto } from './dto/update-section.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { DOCUMENTATION, END_POINTS } from 'src/utils/constants';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { Section } from './entities/section.entity';
import { ResponseObject } from 'src/utils/objects';

@ApiBearerAuth()
@Controller(END_POINTS.SECTION.BASE)
@ApiTags(DOCUMENTATION.TAGS.SECTION)
export class SectionController {
  constructor(
    private readonly sectionService: SectionService,
    @InjectMapper() private readonly mapper: Mapper,
  ) {}

  @Post(END_POINTS.SECTION.CREATE)
  @ApiOperation({
    summary: 'Create a new section',
  })
  async create(@Body() createSectionDto: CreateSectionDto) {
    const section = await this.mapper.mapAsync(
      createSectionDto,
      CreateSectionDto,
      Section,
    );
    const newSection = await this.sectionService.create(
      createSectionDto.lessionId,
      section,
    );
    return ResponseObject.create('Section created successfully', newSection);
  }

  @Get(END_POINTS.SECTION.GET_ALL_SECTION_BY_LESSON)
  @ApiOperation({
    summary: 'Get all sections by lesson',
  })
  @ApiParam({
    name: 'lessonId',
    example: '03315cdb-732a-4e63-ac8b-8bed5a40b374',
    type: String,
    description: 'ID của Lesson cần lấy dữ liệu',
    required: true,
  })
  async findAllByLesson(@Param('lessonId') lessonId: string) {
    const sections = await this.sectionService.findAllByLesson(lessonId);
    return ResponseObject.create('Sections found', sections);
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Section found',
  })
  async findOne(@Param('id') id: string) {
    const section = await this.sectionService.findOne(id);
    return ResponseObject.create('Section found', section);
  }

  @Patch()
  @ApiOperation({
    summary: 'Update a section',
  })
  async update(@Body() updateSectionDto: UpdateSectionDto) {
    const section = await this.mapper.mapAsync(
      updateSectionDto,
      UpdateSectionDto,
      Section,
    );
    const updatedSection = await this.sectionService.update(
      section,
      updateSectionDto.lessionId,
    );
    return ResponseObject.create(
      'Section updated successfully',
      updatedSection,
    );
  }

  @Delete(':id')
  async sremove(@Param('id') id: string) {
    return this.sectionService.remove(+id);
  }
}
