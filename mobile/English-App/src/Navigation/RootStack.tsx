import { createStackNavigator } from "@react-navigation/stack";
import BottomTabsNavigator from "./BottomTabsNavigator";
import CourseDetail from "../screens/CourseDetail";
import CourseHome from "../components/CourseHome";
import GrammarDetail from "../screens/Grammar/GrammarDetail";
import Reading from "../screens/Reading";
import PayWithBank from "../screens/CourseDetail/PayWithBank";
import PayWithCard from "../screens/CourseDetail/PayWithCard";
import Notification from "../screens/Notification";

import HeaderRight from "./HeaderRight";
import { useRef } from "react";
import { ScrollView } from "react-native-gesture-handler";
import ListeningExerciseScreen from "../screens/Listening/ListeningExercise";
import {
  AuthCongrats,
  ForgotPassword,
  Login,
  OTPVerification,
  ResetPassword,
  SignUp,
} from "../screens/Auth";

export default function RootStack() {
  const Stack = createStackNavigator();
  const scrollRef = useRef<ScrollView>(null);
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="OTPVerification" component={OTPVerification} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="AuthCongrats" component={AuthCongrats} />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="BottomTabsNavigator"
        component={BottomTabsNavigator}
      />

      <Stack.Screen name="CourseDetail" component={CourseDetail} />
      <Stack.Screen name="CourseHome" component={CourseHome} />
      <Stack.Screen name="GrammarDetail" component={GrammarDetail} />
      <Stack.Screen
        name="Reading"
        options={({ route }) => ({
          headerRight: () => <HeaderRight scrollRef={scrollRef} />,
          title: "Reading Section",
        })}
      >
        {() => <Reading scrollRef={scrollRef} />}
      </Stack.Screen>
      <Stack.Screen name="PayWithBank" component={PayWithBank} />
      <Stack.Screen name="PayWithCard" component={PayWithCard} />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Listening"
        component={ListeningExerciseScreen}
        options={{
          headerRight: () => <HeaderRight scrollRef={scrollRef} />,
        }}
      />
    </Stack.Navigator>
  );
}
