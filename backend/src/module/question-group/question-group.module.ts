import { Module } from '@nestjs/common';
import { QuestionGroupService } from './question-group.service';
import { QuestionGroupController } from './question-group.controller';

@Module({
  controllers: [QuestionGroupController],
  providers: [QuestionGroupService],
})
export class QuestionGroupModule {}
