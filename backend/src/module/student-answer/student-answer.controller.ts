import { Controller, Post, Body, Patch } from '@nestjs/common';
import { StudentAnswerService } from './student-answer.service';
import { DOCUMENTATION, END_POINTS } from 'src/utils/constants';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { User } from 'src/common/decorators/user.decorator';
import { IUser } from 'src/common/guards/at.guard';
import { ResponseObject } from 'src/utils/objects';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { CreateStudentAnswerDto } from './dto/create-student-answer.dto';
import { StudentAnswer } from './entities/student-answer.entity';
import { CreateSubmitAnswerDto } from './dto/create-submit-answer.dto';
import { CreateStudentAnswerSpeakingDto } from './dto/create-student-answer-speaking.dto';
import { GetHistoryResultDto } from './dto/get-history-result.dto';

@ApiBearerAuth()
@ApiTags(DOCUMENTATION.TAGS.STUDENT_ANSWER)
@Controller(END_POINTS.STUDENT_ANSWER.BASE)
export class StudentAnswerController {
  constructor(
    private readonly studentAnswerService: StudentAnswerService,
    @InjectMapper() private readonly mapper: Mapper,
  ) {}

  @ApiOperation({ summary: 'Submit student answer' })
  @Post(END_POINTS.STUDENT_ANSWER.SUBMIT_ANSWER)
  async submit(
    @User() user: IUser,
    @Body() createStudentAnswerDto: CreateSubmitAnswerDto,
  ) {
    const studentAnswers = this.mapper.mapArray(
      createStudentAnswerDto.answers,
      CreateStudentAnswerDto,
      StudentAnswer,
    );
    const result = await this.studentAnswerService.submit(
      studentAnswers,
      user.userAwsId,
    );
    return ResponseObject.create('Successfully', result);
  }

  @ApiOperation({ summary: 'Submit student speaking answer' })
  @Post(END_POINTS.STUDENT_ANSWER.SUBMIT_SPEAKING_ANSWER)
  async submitSpeaking(
    @User() user: IUser,
    @Body() body: CreateStudentAnswerSpeakingDto,
  ) {
    const studentAnswer = this.mapper.map(
      body,
      CreateStudentAnswerSpeakingDto,
      StudentAnswer,
    );
    const result = await this.studentAnswerService.submitSpeaking(
      studentAnswer,
      user.userAwsId,
    );
    return ResponseObject.create('Successfully', result);
  }
  @ApiOperation({ summary: 'Get section solution' })
  @Post(END_POINTS.STUDENT_ANSWER.GET_SOLUTION)
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        sectionId: { type: 'string' },
      },
    },
  })
  async getSolution(@Body() body: { sectionId: string }) {
    const result = await this.studentAnswerService.getSolution(body.sectionId);
    return ResponseObject.create('Successfully', result);
  }

  @ApiOperation({ summary: 'Get history result' })
  @Post(END_POINTS.STUDENT_ANSWER.GET_HISTORY_RESULT)
  async getHistoryResult(
    @User() user: IUser,
    @Body() body: GetHistoryResultDto,
  ) {
    const result = await this.studentAnswerService.getHistoryResult(
      body,
      user.userAwsId,
    );
    return ResponseObject.create('Successfully', result);
  }

  // @ApiOperation({ summary: 'Update student speaking answer' })
  // @Patch(END_POINTS.STUDENT_ANSWER.UPDATE_SPEAKING_ANSWER)
  // async updateSpeaking(
  //   @User() user: IUser,
  //   @Body() body: UpdateStudentAnswerSpeakingDto,
  // ) {

  // }
}
