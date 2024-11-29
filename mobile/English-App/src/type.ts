import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Course, MyCourse } from "./models";
import { ScrollView } from "react-native";

export type RootStackParamList = {
  Learning: undefined;
  Course: { course: MyCourse };
  Reading: {scrollRef: React.RefObject<ScrollView>};
  Grammar: undefined;
  GrammarDetail: undefined;
  CourseDetail: { course: Course };
  CourseHome: { course: Course };
  PayWithBank: undefined;
  PayWithCard: undefined;
  Notification: undefined;
};

export type HeaderNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Notification"

>;
  

export type LearningScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Learning"
>;

export type GrammarScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Grammar"
>;

export type GrammarDetailScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "GrammarDetail"
>;

export type CourseDetailScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "CourseDetail"
>;

export type LearningScreenRouteProp = RouteProp<RootStackParamList, "Learning">;
export type CourseScreenRouteProp = RouteProp<RootStackParamList, "Course">;
export type CourseDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  "CourseDetail"
>;
export type GrammarScreenRouteProp = RouteProp<RootStackParamList, "Grammar">;
export type GrammarDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  "GrammarDetail"
>;

export type PayMentScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "PayWithBank",
  "PayWithCard"
>;
