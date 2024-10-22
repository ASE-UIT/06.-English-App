import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { QuestionMediaService } from './question-media.service';
import { CreateQuestionMediaDto } from './dto/create-question-media.dto';
import { UpdateQuestionMediaDto } from './dto/update-question-media.dto';

@Controller('question-media')
export class QuestionMediaController {
  constructor(private readonly questionMediaService: QuestionMediaService) {}

  @Post()
  create(@Body() createQuestionMediaDto: CreateQuestionMediaDto) {
    return this.questionMediaService.create(createQuestionMediaDto);
  }

  @Get()
  findAll() {
    return this.questionMediaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.questionMediaService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateQuestionMediaDto: UpdateQuestionMediaDto,
  ) {
    return this.questionMediaService.update(+id, updateQuestionMediaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.questionMediaService.remove(+id);
  }
}
