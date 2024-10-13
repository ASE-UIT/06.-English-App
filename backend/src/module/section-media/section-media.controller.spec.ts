import { Test, TestingModule } from '@nestjs/testing';
import { SectionMediaController } from './section-media.controller';
import { SectionMediaService } from './section-media.service';

describe('SectionMediaController', () => {
  let controller: SectionMediaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SectionMediaController],
      providers: [SectionMediaService],
    }).compile();

    controller = module.get<SectionMediaController>(SectionMediaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
