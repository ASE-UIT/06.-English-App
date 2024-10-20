import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '../../common/decorators/user.decorator';
import { User as UserEntity } from './entities/user.entity';
import { END_POINTS } from '../../utils/constants';
import { ResponseObject } from '../../utils/objects';
import { IUser } from '../../common/guards/at.guard';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { UserDto } from './dto/userD.dto';

@Controller(END_POINTS.USER.BASE)
export class UserController {
  constructor(
    private readonly userService: UserService,
    @InjectMapper() private readonly mapper: Mapper,
  ) {}

  @Get(END_POINTS.USER.ME)
  async getMe(@User() user: IUser) {
    const res = await this.userService.findMe(user.userAwsId);
    const userDto = this.mapper.map(res, UserEntity, UserDto);
    return ResponseObject.create('User retrieved', userDto);
  }
}
