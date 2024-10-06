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
  {
    path: routes.Lecture,
    component: <Lecture></Lecture>,
  },
]
export { publicRoutes, protectedRoutes }
