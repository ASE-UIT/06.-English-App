import { registerAs } from '@nestjs/config';

export default registerAs('payment', () => ({
  stripe: {
    publicKey: process.env.STRIPE_PUBLIC_KEY || '',
    secretKey: process.env.STRIPE_SECRET_KEY || '',
  },
  vnpay: {
    tmnCode: process.env.VNPAY_TMN_CODE || '',
    hashSecret: process.env.VNPAY_HASH_SECRET || '',
    apiUrl: process.env.VNPAY_API_URL || '',
  },
}));
