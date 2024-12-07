import React from "react";

interface MatchingQuestionProps {
  text: string;
  order: number;
}

export const MatchingQuestion: React.FC<MatchingQuestionProps> = ({ text,order }) => {
  // Function to replace the placeholder with an <input> element
  const parseTextWithInput = (text: string) => {
    const placeholder = "…………………";

    // Split the text around the placeholder and inject an input
    const parts = text.split(placeholder);

    return (
      <>
        {parts.map((part, index) => (
          <React.Fragment key={index}>
            {/* Render the text part */}
            <span dangerouslySetInnerHTML={{ __html: part }} />
            {/* Inject input field after each part except the last */}
            {index < parts.length - 1 && (
              <input
                type="text"
                className="h-[30px] w-[100px] rounded-md border-2 border-comboboxBorder bg-white text-black mx-2"
                placeholder="Your answer"
              />
            )}
          </React.Fragment>
        ))}
      </>
    );
  };

  return (
    <div className="flex flex-col space-y-2">
      <div className="text-lg text-black">{parseTextWithInput(text)}</div>
    </div>
  );
};

