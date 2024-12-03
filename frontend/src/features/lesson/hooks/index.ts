import { lessonApi } from "@/apis"
import { queryKeys } from "@/config"
import { useQuery } from "@tanstack/react-query"

export const useLessonByCourse = (courseId: string) =>
  useQuery({
    queryKey: queryKeys.lessonByCourse.gen(courseId),
    queryFn: () => lessonApi.GetLessonByCourse(courseId),
    refetchOnMount: "always",
  })
export const useLessonById = (lessonId: string) =>
  useQuery({
    queryKey: queryKeys.lessonById.gen(lessonId),
    queryFn: () => lessonApi.GetLessonById(lessonId),
  })
