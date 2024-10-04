import { View, Text } from 'react-native'
import React from 'react'
import QuestionHeading from '../QuestionHeading'
import SelectionQuestion from './SelectionQuestion'

const data = [
    'A',
    'B',
    'C',
    'D',
    ]



const SelectionFormat = () => {
  return (
    <View>
      <QuestionHeading from={1} to={5} />
      <Text className="sub-heading text-black text-lg">Choose the correct letter A, B, C or D.</Text>
      <Text className="sub-heading text-black text-lg">Write the correct letter in boxes 1-5 on your answer sheet</Text>
      <SelectionQuestion number={1} items={data}  />

    </View>
  )
}

export default SelectionFormat