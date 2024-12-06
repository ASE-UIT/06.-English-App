'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { VocabularyCard, VocabularyDTO } from '@/components/component/vocabularyCard';
import dummydata from './dummydata.json'; // Import dummy data

export function LessonVocabulary() {
  const [vocabularies, setVocabularies] = useState<VocabularyDTO[]>(dummydata);

  const [activeTab, setActiveTab] = useState<'all' | 'not-learned'>('all');

  const learnedCount = vocabularies.filter((vocab) => vocab.learned).length;
  const totalCount = vocabularies.length;

  const toggleLearned = (vocabToToggle: VocabularyDTO) => {
    setVocabularies((prevVocabs) =>
      prevVocabs.map((vocab) =>
        vocab.vocabulary === vocabToToggle.vocabulary
          ? { ...vocab, learned: !vocab.learned }
          : vocab
      )
    );
  };

  const filteredVocabularies =
    activeTab === 'all'
      ? vocabularies
      : vocabularies.filter((vocab) => !vocab.learned);

  return (
    <div className="flex h-full min-h-screen w-full flex-col bg-white px-6 py-8 md:px-16">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">{totalCount} words</h2>
        <p className="text-muted-foreground">learned: {learnedCount}/{totalCount}</p>
      </div>

      <div className="mb-8 flex space-x-2">
        <Button
          variant="ghost"
          className={cn(
            "px-4 py-2 text-sm font-medium",
            activeTab === 'all'
              ? "rounded-none bg-white text-[#5D5FEF] border-b-[2px] border-b-[#5D5FEF]"
              : "bg-white text-gray-500 hover:text-[#5D5FEF]"
          )}
          onClick={() => setActiveTab('all')}
        >
          All
        </Button>
        <Button
          variant="ghost"
          className={cn(
            "px-4 py-2 text-sm font-medium",
            activeTab === 'not-learned'
              ? "rounded-none bg-white text-[#5D5FEF] border-b-[2px] border-b-[#5D5FEF]"
              : "bg-white text-gray-500 hover:text-[#5D5FEF]"
          )}
          onClick={() => setActiveTab('not-learned')}
        >
          Not learned
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredVocabularies.map((vocab) => (
          <VocabularyCard
            key={vocab.vocabulary}
            vocab={vocab}
            onToggleLearned={() => toggleLearned(vocab)}
          />
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
        <Button variant="outline" className="bg-white border-pink-500 w-full sm:w-auto hover:text-pink-500">
          Learn with flashcards
        </Button>
        <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white sm:w-auto">
          Create quiz
        </Button>
      </div>
    </div>
  );
}
