import { routes } from "@/config"
import { Home } from "@/pages/main-layout/Home"
import { Chat } from "@/pages/protected-route/chat"
const publicRoutes = [
  {
    path: routes.Home,
    component: <Home></Home>,
  },
]
const protectedRoutes = [
  {
    path: routes.Chat,
    component: <Chat></Chat>,
  },
]
export { publicRoutes, protectedRoutes }
