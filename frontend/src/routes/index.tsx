import MultipleChoice from "@/components/Reading/MultipleChoices"
import NoteCompletion from "@/components/Reading/NoteCompletion"
import TrueFalseNotGiven from "@/components/Reading/TFNG"
import { routes } from "@/config"
import { Home } from "@/pages/main-layout/Home"
import { Lecture } from "@/pages/protected-route/lecture"
const publicRoutes = [
  {
    path: routes.Home,
    component: <Home></Home>,
  },
]
const protectedRoutes = [
  // {
  //   path: routes.Chat,
  //   component: <Chat></Chat>,
  // },
  {
    path: routes.ReadingMultipleChoices,
    component: (
      <Lecture>
        <MultipleChoice></MultipleChoice>
      </Lecture>
    ),
  },
  {
    path: routes.ReadingTFNG,
    component: (
      <Lecture>
        <TrueFalseNotGiven></TrueFalseNotGiven>
      </Lecture>
    )
  },
  {
    path: routes.ReadingNoteCompletion,
    component: (
      <Lecture>
        <NoteCompletion></NoteCompletion>
      </Lecture>
    )
  }
]
export { publicRoutes, protectedRoutes }
