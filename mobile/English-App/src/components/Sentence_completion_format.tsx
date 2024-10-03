import { FlatList, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const Sentence_completion_format = (props: any) => {
    const dataset = props.questionList || [];
    const [userInputs, setUserInputs] = useState(Array(dataset.length - 1))
    const handleInputChange = (text: string, questionIndex:number ,index: number) => {
      const newInputs = [...userInputs];
      if (!newInputs[questionIndex]) {
        newInputs[questionIndex] = [];
      }
      newInputs[questionIndex][index] = text;
      setUserInputs(newInputs);
    }

    const parseQuestion = (question: string) => {
      return question ? question.split('___') : [];
    };
    return (
      <View>
        <View>
          <Text className='text-4xl'>
          Question {props.questionNumber}: 
          </Text>
          <Text>
          Complete the sentences below.
          </Text>
          <Text>
          Choose NO MORE THAN TWO WORDS from the passage for each answer.
          </Text>
          <Text>
          Write your answers in boxes 11-13 on your answer sheet.
          </Text>
        </View>
        <FlatList
          data={dataset}
          renderItem={({ item, index: questionIndex }) => {
            
            const parts = parseQuestion(item.question);
              return (
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', marginVertical: 10 }}>
                  {parts.map((part, index) => (
                    <View key={index}>
                      <Text>{part}</Text>
                      {index < parts.length - 1 && (
                        <TextInput
                          placeholder="___"
                          value={userInputs[questionIndex]?.[index] || ''}
                          onChangeText={(text) => handleInputChange(text, questionIndex, index)}
                          style={{ borderColor: 'gray', borderWidth: 1, padding: 5, width: 50, textAlign: 'center', marginHorizontal: 5 }}
                        />
                      )}
                    </View>
                  ))}
                </View>
              )
            }
          }
        />
        
      </View>
  )
}

export default Sentence_completion_format