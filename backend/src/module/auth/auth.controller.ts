import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';
import { InjectMapper, MapPipe } from '@automapper/nestjs';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { Mapper } from '@automapper/core';
import { CognitoService } from './cognito.service';
import { RegisterCognitoDto } from './dto/register-cognito.dto';
import { User } from '../user/entities/user.entity';
import { SignInCognitoDto } from './dto/sign-in-cognito.dto';
import { END_POINTS } from '../../util/constants';
import { Public } from '../../common/decorators/public.decorator';
import { ConfirmSignUpDto } from './dto/confirm-sign-up.dto';

@Controller(END_POINTS.AUTH.BASE)
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    @InjectMapper() private readonly mapper: Mapper,
    private readonly cognitoService: CognitoService,
  ) {}

  @Public()
  @Post(END_POINTS.AUTH.SIGN_UP)
  async create(@Body() registerAuthDto: RegisterAuthDto) {
    const registerCognitoDto = this.mapper.map(
      registerAuthDto,
      RegisterAuthDto,
      RegisterCognitoDto,
    );
    const cognitoId = await this.cognitoService.signUp(registerCognitoDto);
    const userCreated = this.mapper.map(registerAuthDto, RegisterAuthDto, User);
    userCreated.awsCognitoId = cognitoId;
    await this.authService.create(userCreated);
    return { message: 'User created' };
  }

  @Public()
  @Post(END_POINTS.AUTH.SIGN_IN)
  async signIn(
    @Body() signinCognitoDto: SignInCognitoDto,
    @Res() response: Response,
  ) {
    const { accessToken, userSub, refreshToken } =
      await this.cognitoService.signIn(signinCognitoDto);
    this.authService.setRefreshToken(response, refreshToken);
    return { accessToken, userSub };
  }

  @Public()
  @Post(END_POINTS.AUTH.CONFIRM_SIGN_UP)
  async confirmSignUp(@Body() confirmSignUpDto: ConfirmSignUpDto) {
    return this.cognitoService.confirmSignUp(confirmSignUpDto);
  }

  @Post(END_POINTS.AUTH.SIGN_OUT)
  async signOut(@Res() response: Response) {
    this.authService.removeRefreshToken(response);
  }
}
