import { Text } from "react-native";
export default function QuestionHeading({
  from,
  to,
}: {
  from: number;
  to: number;
}) {
  return (
    <Text className="heading text-[#5D5FEF] text-lg font-semibold">
      Questions {from}-{to}
    </Text>
  );
}
