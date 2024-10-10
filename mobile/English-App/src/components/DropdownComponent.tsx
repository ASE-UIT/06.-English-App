import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Dropdown } from 'react-native-element-dropdown'

const data = [
  { label: 'A', value: 'A' },
  { label: 'B', value: 'B' },
  { label: 'C', value: 'C' },
  { label: 'D', value: 'D' }
]

const DropdownComponent = () => {
  return (
    <View className=' w-[60px] pl-3 flex justify-center '>
        <Dropdown
        
            data={data}
            maxHeight={1000}
            labelField={'label'}
            valueField={'value'}
            placeholder={''}
            onChange={(item) => console.log(item)}
            search={false}
          />
    </View>
  )
}

export default DropdownComponent

const styles = StyleSheet.create({

})