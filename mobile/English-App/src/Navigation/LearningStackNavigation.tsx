
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LearningScreen from '../screens/Learning'
import CourseViewer from '../components/CourseHome'
import { RootStackParamList } from '../type'
import ReadingExercise from '../screens/Reading/ReadingExercise'


export default function LearningStackNavigation<RootStackParamList>() {
    const Stack= createStackNavigator()
  return (
  <Stack.Navigator>
    <Stack.Screen name="Learning" component={LearningScreen} />
    <Stack.Screen name="Course" component={CourseViewer}/>
    <Stack.Screen name="Reading" component={ReadingExercise}/>
  </Stack.Navigator>
  )
}