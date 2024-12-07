import { View, Text, Image, ScrollView, Dimensions } from "react-native";
import MultipleChoiceFormat from "../../components/MultipleChoiceFormat/MultipleChoiceFormat";
import MultiSelectFormat from "../../components/MultiSelectFormat/MultiSelectFormat";
import { useEffect, useRef, useState } from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../type";
import sectionService from "../../services/section.service";
import RenderHtml from "react-native-render-html";
type ReadingExerciseProps = {
  scrollRef: React.RefObject<ScrollView>;
};
export default function ReadingExercise({ scrollRef }: ReadingExerciseProps) {

  const route = useRoute<RouteProp<RootStackParamList, "Reading">>();
  const { sectionID } = route.params;
  const [section, setSection] = useState({});

  const width = Dimensions.get("window").width;
  // fetch section data from API
  useEffect(() => {
    const fetchSection = async () => {
      try {
        const response = await sectionService.getSectionById(sectionID);
        setSection(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSection();
  }, [sectionID]);

  console.log(sectionID);

  return (
    <ScrollView
      className="reading-exercise flex gap-4"
      style={{ paddingHorizontal: 10 }}
      ref={scrollRef}
    >
     
      <View className="reading-content flex gap-2 items-center">
        <Text className="text-black text-lg font-bold">{section.title}</Text>
        {/* <Image src={section.imgUrl} className="h-60 w-40" /> */}
        <RenderHtml
          contentWidth={width}
          source={{ html: section.content || "" }}
        />
      </View>
      <View className="reading-questions" style={{ display: "flex", gap: 20 }}>
        {/* questions.map()... */}
        <MultipleChoiceFormat />
      </View>
    </ScrollView>
  );
}
