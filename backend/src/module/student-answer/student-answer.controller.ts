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

@ApiBearerAuth()
@ApiTags(DOCUMENTATION.TAGS.STUDENT_ANSWER)
@Controller(END_POINTS.STUDENT_ANSWER.BASE)
export class StudentAnswerController {
  constructor(private readonly studentAnswerService: StudentAnswerService) {}

  @Post(END_POINTS.STUDENT_ANSWER.SUBMIT_ANSWER)
  create(@Body() createStudentAnswerDto: StudentAnswerSubmit) {
    return this.studentAnswerService.create(createStudentAnswerDto);
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
