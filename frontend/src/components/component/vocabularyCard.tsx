import { Button } from "@/components/ui/button"
import { Check } from 'lucide-react'
import { cn } from "@/lib/utils"

export interface VocabularyDTO {
  vocabulary: string
  note: string
  mediaWord: string
  wordType: string
  learned: boolean
}

interface VocabularyCardProps {
  vocab: VocabularyDTO
  onToggleLearned: () => void
}

export function VocabularyCard({ vocab, onToggleLearned }: VocabularyCardProps) {
  return (
    <div
      className={cn(
        "relative flex items-center gap-4 rounded-lg border p-4 transition-colors w-100 h-auto",
        vocab.learned && "bg-[#fff4f9]"
      )}
    >
      <div className="flex-shrink-0 w-1/3 h-full">
        <img 
          src={vocab.mediaWord} 
          alt={vocab.vocabulary} 
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="flex-grow">
        <h3 className="text-xl font-medium">
          {vocab.vocabulary}
          <span className="text-sm font-normal ml-1">({vocab.wordType})</span>
        </h3>
        <p className="text-base text-muted-foreground mt-2">{vocab.note}</p>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className={cn(
          "absolute right-2 top-2 h-8 w-8",
          vocab.learned 
            ? "bg-pink-100 text-pink-500" 
            : "bg-white text-gray-400"
        )}
        onClick={onToggleLearned}
      >
        ✓
      </Button>
    </div>
  )
}

