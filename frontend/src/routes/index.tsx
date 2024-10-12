// import MultipleChoice from "@/components/Reading/MultipleChoices"
// import NoteCompletion from "@/components/Reading/NoteCompletion"
// import TrueFalseNotGiven from "@/components/Reading/TFNG"
import { routes } from "@/config"
import { Home } from "@/pages/main-layout/Home"
import { Lecture } from "@/pages/protected-route/lecture"
import { LoginPage } from "@/pages/LoginPage/LoginPage"
import { RegisterPage } from "@/pages/RegisterPage/RegisterPage"
import LoginRegisterLayout  from "@/components/Layout/LoginRegisterLayout/LoginRegisterLayout"
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
  }
]
const protectedRoutes = [
  {
    path: routes.Reading,
    component: <Lecture></Lecture>
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
