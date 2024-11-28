import { Text, TextField, Select, TextArea, Button } from "@radix-ui/themes"
import ImageUploading from "react-images-uploading";
import { UploadIcon } from "@radix-ui/react-icons"
import { useNavigate } from "react-router"
import { useState } from "react";
import { ImageType } from "react-images-uploading/dist/typings";

export default function CourseCreate() {
  const navigate = useNavigate()
  const [images, setImages] = useState<Array<ImageType>>([]);
  const onChange = (imageList: Array<ImageType>) => {
    setImages(imageList);
  };

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
        <div className="flex flex-col h-full">
          {/* <Text as="div" size="4" className="mb-2 text-zinc-700" mb="1" weight="bold">
            Upload
          </Text>
          <div className="flex flex-1 flex-col items-center justify-center rounded-md border-2 border-dashed border-zinc-400 transition hover:border-blue-700 cursor-pointer hover:bg-blue-50">
            <UploadIcon height={48} width={48} color="#1d4ed8" />
            <Text className="mt-3 text-2xl text-blue-700">Upload</Text>
          </div> */}
          <div className="rounded-xl shadow-around w-full p-4 bg-white h-full">
            <p className="font-medium text-base mb-2 text-black/80 tracking-wide">
              Thumbnail
            </p>
            <ImageUploading
              multiple={false}
              value={images}
              onChange={onChange}
              dataURLKey="data_url"
            >
              {({
                imageList,
                onImageUpload,
                onImageRemoveAll,
                // onImageUpdate,
                // onImageRemove,
                // isDragging,
                dragProps,
              }) => (
                <div className="w-full justify-center h-full">
                  {imageList.length === 0 ? (
                    <div
                      onClick={onImageUpload}
                      {...dragProps}
                      className="w-full h-full bg-orange-50 border-2 border-[--primary-color] border-dashed rounded-2xl flex items-center justify-center hover:bg-orange-200/30 cursor-pointer"
                    >
                      <div className="flex flex-col items-center justify-center h-full">
                        <UploadIcon height={48} width={48} color="#1d4ed8" />
                        <p className="font-light text-black/40">
                          Drag & drop or choose from file
                        </p>
                      </div>
                    </div>
                  ) : (
                    imageList.map((image, index) => (
                      <>
                        <div
                          key={index}
                          className="max-h-[705px] w-full flex items-start justify-center p-5 rounded-xl overflow-hidden border-black"
                        >
                          <img
                            className="rounded-lg h-full w-full object-contain"
                            src={image["data_url"]}
                            alt=""
                          />
                        </div>
                        <div className="w-full flex justify-center">
                          <button
                            onClick={onImageRemoveAll}
                            className="border bg-red-600 text-white px-10 py-2 mb-5 rounded-xl hover:text-white hover:bg-red-800 font-extralight"
                          >
                            Remove
                          </button>
                        </div>
                      </>
                    ))
                  )}
                </div>
              )}
            </ImageUploading>
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
