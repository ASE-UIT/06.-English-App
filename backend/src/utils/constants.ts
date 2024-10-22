export const END_POINTS = {
  BASE: '/api',
  AUTH: {
    BASE: '/auth',
    SIGN_IN: '/sign-in',
    SIGN_UP: '/sign-up',
    SIGN_OUT: '/sign-out',
    FORGOT_PASSWORD: '/forgot-password',
    OAUTH2_CREATE: '/oauth2-create',
    CALL_BACK: '/callback',
    CONFIRM_FORGOT_PASSWORD: '/confirm-forgot-password',
    CONFIRM_SIGN_UP: '/confirm-sign-up',
    RESEND_CONFIRMATION_CODE: '/resend-confirmation-code',
    REFRESH_TOKEN: '/refresh-token',
  },
  USER: {
    BASE: '/user',
    ME: '/me',
  },
  FILE: {
    BASE: '/file',
    UPLOAD: '/presigned-url',
    DOWNLOAD: '/download/:key',
    DELETE: '/delete/:key',
  },
};
export const DOCUMENTATION = {
  TITLE: 'ENGDIGO API',
  DESCRIPTION: 'IT SHOULD BE CLEAR TO YOU',
  VERSION: '1.0',
  PREFIX: 'api',
  TAGS: {
    AUTH: 'AUTH',
    USER: 'USER',
    FILE: 'FILE',
  },
};
export const TIMEOUT = 5000;
export const AUTH_FLOW = 'ADMIN_USER_PASSWORD_AUTH';

export enum STATUS {
  NOT_STARTED = 'NOT_STARTED',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

export enum DEGREE {
  BACHELOR = 'BACHELOR',
  MASTER = 'MASTER',
  DOCTOR = 'DOCTOR',
  UNKNOWN = 'UNKNOWN',
}

export enum GENDER {
  MALE,
  FEMALE,
  UNKNOWN,
}

export enum PAYMENT_METHOD {
  QR_CODE = 'QR_CODE',
  E_WALLET = 'E_WALLET',
}

export enum QUESTION_TYPE {
  COMBO_BOX = 'COMBO_BOX',
  BLANK = 'BLANK',
  MULTIPLE_CHOICE = 'MULTIPLE_CHOICE',
}

export enum SECTION_TYPE {
  ROOT = 'ROOT',
  READING = 'READING',
  LISTENING = 'LISTENING',
  VOCABULARY = 'VOCABULARY',
}

export enum USER_ROLES {
  ADMIN = 'ADMIN',
  STUDENT = 'STUDENT',
  TEACHER = 'TEACHER',
}

export enum TYPES {
  LISTENING = 'LISTENING',
  READING = 'READING',
  WRITING = 'WRITING',
  SPEAKING = 'SPEAKING',
  GRAMMAR = 'GRAMMAR',
  VOCABULARY = 'VOCABULARY',
}

export enum MEDIAS {
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO',
  AUDIO = 'AUDIO',
}

export enum STATE {
  DRAFT = 'DRAFT',
  SUBMITTED = 'SUBMITTED',
  BLOCKED = 'BLOCKED',
  PUBLISHED = 'PUBLISHED',
}
