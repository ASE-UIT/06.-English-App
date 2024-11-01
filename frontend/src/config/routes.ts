
export const routes = {
  LandingPage: "/",
  Login: "/login",
  Register: "/register",
  ForgotPassword: "/forgot-password",
  ResetPassword: "/reset-password",
  PrivacyPolicy : "/privacy-policy",
  TermsOfService: "/terms-of-service",
}
export const studentRoutes = {
  Home: "/student-home",
  Course: "/my-course",
  CourseDetail: "/my-course/:id",
  Profile: "/profile",
  Lesson: "/my-course/:courseId/lesson",
  LessonDetail: "/my-course/:courseId/lesson/:lessonId",
  Section: "/my-course/:courseId/lesson/:lessonId/section",
  SectionDetail: "/my-course/:courseId/lesson/:lessonId/section/:sectionId",  
  SearchVocabulary: "/search-vocabulary",
  DoTestReading: "/do-test/reading",
  DoTestListening: "/do-test/listening",
  DoTestWriting: "/do-test/writing",
  DoTestSpeaking: "/do-test/speaking",
}
export const teacherRoutes = {
  Home: "/teacher-home",
  Course: {
    Base: "/course",
    Create: "/course/create",
    Edit: "/course/:id/edit",
    Detail: "/course/:id",
  },
  Lesson: {
    Base: "/course/:courseId/lesson",
    Create: "/course/:courseId/lesson/create",
    Edit: "/course/:courseId/lesson/:id/edit",
    Detail: "/course/:courseId/lesson/:id",
  },
  Section: {
    Base: "/course/:courseId/lesson/:lessonId/section",
    Create: "/course/:courseId/lesson/:lessonId/section/create",
    Edit: "/course/:courseId/lesson/:lessonId/section/:id/edit",
    Detail: "/course/:courseId/lesson/:lessonId/section/:id",
  },
  Profile: "/profile",
}
