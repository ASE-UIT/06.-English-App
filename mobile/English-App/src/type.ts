import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Course, MyCourse,GrammarModel } from "./models";

export type RootStackParamList = {
  Learning: undefined;
  Course: { course: MyCourse };
  Reading: undefined;
  Grammar: undefined;
  GrammarDetail: {grammar: GrammarModel};
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
