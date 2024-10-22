import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SectionMediaService } from './section-media.service';
import { CreateSectionMediaDto } from './dto/create-section-media.dto';
import { UpdateSectionMediaDto } from './dto/update-section-media.dto';

@Controller('section-media')
export class SectionMediaController {
  constructor(private readonly sectionMediaService: SectionMediaService) {}

  @Post()
  create(@Body() createSectionMediaDto: CreateSectionMediaDto) {
    return this.sectionMediaService.create(createSectionMediaDto);
  }

  @Get()
  findAll() {
    return this.sectionMediaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sectionMediaService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSectionMediaDto: UpdateSectionMediaDto,
  ) {
    return this.sectionMediaService.update(+id, updateSectionMediaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sectionMediaService.remove(+id);
  }
}
