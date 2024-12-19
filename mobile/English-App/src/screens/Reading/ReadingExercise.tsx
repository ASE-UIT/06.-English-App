import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image, Dimensions } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../type";
import sectionService from "../../services/section.service";
import Section from "../../models/Section";
import SelectionFormat from "../../components/SelectionFormat/SelectionFormat";
import { SafeAreaView } from "react-native-safe-area-context";
import HtmlReader from "../../components/HtmlReader"; // Import the HtmlReader component

type ReadingExerciseProps = {
  scrollRef?: React.RefObject<ScrollView>; 
};

export default function ReadingExercise({ scrollRef }: ReadingExerciseProps) {
  const route = useRoute<RouteProp<RootStackParamList, "Reading">>();
  const { sectionID } = route.params;
  const [section, setSection] = useState<Section | null>(null);

  // Fetch section data from API
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

  const questionGroups = section ? section.questionGroups : [];

  if (!section) {
    return <Text>Loading...</Text>;
  }

  return (
    <SafeAreaView className="mb-4 p-5">
      <ScrollView
        className="reading-exercise flex gap-4"
        ref={scrollRef}
      >
        {section && (
          <View className="reading-content flex gap-2 items-center">
            {section.content && (
              <HtmlReader html={section.content} />
            )}
          </View>
        )}
        <View
          className="reading-questions"
          style={{ display: "flex", gap: 20 }}
        >
          {questionGroups ? (
            <>
              {questionGroups.map((questionGroup) => (
                <SelectionFormat
                  key={questionGroup.id}
                  questionGroup={questionGroup}
                />
              ))}
            </>
          ) : (
            <Text>No questions available</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

