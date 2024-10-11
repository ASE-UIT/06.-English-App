import MultipleChoice from "@/components/Reading/MultipleChoices"
import { routes } from "@/config"
import { Home } from "@/pages/main-layout/Home"
import { Reading } from "@/pages/main-layout/Reading"
import { Lecture } from "@/pages/protected-route/lecture"
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
