import { Module } from '@nestjs/common';
import { GrammarService } from './grammar.service';
import { GrammarController } from './grammar.controller';

@Module({
  controllers: [GrammarController],
  providers: [GrammarService],
})
export class GrammarModule {}
