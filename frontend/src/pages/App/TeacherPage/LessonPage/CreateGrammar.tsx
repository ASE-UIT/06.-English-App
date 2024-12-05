import { Button } from "@/components/Layout/Components/ui/Button"
import { Input } from "@/components/Layout/Components/ui/Input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useGrammar } from "@/features/section/hooks"
import { BiPlus } from "react-icons/bi"
import _ from "lodash"
import FroalaViewComponent from "@/components/Layout/Components/ui/FroalaViewComponent"

export const CreateGrammar = () => {
  const { data: grammarList } = useGrammar()

  return (
    <div className="flex h-full min-h-screen w-full flex-col bg-white px-[66px] py-[64px]">
      <div className="mb-[43px] flex flex-col rounded-md border-2 border-fuschia px-[78px] py-[56px]">
        <div className="flex w-full items-center justify-between">
          <Input
            className="w-[300px] rounded-full border-2 border-fuschia bg-white p-6 text-2xl text-placeHolder"
            placeholder="Search"
          />
          <Button className="mr-[19px] rounded-full border-2 border-fuschia bg-fuschia px-[12px] py-[9.5px] text-[16px] font-normal text-white">
            <BiPlus className="mr-[1.5px]" size={20} />
            Add custom point
          </Button>
        </div>
        <div className="mt-[43px] flex w-full items-center justify-center">
          <Accordion type="single" collapsible className="w-full rounded-none border-[1px] border-fuschia text-2xl">
            {grammarList?.data &&
              _.orderBy(grammarList.data, ["title"], ["asc"]).map((grammar, index) => (
                <AccordionItem key={grammar.id} value={grammar.id}>
                  <AccordionTrigger className="bg-white px-[41px] py-[22px] font-semibold text-black">
                    <div className="flex w-full items-center justify-between">
                      <span>
                        {index + 1}. {grammar.title}
                      </span>
                      <div className="mr-2 flex items-center justify-center rounded-full bg-lessonbg">
                        <BiPlus fill="#ef5da8" className="m-2 cursor-pointer text-fuschia" size={20} />
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="bg-white px-[41px] py-[11px] font-normal text-black">
                    <FroalaViewComponent model={grammar.content} />
                  </AccordionContent>
                </AccordionItem>
              ))}
          </Accordion>
        </div>
      </div>
    </div>
  )
}
