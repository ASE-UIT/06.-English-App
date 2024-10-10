import { Text } from "react-native";
export default function QuestionHeading({
  from,
  to,
}: {
  from: number;
  to: number;
}) {
  return (
    <Text className="heading text-primary text-3xl font-semibold ">
      Question {from}-{to}
    </Text>
  );
}
