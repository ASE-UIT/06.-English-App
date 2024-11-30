import { Controller, Get, Post, Body, Patch, Param, Delete, InternalServerErrorException, BadRequestException, Query } from '@nestjs/common';
import { LessonDiscussionService } from './lesson-discussion.service';
import { CreateLessonDiscussionDto } from './dto/create-lesson-discussion.dto';
import { UpdateLessonDiscussionDto } from './dto/update-lesson-discussion.dto';
import { END_POINTS } from 'src/utils/constants';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { LessonDiscussion } from './entities/lesson-discussion.entity';
import { ResponseObject } from 'src/utils/objects';
import { ApiOperation } from '@nestjs/swagger';

@Controller(END_POINTS.LESSON_DISCUSSION.BASE)
export class LessonDiscussionController {
  constructor(
    private readonly lessonDiscussionService: LessonDiscussionService,
    @InjectMapper() private readonly mapper: Mapper,
    ) {}
  
  @ApiOperation({ summary: 'Create a new lesson discussion' })
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

  @ApiOperation({ summary: 'Get all lesson discussions' })
  @Get(END_POINTS.LESSON_DISCUSSION.LIST)
  async findAll(@Query('courseId') courseId: string) {
    const res = await this.lessonDiscussionService.findByCourse(courseId);
    return ResponseObject.create('Lesson Discussion array:', res);
  }

  @ApiOperation({ summary: 'Update a lesson discussion' })
  @Patch(END_POINTS.LESSON_DISCUSSION.UPDATE)
  async update(@Param('id') id: string, @Body() updateLessonDiscussionDto: UpdateLessonDiscussionDto) {
    const updateLessonDiscussion = this.mapper.map(updateLessonDiscussionDto, UpdateLessonDiscussionDto, LessonDiscussion);

    try {
      const result = await this.lessonDiscussionService.update(updateLessonDiscussion);
      return ResponseObject.create('Lesson Discussion updated', result);
    } catch (error) {
      throw new InternalServerErrorException('Error updating lesson');
    }
    
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lessonDiscussionService.findOne(+id);
  }

  

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lessonDiscussionService.remove(+id);
  }
}
