import { httpClient } from "@/services"
import { CategoryByIdRes, CourseCreate, CourseRes, CourseCreateRes, CategoryRes } from "@/type/course"

class CouseApi {
  constructor() {
    // httpClient.createAuthRefreshInterceptor(() => {
    //   this.logOut()
    //   window.location.href = AUTH_PATH_NAME.DANG_NHAP
    // })
  }

  async getCategory(id?: string) {
    try {
      let res
      if (id) {
        res = await httpClient.get<CategoryByIdRes>(`/course-category/${id}`)
      } else res = await httpClient.get<CategoryRes>("/course-category")
      return res
    } catch (error) {
      console.log(error)
    }
  }
  async getAllCourse(page: number, take: number, sort: string, sortBy: string, search?: string, categoryId?: string) {
    try {
      let res
      if (search && categoryId)
        res = await httpClient.get<CourseRes>(
          `/users/search?page=${page}&take=${take}&sort=${sort}&sortBy=${sortBy}&search=${search}&categoryId=${categoryId}`,
        )
      else if (search)
        res = await httpClient.get<CourseRes>(
          `/users/search?page=${page}&take=${take}&sort=${sort}&sortBy=${sortBy}&search=${search}`,
        )
      else if (categoryId)
        res = await httpClient.get<CourseRes>(
          `/users/search?page=${page}&take=${take}&sort=${sort}&sortBy=${sortBy}&categoryId=${categoryId}`,
        )
      else
        res = await httpClient.get<CourseRes>(`/users/search?page=${page}&take=${take}&sort=${sort}&sortBy=${sortBy}`)
      return res
    } catch (error) {
      console.log(error)
    }
  }
  async getAllCourseTeacher() {
    try {
      const res = httpClient.get<CourseRes>("/course/teacher/my-course")
      return res
    } catch (error) {
      console.log(error)
    }
  }
  async CreateCourse(data: CourseCreate) {
    try {
      const res = await httpClient.post<CourseCreateRes>("/course", data)
      return res
    } catch (error) {
      console.log(error)
    }
  }
}

const courseApi = new CouseApi()

export default courseApi
