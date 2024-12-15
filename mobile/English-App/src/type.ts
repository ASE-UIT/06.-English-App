import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Course, MyCourse, GrammarModel } from "./models";
import { ScrollView } from "react-native";

export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  OTPVerification: { username: string; isConfirmSignUp: boolean };
  ResetPassword: { username: string; confirmationCode: string };
  AuthCongrats: { isConfirmSignUp: boolean };
  Learning: undefined;
  Course: { course: MyCourse };
  Reading: { scrollRef?: React.RefObject<ScrollView>; sectionID: string };
  Grammar: { grammarmodel: GrammarModel };
  GrammarDetail: { grammarmodel: GrammarModel };
  CourseDetail: { course: Course };
  CourseHome: { course: Course };
  PayWithBank: undefined;
  PayWithCard: undefined;
  Notification: undefined;
  Listening: { sectionID: any; scrollRef?: React.RefObject<ScrollView> };
};
export type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Login"
>;
export type SignUpScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "SignUp"
>;
export type ForgotPasswordScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "ForgotPassword"
>;
export type OTPVerificationScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "OTPVerification"
>;
export type ResetPasswordScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "ResetPassword"
>;
export type AuthCongratsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "AuthCongrats"
>;
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
  "CourseDetail" | "Listening" | "Reading"
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
