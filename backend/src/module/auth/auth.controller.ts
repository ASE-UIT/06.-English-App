import { Controller, Get, Post, Body, Res, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';
import { InjectMapper, MapPipe } from '@automapper/nestjs';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { Mapper } from '@automapper/core';
import { CognitoService } from './cognito.service';
import { RegisterCognitoDto } from './dto/register-cognito.dto';
import { User as UserReq } from '../../common/decorators/user.decorator';
import { User } from '../user/entities/user.entity';
import { SignInCognitoDto } from './dto/sign-in-cognito.dto';
import { END_POINTS } from '../../utils/constants';
import { Public } from '../../common/decorators/public.decorator';
import { ConfirmSignUpDto } from './dto/confirm-sign-up.dto';
import { UserDto } from '../user/dto/userD.dto';
import { IUser } from '../../common/guards/at.guard';
import { ResponseObject } from '../../utils/objects';

@Controller(END_POINTS.AUTH.BASE)
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    @InjectMapper() private readonly mapper: Mapper,
    private readonly cognitoService: CognitoService,
  ) {}

  @Public()
  @Post(END_POINTS.AUTH.SIGN_UP)
  async signUp(@Body() registerAuthDto: RegisterAuthDto) {
    const registerCognitoDto = this.mapper.map(
      registerAuthDto,
      RegisterAuthDto,
      RegisterCognitoDto,
    );
    const cognitoId = await this.cognitoService.signUp(registerCognitoDto);
    const userCreated = this.mapper.map(registerAuthDto, RegisterAuthDto, User);
    userCreated.awsCognitoId = cognitoId;
    const res = await this.authService.create(userCreated);
    return ResponseObject.create('User created', res);
  }

  @Public()
  @Post(END_POINTS.AUTH.OAUTH2_CREATE)
  async oauth2Create(@Body() userDto: UserDto) {
    const userCreated = this.mapper.map(userDto, UserDto, User);
    const res = await this.authService.create(userCreated);
    return ResponseObject.create('User created', res);
  }

  @Public()
  @Post(END_POINTS.AUTH.SIGN_IN)
  async signIn(
    @Body() signInCognitoDto: SignInCognitoDto,
    @Res() response: Response,
  ) {
    const { accessToken, userSub, refreshToken } =
      await this.cognitoService.signIn(signInCognitoDto);
    this.authService.setRefreshToken(response, refreshToken);
    return ResponseObject.create('User signed in', { accessToken, userSub });
  }

  @Public()
  @Post(END_POINTS.AUTH.CONFIRM_SIGN_UP)
  async confirmSignUp(@Body() confirmSignUpDto: ConfirmSignUpDto) {
    return this.cognitoService.confirmSignUp(confirmSignUpDto);
  }

  @Public()
  @Get(END_POINTS.AUTH.CALL_BACK)
  async googleSignInCallback(
    @Query('code') code: string,
    @Res() response: Response,
  ) {
    const { userInfo, accessToken, refreshToken } =
      await this.cognitoService.handleOauth(code);
    this.authService.setRefreshToken(response, refreshToken);
    return ResponseObject.create('User signed in', { userInfo, accessToken });
  }

  @Post(END_POINTS.AUTH.SIGN_OUT)
  async signOut(@UserReq() user: IUser, @Res() response: Response) {
    this.authService.removeRefreshToken(response);
    await this.cognitoService.signOut(user.userName);
    return ResponseObject.create('User signed out');
  }
}
