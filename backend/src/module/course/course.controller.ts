import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { END_POINTS } from 'src/utils/constants';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Course } from './entities/course.entity';
import { ResponseObject } from 'src/utils/objects';
import { User } from 'src/common/decorators/user.decorator';
import { IUser } from 'src/common/guards/at.guard';

@Controller(END_POINTS.COURSE.BASE)
export class CourseController {
  constructor(
    private readonly courseService: CourseService,
    @InjectMapper() private readonly mapper: Mapper,
  ) {}

  @Post(END_POINTS.COURSE.CREATE)
  async create(@User() user: IUser, @Body() createCourseDto: CreateCourseDto) {
    console.log(createCourseDto);
    const course = this.mapper.map(createCourseDto, CreateCourseDto, Course);
    const result = await this.courseService.create(user.userAwsId, course);
    return ResponseObject.create('Course created', result);
  }

  @Get()
  findAll() {
    return this.courseService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result = await this.courseService.findOne(id);
    return ResponseObject.create('Course retrieved successfully', result);
  }

  @Put()
  async update(@Body() updateCourseDto: UpdateCourseDto) {
    const question = this.mapper.map(updateCourseDto, UpdateCourseDto, Course);
    const result = await this.courseService.update(question);
    return ResponseObject.create('Course updated', result);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courseService.remove(+id);
  }
}
