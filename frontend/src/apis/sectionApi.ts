import { httpClient } from "@/services"
import { SectionCreate, SectionRes } from "@/type/section"

class SectionApi {
  constructor() {
    // httpClient.createAuthRefreshInterceptor(() => {
    //   this.logOut()
    //   window.location.href = AUTH_PATH_NAME.DANG_NHAP
    // })
  }
  async CreateSection(data: SectionCreate) {
    try {
      const res = await httpClient.post<SectionRes>("/section", data)
      return res
    } catch (error) {
      console.log(error)
    }
  }
  async GetSectionByLesson(lessonId: string) {
    try {
      const res = await httpClient.get<SectionRes>(`/section/get-all-section-by-lesson/${lessonId}`)
      return res
    } catch (error) {
      console.log(error)
    }
  }
}

const sectionApi = new SectionApi()

export default sectionApi
