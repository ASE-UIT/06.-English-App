
import { createStackNavigator } from '@react-navigation/stack'
import BottomTabsNavigator from './BottomTabsNavigator'
import CourseDetail from '../screens/CourseDetail'
import CourseHome from '../components/CourseHome'
import GrammarDetail from '../screens/Grammar/GrammarDetail'
import Reading from '../screens/Reading'

export default function RootStack() {
    const Stack = createStackNavigator()
  return (
    <Stack.Navigator>
        <Stack.Screen options={{
            headerShown: false
        }} name = "BottomTabsNavigator" component = {BottomTabsNavigator}/>
        <Stack.Screen name = "CourseDetail" component = {CourseDetail}/>
        <Stack.Screen name= 'CourseHome' component={CourseHome}/>
        <Stack.Screen name = 'GrammarDetail' component={GrammarDetail}/>
        <Stack.Screen name = 'Reading' component={Reading}/>
        
    </Stack.Navigator>
  )
}