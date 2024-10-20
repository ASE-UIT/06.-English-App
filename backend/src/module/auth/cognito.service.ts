import { createHmac } from 'crypto';
import {
  AdminInitiateAuthCommand,
  CognitoIdentityProviderClient,
  ConfirmForgotPasswordCommand,
  ConfirmSignUpCommand,
  ForgotPasswordCommand,
  ResendConfirmationCodeCommand,
  AdminUserGlobalSignOutCommand,
  SignUpCommand,
} from '@aws-sdk/client-cognito-identity-provider';

import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
  Res,
} from '@nestjs/common';
import { RegisterCognitoDto } from './dto/register-cognito.dto';
import { SignInCognitoDto } from './dto/sign-in-cognito.dto';
import { ConfirmSignUpDto } from './dto/confirm-sign-up.dto';
import { ConfigService } from '@nestjs/config';
import { AUTH_FLOW } from '../../utils/constants';
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

  getSecretHash(username: string) {
    const hasher = createHmac('sha256', this.cognitoClientSecret);
    hasher.update(`${username}${this.clientId}`);
    return hasher.digest('base64');
  }

  async signUp(registerCognitoDto: RegisterCognitoDto) {
    const command = new SignUpCommand({
      ClientId: this.clientId,
      Username: registerCognitoDto.username,
      Password: registerCognitoDto.password,
      SecretHash: this.getSecretHash(registerCognitoDto.username),
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
      throw new BadRequestException(error.message);
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
        SECRET_HASH: this.getSecretHash(cognitoSignInDto.username),
      },
    });

    try {
      const response = await this.cognitoClient.send(command);
      const accessToken = response.AuthenticationResult.AccessToken;
      const refreshToken = response.AuthenticationResult.RefreshToken;
      const idToken = response.AuthenticationResult.IdToken;
      const decodedToken = this.decodeJwt(idToken);
      const userSub = decodedToken.sub;
      return { accessToken, userSub, refreshToken };
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  redirectUrl(res: Response, provider: string) {
    const authUrl = `${this.cognitoDomain}/oauth2/authorize?identity_provider=${provider}&client_id=${this.clientId}&response_type=code&redirect_uri=${this.cognitoRedirectUri}&scope=email+public_profile`;
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
              code: code,
              redirect_uri: this.cognitoRedirectUri,
            }),
            {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization:
                  'Basic ' +
                  Buffer.from(
                    `${this.clientId}:${this.cognitoClientSecret}`,
                  ).toString('base64'),
              },
            },
          )
          .pipe(
            catchError((error) => {
              throw new BadRequestException(error.response);
            }),
          ),
      );
      const accessToken = tokenResponse.data.access_token;
      const refreshToken = tokenResponse.data.refresh_token;
      const userInfoResponse = await firstValueFrom(
        this.httpService.get(`${this.cognitoDomain}/oauth2/userInfo`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        }),
      );
      const userInfo = userInfoResponse.data;
      return { userInfo, accessToken, refreshToken };
    } catch (error) {
      throw new BadRequestException(error.message);
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
      throw new BadRequestException(error.message);
    }
  }

  async forgotPassword(username: string) {
    const command = new ForgotPasswordCommand({
      ClientId: this.clientId,
      Username: username,
    });
    try {
      return await this.cognitoClient.send(command);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async confirmForgotPassword(
    username: string,
    confirmationCode: string,
    newPassword: string,
  ) {
    const command = new ConfirmForgotPasswordCommand({
      ClientId: this.clientId,
      Username: username,
      ConfirmationCode: confirmationCode,
      Password: newPassword,
    });

    try {
      return await this.cognitoClient.send(command);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async resendConfirmationCode(username: string) {
    const command = new ResendConfirmationCodeCommand({
      ClientId: this.clientId,
      Username: username,
    });

    try {
      return await this.cognitoClient.send(command);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async signOut(username: string) {
    const command = new AdminUserGlobalSignOutCommand({
      UserPoolId: this.userPoolId,
      Username: username,
    });

    try {
      return await this.cognitoClient.send(command);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  private decodeJwt(token: string): any {
    const [header, payload, signature] = token.split('.');
    const decodedPayload = Buffer.from(payload, 'base64').toString();
    return JSON.parse(decodedPayload);
  }
}
