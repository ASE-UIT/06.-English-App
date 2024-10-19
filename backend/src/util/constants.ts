export const END_POINTS = {
  BASE: '/api',
  AUTH: {
    BASE: '/auth',
    SIGN_IN: '/sign-in',
    SIGN_UP: '/sign-up',
    SIGN_OUT: '/sign-out',
    FORGOT_PASSWORD: '/forgot-password',
    GOOGLE_SIGN_IN: '/google-sign-in',
    FACEBOOK_SIGN_IN: '/facebook-sign-in',
    CALL_BACK: '/callback',
    CONFIRM_FORGOT_PASSWORD: '/confirm-forgot-password',
    CONFIRM_SIGN_UP: '/confirm-sign-up',
  },
};
export const TIMEOUT = 5000;
export const AUTH_FLOW = 'ADMIN_USER_PASSWORD_AUTH';

export enum STATUS {
  NOT_STARTED = 'NOT_STARTED',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
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
