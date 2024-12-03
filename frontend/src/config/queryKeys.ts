export const queryKeys = {
  auth: ["auth"],
  me: {
    gen: (accessToken: string) => ["me", accessToken],
  },
  courseCategory: {
    gen: (categoryId?: string) => ["category", categoryId],
  },
  course: {
    gen: (page: number, take: number, sort: string, sortBy: string, search?: string, categoryId?: string) => [
      "course",
      page,
      take,
      sort,
      sortBy,
      search,
      categoryId,
    ],
  },
  detailCourse: {
    gen: (id: string) => ["detailCourse", id],
  },
  grammar: {
    gen: () => ["grammar"],
  },
}
