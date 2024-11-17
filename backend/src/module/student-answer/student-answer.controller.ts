import {
  Controller,
  Post,
  Body,
} from '@nestjs/common';
import { StudentAnswerService } from './student-answer.service';
import { DOCUMENTATION, END_POINTS } from 'src/utils/constants';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { User } from 'src/common/decorators/user.decorator';
import { IUser } from 'src/common/guards/at.guard';
import { ResponseObject } from 'src/utils/objects';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { CreateStudentAnswerDto } from './dto/create-student-answer.dto';
import { StudentAnswer } from './entities/student-answer.entity';

@ApiBearerAuth()
@ApiTags(DOCUMENTATION.TAGS.STUDENT_ANSWER)
@Controller(END_POINTS.STUDENT_ANSWER.BASE)
export class StudentAnswerController {
  constructor(private readonly studentAnswerService: StudentAnswerService,   @InjectMapper() private readonly mapper: Mapper) {}

  @ApiOperation({ summary: 'Submit student answer' })
  @Post(END_POINTS.STUDENT_ANSWER.SUBMIT_ANSWER)
  async submit(@Body() createStudentAnswerDto: CreateStudentAnswerDto[], @User() user: IUser, ) {
    const studentAnswers = await this.mapper.mapArray(createStudentAnswerDto, CreateStudentAnswerDto, StudentAnswer);
    const result = await this.studentAnswerService.submit(studentAnswers, user.userAwsId);
    return ResponseObject.create('Successfully',result);
  }
}
