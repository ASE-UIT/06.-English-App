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
  create(@Body() createCourseBuyingDto: CreateCourseBuyingDto) {
    return this.courseBuyingService.create(createCourseBuyingDto);
  }

  @Get()
  findAll() {
    return this.courseBuyingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.courseBuyingService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCourseBuyingDto: UpdateCourseBuyingDto,
  ) {
    return this.courseBuyingService.update(+id, updateCourseBuyingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courseBuyingService.remove(+id);
  }
}
