import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
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
