import { Text } from "react-native";
export default function QuestionHeading({
  from,
  to,
}: {
  from: number;
  to: number;
}) {
  return (
    <Text className="heading text-green-600 text-2xl">
      Question {from}-{to}
    </Text>
  );
}
