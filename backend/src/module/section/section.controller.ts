import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SectionService } from './section.service';
import { CreateSectionDto } from './dto/create-section.dto';
import { UpdateSectionDto } from './dto/update-section.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { DOCUMENTATION, END_POINTS } from 'src/utils/constants';

@Controller(END_POINTS.SECTION.BASE)
@ApiTags(DOCUMENTATION.TAGS.SECTION)
export class SectionController {
  constructor(private readonly sectionService: SectionService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new section',
  })
  async create(@Body() createSectionDto: CreateSectionDto) {
    return this.sectionService.create(createSectionDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all sections',
  })
  async findAll() {
    return this.sectionService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.sectionService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateSectionDto: UpdateSectionDto,
  ) {
    return this.sectionService.update(+id, updateSectionDto);
  }

  @Delete(':id')
  async sremove(@Param('id') id: string) {
    return this.sectionService.remove(+id);
  }
}
