import { routes } from "@/config"
import { Home } from "@/pages/main-layout/Home"
import { Chat } from "@/pages/protected-route/chat"
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
    path: routes.Chat,
    component: <Chat></Chat>,
  },
]
export { publicRoutes, protectedRoutes }
