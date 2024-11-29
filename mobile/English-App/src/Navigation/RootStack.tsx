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

export default function RootStack() {
  const Stack = createStackNavigator();
  const scrollRef = useRef<ScrollView>(null);
  return (
    <Stack.Navigator>
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
        options={{
          headerRight: () => <HeaderRight scrollRef={scrollRef} />,
        }}
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
    </Stack.Navigator>
  );
}