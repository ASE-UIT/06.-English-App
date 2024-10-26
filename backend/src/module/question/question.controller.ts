import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Put,
} from '@nestjs/common';
import { QuestionService } from './question.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { ApiOperation, ApiParam } from '@nestjs/swagger';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Question } from './entities/question.entity';
import { Answer } from '../answer/entities/answer.entity';
import { CreateAnswerDto } from '../answer/dto/create-answer.dto';
import { ResponseObject } from 'src/utils/objects';
import { CreateQuestionMediaDto } from '../question-media/dto/create-question-media.dto';
import { QuestionMedia } from '../question-media/entities/question-media.entity';
import { END_POINTS } from 'src/utils/constants';
import { UpdateAnswerDto } from '../answer/dto/update-answer.dto';
import { UpdateQuestionMediaDto } from '../question-media/dto/update-question-media.dto';

@Controller(END_POINTS.QUESTION.BASE)
export class QuestionController {
  constructor(private readonly questionService: QuestionService,
    @InjectMapper() private readonly mapper: Mapper,
  ) {}

  @Post(END_POINTS.QUESTION.CREATE)
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

  @Get(END_POINTS.QUESTION.FIND_BY_SECTION)
  @ApiOperation({ summary: 'Find all questions belong to a section' })
  @ApiParam({ name: 'sectionId', type: 'string' })
  async findBySection(@Query('sectionId') sectionId: string) {
    return this.questionService.findBySection(sectionId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.questionService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update a question and it\'s answers' })
  @Put(END_POINTS.QUESTION.PUT)
  async update(
    @Body() updateQuestionDto: UpdateQuestionDto,
  ) {
    const question = this.mapper.map(updateQuestionDto, UpdateQuestionDto, Question);
    const answer = this.mapper.map(updateQuestionDto.answers, Array<UpdateAnswerDto>, Array<Answer>);
    const questionMedia = this.mapper.map(updateQuestionDto.questionMedias, Array<UpdateQuestionMediaDto>, Array<QuestionMedia>);

    question.answers = answer;
    question.questionMedias = questionMedia;
    const result = await this.questionService.update(question);
    return ResponseObject.create('Question updated', result);
  }

  @Delete(END_POINTS.QUESTION.DELETE)
  async remove(@Param('id') id: string) {
    const res = await this.questionService.remove(id);
    return ResponseObject.create('Question deleted', res);
  }
}
