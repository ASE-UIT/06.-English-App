import { Controller, Get, Post, Body, Req, Query, Res } from '@nestjs/common';
import { CourseBuyingService } from './course-buying.service';
import { CreateCourseBuyingDto } from './dto/create-course-buying.dto';
import { END_POINTS } from 'src/utils/constants';
import { ApiBearerAuth } from '@nestjs/swagger';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { CourseBuying } from './entities/course-buying.entity';
import { ResponseObject } from 'src/utils/objects';
import { Request, Response } from 'express';
import { User } from 'src/common/decorators/user.decorator';
import { IUser } from 'src/common/guards/at.guard';
import { UpdateLessonProgress } from './dto/update-lesson-progress.dto';

@ApiBearerAuth()
@Controller(END_POINTS.COURSE_BUYING.BASE)
export class CourseBuyingController {
  constructor(
    private readonly courseBuyingService: CourseBuyingService,
    @InjectMapper() private readonly mapper: Mapper,
  ) {}

  @Post(END_POINTS.COURSE_BUYING.CREATE)
  async create(
    @Body() createCourseBuyingDto: CreateCourseBuyingDto,
    @User() user: IUser,
  ) {
    const courseBuying = this.mapper.map(
      createCourseBuyingDto,
      CreateCourseBuyingDto,
      CourseBuying,
    );
    const result = await this.courseBuyingService.create(
      courseBuying,
      createCourseBuyingDto.courseId,
      user.userAwsId,
    );
    return ResponseObject.create('CourseBuying created successfully', result);
  }

  @Post(END_POINTS.COURSE_BUYING.CREATE_PAY_ORDER_URL)
  async createPayOrderUrl(
    @Req() req: Request,
    @Body() body: { courseBuyingId: string },
  ) {
    const result = await this.courseBuyingService.createPayOrderUrl(
      req,
      body.courseBuyingId,
    );
    return ResponseObject.create('Pay order url created successfully', {
      result,
    });
  }
  @Post(END_POINTS.COURSE_BUYING.VALIDATE_PAY_ORDER)
  async validatePayOrder(@Query() query: any) {
    const validationResult =
      await this.courseBuyingService.validatePayOrder(query);
    return ResponseObject.create(validationResult.message, {
      code: validationResult.code,
    });
  }
  @Get(END_POINTS.COURSE_BUYING.VNPAY_IPN)
  async ipnVnpayUrl(@Query() query: any, @Res() res: Response) {
    return await this.courseBuyingService.ipnVnpayUrl(query, res);
  }

  @Post(END_POINTS.COURSE_BUYING.MARK_AS_COMPLETED)
  async markAsCompleted(@Body() body: UpdateLessonProgress) {
    await this.courseBuyingService.markAsCompleted(body.lessonId);
    return ResponseObject.create(
      'CourseBuying marked as completed successfully',
      null,
    );
  }
}
