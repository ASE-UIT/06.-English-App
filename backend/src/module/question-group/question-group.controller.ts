import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { QuestionGroupService } from './question-group.service';
import { CreateQuestionGroupDto } from './dto/create-question-group.dto';
import { UpdateQuestionGroupDto } from './dto/update-question-group.dto';

@Controller('question-group')
export class QuestionGroupController {
  constructor(private readonly questionGroupService: QuestionGroupService) {}

  @Post()
  create(@Body() createQuestionGroupDto: CreateQuestionGroupDto) {
    return this.questionGroupService.create(createQuestionGroupDto);
  }

  @Get()
  findAll() {
    return this.questionGroupService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.questionGroupService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateQuestionGroupDto: UpdateQuestionGroupDto,
  ) {
    return this.questionGroupService.update(+id, updateQuestionGroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.questionGroupService.remove(+id);
  }
}
