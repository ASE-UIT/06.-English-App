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
import { BadRequestException, HttpException, Injectable } from '@nestjs/common';
import { RegisterCognitoDto } from './dto/register-cognito.dto';
import { SignInCognitoDto } from './dto/sign-in-cognito.dto';
import { ConfirmSignUpDto } from './dto/confirm-sign-up.dto';

@Injectable()
export class CognitoService {
  private cognitoClient: CognitoIdentityProviderClient;
  private userPoolId: string = process.env.COGNITO_USER_POOL_ID;
  private clientId: string = process.env.COGNITO_CLIENT_ID;

  constructor() {
    this.cognitoClient = new CognitoIdentityProviderClient({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
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
      AuthFlow: 'ADMIN_USER_PASSWORD_AUTH',
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
