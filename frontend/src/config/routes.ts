export const routes = {
  LandingPage: "/",
  Login: "/login",
  Register: "/register",
  ForgotPassword: "/forgot-password",
  ResetPassword: "/reset-password",
  PrivacyPolicy: "/privacy-policy",
  TermsOfService: "/terms-of-service",
}
export const studentRoutes = {
  Home: "/student-home",
  CousePreview: "/student/course-preview/:id",
  MyCourse: "/student/my-course",
  Course: "/my-course",
  CourseDetail: "/my-course/:id",
  Profile: "/profile",
  Lesson: "/my-course/:courseId/lesson",
  LessonDetail: "/my-course/:courseId/lesson/:lessonId",
  Section: "/my-course/:courseId/lesson/:lessonId/section",
  SectionDetail: "/my-course/:courseId/lesson/:lessonId/section/:sectionId",
  SearchVocabulary: "/search-vocabulary",
  DoTestReading: "/do-test/reading/:sectionId",
  DoTestListening: "/do-test/listening/:sectionId",
  DoTestWriting: "/do-test/writing/:sectionId",
  DoTestSpeaking: "/do-test/speaking/:sectionId",
  BuyCourse: "/student/buy-course/:id",
}
export const teacherRoutes = {
  Course: {
    Base: "/course",
    Create: "/course/create",
    Lesson: "/course/:id",
    ReadingSection: "/course/:id/:mode/reading-section",
    WritingSection: "/course/:id/:mode/writing-section",
    ListeningSection: "/course/:id/:mode/listening-section",
    Edit: "/course/:id/edit",
    Detail: "/course/:id",
    Preview: "/course/:id/preview"
  },
  Lesson: {
    Base: "/course/:courseId/lesson",
    Create: "/course/:courseId/lesson/create",
    CreateVocab: "/course/:courseId/:lessonId/Vocabulary",
    CreateGrammar: "/course/:courseId/:lessonId/Grammar",
    Edit: "/course/:courseId/lesson/:id/edit",
    Detail: "/course/:courseId/lesson/:id",
  },
  Section: {
    Base: "/course/:courseId/lesson/:lessonId/:sectionId",
    Create: "/course/:courseId/lesson/:lessonId/section/create",
    CreateWriting: "/course/create/writing",
    Edit: "/course/:courseId/lesson/:lessonId/section/:id/edit",
    Detail: "/course/:courseId/lesson/:lessonId/section/:id",
  },
  Profile: "/profile",
}
