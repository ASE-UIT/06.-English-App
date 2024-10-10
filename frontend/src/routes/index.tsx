import { routes } from "@/config"
import { Home } from "@/pages/main-layout/Home"
import { Chat } from "@/pages/protected-route/chat"
import { LoginPage } from "@/pages/LoginPage/LoginPage"
import EmptyLayout  from "@/components/Layout/EmptyLayout/EmptyLayout"
const publicRoutes = [
  {
    path: routes.Home,
    component: <Home></Home>,
  },
  {
    path: routes.Login,
    component: <LoginPage></LoginPage>,
    layout: EmptyLayout,
  }
]
const protectedRoutes = [
  {
    path: routes.Chat,
    component: <Chat></Chat>,
  },
]
export { publicRoutes, protectedRoutes }
