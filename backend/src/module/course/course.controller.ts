import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  NotFoundException,
  Query,
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
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CourseCategoryService } from '../course-category/course-category.service';
import { GetAllCourseQuery } from './dto/get-all-course.dto';
import {
  PaginatedResponse,
  PaginatedResult,
} from 'src/utils/paginated-response';

@ApiBearerAuth()
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
  @Get(END_POINTS.COURSE.GET_ALL_COURSES)
  @ApiOperation({ summary: 'Get all courses by student' })
  async findAllCourses(@Query() query: GetAllCourseQuery) {
    const { courses, count } = await this.courseService.findAllCourses(query);
    return PaginatedResult.create(
      'Courses retrieved successfully',
      PaginatedResponse.create(courses, query.page, count, query.take),
    );
  }

  @Get(END_POINTS.COURSE.GET_RECOMMENDATION_COURSES)
  @ApiOperation({ summary: 'Get recommendation course by student' })
  async findAllRecommendationCourses() {
    const courses = await this.courseService.findAllRecommendationCourses();
    return ResponseObject.create('Courses retrieved successfully', courses);
  }

  @Get(END_POINTS.COURSE.GET_MY_COURSE_BY_TEACHER)
  @ApiOperation({
    summary: 'Get all courses of teacher',
  })
  async findMyCourseByTeacher(@User() user: IUser) {
    const courses = await this.courseService.findAll(user.userAwsId);
    return ResponseObject.create('Courses retrieved successfully', courses);
  }

  @Get(END_POINTS.COURSE.GET_MY_COURSE_BY_STUDENT)
  @ApiOperation({
    summary: 'Get all courses of user',
  })
  async findMyCourseByUser(@User() user: IUser) {
    const courses = await this.courseService.findAllByStudent(user.userAwsId);
    return ResponseObject.create('Courses retrieved successfully', courses);
  }
  @Get(END_POINTS.COURSE.GET_DETAIL)
  @ApiOperation({
    summary: 'Get course detail by id',
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
