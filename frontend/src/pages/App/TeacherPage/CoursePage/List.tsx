import { TextField, Select, Flex, Tabs, Button, Text } from "@radix-ui/themes"
import { MagnifyingGlassIcon, PlusIcon, ArrowTopRightIcon } from "@radix-ui/react-icons"
import { useNavigate } from "react-router"

export default function CourseList() {

  const navigate = useNavigate()

  const gotoCreate = () => {
    navigate('/course/create')
  }

  return (
    <div className="flex-1 bg-white p-3">
      <div className="grid grid-cols-12 gap-3 mb-6">
        <div className="col-span-4">
          <TextField.Root placeholder="Search your courses..." size="3">
            <TextField.Slot>
              <MagnifyingGlassIcon height="16" width="16" />
            </TextField.Slot>
          </TextField.Root>
        </div>
        <div className="col-span-2">
          <Flex direction="column" maxWidth="100%">
            <Select.Root defaultValue="apple" size="3">
              <Select.Trigger />
              <Select.Content>
                <Select.Group>
                  <Select.Label>Fruits</Select.Label>
                  <Select.Item value="orange">Orange</Select.Item>
                  <Select.Item value="apple">Apple</Select.Item>
                  <Select.Item value="grape" disabled>
                    Grape
                  </Select.Item>
                </Select.Group>
                <Select.Separator />
                <Select.Group>
                  <Select.Label>Vegetables</Select.Label>
                  <Select.Item value="carrot">Carrot</Select.Item>
                  <Select.Item value="potato">Potato</Select.Item>
                </Select.Group>
              </Select.Content>
            </Select.Root>
          </Flex>
        </div>
        <div className="col-span-2">
          <Button variant="solid" color="pink" size="3" radius="full" onClick={gotoCreate}>
            <PlusIcon height="16" width="16" />
            Create new
          </Button>
        </div>
      </div>
      <Tabs.Root defaultValue="drafts">
        <Tabs.List color="pink" size="2">
          <Tabs.Trigger value="drafts">Drafts</Tabs.Trigger>
          <Tabs.Trigger value="published">Published</Tabs.Trigger>
        </Tabs.List>
      </Tabs.Root>
      <div className="mt-6 max-w-5xl">
        <div className="flex border border-solid border-zinc-200 rounded-lg p-3 items-center">
          <div>
            <ArrowTopRightIcon height="24" width="24" color="#1d4ed8" />
          </div>
          <div className="flex-1 pl-3">
            <div className="text-blue-700 text-lg font-bold">IELTS OFF</div>
            <div className="text-zinc-400">Finish your course</div>
          </div>
          <div className="h-full flex items-center">
            <Text className="mr-3 cursor-pointer hover:text-blue-700">Continue editing</Text>
            <Button variant="solid" size="3">Delete</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
