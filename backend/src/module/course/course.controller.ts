import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  NotFoundException,
} from '@nestjs/common';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { DOCUMENTATION, END_POINTS } from 'src/utils/constants';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Course } from './entities/course.entity';
import { ResponseObject } from 'src/utils/objects';
import { User } from 'src/common/decorators/user.decorator';
import { IUser } from 'src/common/guards/at.guard';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CourseCategoryService } from '../course-category/course-category.service';

@Controller(END_POINTS.COURSE.BASE)
@ApiTags(DOCUMENTATION.TAGS.COURSE)
export class CourseController {
  constructor(
    private readonly courseService: CourseService,
    private readonly courseCategoryService: CourseCategoryService,
    @InjectMapper() private readonly mapper: Mapper,
  ) {}

  @Post(END_POINTS.COURSE.CREATE)
  @ApiOperation({ summary: 'Create course' })
  async create(@User() user: IUser, @Body() createCourseDto: CreateCourseDto) {
    const [category, teacher] = await Promise.all([
      this.courseCategoryService.findOne(createCourseDto.categoryId),
      this.courseService.findTeacherByAwsId(user.userAwsId),
    ]);
    if (!category) {
      throw new NotFoundException('Category not found');
    }
    const course = this.mapper.map(createCourseDto, CreateCourseDto, Course);
    course.category = category;
    course.teacher = teacher;
    const result = await this.courseService.create(user.userAwsId, course);
    return ResponseObject.create('Course created', result);
  }

  @Get()
  @ApiOperation({ summary: 'Get all courses of teacher' })
  async findAll(@User() user: IUser) {
    const courses = await this.courseService.findAll(user.userAwsId);
    return ResponseObject.create('Courses retrieved successfully', courses);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get course by id',
  })
  async findOne(@Param('id') id: string) {
    const result = await this.courseService.findOne(id);
    return ResponseObject.create('Course retrieved successfully', result);
  }

  @Put()
  @ApiOperation({
    summary: 'Update course',
  })
  async update(@User() user: IUser, @Body() updateCourseDto: UpdateCourseDto) {
    const category = await this.courseCategoryService.findOne(
      updateCourseDto.categoryId,
    );
    const teacher = await this.courseService.findTeacherByAwsId(user.userAwsId);
    if (!category) {
      throw new NotFoundException('Category not found');
    }
    const courseUpdated = this.mapper.map(
      updateCourseDto,
      UpdateCourseDto,
      Course,
    );
    courseUpdated.teacher = teacher;
    courseUpdated.category = category;
    const result = await this.courseService.update(courseUpdated);
    return ResponseObject.create('Course updated', result);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courseService.remove(id);
  }
}
