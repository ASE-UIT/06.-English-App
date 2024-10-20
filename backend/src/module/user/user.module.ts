import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserProfile } from '../../common/mappers/user.profile';

@Module({
  controllers: [UserController],
  providers: [UserService, UserProfile],
})
export class UserModule {}
