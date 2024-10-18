import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as cookieParser from 'cookie-parser';
import { END_POINTS } from './util/constants';
import { JwtAuthGuard } from './common/guards/at.guard';
import { TimeoutInterceptor } from './common/interceptors/timeout.interceptor';
import { TransformInterceptor } from './common/interceptors/transform.interceptor';
import { LoggingInterceptor } from './common/interceptors/logger.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const reflector = app.get(Reflector);
  const port = configService.get<number>('port');
  const env = configService.get<string>('env');
  app.enableCors({
    origin: true,
    credentials: true,
  });
  app.use(helmet());
  app.use(cookieParser());
  app.setGlobalPrefix(END_POINTS.BASE);
  app.useGlobalGuards(new JwtAuthGuard(reflector, configService));
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );
  if (env === 'DEVELOPMENT') {
    app.useGlobalInterceptors(new LoggingInterceptor());
  }
  app.useGlobalInterceptors(new TimeoutInterceptor());
  app.useGlobalInterceptors(new TransformInterceptor());
  await app.listen(port || 3001);
  console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
