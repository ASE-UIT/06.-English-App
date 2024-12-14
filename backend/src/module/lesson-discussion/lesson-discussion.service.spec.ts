import { Test, TestingModule } from '@nestjs/testing';
import { LessonDiscussionService } from './lesson-discussion.service';

describe('LessonDiscussionService', () => {
  let service: LessonDiscussionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LessonDiscussionService],
    }).compile();

    service = module.get<LessonDiscussionService>(LessonDiscussionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
