import { httpClient } from "@/services"
import { LessonCreate, LessonCreateRes, LessonDetailRes, LessonRes } from "@/type/lesson"

class LessonApi {
  constructor() {
    // httpClient.createAuthRefreshInterceptor(() => {
    //   this.logOut()
    //   window.location.href = AUTH_PATH_NAME.DANG_NHAP
    // })
  }
  async CreateLesson(data: LessonCreate) {
    try {
      const res = await httpClient.post<LessonCreateRes>("/lesson/normal", data)
      return res
    } catch (error) {
      console.log(error)
    }
  }
  async GetLessonByCourse(courseId: string) {
    try {
      const res = await httpClient.get<LessonRes>(`/lesson/get-all-lessons-by-course/${courseId}`)
      return res
    } catch (error) {
      console.log(error)
    }
  }
  async GetLessonById(lessonId: string) {
    try {
      const res = await httpClient.get<LessonDetailRes>(`/lesson/get-one/${lessonId}`)
      return res
    } catch (error) {
      console.log(error)
    }
  }
}

const lessonApi = new LessonApi()

export default lessonApi
