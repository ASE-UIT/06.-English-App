import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CourseOwningService } from './course-owning.service';
import { CreateCourseOwningDto } from './dto/create-course-owning.dto';
import { UpdateCourseOwningDto } from './dto/update-course-owning.dto';

@Controller('course-owning')
export class CourseOwningController {
  constructor(private readonly courseOwningService: CourseOwningService) {}

  @Post()
  create(@Body() createCourseOwningDto: CreateCourseOwningDto) {
    return this.courseOwningService.create(createCourseOwningDto);
  }

  @Get()
  findAll() {
    return this.courseOwningService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.courseOwningService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseOwningDto: UpdateCourseOwningDto) {
    return this.courseOwningService.update(+id, updateCourseOwningDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courseOwningService.remove(+id);
  }
}
