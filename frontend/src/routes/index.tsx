import LoginRegisterLayout from "@/components/Layout/LoginRegisterLayout/LoginRegisterLayout"
import EmptyLayout from "@/components/Layout/EmptyLayout/EmptyLayout"
import PrivacyPolicyPage from "@/pages/LandingPage/PrivacyPage/PrivacyPage"
import TermsOfServicePage from "@/pages/LandingPage/TermsOfServicePage/TermsOfServicePage"
import { routes, studentRoutes, teacherRoutes } from "@/config/routes"
import DoTestLayout from "@/components/Layout/Student/DoTestLayout/DoTestLayout"
import { Fragment } from "react/jsx-runtime"
import HomePage from "@/pages/LandingPage/Home"
import LoginPage from "@/pages/AuthPage/LoginPage/LoginPage"
import RegisterPage from "@/pages/AuthPage/RegisterPage/RegisterPage"
import WritingTestPage from "@/pages/App/StudentPage/TestPage/WritingTestPage/WritingTestPage"
import SpeakingTestPage from "@/pages/App/StudentPage/TestPage/SpeakingTestPage/SpeakingTestPage"
import ListeningTestPage from "@/pages/App/StudentPage/TestPage/ListeningTestPage/ListeningTestPage"
import MyCoursePage from "@/pages/App/TeacherPage/CoursePage/MyCoursePage"
import InstructorHome from "@/pages/App/TeacherPage/HomePage/InstructorHome"
import ReadingPage from "@/pages/App/StudentPage/TestPage/ReadingTestPage/ReadingPage"
import { MyLessonPage } from "@/pages/App/TeacherPage/LessonPage/MyLessonPage"
import { CreateVocab } from "@/pages/App/TeacherPage/LessonPage/CreateVocab"
import { CreateGrammar } from "@/pages/App/TeacherPage/LessonPage/CreateGrammar"
import { CreateWriting } from "@/pages/App/TeacherPage/LessonPage/CreateWriting"
import CreateReadingMaterial from "@/pages/App/TeacherPage/LessonPage/CreateReadingMaterial"
const publicRoutes = [
  {
    path: routes.LandingPage,
    layout: EmptyLayout,
    component: <HomePage></HomePage>,
  },
  {
    path: routes.Login,
    component: <LoginPage></LoginPage>,
    layout: LoginRegisterLayout,
  },
  {
    path: routes.Register,
    component: <RegisterPage></RegisterPage>,
    layout: LoginRegisterLayout,
  },
  {
    path: routes.PrivacyPolicy,
    component: <PrivacyPolicyPage></PrivacyPolicyPage>,
  },
  {
    path: routes.TermsOfService,
    component: <TermsOfServicePage></TermsOfServicePage>,
  },
]
const protectedRoutes = [
  {
    path: studentRoutes.DoTestWriting,
    layout: Fragment,
    component: <WritingTestPage></WritingTestPage>,
  },
  {
    path: studentRoutes.DoTestSpeaking,
    layout: Fragment,
    component: <SpeakingTestPage></SpeakingTestPage>,
  },
  {
    path: studentRoutes.DoTestListening,
    component: <ListeningTestPage></ListeningTestPage>,
    layout: DoTestLayout,
  },
  {
    path: studentRoutes.DoTestReading,
    component: <ReadingPage></ReadingPage>,
    layout: DoTestLayout,
  },
  {
    path: teacherRoutes.Home,
    component: <InstructorHome></InstructorHome>,
    layout: Fragment,
  },
  {
    path: teacherRoutes.Course.Base,
    component: <MyCoursePage></MyCoursePage>,
    layout: Fragment,
  },
  {
    path: teacherRoutes.Course.Create,
    component: <MyCoursePage></MyCoursePage>,
    layout: Fragment,
  },
  {
    path: teacherRoutes.Course.Detail,
    component: <MyCoursePage></MyCoursePage>,
    layout: Fragment,
  },
  {
    path: teacherRoutes.Course.Edit,
    component: <MyCoursePage></MyCoursePage>,
    layout: Fragment,
  },
  {
    path: teacherRoutes.Lesson.Base,
    component: <MyLessonPage></MyLessonPage>,
    layout: DoTestLayout,
  },
  {
    path: teacherRoutes.Lesson.CreateVocab,
    component: <CreateVocab></CreateVocab>,
    layout: DoTestLayout,
  },
  {
    path: teacherRoutes.Lesson.CreateGrammar,
    component: <CreateGrammar></CreateGrammar>,
    layout: DoTestLayout,
  },
  {
    path: teacherRoutes.Section.CreateWriting,
    component: <CreateWriting></CreateWriting>,
    layout: DoTestLayout,
  },
  {
    path: teacherRoutes.Section.CreateReadingMaterial,
    component: <CreateReadingMaterial></CreateReadingMaterial>,
    layout: DoTestLayout,
  },
]
export { publicRoutes, protectedRoutes }
