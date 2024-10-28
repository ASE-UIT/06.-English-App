import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CourseCategoryService } from './course-category.service';
import { CreateCourseCategoryDto } from './dto/create-course-category.dto';
import { UpdateCourseCategoryDto } from './dto/update-course-category.dto';
import { END_POINTS } from 'src/utils/constants';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { CourseCategory } from './entities/course-category.entity';
import { ResponseObject } from 'src/utils/objects';

@Controller(END_POINTS.COURSE_CATEGORY.BASE)
export class CourseCategoryController {
  constructor(
    private readonly courseCategoryService: CourseCategoryService,
    @InjectMapper() private readonly mapper: Mapper,
  ) {}

  @Post(END_POINTS.COURSE_CATEGORY.CREATE)
  async create(@Body() createCourseCategoryDto: CreateCourseCategoryDto) {
    const category = this.mapper.map(
      createCourseCategoryDto,
      CreateCourseCategoryDto,
      CourseCategory,
    );
    const result = await this.courseCategoryService.create(category);
    return ResponseObject.create(
      'Course category created successfully',
      result,
    );
  }

  @Get()
  findAll() {
    return this.courseCategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.courseCategoryService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCourseCategoryDto: UpdateCourseCategoryDto,
  ) {
    return this.courseCategoryService.update(+id, updateCourseCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courseCategoryService.remove(+id);
  }
}
