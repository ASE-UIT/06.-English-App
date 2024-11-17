import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  Learning: undefined;
  Course: { courseId: string };
  Reading: undefined;
  Grammar: undefined;
  GrammarDetail: undefined;
  CourseDetail: undefined;
};

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

export type CourseScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Course"
>;

export type CourseDetailScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "CourseDetail"
>;

export type LearningScreenRouteProp = RouteProp<RootStackParamList, "Learning">;
export type CourseScreenRouteProp = RouteProp<RootStackParamList, "Course">;
export type GrammarScreenRouteProp = RouteProp<RootStackParamList, "Grammar">;
export type GrammarDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  "GrammarDetail"
>;
