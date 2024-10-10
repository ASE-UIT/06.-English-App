import { Test, TestingModule } from '@nestjs/testing';
import { QuestionMediaController } from './question-media.controller';
import { QuestionMediaService } from './question-media.service';

describe('QuestionMediaController', () => {
  let controller: QuestionMediaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuestionMediaController],
      providers: [QuestionMediaService],
    }).compile();

    controller = module.get<QuestionMediaController>(QuestionMediaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
