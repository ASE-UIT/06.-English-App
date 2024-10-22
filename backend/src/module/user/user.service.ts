import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly dataSource: DataSource) {}

  async findMe(awsId: string) {
    return this.dataSource.getRepository(User).findOneOrFail({
      where: {
        awsCognitoId: awsId,
      },
    });
  }
}
