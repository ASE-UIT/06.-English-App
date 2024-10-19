// src/auth/cognito.service.ts
import {
  AdminInitiateAuthCommand,
  CognitoIdentityProviderClient,
  ConfirmForgotPasswordCommand,
  ConfirmSignUpCommand,
  ForgotPasswordCommand,
  ResendConfirmationCodeCommand,
  SignUpCommand,
} from '@aws-sdk/client-cognito-identity-provider';
import {
  BadRequestException,
  HttpException,
  Injectable,
  Req,
  Res,
} from '@nestjs/common';
import { RegisterCognitoDto } from './dto/register-cognito.dto';
import { SignInCognitoDto } from './dto/sign-in-cognito.dto';
import { ConfirmSignUpDto } from './dto/confirm-sign-up.dto';
import { ConfigService } from '@nestjs/config';
import { AUTH_FLOW } from '../../util/constants';
import { Request, Response } from 'express';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class CognitoService {
  private cognitoClient: CognitoIdentityProviderClient;
  private readonly userPoolId: string;
  private readonly clientId: string;
  private readonly cognitoDomain: string;
  private readonly cognitoRedirectUri: string;
  private readonly cognitoClientSecret: string;
  private readonly client: string;

  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {
    this.userPoolId = this.configService.get<string>('userPoolId');
    this.clientId = this.configService.get<string>('audience');
    this.cognitoDomain = this.configService.get<string>('cognitoDomain');
    this.cognitoClientSecret = this.configService.get<string>(
      'cognitoClientSecret',
    );
    this.client = this.configService.get<string>('client');
    this.cognitoRedirectUri =
      this.configService.get<string>('cognitoRedirectUri');
    this.cognitoClient = new CognitoIdentityProviderClient({
      region: this.configService.get<string>('region'),
      credentials: {
        accessKeyId: this.configService.get<string>('accessKeyId'),
        secretAccessKey: this.configService.get<string>('secretAccessKey'),
      },
    });
  }

  async signUp(registerCognitoDto: RegisterCognitoDto) {
    const command = new SignUpCommand({
      ClientId: this.clientId,
      Username: registerCognitoDto.username,
      Password: registerCognitoDto.password,
      UserAttributes: [
        {
          Name: 'email',
          Value: registerCognitoDto.email,
        },
        {
          Name: 'name',
          Value: registerCognitoDto.name,
        },
      ],
    });

    try {
      const response = await this.cognitoClient.send(command);
      return response.UserSub;
    } catch (error) {
      throw new BadRequestException(error.message, error.statusCode);
    }
  }

  async signIn(cognitoSignInDto: SignInCognitoDto) {
    const command = new AdminInitiateAuthCommand({
      UserPoolId: this.userPoolId,
      ClientId: this.clientId,
      AuthFlow: AUTH_FLOW,
      AuthParameters: {
        USERNAME: cognitoSignInDto.username,
        PASSWORD: cognitoSignInDto.password,
      },
    });

    try {
      const response = await this.cognitoClient.send(command);
      const accessToken = response.AuthenticationResult.AccessToken;
      const refreshToken = response.AuthenticationResult.RefreshToken;
      const idToken = response.AuthenticationResult.IdToken;

      const decodedToken = this.decodeJwt(idToken);
      const userSub = decodedToken.sub;
      console.log(accessToken, userSub, refreshToken);
      return { accessToken, userSub, refreshToken };
    } catch (error) {
      throw new BadRequestException(error.message, error.statusCode);
    }
  }

  redirectUrl(res: Response, provider: string) {
    const authUrl = `${this.cognitoDomain}/oauth2/authorize?identity_provider=${provider}&client_id=${this.clientId}&response_type=code&redirect_uri=${this.cognitoRedirectUri}&scope=openid+profile+email`;
    console.log(authUrl);
    res.redirect(authUrl);
  }

  async handleOauth(code: string) {
    try {
      const tokenResponse = await firstValueFrom(
        this.httpService
          .post(
            `${this.cognitoDomain}/oauth2/token`,
            new URLSearchParams({
              grant_type: 'authorization_code',
              client_id: this.clientId,
              client_secret: this.cognitoClientSecret,
              code: code,
              redirect_uri: this.cognitoRedirectUri,
            }),
            {
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            },
          )
          .pipe(
            catchError((error) => {
              throw new HttpException(
                error.response.data,
                error.response.status,
              );
            }),
          ),
      );

      const accessToken = tokenResponse.data.access_token;
      const refreshToken = tokenResponse.data.refresh_token;
      const idToken = tokenResponse.data.id_token;
      const userInfoResponse = await firstValueFrom(
        this.httpService.get(`${this.cognitoDomain}/oauth2/userInfo`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        }),
      );

      const userInfo = userInfoResponse.data;
      console.log(userInfo, accessToken, refreshToken, idToken);
      return { userInfo, accessToken, refreshToken, idToken };
    } catch (error) {
      throw new HttpException(error.response.data, error.response.status);
    }
  }

  async confirmSignUp(confirmationCode: ConfirmSignUpDto) {
    const command = new ConfirmSignUpCommand({
      ClientId: this.clientId,
      Username: confirmationCode.username,
      ConfirmationCode: confirmationCode.code,
    });

    try {
      return await this.cognitoClient.send(command);
    } catch (error) {
      throw new BadRequestException(error.message, error.statusCode);
    }
  }

  async forgotPassword(email: string) {
    const command = new ForgotPasswordCommand({
      ClientId: this.clientId,
      Username: email,
    });

    try {
      return await this.cognitoClient.send(command);
    } catch (error) {
      throw error;
    }
  }

  async confirmForgotPassword(
    email: string,
    confirmationCode: string,
    newPassword: string,
  ) {
    const command = new ConfirmForgotPasswordCommand({
      ClientId: this.clientId,
      Username: email,
      ConfirmationCode: confirmationCode,
      Password: newPassword,
    });

    try {
      return await this.cognitoClient.send(command);
    } catch (error) {
      throw error;
    }
  }

  async resendConfirmationCode(email: string) {
    const command = new ResendConfirmationCodeCommand({
      ClientId: this.clientId,
      Username: email,
    });

    try {
      return await this.cognitoClient.send(command);
    } catch (error) {
      throw error;
    }
  }

  private decodeJwt(token: string): any {
    const [header, payload, signature] = token.split('.');
    const decodedPayload = Buffer.from(payload, 'base64').toString();
    return JSON.parse(decodedPayload);
  }
}
