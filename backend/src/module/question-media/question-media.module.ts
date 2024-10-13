import { Module } from '@nestjs/common';
import { QuestionMediaService } from './question-media.service';
import { QuestionMediaController } from './question-media.controller';

@Module({
  controllers: [QuestionMediaController],
  providers: [QuestionMediaService],
})
export class QuestionMediaModule {}
