import * as process from 'node:process';

export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  env: process.env.NODE_ENV || 'DEVELOPMENT',
  userPoolId: process.env.COGNITO_USER_POOL_ID,
  audience: process.env.COGNITO_CLIENT_ID,
  region: process.env.AWS_REGION,
  cognitoClient: process.env.COGNITOCLIENT,
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
  },
});
