import { Test, TestingModule } from '@nestjs/testing';
import { LessonDiscussionController } from './lesson-discussion.controller';
import { LessonDiscussionService } from './lesson-discussion.service';

describe('LessonDiscussionController', () => {
  let controller: LessonDiscussionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LessonDiscussionController],
      providers: [LessonDiscussionService],
    }).compile();

    controller = module.get<LessonDiscussionController>(LessonDiscussionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
