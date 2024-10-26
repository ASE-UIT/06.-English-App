// import MultipleChoice from "@/components/Reading/MultipleChoices"
// import NoteCompletion from "@/components/Reading/NoteCompletion"
// import TrueFalseNotGiven from "@/components/Reading/TFNG"
import { routes } from "@/config"
import { Home } from "@/pages/main-layout/Home"
import { Lecture } from "@/pages/protected-route/lecture"
import { LoginPage } from "@/pages/LoginPage/LoginPage"
import { RegisterPage } from "@/pages/RegisterPage/RegisterPage"
import LoginRegisterLayout from "@/components/Layout/LoginRegisterLayout/LoginRegisterLayout"
import EmptyLayout from "@/components/Layout/EmptyLayout/EmptyLayout"
import PrivacyPolicyPage from "@/pages/PrivacyPage/PrivacyPage.tsx"
import TermsOfServicePage from "@/pages/TermsOfServicePage/TermsOfServicePage.tsx"
import { ReadingQuestion } from "@/pages/main-layout/readingQuestion"
import { studentRoutes } from "@/config/routes"
import DoTestLayout from "@/components/Layout/Student/DoTestLayout/DoTestLayout"
import StudentReading from "@/components/Student/Reading/StudentReading"

const publicRoutes = [
  {
    path: routes.Home,
    layout: EmptyLayout,
    component: <Home></Home>,
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
    path: routes.Privacy,
    component: <PrivacyPolicyPage></PrivacyPolicyPage>,
  },
  {
    path: routes.TermsOfService,
    component: <TermsOfServicePage></TermsOfServicePage>,
  },
  {
    path: routes.ReadingExercise,
    component: <ReadingQuestion></ReadingQuestion>,
  },
]
const protectedRoutes = [
  {
    path: routes.Reading,
    component: <Lecture></Lecture>,
  },
  // {
  //   path: routes.CreateCourse,
  //   component: <CreateCourse />,
  // },
  // {
  //   path: routes.ReadingMultipleChoices,
  //   component: (
  //     <Lecture>
  //       <MultipleChoice></MultipleChoice>
  //     </Lecture>
  //   ),
  // },
  // {
  //   path: routes.ReadingTFNG,
  //   component: (
  //     <Lecture>
  //       <TrueFalseNotGiven></TrueFalseNotGiven>
  //     </Lecture>
  //   )
  // },
  // {
  //   path: routes.ReadingNoteCompletion,
  //   component: (
  //     <Lecture>
  //       <NoteCompletion></NoteCompletion>
  //     </Lecture>
  //   )
  // }
  {
    path: studentRoutes.DoTestReading,
    component: <StudentReading></StudentReading>,
    layout: DoTestLayout,
  }
]
export { publicRoutes, protectedRoutes }
