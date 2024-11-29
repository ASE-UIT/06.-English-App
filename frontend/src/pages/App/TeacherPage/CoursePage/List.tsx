import { TextField, Flex, Tabs, Button, Text } from "@radix-ui/themes"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MagnifyingGlassIcon, PlusIcon, ArrowTopRightIcon } from "@radix-ui/react-icons"
import { useNavigate } from "react-router"
import PaginationSearchResult from "@/components/ui/paginationSearch"
// import { Pagination } from "@/type"
import { useMemo, useState } from "react"
import { useCourseCategory, useCourseTeacher } from "@/features/course/hooks"
import { Course } from "@/type/course"

export default function CourseList() {
  const navigate = useNavigate()
  // const [pagination, setPagination] = useState<Pagination>({ page: 1, limit: 5 })
  // const selectPage = (page: number) => {
  //   setPagination({ ...pagination, page: page })
  // }
  const [page, setPage] = useState<number>(1)
  const [query, setQuery] = useState<string>("")
  const [currentPageOffset, setCurrentPageOffset] = useState<number>(1)
  const { data: courseList } = useCourseTeacher()
  const [category, setCategory] = useState<string>("all")
  const { data: categories } = useCourseCategory()
  const [paginationArr, setPaginationArr] = useState<Course[]>(courseList?.data || [])

  const currentItems = useMemo(() => {
    let fakeCourseList = courseList?.data
    const endOffset = page + 5
    if (fakeCourseList) {
      fakeCourseList = fakeCourseList.slice(page, endOffset)
      if (query !== "") {
        fakeCourseList = fakeCourseList.filter((course) => {
          const title = course.title.normalize().toLowerCase()
          const keywords = query.normalize().toLowerCase().split(" ")
          const isMatch = keywords.every((keyword) => title.includes(keyword))
          return isMatch
        })
      }
      if (category) {
        fakeCourseList = fakeCourseList.filter((course) => {
          if (category === "all") return true
          return course.categoryName === category
        })
      }
    }
    if (query !== "" || category !== "all")
    {
      setPaginationArr(fakeCourseList || [])
    }
    else {
      setPaginationArr(courseList?.data || [])
    }
    return fakeCourseList
  }, [category, courseList?.data, page, query])
  console.log("courseList",courseList,currentItems)
  const [isSearch, setIsSearch] = useState<boolean>(false)
  const gotoCreate = () => {
    navigate("/course/create")
  }
  console.log("courseList", courseList, currentItems)
  return (
    <div className="flex-1 bg-white p-3">
      <div className="mb-6 grid grid-cols-12 gap-3">
        <div className="col-span-4">
          <TextField.Root onChange={(e) => setQuery(e.target.value)} placeholder="Search your courses..." size="3">
            <TextField.Slot>
              <MagnifyingGlassIcon height="16" width="16" />
            </TextField.Slot>
          </TextField.Root>
        </div>
        <div className="col-span-2">
          <Flex direction="column" maxWidth="100%">
            <Select key="category" onValueChange={(value) => setCategory(value)}>
              <div className="flex w-full space-x-3">
                <SelectTrigger className="h-10 !w-full !cursor-pointer rounded-md border-[1.5px] border-slate-300 bg-white text-base !font-normal text-black">
                  <SelectValue defaultValue="all" placeholder="Chọn danh mục"></SelectValue>
                </SelectTrigger>
              </div>
              <SelectContent>
                <SelectItem
                  className="text-sm text-black hover:text-navTitle focus:text-navTitle"
                  key="all"
                  value="all"
                >
                  All
                </SelectItem>
                {categories &&
                  "data" in categories &&
                  Array.isArray(categories.data) &&
                  categories?.data.map((i) => (
                    <SelectItem
                      className="text-sm text-black hover:text-navTitle focus:text-navTitle"
                      key={i.id}
                      value={i.name}
                    >
                      {i.name}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          </Flex>
        </div>
        <div className="col-span-2">
          <Button variant="solid" color="pink" size="3" radius="full" onClick={gotoCreate}>
            <PlusIcon height="16" width="16" />
            Create new
          </Button>
        </div>
      </div>
      <Tabs.Root onValueChange={() => {
        setCurrentPageOffset(1)
        setPage(0)
      }} defaultValue="DRAFT">
        <Tabs.List color="pink" size="2">
          <Tabs.Trigger value="DRAFT">Drafts</Tabs.Trigger>
          <Tabs.Trigger value="PUBLISHED">Published</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="DRAFT">
          <div className="mt-6 flex max-w-5xl flex-col gap-5">
        {(currentItems || []).filter((course)=> course.state === "DRAFT").map((course) => (
          <div className="flex items-center rounded-lg border border-solid border-zinc-200 p-3">
            <div>
              <ArrowTopRightIcon height="24" width="24" color="#1d4ed8" />
            </div>
            <div className="flex-1 pl-3">
              <div className="text-lg font-bold text-blue-700">{course.title}</div>
              <div className="text-zinc-400">Finish your course</div>
            </div>
            <div className="flex h-full items-center">
              <Text className="mr-3 cursor-pointer hover:text-blue-700">Continue editing</Text>
              <Button variant="solid" size="3">
                Delete
              </Button>
            </div>
          </div>
        ))}
        <PaginationSearchResult
          itemsPerPage={5}
          selectPage={setPage}
          totalItemsInAllPages={paginationArr.filter((course)=> course.state === "DRAFT").length}
          isSearch={isSearch}
          currentPageNumber={currentPageOffset}
          onSearch={() => setIsSearch(false)}
          hasApi={false}
          setCurrentPageOffset={setCurrentPageOffset}
        />
      </div>
        </Tabs.Content>
        <Tabs.Content value="PUBLISHED">
          <div className="mt-6 flex max-w-5xl flex-col gap-5">
        {(currentItems || []).filter((course)=> course.state === "PUBLISHED").map((course) => (
          <div className="flex items-center rounded-lg border border-solid border-zinc-200 p-3">
            <div>
              <ArrowTopRightIcon height="24" width="24" color="#1d4ed8" />
            </div>
            <div className="flex-1 pl-3">
              <div className="text-lg font-bold text-blue-700">{course.title}</div>
              <div className="text-zinc-400">Finish your course</div>
            </div>
            <div className="flex h-full items-center">
              <Text className="mr-3 cursor-pointer hover:text-blue-700">Continue editing</Text>
              <Button variant="solid" size="3">
                Delete
              </Button>
            </div>
          </div>
        ))}
        <PaginationSearchResult
          itemsPerPage={5}
          selectPage={setPage}
          totalItemsInAllPages={paginationArr.filter((course)=> course.state === "PUBLISHED").length}
          isSearch={isSearch}
          currentPageNumber={currentPageOffset}
          onSearch={() => setIsSearch(false)}
          hasApi={false}
          setCurrentPageOffset={setCurrentPageOffset}
        />
      </div>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  )
}
