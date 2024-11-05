import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
} from '@nestjs/common';
import { LessonService } from './lesson.service';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { DOCUMENTATION, END_POINTS } from 'src/utils/constants';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { Lesson } from './entities/lesson.entity';
import { LessonVocabulary } from './entities/lesson-vocabulary.entity';
import { CreateLessonVocabularyDto } from './dto/create-lesson-vocabulary.dto';
import { ResponseObject } from 'src/utils/objects';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { InternalServerErrorException } from '@nestjs/common';

@Controller(END_POINTS.LESSON.BASE)
@ApiTags(DOCUMENTATION.TAGS.LESSON)
export class LessonController {
  constructor(
    private readonly lessonService: LessonService,
    @InjectMapper() private readonly mapper: Mapper,
  ) {}
  @ApiOperation({
    summary: 'Create a new vocabulary lesson',
  })
  @Post(END_POINTS.LESSON.CREATE_VOCABULARY)
  async createVocabularyLesson(@Body() createLessonDto: CreateLessonDto) {
    try {
      const lesson = await this.mapper.mapAsync(
        createLessonDto,
        CreateLessonDto,
        Lesson,
      );
      const lessonVocabulary = await this.mapper.mapArrayAsync(
        createLessonDto.vocabularies,
        CreateLessonVocabularyDto,
        LessonVocabulary,
      );
      lesson.lessonVocabularies = lessonVocabulary;
      console.log(lesson);
      const newLesson = await this.lessonService.create(
        lesson,
        createLessonDto.courseId,
      );
      return ResponseObject.create('Create lesson successfully', newLesson);
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw new InternalServerErrorException('Error creating lesson');
    }
  }
  @ApiOperation({
    summary: 'Create a new grammar lesson',
  })
  @Post(END_POINTS.LESSON.CREATE_GRAMMAR)
  async createGrammarLesson(@Body() createLessonDto: CreateLessonDto) {
    try {
      const lessonToCreate = await this.mapper.mapAsync(
        createLessonDto,
        CreateLessonDto,
        Lesson,
      );
      const newLesson = await this.lessonService.createGrammarLesson(
        lessonToCreate,
        createLessonDto.courseId,
        createLessonDto.grammarIds,
      );
      return ResponseObject.create('Create lesson successfully', newLesson);
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw new InternalServerErrorException('Error creating lesson');
    }
  }
  @ApiOperation({
    summary: 'Create a new normal lesson',
  })
  async createNormalLesson(@Body() createLessonDto: CreateLessonDto) {
    const lesson = await this.mapper.mapAsync(
      createLessonDto,
      CreateLessonDto,
      Lesson,
    );
    const newLesson = await this.lessonService.create(
      lesson,
      createLessonDto.courseId,
    );
    return ResponseObject.create('Create lesson successfully', newLesson);
  }
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result = await this.lessonService.findOne(id);
    return ResponseObject.create('Get lesson successfully', result);
  }

  @Patch(':id')
  async Update(
    @Param('id') id: string,
    @Body() updateLessonDto: UpdateLessonDto,
  ) {
    const updateLesson = this.mapper.map(
      updateLessonDto,
      UpdateLessonDto,
      Lesson,
    );
    const result = await this.lessonService.update(updateLesson);
    return ResponseObject.create('Update lesson successfully', result);
  }
  @ApiOperation({
    summary: 'Delete a lesson',
  })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result = await this.lessonService.remove(id);
    return ResponseObject.create('Delete lesson successfully', result);
  }
}
