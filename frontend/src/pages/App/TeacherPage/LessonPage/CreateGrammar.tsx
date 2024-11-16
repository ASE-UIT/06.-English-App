import { Button } from "@/components/Layout/Components/ui/Button"
import { Input } from "@/components/Layout/Components/ui/Input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BiPlus } from "react-icons/bi"

export const CreateGrammar = () => {
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
            <AccordionItem value="item-1">
              <AccordionTrigger className="bg-white px-[41px] py-[22px] font-semibold text-black">
                <div className="flex w-full items-center justify-between">
                  <span>1. Present perfect tense</span>
                  <div className="mr-2 flex items-center justify-center rounded-full bg-lessonbg">
                    <BiPlus fill="#ef5da8" className="m-2 cursor-pointer text-fuschia" size={20} />
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="bg-white px-[41px] py-[11px] font-normal text-black">
                The present perfect is formed from the present tense of the verb have and the past participle of a verb.
                We use the present perfect: for something that started in the past and continues in the present: They've
                been married for nearly fifty years.She has lived in Liverpool all her life. when we are talking about
                our experience up to the present: I've seen that film before. I've played the guitar ever since I was a
                teenager. He has written three books and he is working on another one. We often use the adverb ever to
                talk about experience up to the present: My last birthday was the worst day I have ever had. and we use
                never for the negative form: Have you ever met George?Yes, but I've never met his wife.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="bg-white px-[41px] py-[22px] font-semibold text-black">
                2. Present simple tense
              </AccordionTrigger>
              <AccordionContent className="bg-white px-[41px] py-[11px] font-normal text-black">
                The present perfect is formed from the present tense of the verb have and the past participle of a verb.
                We use the present perfect: for something that started in the past and continues in the present: They've
                been married for nearly fifty years.She has lived in Liverpool all her life. when we are talking about
                our experience up to the present: I've seen that film before. I've played the guitar ever since I was a
                teenager. He has written three books and he is working on another one. We often use the adverb ever to
                talk about experience up to the present: My last birthday was the worst day I have ever had. and we use
                never for the negative form: Have you ever met George?Yes, but I've never met his wife.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}
