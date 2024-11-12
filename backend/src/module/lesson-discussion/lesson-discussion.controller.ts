import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LessonDiscussionService } from './lesson-discussion.service';
import { CreateLessonDiscussionDto } from './dto/create-lesson-discussion.dto';
import { UpdateLessonDiscussionDto } from './dto/update-lesson-discussion.dto';

@Controller('lesson-discussion')
export class LessonDiscussionController {
  constructor(private readonly lessonDiscussionService: LessonDiscussionService) {}

  @Post()
  create(@Body() createLessonDiscussionDto: CreateLessonDiscussionDto) {
    return this.lessonDiscussionService.create(createLessonDiscussionDto);
  }

  @Get()
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
