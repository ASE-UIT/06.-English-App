import { View, Text } from "react-native";
import { RadioButton } from "react-native-paper";
import { useState } from "react";
export default function MultipleChoiceQuestion({
  number,
  question,
  options,
}: {
  number: number;
  question: string;
  options: string[];
}) {
  const [checked, setChecked] = useState<string | null>(null);

  return (
    <View className="question">
      <Text className="question-text text-black text-lg font-bold">
        {number}.{question}
      </Text>
      <View className="options mb-3">
        {options.map((option, index) => (
          <View
            className="option flex flex-row items-center gap-1 mb-2"
            key={index}
          >
            <View className="bg-gray-300 w-10 h-10 flex items-center justify-center rounded-full">
              <Text className="option-letter text-black text-lg text-center">
                {String.fromCharCode(65 + index)}
              </Text>
            </View>
            <RadioButton
              value={option}
              status={checked === option ? "checked" : "unchecked"}
              onPress={() => setChecked(option)}
              color="#000"
              uncheckedColor="#000"
            />
            <Text className="option-text text-black  text-lg">{option}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
