import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AuthProfile } from '../../common/mappers/auth.profile';
import { CognitoService } from './cognito.service';
import { HttpModule } from '@nestjs/axios';
import { RolesGuard } from '../../common/guards/role.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  controllers: [AuthController],
  imports: [HttpModule],
  providers: [
    AuthService,
    AuthProfile,
    CognitoService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AuthModule {}
