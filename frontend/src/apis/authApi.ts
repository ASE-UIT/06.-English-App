import { httpClient } from "@/services"

interface Login {
  EM: string
  EC: number
  DT: {
    payload: {
      id: number
      username: string
    }
    token: string
  }
}

class AuthApi {
  constructor() {
    // httpClient.createAuthRefreshInterceptor(() => {
    //   this.logOut()
    //   window.location.href = AUTH_PATH_NAME.DANG_NHAP
    // })
  }

  async logIn(username: string) {
    // eslint-disable-next-line no-useless-catch
    try {
      const res = await httpClient.post<Login>("/login", {
        username,
      })
      console.log("LoginRes", res)
      localStorage.setItem("userId", res.DT.payload.id.toString())
      localStorage.setItem("username", res.DT.payload.username)
      return res
    } catch (error) {
      console.log(error)
    }
  }

  async logOut() {
    try {
      await httpClient.post("/auth/logout")
    } catch (error) {
      console.log(error)
    }
  }
}

const authApi = new AuthApi()

export default authApi
