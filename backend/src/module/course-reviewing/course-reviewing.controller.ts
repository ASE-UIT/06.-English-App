import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  Query,
} from '@nestjs/common';
import { CourseReviewingService } from './course-reviewing.service';
import { CreateCourseReviewingDto } from './dto/create-course-reviewing.dto';
import { UpdateCourseReviewingDto } from './dto/update-course-reviewing.dto';
import { END_POINTS } from 'src/utils/constants';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { CourseReviewing } from './entities/course-reviewing.entity';
import { ResponseObject } from 'src/utils/objects';
import { ApiOperation } from '@nestjs/swagger';

@Controller(END_POINTS.COURSE_REVIEW.BASE)
export class CourseReviewingController {
  constructor(
    private readonly courseReviewingService: CourseReviewingService,
    @InjectMapper() private readonly mapper: Mapper,
  ) {}

  @ApiOperation({
    summary: 'Create a course review',
  })
  @Post(END_POINTS.COURSE_REVIEW.CREATE)
  async create(@Body() createCourseReviewingDto: CreateCourseReviewingDto) {
    try {
      const courseReviewing = this.mapper.map(createCourseReviewingDto, CreateCourseReviewingDto, CourseReviewing);
      const result = await this.courseReviewingService.create(courseReviewing);

      return ResponseObject.create('Course Reviewing created', result);
    } catch(error) {
      return new HttpException(error.message, 500);
    }
  }

  @ApiOperation({
    summary: 'Get all course reviews of one course',
  })
  @Get(END_POINTS.COURSE_REVIEW.LIST)
  async findAll(@Query('courseId') courseId: string) {
    try {
      const result = await this.courseReviewingService.findAll(courseId);
      return ResponseObject.create('Course Reviewing list', result);
    } catch (error) {
      return new HttpException(error.message, 500);
    }
  }

  @Patch(END_POINTS.COURSE_REVIEW.UPDATE)
  update(
    @Param('id') id: string,
    @Body() updateCourseReviewingDto: UpdateCourseReviewingDto,
  ) {
    try {
      const courseReviewing = this.mapper.map(updateCourseReviewingDto, UpdateCourseReviewingDto, CourseReviewing);
      courseReviewing.id = id;
      const result = this.courseReviewingService.update(courseReviewing);
      return ResponseObject.create('Course Reviewing updated', result);
    } catch (error) {
      return new HttpException(error.message, 500);
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.courseReviewingService.findOne(+id);
  }

  @Delete(END_POINTS.COURSE_REVIEW.DELETE)
  remove(@Param('id') id: string) {
    try {
      const result = this.courseReviewingService.remove(id);
      return ResponseObject.create('Course Reviewing deleted', result);
    } catch (error) {
      return new HttpException(error.message, 500);
    }
  }
}
