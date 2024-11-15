
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "../type";
import Home from "../screens/Home";
import CourseDetail from "../screens/CourseDetail";
export default  function HomeStackNavigation<RootStackParamList>() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="CourseDetail" component={CourseDetail}/>
    
    </Stack.Navigator>
  );
}