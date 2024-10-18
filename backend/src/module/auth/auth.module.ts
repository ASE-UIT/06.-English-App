import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AuthProfile } from '../../common/mappers/auth.profile';
import { CognitoService } from './cognito.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, AuthProfile, CognitoService],
})
export class AuthModule {}
