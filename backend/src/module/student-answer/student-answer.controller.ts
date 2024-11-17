import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StudentAnswerService } from './student-answer.service';
import { UpdateStudentAnswerDto } from './dto/update-student-answer.dto';
import { DOCUMENTATION, END_POINTS } from 'src/utils/constants';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { StudentAnswerSubmit } from './dto/student-answer-submit.dto';
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

  @Post(END_POINTS.STUDENT_ANSWER.SUBMIT_ANSWER)
  async submit(@Body() createStudentAnswerDto: CreateStudentAnswerDto[], @User() user: IUser, ) {
    const studentAnswers = await this.mapper.mapArray(createStudentAnswerDto, CreateStudentAnswerDto, StudentAnswer);
    const result = await this.studentAnswerService.submit(studentAnswers, user.userAwsId);
    return ResponseObject.create('Successfully',result);
  }

  @Get()
  findAll() {
    return this.studentAnswerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentAnswerService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateStudentAnswerDto: UpdateStudentAnswerDto,
  ) {
    return this.studentAnswerService.update(+id, updateStudentAnswerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentAnswerService.remove(+id);
  }
}
