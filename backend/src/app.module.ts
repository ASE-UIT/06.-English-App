import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from './datasource/typeorm.module'; // Import TypeOrmModule nếu chưa có
import { CourseBuyingModule } from './module/course-buying/course-buying.module'; // Import CourseBuyingModule
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';
import { SharedModule } from './module/shared.module';
import { ThrottlerModule, minutes } from '@nestjs/throttler';
import configuration from './config/configuration';
import paymentConfig from './config/payment.config';

@Module({
  imports: [
    TypeOrmModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      cache: true,
    }),
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
    }),
    ThrottlerModule.forRoot([
      {
        ttl: minutes(5),
        limit: 10,
      },
    ]),
    SharedModule,
    CourseBuyingModule, 
    
  ],
})
export class AppModule {}
