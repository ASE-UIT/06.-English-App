import { View, Text, Image, ScrollView } from "react-native";
import MultipleChoiceFormat from "../../components/MultipleChoiceFormat/MultipleChoiceFormat";
import MultiSelectFormat from "../../components/MultiSelectFormat/MultiSelectFormat";
import { useRef } from "react";
export default function ReadingExercise({scrollRef}: {scrollRef: React.RefObject<ScrollView>}) {
  // hard-coded data for now
  const section = {
    title: "Australian artist Margaret Preston",
    content:
      "Margaret Preston's  vibrant paintings and prints of Australian flowers, animals and  landscapes have delighted the Australian public since the early 1920s. Margaret Preston was born Margaret  Rose McPherson in Port Adelaide, South Australia in 1875, the daughter  of David McPherson, a Scottish marine engineer and his wife Prudence  Lyle. She and her sister were sent at first to a private school",
    imgUrl:
      "https://i.pinimg.com/enabled_lo/564x/78/0d/ba/780dba42c7666143e8dc301588ed8750.jpg",
  };
  return (
    <ScrollView
      className="reading-exercise flex gap-4"
      style={{ paddingHorizontal: 10 }}
      ref={scrollRef}
    >
      <View className="reading-content flex gap-2 items-center">
        <Text className="text-black text-lg font-bold">{section.title}</Text>
        <Image src={section.imgUrl} className="h-60 w-40" />
        <Text className="text-black text-base">{section.content}</Text>
      </View>
      <View className="reading-questions" style={{ display: "flex", gap: 20 }}>
        {/* questions.map()... */}
        <MultipleChoiceFormat />
      </View>
    </ScrollView>
  );
}
