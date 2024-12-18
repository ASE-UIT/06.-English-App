import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RecombeeService } from './recombee.service';
@Global()
@Module({
  imports: [ConfigModule],

  providers: [RecombeeService],
  exports: [RecombeeService],
})
export class RecombeeModule {}
