import { Module } from '@nestjs/common';
import configuration from './config/configuration';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from './datasource/typeorm.module';

@Module({
  imports: [
    TypeOrmModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      cache: true,
    }),
  ],
})
export class AppModule {}
