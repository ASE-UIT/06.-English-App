// import MultipleChoice from "@/components/Reading/MultipleChoices"
// import NoteCompletion from "@/components/Reading/NoteCompletion"
// import TrueFalseNotGiven from "@/components/Reading/TFNG"
import { routes } from "@/config"
import { Home } from "@/pages/main-layout/Home"
import { Lecture } from "@/pages/protected-route/lecture"
import { LoginPage } from "@/pages/LoginPage/LoginPage"
import { RegisterPage } from "@/pages/RegisterPage/RegisterPage"
import { WritingTestPage } from "@/pages/WritingTestPage/WritingTestPage"
import { SpeakingTestPage } from "@/pages/SpeakingTestPage/SpeakingTestPage"
import LoginRegisterLayout from "@/components/Layout/LoginRegisterLayout/LoginRegisterLayout"
import PrivacyPolicyPage from "@/pages/PrivacyPage/PrivacyPage.tsx"
import TermsOfServicePage from "@/pages/TermsOfServicePage/TermsOfServicePage.tsx"
import MultipleChoice from "@/components/Reading/MultipleChoices"
import TrueFalseNotGiven from "@/components/Reading/TFNG"
import NoteCompletion from "@/components/Reading/NoteCompletion"
import EmptyLayout from "@/components/Layout/EmptyLayout/EmptyLayout"
const publicRoutes = [
  {
    path: routes.Home,
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
    path: routes.SpeakingTest,
    component: <SpeakingTestPage></SpeakingTestPage>,
    layout: EmptyLayout,
  },
  {
    path: routes.WritingTest,
    component: <WritingTestPage></WritingTestPage>,
    layout: EmptyLayout,
  },
]
const protectedRoutes = [
  {
    path: routes.Reading,
    component: <Lecture></Lecture>,
  },
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
]
export { publicRoutes, protectedRoutes }
