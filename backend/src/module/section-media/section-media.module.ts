import { Module } from '@nestjs/common';
import { SectionMediaService } from './section-media.service';
import { SectionMediaController } from './section-media.controller';

@Module({
  controllers: [SectionMediaController],
  providers: [SectionMediaService],
})
export class SectionMediaModule {}
