import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { S3Module } from './s3/s3.module';

@Module({
  imports: [AuthModule, UserModule, S3Module],
  exports: [AuthModule, UserModule, S3Module],
})
export class SharedModule {}
