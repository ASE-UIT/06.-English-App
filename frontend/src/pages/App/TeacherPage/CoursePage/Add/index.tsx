import { Text, TextField, Select, TextArea, Button } from "@radix-ui/themes"
import { UploadIcon } from "@radix-ui/react-icons"
import { useNavigate } from "react-router"

export default function CourseCreate() {
  const navigate = useNavigate()

  function onSave() {
    navigate('/course/123/add/lessons')
  }

  function goBack() {
    navigate(-1)
  }

  return (
    <div className="p-3">
      <div className="mb-8 text-2xl font-semibold text-blue-700">Course information</div>
      <div className="grid grid-cols-2 gap-6">
        <div className="grid gap-6">
          <div>
            <label>
              <Text as="div" size="4" className="mb-2 text-zinc-700" mb="1" weight="bold">
                Title
              </Text>
              <TextField.Root defaultValue="Freja Johnsen" placeholder="Enter your full name" size="3" />
            </label>
          </div>
          <div>
            <label>
              <Text as="div" size="4" className="mb-2 text-zinc-700" mb="1" weight="bold">
                Language
              </Text>
              <div className="flex w-full flex-col">
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
              </div>
            </label>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-6">
              <label>
                <Text as="div" size="4" className="mb-2 text-zinc-700" mb="1" weight="bold">
                  Level
                </Text>
                <div className="flex w-full flex-col">
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
                </div>
              </label>
              <label>
                <Text as="div" size="4" className="mb-2 text-zinc-700" mb="1" weight="bold">
                  Category
                </Text>
                <div className="flex w-full flex-col">
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
                </div>
              </label>
            </div>
          </div>
          <div>
            <label>
              <Text as="div" size="4" className="mb-2 text-zinc-700" mb="1" weight="bold">
                Description
              </Text>
              <TextArea placeholder="Reply to comment…" size="3" rows={5} />
            </label>
          </div>
        </div>
        <div className="flex flex-col">
          <Text as="div" size="4" className="mb-2 text-zinc-700" mb="1" weight="bold">
            Upload
          </Text>
          <div className="flex flex-1 flex-col items-center justify-center rounded-md border-2 border-dashed border-zinc-400 transition hover:border-blue-700 cursor-pointer hover:bg-blue-50">
            <UploadIcon height={48} width={48} color="#1d4ed8" />
            <Text className="mt-3 text-2xl text-blue-700">Upload</Text>
          </div>
        </div>
        <div className="text-right">
        <Button variant="outline" size="3" onClick={goBack}>Cancel</Button>
        </div>
        <div>
        <Button variant="solid" size="3" className="cursor-pointer" onClick={onSave}>Save & Continue </Button>
        </div>
      </div>
    </div>
  )
}
