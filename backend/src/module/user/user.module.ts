import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserProfile } from '../../common/mappers/user.profile';
import { AuthService } from '../auth/auth.service';

@Module({
  controllers: [UserController],
  providers: [UserService, UserProfile, AuthService],
})
export class UserModule {}
