import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image, Dimensions } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import RenderHtml from "react-native-render-html";
import { RootStackParamList } from "../../type";
import sectionService from "../../services/section.service";
import Section from "../../models/Section";
import SelectionFormat from "../../components/SelectionFormat/SelectionFormat";
import { SafeAreaView } from "react-native-safe-area-context";
import { QuestionGroupType } from "../../constants/enums/QuestionGroupType";

type ReadingExerciseProps = {
  scrollRef?: React.RefObject<ScrollView>; // scrollRef is optional
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
  }, []);

  const { width } = Dimensions.get("window");
  const questionGroups = section ? section.questionGroups : [];

  const customRenderers = {
    td: ({
      TDefaultRenderer,
      ...props
    }: {
      TDefaultRenderer: any;
      [key: string]: any;
    }) => {
      return (
        <View style={{ marginTop: 10 }}>
          <TDefaultRenderer {...props} />
        </View>
      );
    },
  };

  if (!section) {
    return <Text>Loading...</Text>;
  }
  console.log(section.id);
  

  return (
    <SafeAreaView className="mb-4 p-5">
      <ScrollView
        className="reading-exercise flex gap-4"
        
        ref={scrollRef}
      >
        {section && (
          <View className="reading-content flex gap-2 items-center">
            <Text className="text-black text-lg font-bold">
              {section.title}
            </Text>
            {/* {section.sectionMedia ? (
              <Image
                source={{ uri: section.sectionMedia }}
                style={{ height: 240, width: 160 }}
                onError={(error) =>
                  console.log("Image Load Error:", error.nativeEvent.error)
                }
              />
            ) : (
              <Text>No Image Available</Text>
            )} */}
            <RenderHtml
              renderers={customRenderers}
              contentWidth={width}
              source={{ html: section.content || "" }}
            />
          </View>
        )}
        <View
          className="reading-questions"
          style={{ display: "flex", gap: 20 }}
        >
          {questionGroups ? (
            <>
              {questionGroups.map((questionGroup) => {
                switch (questionGroup.questionGroupType) {
                  case QuestionGroupType.COMBOBOX:
                    return(
                      <SelectionFormat
                        key={questionGroup.id}
                        questionGroup={questionGroup}
                      />
                    )

                }
              }
            
              )}
            </>
          ) : (
            <Text>null</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
