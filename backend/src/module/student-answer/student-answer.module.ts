import { Module } from '@nestjs/common';
import { StudentAnswerService } from './student-answer.service';
import { StudentAnswerController } from './student-answer.controller';

@Module({
  controllers: [StudentAnswerController],
  providers: [StudentAnswerService],
})
export class StudentAnswerModule {}
