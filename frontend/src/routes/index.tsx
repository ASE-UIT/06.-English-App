import MultipleChoice from "@/components/Reading/MultipleChoices"
import { routes } from "@/config"
import { Home } from "@/pages/main-layout/Home"
import { Reading } from "@/pages/main-layout/Reading"
import { Lecture } from "@/pages/protected-route/lecture"
import { LoginPage } from "@/pages/LoginPage/LoginPage"
import EmptyLayout  from "@/components/Layout/EmptyLayout/EmptyLayout"
const publicRoutes = [
  {
    path: routes.Home,
    component: <Home></Home>,
  },
  {
    path: routes.ReadingMultipleChoices,
    component: (
      <Reading>
        <MultipleChoice></MultipleChoice>
      </Reading>
    ),
  },
  {
    path: routes.Login,
    component: <LoginPage></LoginPage>,
    layout: EmptyLayout,
  }
]
const protectedRoutes = [
  // {
  //   path: routes.Chat,
  //   component: <Chat></Chat>,
  // },
  {
    path: routes.Lecture,
    component: (
      <Lecture>
        <MultipleChoice></MultipleChoice>
      </Lecture>
    ),
  },
]
export { publicRoutes, protectedRoutes }
