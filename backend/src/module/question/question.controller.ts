import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { QuestionService } from './question.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { ApiOperation } from '@nestjs/swagger';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Question } from './entities/question.entity';
import { Answer } from '../answer/entities/answer.entity';
import { CreateAnswerDto } from '../answer/dto/create-answer.dto';
import { ResponseObject } from 'src/utils/objects';
import { CreateQuestionMediaDto } from '../question-media/dto/create-question-media.dto';
import { QuestionMedia } from '../question-media/entities/question-media.entity';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService,
    @InjectMapper() private readonly mapper: Mapper,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create a new question with its answers' })
  async create(@Body() createQuestionDto: CreateQuestionDto) {
    const question = this.mapper.map(createQuestionDto, CreateQuestionDto, Question);
    const answer = this.mapper.map(createQuestionDto.answers, Array<CreateAnswerDto>, Array<Answer>);
    const questionMedias = this.mapper.map(createQuestionDto.questionMedias, Array<CreateQuestionMediaDto>, Array<QuestionMedia>);
    question.answers = answer;
    question.questionMedias = questionMedias;
    const newQuestion = await this.questionService.create(question);

    return ResponseObject.create('Question created', newQuestion);
  }

  @Get()
  findAll() {
    return this.questionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.questionService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateQuestionDto: UpdateQuestionDto,
  ) {
    return this.questionService.update(+id, updateQuestionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.questionService.remove(+id);
  }
}
