import { RecombeeService } from './recombee.service';
import { Controller, Get, Post, Query } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Public } from '../../common/decorators/public.decorator';
import { ResponseObject } from '../../utils/objects';
import { CourseBuying } from '../course-buying/entities/course-buying.entity';
import { RECOMBEE_INTERACTION } from '../../utils/constants';

@Controller('recombee')
export class RecombeeController {
  constructor(
    private readonly recombeeService: RecombeeService,
    private readonly dataSource: DataSource,
  ) {}
  @Public()
  @Get('recommendations')
  async getRecommendations(@Query('userId') userId: string) {
    const res = await this.recombeeService.recommendItems(userId, 5);
    return ResponseObject.create('reccomendation', res);
  }
  @Public()
  @Post('seed')
  async seed() {
    const coursePublic = await this.dataSource
      .getRepository(CourseBuying)
      .createQueryBuilder('courseBuying')
      .leftJoinAndSelect('courseBuying.course', 'course')
      .leftJoinAndSelect('courseBuying.student', 'student')
      .leftJoinAndSelect('student.userInfo', 'userInfo')
      .where('courseBuying.active = :active', { active: true })
      .getMany();
    await Promise.all(
      coursePublic.map(async (courseBuying) => {
        const course = courseBuying.course;
        const student = courseBuying.student.userInfo;
        return this.recombeeService.addInteraction(
          RECOMBEE_INTERACTION.PURCHASE,
          student.id,
          course.id,
        );
      }),
    );
  }
}
