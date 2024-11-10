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
    CREATE: '/create',
  },
  FILE: {
    BASE: '/file',
    UPLOAD: '/presigned-url',
    DOWNLOAD: '/download/:key',
    DELETE: '/delete/:key',
  },
  COURSE: {
    BASE: '/course',
    GET_ALL_COURSES: '/get-all-courses',
    GET_RECOMMENDATION_COURSES: '/get-all-recomendation-courses',
    GET_MY_COURSE_BY_TEACHER: '/teacher/my-course',
    GET_MY_COURSE_BY_STUDENT: '/student/my-course/',
    GET_DETAIL: '/detail/:id',
    CREATE: '',
    UPDATE: '',
    DELETE: '',
  },
  COURSE_CATEGORY: {
    BASE: '/course-category',
    CREATE: '',
    LIST: '',
    UPDATE: '',
  },
  LESSON: {
    BASE: '/lesson',
    CREATE_GRAMMAR: '/grammar',
    CREATE_VOCABULARY: '/vocabulary',
    GET_ALL_LESSONS_BY_COURSE: '/get-all-lessons-by-course/:courseId',
    CREATE_NORMAL: '',
    LIST: '',
    UPDATE: '',
    DELETE: '',
  },
  GRAMMAR: {
    BASE: '/grammar',
    CREATE: '',
    LIST: '',
    UPDATE: '',
    DELETE: '',
  },
  SECTION: {
    BASE: '/section',
    CREATE: '',
    LIST: '',
    UPDATE: '',
    DELETE: '',
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
    COURSE: 'COURSE',
    COURSE_CATEGORY: 'COURSE_CATEGORY',
    LESSON: 'LESSON',
    GRAMMAR: 'GRAMMAR',
    SECTION: 'SECTION',
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

export const COURSE_THUMBNAIL_IMAGE = '';