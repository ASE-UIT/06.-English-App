import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LearningScreen from '../screens/Learning'
import CourseViewer from '../components/CourseHome'
import { RootStackParamList } from '../type'


export default function LearningStackNavigation<RootStackParamList>() {
    const Stack= createStackNavigator()
  return (
  <Stack.Navigator>
    <Stack.Screen name="Learning" component={LearningScreen} />
    <Stack.Screen name="Course" component={CourseViewer}/>
  </Stack.Navigator>
  )
}