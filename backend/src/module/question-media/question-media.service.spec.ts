import { Test, TestingModule } from '@nestjs/testing';
import { QuestionMediaService } from './question-media.service';

describe('QuestionMediaService', () => {
  let service: QuestionMediaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuestionMediaService],
    }).compile();

    service = module.get<QuestionMediaService>(QuestionMediaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
