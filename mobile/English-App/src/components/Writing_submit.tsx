import { Button, Text, TextInput, View } from 'react-native'
import React from 'react'

const Writing_submit = () => {
  return (
    <View>
      <TextInput
        multiline
        numberOfLines={4}
        placeholder="Write your answer here"
      >

      </TextInput>

      <Button title="Submit" onPress={() => {}} />
    </View>
  )
}

export default Writing_submit
