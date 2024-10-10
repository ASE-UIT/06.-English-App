import { Text } from "react-native";

export default function QuestionSubHeading({
  from,
  to,
}: {
  from: number;
  to: number;
}) {
  return (
    <Text className="sub-heading text-primaryLight text-2xl font-semibold">
      Choose the correct letter A,B,C or D. {"\n"}Write the correct letter in
      boxes {from}-{to} on your answer sheet.
    </Text>
  );
}
