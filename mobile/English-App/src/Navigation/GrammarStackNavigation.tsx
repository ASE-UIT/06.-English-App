import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {  RootStackParamList } from '../type'
import Grammar from '../screens/Grammar'
import GrammarDetail from '../screens/Grammar/GrammarDetail'

const GrammarStackNavigation = () => {
    const Stack = createStackNavigator<RootStackParamList>()
  return (
    <Stack.Navigator>
        <Stack.Screen name="Grammar" component={Grammar} />
        <Stack.Screen name="GrammarDetail" component={GrammarDetail} />
    </Stack.Navigator>
  )
}

export default GrammarStackNavigation