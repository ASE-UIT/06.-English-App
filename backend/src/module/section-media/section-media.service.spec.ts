import { Test, TestingModule } from '@nestjs/testing';
import { SectionMediaService } from './section-media.service';

describe('SectionMediaService', () => {
  let service: SectionMediaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SectionMediaService],
    }).compile();

    service = module.get<SectionMediaService>(SectionMediaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
