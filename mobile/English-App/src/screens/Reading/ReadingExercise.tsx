import React, { useEffect, useState, useRef } from "react";
import { View, Text, ScrollView, Image, Dimensions, StyleSheet } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../type";
import sectionService from "../../services/section.service";
import Section from "../../models/Section";
import SelectionFormat from "../../components/SelectionFormat/SelectionFormat";
import { SafeAreaView } from "react-native-safe-area-context";
import HtmlReader from "../../components/HtmlReader";
import BottomNavigation from '../../components/QuestionNavigation';


type ReadingExerciseProps = {
  scrollRef?: React.RefObject<ScrollView>; 
};

export default function ReadingExercise({ scrollRef }: ReadingExerciseProps) {
  const route = useRoute<RouteProp<RootStackParamList, "Reading">>();
  const { sectionID } = route.params;
  const [section, setSection] = useState<Section | null>(null);
  const [answeredQuestions, setAnsweredQuestions] = useState<string[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [questions, setQuestions] = useState<{ id: string; text: string; options: string[]; answered: boolean }[]>([]);
  const scrollViewRef = useRef<ScrollView>(null);
  
  const handleQuestionChange = (questionIndex: number) => {
    setCurrentQuestion(questionIndex + 1);
    scrollViewRef.current?.scrollTo({
      y: questionIndex * 150, // Adjust the scroll position as needed
      animated: true,
    });
  };

  // Fetch section data from API
  useEffect(() => {
    const fetchSection = async () => {
      try {
        const response = await sectionService.getSectionById(sectionID);
        setSection(response.data);
        if (response.data.questionGroups) {
          const allQuestions = response.data.questionGroups.flatMap((group: any) =>
            group.questions.map((q: any) => ({
              id: q.id,
              text: q.text,
              options: q.options,
              answered: false
            }))
          );
          setQuestions(allQuestions);
        }
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
    <SafeAreaView style={styles.container}>
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
      <BottomNavigation
        questions={questions}
        answeredQuestions={answeredQuestions}
        currentQuestion={currentQuestion}
        onQuestionChange={handleQuestionChange}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },}
)

