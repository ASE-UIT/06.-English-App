import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GrammarService } from './grammar.service';
import { CreateGrammarDto } from './dto/create-grammar.dto';
import { UpdateGrammarDto } from './dto/update-grammar.dto';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { Grammar } from './entities/grammar.entity';
import { DOCUMENTATION, END_POINTS } from 'src/utils/constants';
import { ResponseObject } from 'src/utils/objects';
import { ApiTags } from '@nestjs/swagger';

@Controller(END_POINTS.GRAMMAR.BASE)
@ApiTags(DOCUMENTATION.TAGS.GRAMMAR)
export class GrammarController {
  constructor(
    private readonly grammarService: GrammarService,
    @InjectMapper() private readonly mapper: Mapper,
  ) {}

  @Post()
  async create(@Body() createGrammarDto: CreateGrammarDto) {
    const grammar = this.mapper.map(
      createGrammarDto,
      CreateGrammarDto,
      Grammar,
    );
    const newGrammar = await this.grammarService.create(grammar);
    return ResponseObject.create('Create grammar successfully', newGrammar);
  }

  @Get()
  async findAll() {
    const result = await this.grammarService.findAll();
    return ResponseObject.create('Get all grammar successfully', result);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result = await this.grammarService.findOne(id);
    return ResponseObject.create('Get grammar successfully', result);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateGrammarDto: UpdateGrammarDto,
  ) {
    const grammar = await this.mapper.mapAsync(
      updateGrammarDto,
      UpdateGrammarDto,
      Grammar,
    );
    const result = await this.grammarService.update(grammar);
    return ResponseObject.create('Update grammar successfully', result);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.grammarService.remove(id);
  }
}
