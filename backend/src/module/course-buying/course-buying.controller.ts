import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CourseBuyingService } from './course-buying.service';
import { CreateCourseBuyingDto } from './dto/create-course-buying.dto';
import { UpdateCourseBuyingDto } from './dto/update-course-buying.dto';

@Controller('course-buying')
export class CourseBuyingController {
  constructor(private readonly courseBuyingService: CourseBuyingService) {}

  @Post()
  async create(@Body() createCourseBuyingDto: CreateCourseBuyingDto) {
    return this.courseBuyingService.create(createCourseBuyingDto);
  }

  @Get()
  findAll() {
    return this.courseBuyingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.courseBuyingService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateCourseBuyingDto: UpdateCourseBuyingDto,
  ) {
    return this.courseBuyingService.update(id, updateCourseBuyingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.courseBuyingService.remove(id);
  }

  // Endpoint tạo session thanh toán cho Stripe
  @Post('payment/:id')
  async createPaymentSession(@Param('id') id: number) {
    return this.courseBuyingService.createPaymentSession(id);
  }

  @Post('vnpay-payment/:id')
  async createVNPayPaymentSession(@Param('id') id: number) {
    return this.courseBuyingService.createVNPayPaymentSession(id);
  }
}

