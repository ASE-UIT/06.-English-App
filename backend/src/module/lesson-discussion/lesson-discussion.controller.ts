import { Controller, Get, Post, Body, Patch, Param, Delete, InternalServerErrorException, BadRequestException } from '@nestjs/common';
import { LessonDiscussionService } from './lesson-discussion.service';
import { CreateLessonDiscussionDto } from './dto/create-lesson-discussion.dto';
import { UpdateLessonDiscussionDto } from './dto/update-lesson-discussion.dto';
import { END_POINTS } from 'src/utils/constants';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { LessonDiscussion } from './entities/lesson-discussion.entity';
import { ResponseObject } from 'src/utils/objects';

@Controller(END_POINTS.LESSON_DISCUSSION.BASE)
export class LessonDiscussionController {
  constructor(
    private readonly lessonDiscussionService: LessonDiscussionService,
    @InjectMapper() private readonly mapper: Mapper,
    ) {}

  @Post(END_POINTS.LESSON_DISCUSSION.CREATE)
  async create(@Body() createLessonDiscussionDto: CreateLessonDiscussionDto) {
    try {
      const lessonDiscussion = this.mapper.map(createLessonDiscussionDto, CreateLessonDiscussionDto, LessonDiscussion);
      const res = await this.lessonDiscussionService.create(
        lessonDiscussion, 
        createLessonDiscussionDto.lessonId,
        createLessonDiscussionDto.userId);

      return ResponseObject.create('Lesson Discussion created', res);
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw new InternalServerErrorException('Error creating lesson');
    }
  }

  @Get(END_POINTS.LESSON_DISCUSSION.LIST)
  findAll() {
    return this.lessonDiscussionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lessonDiscussionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLessonDiscussionDto: UpdateLessonDiscussionDto) {
    return this.lessonDiscussionService.update(+id, updateLessonDiscussionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lessonDiscussionService.remove(+id);
  }
}
