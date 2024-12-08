import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import _ from "lodash"
import FroalaViewComponent from "@/components/Layout/Components/ui/FroalaViewComponent"
import { useParams } from "react-router"
// import { useGrammarByLesson } from "@/features/lesson/hooks"

export const LessonGrammar = () => {
  const { lessonId } = useParams()
  // const { data: grammarByLesson } = useGrammarByLesson(lessonId as string)
  const grammarByLesson = {
    data: [
      { id: "1", title: "Nouns", content: "<p>Nouns are words that name people, places, or things.</p>" },
      { id: "2", title: "Verbs", content: "<p>Verbs are words that describe actions or states.</p>" },
      { id: "3", title: "Adjectives", content: "<p>Adjectives are words that describe nouns.</p>" }
    ]
  }
  console.log(grammarByLesson);
  
  return (
    <div className="flex h-full min-h-screen w-full flex-col bg-white px-[66px] py-[64px]">
      <div className="mt-[43px] flex w-full items-center justify-center">
        <Accordion type="single" collapsible className="w-full rounded-none border-[1px] border-fuschia text-2xl">
          {grammarByLesson?.data &&
            _.orderBy(grammarByLesson.data, ["title"], ["asc"]).map((grammar, index) => (
              <AccordionItem key={grammar.id} value={grammar.id}>
                <AccordionTrigger className="bg-white px-[41px] py-[22px] font-semibold text-black">
                  <div className="flex w-full items-center justify-between">
                    <span>
                      {index + 1}. {grammar.title}
                    </span>
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
  )
}
