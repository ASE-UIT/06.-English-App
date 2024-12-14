import { Controller, Get, Post, Body, Patch, Param, Delete, InternalServerErrorException, BadRequestException, Query } from '@nestjs/common';
import { LessonDiscussionService } from './lesson-discussion.service';
import { CreateLessonDiscussionDto } from './dto/create-lesson-discussion.dto';
import { UpdateLessonDiscussionDto } from './dto/update-lesson-discussion.dto';
import { DOCUMENTATION, END_POINTS } from 'src/utils/constants';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { LessonDiscussion } from './entities/lesson-discussion.entity';
import { ResponseObject } from 'src/utils/objects';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { CreateLessonDiscussionReplyDto } from './dto/create-lesson-discussion-reply.dto';
import { LessonDiscussionReply } from './entities/lesson-discussion-reply.entity';
import { UpdateLessonDiscussionReplyDto } from './dto/update-lesson-discussion-reply.dto';

@ApiTags(DOCUMENTATION.TAGS.LESSON_DISCUSSION)
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
      console.error(error);
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw new InternalServerErrorException('Error creating lesson discussion');
    }
  }

  @ApiOperation({ summary: 'Get all lesson discussions' })
  @ApiQuery({
    name: 'courseId',
    description: 'Course Id',
    example: '449dd3c4-1eee-4ee7-a4d3-18fa1c8d64fb',
    required: true,
  })
  @Get(END_POINTS.LESSON_DISCUSSION.LIST)
  async findAll(@Query('courseId') courseId: string) {
    const res = await this.lessonDiscussionService.findByCourse(courseId);
    return ResponseObject.create('Lesson Discussion array:', res);
  }

  @ApiOperation({ summary: 'Update a lesson discussion' })
  @Patch(END_POINTS.LESSON_DISCUSSION.UPDATE)
  async updateLessonDiscussion(@Param('id') id: string, @Body() updateLessonDiscussionDto: UpdateLessonDiscussionDto) {
    const updateLessonDiscussion = this.mapper.map(updateLessonDiscussionDto, UpdateLessonDiscussionDto, LessonDiscussion);
    updateLessonDiscussion.id = id;
    
    try {
      const result = await this.lessonDiscussionService.updateLessonDiscussion(updateLessonDiscussion);
      return ResponseObject.create('Lesson Discussion updated', result);
    } catch (error) {
      throw new InternalServerErrorException('Error updating lesson discussion');
    }
  }

  @ApiOperation({ summary: 'Delete a lesson discussion' })
  @Delete(END_POINTS.LESSON_DISCUSSION.DELETE)
  async remove(@Param('id') id: string) {
    try {
      const result = await this.lessonDiscussionService.remove(id);
      return ResponseObject.create('Lesson Discussion deleted', result);
    } catch (error) {
      throw new InternalServerErrorException('Error deleting lesson discussion');
    }
  }

  @ApiOperation({ summary: 'Create a new reply' })
  @Post(END_POINTS.LESSON_DISCUSSION.CREATE_REPLY)
  async createReply(@Body() createLessonDiscussionReplyDto: CreateLessonDiscussionReplyDto) {
    try {
      const lessonDiscussionReply = this.mapper.map(createLessonDiscussionReplyDto, CreateLessonDiscussionReplyDto, LessonDiscussionReply);
      const res = await this.lessonDiscussionService.createReply(
        lessonDiscussionReply, 
        createLessonDiscussionReplyDto.lessonDiscussionId,
        createLessonDiscussionReplyDto.userId);

      return ResponseObject.create('Lesson Discussion Reply created', res);
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw new InternalServerErrorException('Error creating reply');
    }
  }

  @ApiOperation({ summary: 'Get all replies of one lessonDiscussion' })
  @Get(END_POINTS.LESSON_DISCUSSION.LIST_REPLY)
  async findAllReply(@Query('id') id: string) {
    try {
      const res = await this.lessonDiscussionService.findAllReply(id);
      return ResponseObject.create('Lesson Discussion Reply array:', res);
    } catch (error) {
      throw new InternalServerErrorException('Error getting replies');
    }
  }

  @ApiOperation({ summary: 'Update a reply' })
  @Patch(END_POINTS.LESSON_DISCUSSION.UPDATE_REPLY)
  async updateReply(@Param('replyId') replyId: string, @Body() updateLessonDiscussionReplyDto: UpdateLessonDiscussionReplyDto) {
    const updateLessonDiscussionReply = this.mapper.map(updateLessonDiscussionReplyDto, CreateLessonDiscussionReplyDto, LessonDiscussionReply);
    updateLessonDiscussionReply.id = replyId;
    try {
      const result = await this.lessonDiscussionService.updateReply(updateLessonDiscussionReply);
      return ResponseObject.create('Lesson Discussion Reply updated', result);
    } catch (error) {
      throw new InternalServerErrorException('Error updating reply');
    }
  }

  @ApiOperation({ summary: 'Delete a reply' })
  @Delete(END_POINTS.LESSON_DISCUSSION.DELETE_REPLY)
  async removeReply(@Param('replyId') replyId: string) {
    try {
      const result = await this.lessonDiscussionService.removeReply(replyId);
      return ResponseObject.create('Lesson Discussion Reply deleted', result);
    } catch (error) {
      throw new InternalServerErrorException('Error deleting reply');
    }
  }
  

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lessonDiscussionService.findOne(+id);
  }

  

  
}
